import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.logo}>
        cleberson<Text style={styles.logoSecond}>.dev</Text>
      </Text>
      <StatusBar style="light" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#001219",
    alignItems: "center",
    justifyContent: "center",
  },
  logo: {
    color: "#FFF",
    fontSize: 32,
    fontWeight: "bold",
  },
  logoSecond: {
    color: "#0a9396",
  },
});
