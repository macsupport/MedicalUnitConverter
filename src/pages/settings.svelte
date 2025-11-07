<script>
  import { onMount } from 'svelte';
  import { themeStore } from '../js/themeStore.js';
  import { Browser } from '@capacitor/browser';
  import { AppLauncher } from '@capacitor/app-launcher';
  import { Capacitor } from '@capacitor/core';

  let darkMode = false;

  // Subscribe to theme store
  themeStore.subscribe(state => {
    darkMode = state.darkMode;
  });

  onMount(async () => {
    // Initialize theme on mount
    await themeStore.init();
  });

  async function toggleDarkMode() {
    await themeStore.toggle();
  }

  async function openUrl(url) {
    try {
      if (url.startsWith('mailto:')) {
        if (Capacitor.isNativePlatform()) {
          await AppLauncher.openUrl({ url });
        } else {
          window.open(url);
        }
      } else {
        await Browser.open({ url });
      }
    } catch (error) {
      console.error('Error opening URL:', error);
      try {
        window.open(url, '_system');
      } catch (fallbackError) {
        console.error('Fallback error:', fallbackError);
        window.location.href = url;
      }
    }
  }
</script>

<div class="page" name="settings">
  <div class="navbar hidden-print">
    <div class="navbar-bg bg-gradient-to-r from-blue-600 to-blue-700"></div>
    <div class="navbar-inner">
      <div class="left">
        <a href="#" class="link back text-white">
          <i class="fas fa-arrow-left"></i>
          <span class="ml-1">Back</span>
        </a>
      </div>
      <div class="title text-white text-center flex items-center justify-center">
        <i class="fad fa-cog fa-lg mr-2 text-white"></i>
        <span>Preferences</span>
      </div>
    </div>
  </div>

  <div id="settingsPage" class="page-content bg-gray-50 dark:bg-gray-900">
    <div class="p-4 max-w-2xl mx-auto">

      <!-- What's New Section -->
      <div class="mb-6">
        <div class="bg-white dark:bg-gray-800 rounded-lg shadow-md p-4">
          <h2 class="text-xl font-bold text-gray-900 dark:text-gray-100 mb-3 flex items-center">
            <i class="fad fa-sparkles text-blue-600 dark:text-blue-400 mr-2"></i>
            What's New in v2.0.0
          </h2>
          <ul class="space-y-2">
            <li class="flex items-start">
              <i class="fad fa-check-circle text-green-500 mt-1 mr-2"></i>
              <span class="text-gray-700 dark:text-gray-300">Upgraded to Svelte 5 for better performance</span>
            </li>
            <li class="flex items-start">
              <i class="fad fa-check-circle text-green-500 mt-1 mr-2"></i>
              <span class="text-gray-700 dark:text-gray-300">Modern TailwindCSS styling with dark mode support</span>
            </li>
            <li class="flex items-start">
              <i class="fad fa-check-circle text-green-500 mt-1 mr-2"></i>
              <span class="text-gray-700 dark:text-gray-300">Updated to latest Capacitor 7 and Framework7 8</span>
            </li>
            <li class="flex items-start">
              <i class="fad fa-check-circle text-green-500 mt-1 mr-2"></i>
              <span class="text-gray-700 dark:text-gray-300">Improved navigation and user interface</span>
            </li>
            <li class="flex items-start">
              <i class="fad fa-check-circle text-green-500 mt-1 mr-2"></i>
              <span class="text-gray-700 dark:text-gray-300">Enhanced error handling and loading states</span>
            </li>
          </ul>
        </div>
      </div>

      <!-- Appearance Settings -->
      <div class="mb-6">
        <div class="bg-white dark:bg-gray-800 rounded-lg shadow-md p-4">
          <h3 class="text-lg font-bold text-gray-900 dark:text-gray-100 mb-4 flex items-center">
            <i class="fad fa-palette text-purple-600 dark:text-purple-400 mr-2"></i>
            Appearance
          </h3>

          <label class="flex items-center justify-between py-3 cursor-pointer">
            <div class="flex items-center">
              <i class="fad fa-moon text-gray-600 dark:text-gray-400 mr-3 fa-lg"></i>
              <div>
                <div class="font-medium text-gray-900 dark:text-gray-100">Dark Mode</div>
                <div class="text-sm text-gray-500 dark:text-gray-400">Use dark theme throughout the app</div>
              </div>
            </div>
            <div class="relative">
              <input
                type="checkbox"
                class="sr-only peer"
                bind:checked={darkMode}
                on:change={toggleDarkMode}
              />
              <div class="w-14 h-7 bg-gray-300 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-600 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:start-[4px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-6 after:w-6 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
            </div>
          </label>
        </div>
      </div>

      <!-- About Section -->
      <div class="mb-6">
        <div class="bg-white dark:bg-gray-800 rounded-lg shadow-md p-4">
          <h3 class="text-lg font-bold text-gray-900 dark:text-gray-100 mb-4 flex items-center">
            <i class="fad fa-info-circle text-blue-600 dark:text-blue-400 mr-2"></i>
            About
          </h3>

          <div class="space-y-3 text-gray-700 dark:text-gray-300">
            <div class="flex justify-between items-center py-2 border-b border-gray-200 dark:border-gray-700">
              <span class="font-medium">App Name</span>
              <span>Medical Unit Converter</span>
            </div>
            <div class="flex justify-between items-center py-2 border-b border-gray-200 dark:border-gray-700">
              <span class="font-medium">Version</span>
              <span>2.0.0</span>
            </div>
            <div class="flex justify-between items-center py-2">
              <span class="font-medium">Developer</span>
              <span>Vetcalculators LLC</span>
            </div>
          </div>
        </div>
      </div>

      <!-- Links Section -->
      <div class="mb-6">
        <div class="bg-white dark:bg-gray-800 rounded-lg shadow-md p-4">
          <h3 class="text-lg font-bold text-gray-900 dark:text-gray-100 mb-4 flex items-center">
            <i class="fad fa-link text-green-600 dark:text-green-400 mr-2"></i>
            Links & Support
          </h3>

          <div class="space-y-2">
            <button
              class="w-full flex items-center justify-between p-3 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
              on:click={() => openUrl('http://vetcalculators.com/privacy_policy.html')}
            >
              <div class="flex items-center">
                <i class="fad fa-shield-check text-gray-600 dark:text-gray-400 mr-3"></i>
                <span class="text-gray-900 dark:text-gray-100">Privacy Policy</span>
              </div>
              <i class="fas fa-chevron-right text-gray-400"></i>
            </button>

            <button
              class="w-full flex items-center justify-between p-3 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors if-ios"
              on:click={() => openUrl('mailto:info@vetcalculators.com?subject=Medical Unit Converter App v2.0.0 iOS Contact')}
            >
              <div class="flex items-center">
                <i class="fad fa-envelope text-gray-600 dark:text-gray-400 mr-3"></i>
                <span class="text-gray-900 dark:text-gray-100">Contact Support</span>
              </div>
              <i class="fas fa-chevron-right text-gray-400"></i>
            </button>

            <button
              class="w-full flex items-center justify-between p-3 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors if-md"
              on:click={() => openUrl('mailto:info@vetcalculators.com?subject=Medical Unit Converter App v2.0.0 Android Contact')}
            >
              <div class="flex items-center">
                <i class="fad fa-envelope text-gray-600 dark:text-gray-400 mr-3"></i>
                <span class="text-gray-900 dark:text-gray-100">Contact Support</span>
              </div>
              <i class="fas fa-chevron-right text-gray-400"></i>
            </button>
          </div>
        </div>
      </div>

      <!-- Copyright -->
      <div class="text-center text-gray-600 dark:text-gray-400 py-4">
        <p class="text-sm">© Vetcalculators LLC, 2025</p>
        <p class="text-xs mt-1">Version 2.0.0</p>
      </div>
    </div>
  </div>
</div>

<style>
  .navbar-bg {
    background: linear-gradient(135deg, #2563eb 0%, #1d4ed8 100%);
  }

  /* Toggle switch customization */
  .sr-only {
    position: absolute;
    width: 1px;
    height: 1px;
    padding: 0;
    margin: -1px;
    overflow: hidden;
    clip: rect(0, 0, 0, 0);
    white-space: nowrap;
    border-width: 0;
  }
</style>
