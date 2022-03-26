import { View, Text, StyleSheet } from "react-native";

export const Header = (): JSX.Element => {
  return (
    <View>
      <Text style={styles.title}>Poll It</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    color: "white",
    fontSize: 24,
    fontFamily: "LondrinaSolidLight",
    textAlign: "center",
  },
});
