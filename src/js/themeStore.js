import { writable } from 'svelte/store';
import { Preferences } from '@capacitor/preferences';

// Create writable stores for theme and preferences
function createThemeStore() {
  const { subscribe, set, update } = writable({
    darkMode: false,
    initialized: false
  });

  return {
    subscribe,

    // Initialize theme from storage
    async init() {
      try {
        const { value } = await Preferences.get({ key: 'darkMode' });
        const darkMode = value === 'true';

        // Apply theme to document
        if (darkMode) {
          document.documentElement.classList.add('dark');
        } else {
          document.documentElement.classList.remove('dark');
        }

        set({ darkMode, initialized: true });
      } catch (error) {
        console.error('Error loading theme:', error);
        set({ darkMode: false, initialized: true });
      }
    },

    // Toggle dark mode
    async toggle() {
      update(state => {
        const newDarkMode = !state.darkMode;

        // Apply theme to document
        if (newDarkMode) {
          document.documentElement.classList.add('dark');
        } else {
          document.documentElement.classList.remove('dark');
        }

        // Save to storage
        Preferences.set({
          key: 'darkMode',
          value: String(newDarkMode)
        });

        return { ...state, darkMode: newDarkMode };
      });
    },

    // Set dark mode explicitly
    async setDarkMode(enabled) {
      // Apply theme to document
      if (enabled) {
        document.documentElement.classList.add('dark');
      } else {
        document.documentElement.classList.remove('dark');
      }

      // Save to storage
      await Preferences.set({
        key: 'darkMode',
        value: String(enabled)
      });

      set({ darkMode: enabled, initialized: true });
    }
  };
}

export const themeStore = createThemeStore();
