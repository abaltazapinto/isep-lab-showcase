import { Link } from 'expo-router';
import { Image, Pressable, StyleSheet, Text, View } from 'react-native';

import type { Project } from '@/data/projects';
import { useTheme } from '@/hooks/use-theme';

type ProjectCardProps = {
  project: Project;
  layout: 'horizontal' | 'vertical';
};

export function ProjectCard({ project, layout }: ProjectCardProps) {
  const theme = useTheme();
  const coverImage = project.images?.[0];
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
          layout === 'horizontal' && styles.horizontalCard,
          { backgroundColor: theme.backgroundElement, borderColor: theme.border },
          pressed && styles.cardPressed,
        ]}
      >
        {coverImage && (
          <View
            style={[
              styles.mediaFrame,
              layout === 'horizontal' ? styles.horizontalMedia : styles.verticalMedia,
              { backgroundColor: theme.mediaBackground },
            ]}
          >
            <Image
              accessibilityLabel={coverImage.description}
              resizeMode="cover"
              source={coverImage.source}
              style={styles.image}
            />
          </View>
        )}

        <View style={[styles.content, layout === 'horizontal' && styles.horizontalContent]}>
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
    width: '100%',
    overflow: 'hidden',
    borderWidth: 1,
    borderRadius: 20,
  },
  horizontalCard: {
    flexDirection: 'row',
    alignItems: 'flex-start',
  },
  cardPressed: {
    opacity: 0.8,
  },
  mediaFrame: {
    aspectRatio: 4 / 3,
    overflow: 'hidden',
    flexShrink: 0,
  },
  horizontalMedia: {
    width: 240,
    height: 180,
  },
  verticalMedia: {
    width: '100%',
  },
  image: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
  },
  content: {
    padding: 20,
    gap: 10,
  },
  horizontalContent: {
    flex: 1,
    minWidth: 0,
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
