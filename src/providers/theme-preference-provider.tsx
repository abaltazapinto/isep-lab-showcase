import AsyncStorage from '@react-native-async-storage/async-storage';
import { createContext, useCallback, useContext, useEffect, useMemo, useState } from 'react';

import { useColorScheme } from '@/hooks/use-color-scheme';

export type ThemeName = 'light' | 'dark';

type ThemePreferenceContextValue = {
  theme: ThemeName;
  setTheme: (theme: ThemeName) => void;
  toggleTheme: () => void;
};

const STORAGE_KEY = 'theme-preference';
const ThemePreferenceContext = createContext<ThemePreferenceContextValue | null>(null);

export function ThemePreferenceProvider({ children }: React.PropsWithChildren) {
  const systemScheme = useColorScheme();
  const systemTheme: ThemeName = systemScheme === 'dark' ? 'dark' : 'light';
  const [preference, setPreference] = useState<ThemeName | null>(null);

  useEffect(() => {
    let isMounted = true;

    AsyncStorage.getItem(STORAGE_KEY)
      .then((storedTheme) => {
        if (isMounted && (storedTheme === 'light' || storedTheme === 'dark')) {
          setPreference(storedTheme);
        }
      })
      .catch(() => {
        // Continue with the system preference when storage is unavailable.
      });

    return () => {
      isMounted = false;
    };
  }, []);

  const theme = preference ?? systemTheme;

  const setTheme = useCallback((nextTheme: ThemeName) => {
    setPreference(nextTheme);
    AsyncStorage.setItem(STORAGE_KEY, nextTheme).catch(() => {
      // The in-memory selection remains usable for the current session.
    });
  }, []);

  const toggleTheme = useCallback(() => {
    setPreference((currentPreference) => {
      const currentTheme = currentPreference ?? systemTheme;
      const nextTheme = currentTheme === 'dark' ? 'light' : 'dark';

      AsyncStorage.setItem(STORAGE_KEY, nextTheme).catch(() => {
        // The in-memory selection remains usable for the current session.
      });

      return nextTheme;
    });
  }, [systemTheme]);

  const value = useMemo(
    () => ({ theme, setTheme, toggleTheme }),
    [setTheme, theme, toggleTheme]
  );

  return (
    <ThemePreferenceContext.Provider value={value}>
      {children}
    </ThemePreferenceContext.Provider>
  );
}

export function useThemePreference() {
  const context = useContext(ThemePreferenceContext);

  if (!context) {
    throw new Error('useThemePreference must be used within ThemePreferenceProvider');
  }

  return context;
}
