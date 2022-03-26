import {
  StyleSheet,
  Text,
  TouchableOpacity,
  TouchableOpacityProps,
} from "react-native";

type ButtonProps = TouchableOpacityProps & { title: string };

export const Button = ({
  title,
  style,
  ...props
}: ButtonProps): JSX.Element => {
  return (
    <TouchableOpacity
      {...props}
      style={
        style ? { ...styles.container, ...(style as object) } : styles.container
      }
    >
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#FF006E",
    borderRadius: 6,
    padding: 7,
  },
  text: {
    color: "white",
    fontFamily: "MontserratBold",
    fontSize: 15,
  },
});
