import { StyleSheet, Text, TextProps } from "react-native";

export const Paragraph = ({ style, ...props }: TextProps): JSX.Element => {
  return (
    <Text
      style={style ? { ...styles.text, ...(style as object) } : styles.text}
      {...props}
    />
  );
};

const styles = StyleSheet.create({
  text: {
    color: "white",
    fontFamily: "MontserratRegular",
    fontSize: 14,
  },
});
