/**
 * API Utility Module
 * Provides centralized API calling with error handling, loading states, and timeout protection
 */

/**
 * Fetch medical unit conversion data with error handling and timeout
 * @param {number} timeout - Timeout in milliseconds (default: 10000)
 * @returns {Promise<{data: any, error: string|null, isLoading: boolean}>}
 */
export async function fetchMedicalUnits(timeout = 10000) {
  const controller = new AbortController();
  const timeoutId = setTimeout(() => controller.abort(), timeout);

  try {
    const response = await fetch('https://medical-units.vetcalculators.workers.dev/', {
      signal: controller.signal,
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }
    });

    clearTimeout(timeoutId);

    if (!response.ok) {
      throw new Error(`HTTP ${response.status}: ${response.statusText}`);
    }

    const data = await response.json();

    // Validate that we received an array
    if (!Array.isArray(data)) {
      throw new Error('Invalid data format received from API');
    }

    return {
      data,
      error: null,
      isLoading: false
    };

  } catch (error) {
    clearTimeout(timeoutId);

    let errorMessage = 'Failed to load medical unit data';

    if (error.name === 'AbortError') {
      errorMessage = 'Request timeout - please check your connection and try again';
    } else if (error.message.includes('fetch')) {
      errorMessage = 'Network error - please check your internet connection';
    } else if (error.message) {
      errorMessage = error.message;
    }

    console.error('API Error:', error);

    return {
      data: null,
      error: errorMessage,
      isLoading: false
    };
  }
}

/**
 * Generic API call wrapper with retry logic
 * @param {Function} apiCall - The API function to call
 * @param {number} retries - Number of retry attempts (default: 2)
 * @param {number} delay - Delay between retries in ms (default: 1000)
 * @returns {Promise<any>}
 */
export async function withRetry(apiCall, retries = 2, delay = 1000) {
  let lastError;

  for (let attempt = 0; attempt <= retries; attempt++) {
    try {
      const result = await apiCall();
      return result;
    } catch (error) {
      lastError = error;

      if (attempt < retries) {
        console.log(`API call failed, retrying in ${delay}ms... (Attempt ${attempt + 1}/${retries})`);
        await new Promise(resolve => setTimeout(resolve, delay));
        // Exponential backoff
        delay *= 2;
      }
    }
  }

  throw lastError;
}

/**
 * Load medical units with optional retry logic
 * @param {boolean} useRetry - Whether to use retry logic (default: false)
 * @returns {Promise<{data: any, error: string|null, isLoading: boolean}>}
 */
export async function loadMedicalUnitsWithRetry(useRetry = false) {
  if (useRetry) {
    try {
      return await withRetry(() => fetchMedicalUnits());
    } catch (error) {
      return {
        data: null,
        error: 'Failed to load medical unit data after multiple attempts',
        isLoading: false
      };
    }
  }

  return fetchMedicalUnits();
}
