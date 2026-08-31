import { ScrollView, StyleSheet, Text, useWindowDimensions, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { ProjectCard } from '@/components/project-card';
import { useTheme } from '@/hooks/use-theme';
import { projects } from '@/data/projects';

export default function HomeScreen() {
  const { width } = useWindowDimensions();
  const theme = useTheme();
  const isDesktop = width >= 768;

  return (
    <SafeAreaView style={[styles.safeArea, { backgroundColor: theme.background }]}>
      <ScrollView
        contentContainerStyle={[
          styles.page,
          { paddingHorizontal: isDesktop ? 40 : 20 },
        ]}
      >
        <View style={styles.hero}>
          <Text style={[styles.eyebrow, { color: theme.accent }]}>ISEP EMBEDDED SYSTEMS</Text>

          <Text
            style={[
              styles.title,
              { color: theme.text, fontSize: isDesktop ? 56 : 40 },
            ]}
          >
            Engineering projects
          </Text>

          <Text style={[styles.subtitle, { color: theme.textSecondary }]}>
            A collection of embedded-systems projects developed during the
            Desenvolvimento de Sistemas Embebidos course.
          </Text>
        </View>

        <View style={styles.catalogue}>
          <Text style={[styles.sectionTitle, { color: theme.text }]}>Projects</Text>

          <View style={styles.grid}>
            {projects.map((project) => (
              <View
                key={project.id}
                style={[
                  styles.gridItem,
                  { width: isDesktop ? '48.5%' : '100%' },
                ]}
              >
                <ProjectCard project={project} />
              </View>
            ))}
          </View>
        </View>

        <View style={[styles.footer, { borderTopColor: theme.border }]}>
          <Text style={[styles.footerText, { color: theme.textMuted }]}>
            More laboratory projects will be added as they are documented and
            prepared for public presentation.
          </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },
  page: {
    width: '100%',
    maxWidth: 1100,
    alignSelf: 'center',
    paddingTop: 48,
    paddingBottom: 64,
    gap: 48,
  },
  hero: {
    gap: 16,
  },
  eyebrow: {
    fontSize: 13,
    fontWeight: '700',
    letterSpacing: 2,
  },
  title: {
    fontWeight: '800',
    lineHeight: 64,
    maxWidth: 850,
  },
  subtitle: {
    fontSize: 20,
    lineHeight: 30,
    maxWidth: 760,
  },
  catalogue: {
    gap: 20,
  },
  sectionTitle: {
    fontSize: 28,
    fontWeight: '700',
  },
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 16,
  },
  gridItem: {
    minWidth: 0,
  },
  footer: {
    borderTopWidth: 1,
    borderTopColor: '#27272a',
    paddingTop: 24,
  },
  footerText: {
    fontSize: 14,
    lineHeight: 22,
  },
});
