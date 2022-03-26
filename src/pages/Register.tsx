import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Image,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { Header } from "../components/Header";
import { Paragraph } from "../components/Paragraph";

export const RegisterPage = (): JSX.Element => {
  return (
    <LinearGradient
      colors={["#667EEA", "#764BA2"]}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 1 }}
      style={styles.container}
    >
      <Header />

      <View style={styles.hero}>
        <View>
          <Paragraph style={styles.descriptionTitle}>Registre-se!</Paragraph>
          <Paragraph style={styles.descriptionText}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </Paragraph>
        </View>
        <Image
          source={require("../../assets/images/register-illustration.png")}
        />
      </View>

      <View style={styles.card}>
        <Text style={styles.formTitle}>Preencha os campos</Text>

        <Text style={styles.inputLabel}>Nome de usuário</Text>
        <TextInput style={styles.inputField} />

        <Text style={styles.inputLabel}>Senha</Text>
        <TextInput style={styles.inputField} />

        <Text style={styles.inputLabel}>Redigite sua senha</Text>
        <TextInput style={styles.inputField} />

        <TouchableOpacity>
          <Text>Criar conta</Text>
        </TouchableOpacity>

        <Text>
          Já é membro? <Text>Faça Login</Text>
        </Text>
      </View>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: 32,
    flex: 1,
  },
  hero: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    flexWrap: "wrap",
    marginVertical: 20,
    paddingHorizontal: 16,
  },
  descriptionTitle: {
    fontFamily: "MontserratBold",
    fontSize: 28,
    marginBottom: 4,
  },
  descriptionText: {
    flex: 0,
    width: 200,
  },
  card: {
    backgroundColor: "white",
    flex: 1,
    paddingHorizontal: 16,
    paddingVertical: 20,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  formTitle: {
    fontFamily: "MontserratMedium",
    letterSpacing: 2,
    textTransform: "uppercase",
    textAlign: "center",
    marginBottom: 20,
  },
  inputLabel: {
    fontFamily: "MontserratBold",
    marginBottom: 8,
  },
  inputField: {
    backgroundColor: "#F3F3F4",
    borderRadius: 5,
    padding: 4,
    marginBottom: 20,
  },
});
