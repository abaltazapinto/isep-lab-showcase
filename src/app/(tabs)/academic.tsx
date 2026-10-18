import { ScrollView, StyleSheet, Text, View, useWindowDimensions } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { useTheme } from '@/hooks/use-theme';

export default function AcademicScreen() {
  const theme = useTheme();
  const { width } = useWindowDimensions();
  const isDesktop = width >= 768;

  return (
    <SafeAreaView style={[styles.safeArea, { backgroundColor: theme.background }]}>
      <ScrollView contentContainerStyle={[styles.page, { paddingHorizontal: isDesktop ? 40 : 20 }]}>
        <View style={styles.hero}>
          <Text style={[styles.eyebrow, { color: theme.accent }]}>
            ENGINEERING PORTFOLIO
          </Text>
          <Text accessibilityRole="header" style={[styles.title, { color: theme.text, fontSize: isDesktop ? 56 : 40 }]}>
            Academic
          </Text>
          <Text style={[styles.subtitle, { color: theme.textSecondary }]}>
            Academic programmes provide the context for learning and engineering work. Subjects describe areas of study; they are not completed portfolio projects.
          </Text>
        </View>
        <View style={styles.section}>
          <Text style={[styles.heading, { color: theme.text }]}>
            Embedded Engineering — Postgraduate Programme
          </Text>
          <Text style={[styles.body, { color: theme.textSecondary }]}>
            ISEP Embedded Engineering covers these eight academic areas:
          </Text>
          <Text style={[styles.body, { color: theme.textSecondary }]}>
            Fundamentos de Sistemas Embebidos
          </Text>
          <Text style={[styles.body, { color: theme.textSecondary }]}>
            Desenvolvimento de Sistemas Embebidos
          </Text>
          <Text style={[styles.body, { color: theme.textSecondary }]}>
            Protocolos e Topologias de Sistemas Embebidos
          </Text>
          <Text style={[styles.body, { color: theme.textSecondary }]}>
            Sistemas Operativos de Tempo Real
          </Text>
          <Text style={[styles.body, { color: theme.textSecondary }]}>
            Confiabilidade e Cibersegurança
          </Text>
          <Text style={[styles.body, { color: theme.textSecondary }]}>
            Programação Avançada de Sistemas Embebidos
          </Text>
          <Text style={[styles.body, { color: theme.textSecondary }]}>
            Inteligência Artificial nos Sistemas Embebidos
          </Text>
          <Text style={[styles.body, { color: theme.textSecondary }]}>
            Integração de Sistemas e Serviços na Nuvem
          </Text>
        </View>
        <View style={styles.section}>
          <Text style={[styles.heading, { color: theme.text }]}>
            MESCC — Mestrado em Engenharia de Sistemas Computacionais Críticos
          </Text>
          <Text style={[styles.body, { color: theme.textSecondary }]}>
            Current first-semester academic areas:
          </Text>
          <Text style={[styles.body, { color: theme.textSecondary }]}>
            CCSAR — Arquiteturas de Computadores para Sistemas Críticos
          </Text>
          <Text style={[styles.body, { color: theme.textSecondary }]}>
            COMCS — Tecnologias de Comunicação para Sistemas Críticos
          </Text>
          <Text style={[styles.body, { color: theme.textSecondary }]}>
            CSLAB — Laboratório de Sistemas Críticos
          </Text>
          <Text style={[styles.body, { color: theme.textSecondary }]}>
            RAMDE — Engenharia Orientada a Requisitos e Modelos
          </Text>
          <Text style={[styles.body, { color: theme.textSecondary }]}>
            RTESY — Sistemas Embebidos e de Tempo Real
          </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: { flex: 1 },
  page: {
    width: '100%',
    maxWidth: 1100,
    alignSelf: 'center',
    paddingTop: 48,
    paddingBottom: 100,
    gap: 32,
  },
  hero: { gap: 16 },
  eyebrow: { fontSize: 13, fontWeight: '700', letterSpacing: 2 },
  title: { fontWeight: '800', maxWidth: 850 },
  subtitle: { fontSize: 20, lineHeight: 30, maxWidth: 760 },
  section: { gap: 12 },
  heading: { fontSize: 26, fontWeight: '700' },
  body: { fontSize: 17, lineHeight: 28, maxWidth: 850 },
});
