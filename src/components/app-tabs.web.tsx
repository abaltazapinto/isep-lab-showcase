import {
  Tabs,
  TabList,
  TabTrigger,
  TabSlot,
  TabTriggerSlotProps,
  TabListProps,
} from 'expo-router/ui';
import { Pressable, ScrollView, View, StyleSheet, useWindowDimensions } from 'react-native';

import { ThemedText } from './themed-text';
import { ThemedView } from './themed-view';
import { Spacing } from '@/constants/theme';
import { useTheme } from '@/hooks/use-theme';

export default function AppTabs() {
  const colors = useTheme();

  return (
    <Tabs>
      <TabList asChild>
        <CustomTabList>
          <TabTrigger name="home" href="/" asChild>
            <TabButton>Home</TabButton>
          </TabTrigger>
          <TabTrigger name="projects" href="/projects" asChild>
            <TabButton>Projects</TabButton>
          </TabTrigger>
          <TabTrigger name="academic" href="/academic" asChild>
            <TabButton>Academic</TabButton>
          </TabTrigger>
          <TabTrigger name="personal-labs" href="/personal-labs" asChild>
            <TabButton>Personal Labs</TabButton>
          </TabTrigger>
          <TabTrigger name="about" href="/about" asChild>
            <TabButton>About</TabButton>
          </TabTrigger>
        </CustomTabList>
      </TabList>
      <TabSlot style={[styles.tabSlot, { backgroundColor: colors.background }]} />
    </Tabs>
  );
}

export function TabButton({ children, isFocused, ...props }: TabTriggerSlotProps) {
  return (
    <Pressable {...props} style={({ pressed }) => [styles.tabButton, pressed && styles.pressed]}>
      <ThemedView
        type={isFocused ? 'backgroundSelected' : 'backgroundElement'}
        style={styles.tabButtonView}>
        <ThemedText type="small" themeColor={isFocused ? 'text' : 'textSecondary'}>
          {children}
        </ThemedText>
      </ThemedView>
    </Pressable>
  );
}

export function CustomTabList({ children, style, ...props }: TabListProps) {
  const colors = useTheme();
  const { width } = useWindowDimensions();
  const isCompact = width < 900;

  return (
    <View {...props} style={[style, styles.tabListContainer, { backgroundColor: colors.background }]}>
      <ThemedView
        type="backgroundElement"
        style={[styles.innerContainer, isCompact && styles.innerContainerCompact]}>
        <ThemedText type="smallBold" style={styles.brandText}>
          Engineering Portfolio
        </ThemedText>
        <ScrollView horizontal style={styles.navigation} contentContainerStyle={styles.links}>
          {children}
        </ScrollView>
      </ThemedView>
    </View>
  );
}

const styles = StyleSheet.create({
  tabSlot: { flex: 1, minHeight: 0 },
  tabListContainer: { width: '100%', padding: Spacing.three, alignItems: 'center', flexShrink: 0 },
  innerContainer: {
    width: '100%',
    maxWidth: 1100,
    paddingVertical: Spacing.two,
    paddingHorizontal: Spacing.three,
    borderRadius: Spacing.five,
    flexDirection: 'row',
    alignItems: 'center',
    gap: Spacing.two,
  },
  innerContainerCompact: { flexDirection: 'column', alignItems: 'stretch' },
  brandText: { marginRight: 'auto', padding: Spacing.two },
  navigation: { flexGrow: 0, flexShrink: 1, minWidth: 0 },
  links: { flexDirection: 'row', alignItems: 'center', gap: Spacing.one },
  tabButton: { flexShrink: 0 },
  pressed: { opacity: 0.7 },
  tabButtonView: {
    paddingVertical: Spacing.two,
    paddingHorizontal: Spacing.three,
    borderRadius: Spacing.three,
  },
});
