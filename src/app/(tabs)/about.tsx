import { ScrollView, StyleSheet, Text, View, useWindowDimensions } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { useTheme } from '@/hooks/use-theme';

export default function AboutScreen() {
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
            About
          </Text>
          <Text style={[styles.subtitle, { color: theme.textSecondary }]}>
            One Engineering Portfolio spanning academic work, personal engineering labs and documented projects.
          </Text>
        </View>
        <View style={styles.section}>
          <Text style={[styles.heading, { color: theme.text }]}>
            Engineering approach
          </Text>
          <Text style={[styles.body, { color: theme.textSecondary }]}>
            The focus is on problems, architecture, implementation, engineering decisions, failure and debugging, validation, evidence and lessons learned.
          </Text>
        </View>
        <View style={styles.section}>
          <Text style={[styles.heading, { color: theme.text }]}>
            Context and evidence
          </Text>
          <Text style={[styles.body, { color: theme.textSecondary }]}>
            Academic subjects provide context. Project claims should identify what was built, what was tested and what remains unknown. Planned work and areas of interest remain distinguishable from implemented or validated results.
          </Text>
        </View>
        <View style={styles.section}>
          <Text style={[styles.heading, { color: theme.text }]}>
            Growing over time
          </Text>
          <Text style={[styles.body, { color: theme.textSecondary }]}>
            The portfolio brings together Embedded Engineering postgraduate work, MESCC and personal experimentation. Future work can join the same portfolio when there is useful documented engineering evidence.
          </Text>
        </View>
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
  section: { gap: 12 },
  heading: { fontSize: 26, fontWeight: '700' },
  body: { fontSize: 17, lineHeight: 28, maxWidth: 850 },
});
