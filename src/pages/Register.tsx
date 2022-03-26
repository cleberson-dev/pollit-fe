import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";

export const RegisterPage = (): JSX.Element => {
  return (
    <LinearGradient
      colors={["#667EEA", "#764BA2"]}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 1 }}
      style={styles.container}
    >
      <Text style={styles.title}>PollingApp</Text>

      <Text>Registre-se!</Text>
      <Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit. </Text>

      <Text>Preencha os campos</Text>

      <Text>Nome de usuário</Text>
      <TextInput />

      <Text>Senha</Text>
      <TextInput />

      <Text>Redigite sua senha</Text>
      <TextInput />

      <TouchableOpacity>
        <Text>Criar conta</Text>
      </TouchableOpacity>

      <Text>
        Já é membro? <Text>Faça Login</Text>
      </Text>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
    flex: 1,
  },
  title: {
    color: "white",
    fontSize: 32,
    fontFamily: "LondrinaSolidLight",
  },
});
