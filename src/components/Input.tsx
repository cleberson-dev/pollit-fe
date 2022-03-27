import { StyleSheet, TextInput, TextInputProps } from "react-native";

export const Input = (props: TextInputProps): JSX.Element => {
  return <TextInput {...props} style={styles.container} />;
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#F3F3F4",
    borderRadius: 5,
    padding: 4,
    marginBottom: 20,
    fontFamily: "MontserratMedium",
  },
});
