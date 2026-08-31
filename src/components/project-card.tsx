import { Link } from 'expo-router';
import { Image, Pressable, StyleSheet, Text, View } from 'react-native';

import type { Project } from '@/data/projects';
import { useTheme } from '@/hooks/use-theme';

type ProjectCardProps = {
  project: Project;
};

export function ProjectCard({ project }: ProjectCardProps) {
  const theme = useTheme();
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
          { backgroundColor: theme.backgroundElement, borderColor: theme.border },
          pressed && styles.cardPressed,
        ]}
      >
        <Image
          accessibilityLabel={project.images[0].description}
          resizeMode="cover"
          source={project.images[0].source}
          style={[styles.image, { backgroundColor: theme.mediaBackground }]}
        />

        <View style={styles.content}>
          <Text style={[styles.eyebrow, { color: theme.accent }]}>{project.shortTitle}</Text>
          <Text style={[styles.title, { color: theme.text }]}>{project.title}</Text>
          <Text style={[styles.description, { color: theme.textSecondary }]}>{project.description}</Text>
          <Text style={[styles.linkText, { color: theme.accent }]}>View project →</Text>
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
    borderRadius: 20,
  },
  cardPressed: {
    opacity: 0.8,
  },
  image: {
    width: '100%',
    aspectRatio: 4 / 3,
  },
  content: {
    padding: 20,
    gap: 10,
  },
  eyebrow: {
    fontSize: 12,
    fontWeight: '700',
    letterSpacing: 1.5,
    textTransform: 'uppercase',
  },
  title: {
    fontSize: 24,
    fontWeight: '700',
  },
  description: {
    fontSize: 16,
    lineHeight: 24,
  },
  linkText: {
    marginTop: 4,
    fontSize: 15,
    fontWeight: '700',
  },
});
