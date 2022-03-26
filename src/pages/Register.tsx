import { View, Text, StyleSheet } from "react-native";

export const RegisterPage = (): JSX.Element => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Register Page</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
    backgroundColor: "purple",
    flex: 1,
  },
  title: {
    color: "white",
  },
});
