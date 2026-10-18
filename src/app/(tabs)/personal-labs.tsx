import { ScrollView, StyleSheet, Text, View, useWindowDimensions } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { useTheme } from '@/hooks/use-theme';

export default function PersonalLabsScreen() {
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
            Personal Labs
          </Text>
          <Text style={[styles.subtitle, { color: theme.textSecondary }]}>
            A space for independent engineering investigations, experiments and lessons learned.
          </Text>
        </View>
        <View style={styles.section}>
          <Text style={[styles.heading, { color: theme.text }]}>
            Areas of interest
          </Text>
          <Text style={[styles.body, { color: theme.textSecondary }]}>
            Raspberry Pi and Linux; Proxmox virtualization; Pi-hole and DNS; Nextcloud and self-hosting; Tailscale and remote infrastructure; networking and security; CCTV; ESP32, IoT and automatic irrigation.
          </Text>
        </View>
        <View style={styles.section}>
          <Text style={[styles.heading, { color: theme.text }]}>
            From investigation to evidence
          </Text>
          <Text style={[styles.body, { color: theme.textSecondary }]}>
            These topics describe areas of interest, not completed or validated systems. Future cases will explain the problem, implementation, debugging, tests and supporting evidence. No new lab projects are being presented here yet.
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
