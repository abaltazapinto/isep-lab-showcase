import { SymbolView } from 'expo-symbols';
import boldSymbolWeight from 'expo-symbols/androidWeights/bold';
import { Platform, Pressable, StyleSheet } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { BottomTabInset } from '@/constants/theme';
import { useThemePreference } from '@/providers/theme-preference-provider';

export function ThemeToggle() {
  const insets = useSafeAreaInsets();
  const { theme, toggleTheme } = useThemePreference();
  const isDark = theme === 'dark';
  const nextTheme = isDark ? 'light' : 'dark';

  return (
    <Pressable
      accessibilityLabel={`Switch to ${nextTheme} mode`}
      accessibilityRole="button"
      onPress={toggleTheme}
      style={({ pressed }) => [
        styles.button,
        styles.floating,
        { bottom: insets.bottom + (Platform.OS === 'web' ? 20 : BottomTabInset + 12) },
        pressed && styles.pressed,
      ]}>
      <SymbolView
        name={
          isDark
            ? { ios: 'moon.fill', android: 'dark_mode', web: 'dark_mode' }
            : { ios: 'sun.max.fill', android: 'light_mode', web: 'light_mode' }
        }
        size={22}
        tintColor={isDark ? '#FFFFFF' : '#F59E0B'}
        weight={{ ios: 'bold', android: boldSymbolWeight }}
      />
    </Pressable>
  );
}

const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    borderRadius: 999,
    flexDirection: 'row',
    height: 40,
    justifyContent: 'center',
    width: 40,
  },
  floating: {
    position: 'absolute',
    right: 20,
    zIndex: 100,
  },
  pressed: { opacity: 0.7 },
});
