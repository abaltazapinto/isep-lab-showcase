import { Link, useLocalSearchParams } from 'expo-router';
import { Pressable, ScrollView, StyleSheet, Text, useWindowDimensions, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { ProjectGallery } from '@/components/project-gallery';
import { ProjectVideo } from '@/components/project-video';
import { getProjectById, projects } from '@/data/projects';
import { useTheme } from '@/hooks/use-theme';

export function generateStaticParams() {
  return projects.map((project) => ({
slug: project.id,
}));
}

export default function HomeScreen() {
  const { width } = useWindowDimensions();
  const theme = useTheme();
  const isDesktop = width >= 768;

  const { slug } = useLocalSearchParams<{ slug: string }>();
  const project = getProjectById(slug);

  if (!project) {
    return (
        <SafeAreaView style={[styles.safeArea, { backgroundColor: theme.background }]}>
        <View style={styles.notFound}>
        <Text style={[styles.sectionTitle, { color: theme.text }]}>Project not found</Text>
        </View>
        </SafeAreaView>
        );
  }

  return (
      <SafeAreaView style={[styles.safeArea, { backgroundColor: theme.background }]}>
      <ScrollView
      contentContainerStyle={[
      styles.page,
      { paddingHorizontal: isDesktop ? 40 : 20 },
      ]}
      >
      <Link href="/" asChild>
      <Pressable
      accessibilityLabel="Back to project catalogue"
      style={({ pressed }) => [
      styles.backButton,
      { backgroundColor: theme.backgroundElement, borderColor: theme.border },
      pressed && styles.backButtonPressed,
      ]}
      >
      <Text style={[styles.backButtonText, { color: theme.accent }]}>← Back to projects</Text>
      </Pressable>
      </Link>

      <View style={styles.hero}>
      <Text style={[styles.eyebrow, { color: theme.accent }]}>ISEP ENGINEERING LAB</Text>

      <Text
      style={[
      styles.title,
      { color: theme.text, fontSize: isDesktop ? 56 : 40 },
      ]}
      >
      {project.title}
      </Text>

      <Text style={[styles.subtitle, { color: theme.textSecondary }]}>
      {project.description}
      </Text>
        </View>

        <Section theme={theme} title="Project overview">
        <Text style={[styles.body, { color: theme.text }]}>
        {project.howItWorks}
      </Text>
        </Section>

        <Section theme={theme} title="Engineering highlights">
        <BulletList items={project.highlights} theme={theme} />
        </Section>

        <Section theme={theme} title="Hardware">
        <BulletList items={project.hardware} theme={theme} />
        </Section>

        <Section theme={theme} title="Project gallery">
        <ProjectGallery images={project.images} />
        </Section>

        <Section theme={theme} title="Demonstration">
        <Text style={[styles.body, { color: theme.text }]}>{project.demonstration}</Text>
        <ProjectVideo source={project.video} />

        <Text style={[styles.engineeringNote, { borderLeftColor: theme.accent, color: theme.textSecondary }]}>
        Engineering note: {project.engineeringNote}
      </Text>

        </Section>

        <View style={[styles.footer, { borderTopColor: theme.border }]}>
        <Text style={[styles.footerText, { color: theme.textMuted }]}>
        Built with {project.technologies.join(', ')}.
        </Text>
        </View>
        </ScrollView>
        </SafeAreaView>
        );
}

type SectionProps = {
title: string;
children: React.ReactNode;
theme: ReturnType<typeof useTheme>;
};

function Section({ title, children, theme }: SectionProps) {
  return (
      <View style={styles.section}>
      <Text style={[styles.sectionTitle, { color: theme.text }]}>{title}</Text>
      {children}
      </View>
      );
}

type BulletListProps = {
items: readonly string[];
theme: ReturnType<typeof useTheme>;
};

function BulletList({ items, theme }: BulletListProps) {
  return (
      <View style={styles.list}>
      {items.map((item) => (
            <View key={item} style={styles.listItem}>
            <Text style={[styles.bullet, { color: theme.accent }]}>•</Text>
            <Text style={[styles.listText, { color: theme.text }]}>{item}</Text>
            </View>
            ))}
      </View>
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
backButton: {
alignSelf: 'flex-start',
borderWidth: 1,
borderRadius: 12,
paddingHorizontal: 16,
paddingVertical: 10,
},
backButtonPressed: {
opacity: 0.8,
},
backButtonText: {
fontSize: 15,
fontWeight: '700',
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
section: {
gap: 20,
         },
sectionTitle: {
       fontSize: 28,
       fontWeight: '700',
              },
body: {
       fontSize: 17,
       lineHeight: 28,
       maxWidth: 850,
      },
list: {
gap: 12,
      },
listItem: {
flexDirection: 'row',
               alignItems: 'flex-start',
               gap: 12,
          },
bullet: {
       fontSize: 20,
       lineHeight: 26,
        },
listText: {
flex: 1,
      fontSize: 17,
      lineHeight: 26,
          },
engineeringNote: {
       fontSize: 14,
       lineHeight: 22,
       fontStyle: 'italic',
       borderLeftWidth: 3,
       borderLeftColor: '#38bdf8',
       paddingLeft: 14,
       marginTop: 4,
                 },
footer: {
borderTopWidth: 1,
                borderTopColor: '#27272a',
                paddingTop: 24,
        },
footerText: {
       fontSize: 14,
            },
notFound: {
flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      padding: 24,
          },
          });
