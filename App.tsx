import { useFonts } from "expo-font";
import { LinearGradient } from "expo-linear-gradient";
import { StatusBar } from "expo-status-bar";
import { StyleSheet } from "react-native";
import { RegisterPage } from "./src/pages/Register";
import { sources as fontSources } from "./src/utils/getFonts";

const GradientBackground: React.FC = ({ children }) => {
  return (
    <LinearGradient
      colors={["#667EEA", "#764BA2"]}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 1 }}
      style={styles.background}
    >
      {children}
    </LinearGradient>
  );
};

export default function App() {
  const [loaded] = useFonts(fontSources);

  if (!loaded) return null;

  return (
    <GradientBackground>
      <RegisterPage />

      <StatusBar style="light" />
    </GradientBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    paddingTop: 48,
    flex: 1,
  },
});
