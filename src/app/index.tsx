import { ScrollView, StyleSheet, Text, useWindowDimensions, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { ProjectGallery } from '@/components/project-gallery';
import { ProjectVideo } from '@/components/project-video';
import { pgsceSamorinhaProject } from '@/data/projects';

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
          <Text style={styles.eyebrow}>ISEP ENGINEERING LAB</Text>

          <Text
            style={[
              styles.title,
              { fontSize: isDesktop ? 56 : 40 },
            ]}
          >
            {pgsceSamorinhaProject.title}
          </Text>

          <Text style={styles.subtitle}>
            {pgsceSamorinhaProject.description}
          </Text>
        </View>

        <Section title="Project overview">
          <Text style={styles.body}>
            {pgsceSamorinhaProject.howItWorks}
          </Text>
        </Section>

        <Section title="Engineering highlights">
          <BulletList items={pgsceSamorinhaProject.highlights} />
        </Section>

        <Section title="Hardware">
          <BulletList items={pgsceSamorinhaProject.hardware} />
        </Section>

        <Section title="Project gallery">
          <ProjectGallery images={pgsceSamorinhaProject.images} />
        </Section>

        <Section title="Demonstration">
          <Text style={styles.body}>
            The video demonstrates motor-speed adjustment, direction control,
            and real-time LCD feedback.
          </Text>

          <ProjectVideo source={pgsceSamorinhaProject.video} />\
	<Text style={styles.engineeringNote}>Engineering note: In this laboratory setup, LCD instability became visible above approximately 14% PWM duty cycle, likely due to electromagnetic interference and shared power or ground noise from the DC motor.
</Text>

        </Section>

        <View style={styles.footer}>
          <Text style={styles.footerText}>
            Built with bare-metal C, Expo, React Native, and TypeScript.
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
});
