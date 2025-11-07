<script>
  /**
   * LoadingError Component
   * Displays loading spinner and error messages with retry functionality
   */
  import { Block } from 'framework7-svelte';

  export let isLoading = false;
  export let error = null;
  export let onRetry = null;
  export let loadingMessage = 'Loading medical unit data...';
  export let emptyMessage = 'No data available';
  export let showEmpty = false;
</script>

{#if isLoading}
  <Block class="text-center py-8">
    <div class="inline-block animate-spin rounded-full h-12 w-12 border-4 border-gray-300 border-t-blue-600"></div>
    <p class="mt-4 text-gray-600 dark:text-gray-400">{loadingMessage}</p>
  </Block>
{:else if error}
  <Block class="my-4">
    <div class="bg-red-50 dark:bg-red-900/20 border-2 border-red-400 rounded-lg p-4">
      <div class="flex items-start">
        <i class="fad fa-exclamation-triangle text-red-600 dark:text-red-400 fa-2x mr-3"></i>
        <div class="flex-1">
          <h3 class="font-bold text-red-800 dark:text-red-300 mb-2">Error Loading Data</h3>
          <p class="text-red-700 dark:text-red-400 mb-3">{error}</p>
          {#if onRetry}
            <button
              class="button button-fill button-small bg-red-600 hover:bg-red-700 text-white"
              on:click={onRetry}
            >
              <i class="fad fa-sync-alt mr-2"></i>
              Try Again
            </button>
          {/if}
        </div>
      </div>
    </div>
  </Block>
{:else if showEmpty}
  <Block class="text-center py-8">
    <i class="fad fa-inbox fa-3x text-gray-400 dark:text-gray-600 mb-4"></i>
    <p class="text-gray-600 dark:text-gray-400">{emptyMessage}</p>
  </Block>
{/if}

<style>
  @keyframes spin {
    to { transform: rotate(360deg); }
  }

  .animate-spin {
    animation: spin 1s linear infinite;
  }
</style>
