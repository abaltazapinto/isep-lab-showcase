import {
  VideoView,
  useVideoPlayer,
  type VideoSource,
} from 'expo-video';
import { StyleSheet, View } from 'react-native';

type ProjectVideoProps = {
  source: VideoSource;
};

export function ProjectVideo({ source }: ProjectVideoProps) {
  const player = useVideoPlayer(source);

  return (
    <View style={styles.frame}>
      <VideoView
        accessibilityLabel="PGSCE Samorinha project demonstration"
        contentFit="contain"
        fullscreenOptions={{ enable: true }}
        nativeControls
        player={player}
        style={styles.video}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  frame: {
    width: '100%',
    aspectRatio: 16 / 9,
    overflow: 'hidden',
    borderRadius: 16,
    backgroundColor: '#000000',
  },
  video: {
    width: '100%',
    height: '100%',
  },
});
