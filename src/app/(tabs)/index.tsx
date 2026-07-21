import { ScrollView, StyleSheet, Text, useWindowDimensions, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { ProjectCard } from '@/components/project-card';
import { projects } from '@/data/projects';

export default function HomeScreen() {
  const { width } = useWindowDimensions();
  const isDesktop = width >= 768;

  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView
        contentContainerStyle={[
          styles.page,
          { paddingHorizontal: isDesktop ? 40 : 20 },
        ]}
      >
        <View style={styles.hero}>
          <Text style={styles.eyebrow}>ISEP EMBEDDED SYSTEMS</Text>

          <Text
            style={[
              styles.title,
              { fontSize: isDesktop ? 56 : 40 },
            ]}
          >
            Engineering projects
          </Text>

          <Text style={styles.subtitle}>
            A collection of embedded-systems projects developed during the
            Desenvolvimento de Sistemas Embebidos course.
          </Text>
        </View>

        <View style={styles.catalogue}>
          <Text style={styles.sectionTitle}>Projects</Text>

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

        <View style={styles.footer}>
          <Text style={styles.footerText}>
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
    backgroundColor: '#09090b',
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
    color: '#38bdf8',
    fontSize: 13,
    fontWeight: '700',
    letterSpacing: 2,
  },
  title: {
    color: '#fafafa',
    fontWeight: '800',
    lineHeight: 64,
    maxWidth: 850,
  },
  subtitle: {
    color: '#a1a1aa',
    fontSize: 20,
    lineHeight: 30,
    maxWidth: 760,
  },
  catalogue: {
    gap: 20,
  },
  sectionTitle: {
    color: '#fafafa',
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
    color: '#71717a',
    fontSize: 14,
    lineHeight: 22,
  },
});
