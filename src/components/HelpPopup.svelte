<script>
  import { Popup, Page, Navbar, NavRight, Link, Block } from 'framework7-svelte';
  import { onMount } from 'svelte';
  import Shepherd from 'shepherd.js';

  export let popupOpened = false;

  let tour = null;

  onMount(() => {
    // Initialize Shepherd.js tour
    tour = new Shepherd.Tour({
      defaultStepOptions: {
        cancelIcon: {
          enabled: true
        },
        classes: 'shepherd-theme-custom',
        scrollTo: { behavior: 'smooth', block: 'center' }
      },
      useModalOverlay: true
    });

    // Define tour steps
    tour.addStep({
      id: 'welcome',
      title: '👋 Welcome to Medical Unit Converter',
      text: 'Let me show you around! This app helps you quickly convert between US and International (SI) medical laboratory values.',
      buttons: [
        {
          text: 'Skip Tour',
          action: tour.complete,
          secondary: true
        },
        {
          text: 'Start Tour',
          action: tour.next
        }
      ]
    });

    tour.addStep({
      id: 'search',
      title: '🔍 Search for Tests',
      text: 'Use the search bar to quickly find any laboratory test. Just start typing the test name!',
      attachTo: {
        element: '.searchbar',
        on: 'bottom'
      },
      buttons: [
        {
          text: 'Back',
          action: tour.back,
          secondary: true
        },
        {
          text: 'Next',
          action: tour.next
        }
      ]
    });

    tour.addStep({
      id: 'navigation',
      title: '🧭 Navigation',
      text: 'Switch between Human Lab Values, Veterinary Units, and Metric conversions using these tabs.',
      attachTo: {
        element: '.toolbar-top',
        on: 'bottom'
      },
      buttons: [
        {
          text: 'Back',
          action: tour.back,
          secondary: true
        },
        {
          text: 'Next',
          action: tour.next
        }
      ]
    });

    tour.addStep({
      id: 'settings',
      title: '⚙️ Settings',
      text: 'Access app settings including dark mode toggle from the settings icon in the top right.',
      attachTo: {
        element: '.navbar-inner .right',
        on: 'bottom'
      },
      buttons: [
        {
          text: 'Back',
          action: tour.back,
          secondary: true
        },
        {
          text: 'Finish',
          action: tour.complete
        }
      ]
    });

    return () => {
      if (tour) {
        tour.complete();
      }
    };
  });

  function startTour() {
    popupOpened = false;
    // Delay to allow popup to close
    setTimeout(() => {
      tour.start();
    }, 300);
  }
</script>

<Popup
  class="help-popup"
  opened={popupOpened}
  onPopupClosed={() => popupOpened = false}
  backdrop={true}
  closeByBackdropClick={true}
>
  <Page>
    <Navbar title="Help & Information">
      <NavRight>
        <Link popupClose>Close</Link>
      </NavRight>
    </Navbar>

    <Block class="p-4">
      <!-- App Tour Section -->
      <div class="bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 rounded-lg p-4 shadow-md border-2 border-blue-500 mb-4">
        <h3 class="text-lg font-bold text-blue-700 dark:text-blue-400 mb-3 flex items-center">
          <i class="fad fa-route fa-lg mr-2"></i> Guided Tour
        </h3>
        <p class="text-gray-700 dark:text-gray-300 mb-3">
          New to the app? Take a quick guided tour to learn about all the features.
        </p>
        <button
          class="button button-large button-fill bg-blue-600 text-white w-full"
          on:click={startTour}
        >
          <i class="fad fa-play-circle mr-2"></i>
          Start Interactive Tour
        </button>
      </div>

      <!-- How to Use Section -->
      <div class="bg-white dark:bg-gray-800 rounded-lg p-4 shadow-md mb-4">
        <h3 class="text-lg font-bold text-gray-900 dark:text-gray-100 mb-3 flex items-center">
          <i class="fad fa-book-open fa-lg mr-2 text-green-600"></i> How to Use
        </h3>
        <div class="space-y-3 text-gray-700 dark:text-gray-300">
          <div class="flex items-start">
            <i class="fad fa-1 bg-blue-500 text-white w-6 h-6 rounded-full flex items-center justify-center mr-3 mt-0.5"></i>
            <div>
              <strong>Search for a Test:</strong> Use the search bar to find any laboratory test by name.
            </div>
          </div>
          <div class="flex items-start">
            <i class="fad fa-2 bg-blue-500 text-white w-6 h-6 rounded-full flex items-center justify-center mr-3 mt-0.5"></i>
            <div>
              <strong>Enter a Value:</strong> Type a value in either the US or SI input field.
            </div>
          </div>
          <div class="flex items-start">
            <i class="fad fa-3 bg-blue-500 text-white w-6 h-6 rounded-full flex items-center justify-center mr-3 mt-0.5"></i>
            <div>
              <strong>Instant Conversion:</strong> The corresponding value will be calculated automatically.
            </div>
          </div>
        </div>
      </div>

      <!-- Features Section -->
      <div class="bg-white dark:bg-gray-800 rounded-lg p-4 shadow-md mb-4">
        <h3 class="text-lg font-bold text-gray-900 dark:text-gray-100 mb-3 flex items-center">
          <i class="fad fa-stars fa-lg mr-2 text-purple-600"></i> Features
        </h3>
        <ul class="space-y-2">
          <li class="flex items-start">
            <i class="fad fa-check-circle text-green-500 mt-1 mr-2"></i>
            <span class="text-gray-700 dark:text-gray-300">Convert between US and SI units instantly</span>
          </li>
          <li class="flex items-start">
            <i class="fad fa-check-circle text-green-500 mt-1 mr-2"></i>
            <span class="text-gray-700 dark:text-gray-300">Human and veterinary laboratory values</span>
          </li>
          <li class="flex items-start">
            <i class="fad fa-check-circle text-green-500 mt-1 mr-2"></i>
            <span class="text-gray-700 dark:text-gray-300">Metric unit conversions for weight and volume</span>
          </li>
          <li class="flex items-start">
            <i class="fad fa-check-circle text-green-500 mt-1 mr-2"></i>
            <span class="text-gray-700 dark:text-gray-300">Dark mode support for comfortable viewing</span>
          </li>
          <li class="flex items-start">
            <i class="fad fa-check-circle text-green-500 mt-1 mr-2"></i>
            <span class="text-gray-700 dark:text-gray-300">Print-friendly output for documentation</span>
          </li>
          <li class="flex items-start">
            <i class="fad fa-check-circle text-green-500 mt-1 mr-2"></i>
            <span class="text-gray-700 dark:text-gray-300">Works offline after initial load</span>
          </li>
        </ul>
      </div>

      <!-- Important Notice -->
      <div class="bg-yellow-50 dark:bg-yellow-900/20 rounded-lg p-4 shadow-md border-2 border-yellow-400 mb-4">
        <h3 class="text-lg font-bold text-yellow-700 dark:text-yellow-400 mb-2 flex items-center">
          <i class="fad fa-exclamation-triangle fa-lg mr-2"></i> Important Notice
        </h3>
        <div class="text-sm text-gray-700 dark:text-gray-300 space-y-2">
          <p><strong>Reference Ranges:</strong> The laboratory values and reference ranges provided are for illustration only and are not comprehensive or definitive.</p>
          <p><strong>Method Dependent:</strong> Each laboratory determines its own values, and reference ranges are highly method dependent.</p>
          <p><strong>Verify Calculations:</strong> The conversion factors are derived from current literature. Each calculation should be thoroughly researched and checked for accuracy.</p>
          <p class="font-bold text-red-600 dark:text-red-400"><strong>Disclaimer:</strong> Vetcalculators LLC is not responsible for any errors in calculations based on this converter.</p>
        </div>
      </div>

      <!-- References -->
      <div class="bg-white dark:bg-gray-800 rounded-lg p-4 shadow-md mb-4">
        <h3 class="text-lg font-bold text-gray-900 dark:text-gray-100 mb-3 flex items-center">
          <i class="fad fa-book fa-lg mr-2 text-indigo-600"></i> References
        </h3>

        <h4 class="font-semibold text-gray-900 dark:text-gray-100 mt-3 mb-2">Human References:</h4>
        <ol class="list-decimal ml-5 text-sm text-gray-700 dark:text-gray-300 space-y-1">
          <li>Kratz A, Ferraro M, Sluss PM, Lewandrowski KB. Laboratory reference values. N Engl J Med. 2004;351(15):1548-1563</li>
          <li>Young DS, Huth EJ. SI Units for Clinical Measurement. Philadelphia, PA: American College of Physicians; 1998</li>
          <li>Henry JB, ed. Clinical Diagnosis and Management by Laboratory Methods. 20th ed. Philadelphia, PA: WB Saunders; 2001</li>
        </ol>

        <h4 class="font-semibold text-gray-900 dark:text-gray-100 mt-4 mb-2">Veterinary References:</h4>
        <ol class="list-decimal ml-5 text-sm text-gray-700 dark:text-gray-300 space-y-1">
          <li>Latimer KS, Duncan & Prasse's Veterinary Laboratory Medicine: Clinical Pathology, 5th Ed., Wiley-Blackwell, 2011</li>
          <li>Kaneko JJ, Harvey JW, Bruss ML, Clinical Biochemistry of Domestic Animals, 6th Ed., Academic Press, 2008</li>
        </ol>
      </div>

      <!-- Contact -->
      <div class="text-center text-gray-600 dark:text-gray-400 py-4">
        <p class="text-sm mb-2">Need more help?</p>
        <a
          href="mailto:info@vetcalculators.com?subject=Medical Unit Converter Help"
          class="button button-outline button-large"
        >
          <i class="fad fa-envelope mr-2"></i>
          Contact Support
        </a>
      </div>
    </Block>
  </Page>
</Popup>

<style>
  :global(.help-popup) {
    --f7-popup-tablet-width: 90%;
    --f7-popup-tablet-height: 90%;
  }

  :global(.shepherd-theme-custom) {
    border-radius: 0.5rem;
    box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
  }

  :global(.shepherd-button) {
    background: #3b82f6;
    color: white;
    border-radius: 0.375rem;
    padding: 0.5rem 1rem;
    border: none;
    font-weight: 500;
  }

  :global(.shepherd-button-secondary) {
    background: #6b7280;
  }

  :global(.shepherd-title) {
    font-size: 1.25rem;
    font-weight: 700;
  }

  :global(.shepherd-text) {
    font-size: 1rem;
    line-height: 1.5;
  }

  :global(.shepherd-cancel-icon) {
    color: #6b7280;
  }

  :global(.shepherd-modal-overlay-container) {
    z-index: 10000;
  }
</style>
