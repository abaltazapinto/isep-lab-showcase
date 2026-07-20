import {
  Image,
  type ImageSourcePropType,
  type DimensionValue,
  StyleSheet,
  useWindowDimensions,
  View,
} from 'react-native';

type ProjectImage = {
  source: ImageSourcePropType;
  description: string;
};

type ProjectGalleryProps = {
  images: readonly ProjectImage[];
};

export function ProjectGallery({ images }: ProjectGalleryProps) {
  const { width } = useWindowDimensions();

  const itemWidth: DimensionValue =
    width >= 900 ? '31.5%' : width >= 600 ? '48.5%' : '100%';

  return (
    <View style={styles.gallery}>
      {images.map((image, index) => (
        <View
          key={`${image.description}-${index}`}
          style={[styles.item, { width: itemWidth }]}
        >
          <Image
            accessibilityLabel={image.description}
            source={image.source}
            resizeMode="cover"
            style={styles.image}
          />
        </View>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  gallery: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 12,
  },
  item: {
    aspectRatio: 4 / 3,
    overflow: 'hidden',
    borderRadius: 16,
    backgroundColor: '#18181b',
  },
  image: {
    width: '100%',
    height: '100%',
  },
});
