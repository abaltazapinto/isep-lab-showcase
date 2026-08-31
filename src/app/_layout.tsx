import {
  DarkTheme,
  DefaultTheme,
  Stack,
  ThemeProvider,
} from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import { StatusBar } from 'expo-status-bar';

import { AnimatedSplashOverlay } from '@/components/animated-icon';
import { ThemeToggle } from '@/components/theme-toggle';
import { ThemePreferenceProvider, useThemePreference } from '@/providers/theme-preference-provider';

SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  return (
    <ThemePreferenceProvider>
      <ThemedRootLayout />
    </ThemePreferenceProvider>
  );
}

function ThemedRootLayout() {
  const { theme } = useThemePreference();

  return (
    <ThemeProvider value={theme === 'dark' ? DarkTheme : DefaultTheme}>
      <StatusBar style={theme === 'dark' ? 'light' : 'dark'} />
      <AnimatedSplashOverlay />

      <Stack screenOptions={{ headerShown: false }} />
      <ThemeToggle />
    </ThemeProvider>
  );
}
