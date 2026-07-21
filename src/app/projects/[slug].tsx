import { ScrollView, StyleSheet, Text, useWindowDimensions, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { ProjectGallery } from '@/components/project-gallery';
import { ProjectVideo } from '@/components/project-video';
import { useLocalSearchParams } from 'expo-router';
import { getProjectById, projects } from '@/data/projects';

export function generateStaticParams() {
  return projects.map((project) => ({
slug: project.id,
}));
}

export default function HomeScreen() {
  const { width } = useWindowDimensions();
  const isDesktop = width >= 768;

  const { slug } = useLocalSearchParams<{ slug: string }>();
  const project = getProjectById(slug);

  if (!project) {
    return (
        <SafeAreaView style={styles.safeArea}>
        <View style={styles.notFound}>
        <Text style={styles.sectionTitle}>Project not found</Text>
        </View>
        </SafeAreaView>
        );
  }

  return (
      <SafeAreaView style={styles.safeArea}>
      <ScrollView
      contentContainerStyle={[
      styles.page,
      { paddingHorizontal: isDesktop ? 40 : 20 },
      ]}
      >
      <View style={styles.hero}>
      <Text style={styles.eyebrow}>ISEP ENGINEERING LAB</Text>

      <Text
      style={[
      styles.title,
      { fontSize: isDesktop ? 56 : 40 },
      ]}
      >
      {project.title}
      </Text>

      <Text style={styles.subtitle}>
      {project.description}
      </Text>
        </View>

        <Section title="Project overview">
        <Text style={styles.body}>
        {project.howItWorks}
      </Text>
        </Section>

        <Section title="Engineering highlights">
        <BulletList items={project.highlights} />
        </Section>

        <Section title="Hardware">
        <BulletList items={project.hardware} />
        </Section>

        <Section title="Project gallery">
        <ProjectGallery images={project.images} />
        </Section>

        <Section title="Demonstration">
        <Text style={styles.body}>{project.demonstration}</Text>
        <ProjectVideo source={project.video} />

        <Text style={styles.engineeringNote}>
        Engineering note: {project.engineeringNote}
      </Text>

        </Section>

        <View style={styles.footer}>
        <Text style={styles.footerText}>
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
};

function Section({ title, children }: SectionProps) {
  return (
      <View style={styles.section}>
      <Text style={styles.sectionTitle}>{title}</Text>
      {children}
      </View>
      );
}

type BulletListProps = {
items: readonly string[];
};

function BulletList({ items }: BulletListProps) {
  return (
      <View style={styles.list}>
      {items.map((item) => (
            <View key={item} style={styles.listItem}>
            <Text style={styles.bullet}>•</Text>
            <Text style={styles.listText}>{item}</Text>
            </View>
            ))}
      </View>
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
section: {
gap: 20,
         },
sectionTitle: {
color: '#fafafa',
       fontSize: 28,
       fontWeight: '700',
              },
body: {
color: '#d4d4d8',
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
color: '#38bdf8',
       fontSize: 20,
       lineHeight: 26,
        },
listText: {
flex: 1,
      color: '#d4d4d8',
      fontSize: 17,
      lineHeight: 26,
          },
engineeringNote: {
color: '#a1a1aa',
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
color: '#71717a',
       fontSize: 14,
            },
notFound: {
flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      padding: 24,
          },
          });
