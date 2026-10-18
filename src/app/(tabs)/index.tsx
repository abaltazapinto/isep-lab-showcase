import { Link } from 'expo-router';
import { Pressable, ScrollView, StyleSheet, Text, View, useWindowDimensions } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { useTheme } from '@/hooks/use-theme';

export default function HomeScreen() {
  const theme = useTheme();
  const { width } = useWindowDimensions();
  const isDesktop = width >= 768;

  return (
    <SafeAreaView style={[styles.safeArea, { backgroundColor: theme.background }]}>
      <ScrollView contentContainerStyle={[styles.page, { paddingHorizontal: isDesktop ? 40 : 20 }]}>
        <View style={styles.hero}>
          <Text style={[styles.eyebrow, { color: theme.accent }]}>
            ENGINEERING PORTFOLIO
          </Text>
          <Text accessibilityRole="header" style={[styles.title, { color: theme.text, fontSize: isDesktop ? 56 : 40 }]}>
            Engineering Portfolio
          </Text>
          <Text style={[styles.subtitle, { color: theme.textSecondary }]}>
            Engineering work explained through problems, systems, decisions, debugging and evidence. Explore academic learning, personal investigations and documented projects.
          </Text>
        </View>
        <Link href="/academic" asChild>
          <Pressable accessibilityRole="link" style={({ pressed }) => [styles.section, { backgroundColor: theme.backgroundElement, borderColor: theme.border }, pressed && { opacity: 0.8 }]}>
            <Text style={[styles.heading, { color: theme.accent }]}>
              Academic →
            </Text>
            <Text style={[styles.body, { color: theme.textSecondary }]}>
              Embedded Engineering postgraduate work and MESCC academic context, with subjects kept distinct from engineering projects.
            </Text>
          </Pressable>
        </Link>
        <Link href="/personal-labs" asChild>
          <Pressable accessibilityRole="link" style={({ pressed }) => [styles.section, { backgroundColor: theme.backgroundElement, borderColor: theme.border }, pressed && { opacity: 0.8 }]}>
            <Text style={[styles.heading, { color: theme.accent }]}>
              Personal Labs →
            </Text>
            <Text style={[styles.body, { color: theme.textSecondary }]}>
              Independent investigations across embedded systems, infrastructure, networking and connected devices.
            </Text>
          </Pressable>
        </Link>
        <Link href="/projects" asChild>
          <Pressable accessibilityRole="link" style={({ pressed }) => [styles.section, { backgroundColor: theme.backgroundElement, borderColor: theme.border }, pressed && { opacity: 0.8 }]}>
            <Text style={[styles.heading, { color: theme.accent }]}>
              Projects →
            </Text>
            <Text style={[styles.body, { color: theme.textSecondary }]}>
              Explore the existing engineering cases, their implementations, demonstrations and documented limitations.
            </Text>
          </Pressable>
        </Link>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: { flex: 1 },
  page: {
    width: '100%',
    maxWidth: 1100,
    alignSelf: 'center',
    paddingTop: 48,
    paddingBottom: 100,
    gap: 32,
  },
  hero: { gap: 16 },
  eyebrow: { fontSize: 13, fontWeight: '700', letterSpacing: 2 },
  title: { fontWeight: '800', maxWidth: 850 },
  subtitle: { fontSize: 20, lineHeight: 30, maxWidth: 760 },
  section: { gap: 12, borderWidth: 1, borderRadius: 20, padding: 24 },
  heading: { fontSize: 26, fontWeight: '700' },
  body: { fontSize: 17, lineHeight: 28, maxWidth: 850 },
});
