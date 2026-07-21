import { Link } from 'expo-router';
import { Image, Pressable, StyleSheet, Text, View } from 'react-native';

import type { Project } from '@/data/projects';

type ProjectCardProps = {
  project: Project;
};

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <Link
      href={{
        pathname: '/projects/[slug]',
        params: { slug: project.id },
      }}
      asChild
    >
      <Pressable
        accessibilityLabel={`Open ${project.shortTitle}`}
        style={({ pressed }) => [
          styles.card,
          pressed && styles.cardPressed,
        ]}
      >
        <Image
          accessibilityLabel={project.images[0].description}
          resizeMode="cover"
          source={project.images[0].source}
          style={styles.image}
        />

        <View style={styles.content}>
          <Text style={styles.eyebrow}>{project.shortTitle}</Text>
          <Text style={styles.title}>{project.title}</Text>
          <Text style={styles.description}>{project.description}</Text>
          <Text style={styles.linkText}>View project →</Text>
        </View>
      </Pressable>
    </Link>
  );
}

const styles = StyleSheet.create({
  card: {
    flex: 1,
    overflow: 'hidden',
    borderWidth: 1,
    borderColor: '#27272a',
    borderRadius: 20,
    backgroundColor: '#18181b',
  },
  cardPressed: {
    opacity: 0.8,
  },
  image: {
    width: '100%',
    aspectRatio: 4 / 3,
    backgroundColor: '#27272a',
  },
  content: {
    padding: 20,
    gap: 10,
  },
  eyebrow: {
    color: '#38bdf8',
    fontSize: 12,
    fontWeight: '700',
    letterSpacing: 1.5,
    textTransform: 'uppercase',
  },
  title: {
    color: '#fafafa',
    fontSize: 24,
    fontWeight: '700',
  },
  description: {
    color: '#a1a1aa',
    fontSize: 16,
    lineHeight: 24,
  },
  linkText: {
    marginTop: 4,
    color: '#38bdf8',
    fontSize: 15,
    fontWeight: '700',
  },
});
