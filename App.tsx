import { StyleSheet, Text, View } from "react-native";
import { RegisterPage } from "./src/pages/Register";

export default function App() {
  return <RegisterPage />;
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
