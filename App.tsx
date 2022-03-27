import { useFonts } from "expo-font";
import { LinearGradient } from "expo-linear-gradient";
import { StatusBar } from "expo-status-bar";
import { StyleSheet } from "react-native";
import { RegisterPage } from "./src/pages/Register";

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
  const [loaded] = useFonts({
    MontserratRegular: require("./assets/fonts/Montserrat-Regular.ttf"),
    MontserratMedium: require("./assets/fonts/Montserrat-Medium.ttf"),
    MontserratSemiBold: require("./assets/fonts/Montserrat-SemiBold.ttf"),
    MontserratBold: require("./assets/fonts/Montserrat-Bold.ttf"),
    LondrinaSolidLight: require("./assets/fonts/LondrinaSolid-Light.ttf"),
  });

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
