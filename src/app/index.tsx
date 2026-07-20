import { StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function HomeScreen() {
  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <Text style={styles.eyebrow}>ISEP ENGINEERING LAB</Text>

        <Text style={styles.title}>Lab Showcase</Text>

        <Text style={styles.description}>
		A collection of embedded systems and engineering laboratory projects,
		available across web and mobile.
	</Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#0b0d10',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 24,
    maxWidth: 720,
    width: '100%',
    alignSelf: 'center',
  },
  eyebrow: {
    color: '#38bdf8',
    fontSize: 14,
    fontWeight: '700',
    letterSpacing: 2,
    marginBottom: 12,
  },
  title: {
    color: '#ffffff',
    fontSize: 48,
    fontWeight: '800',
    marginBottom: 16,
  },
  description: {
    color: '#a1a1aa',
    fontSize: 20,
    lineHeight: 30,
  },
});
