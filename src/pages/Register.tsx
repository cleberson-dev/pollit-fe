import { View, Text, StyleSheet, Image, Alert } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { Header } from "../components/Header";
import { Paragraph } from "../components/Paragraph";
import { Button } from "../components/Button";
import { Input } from "../components/Input";
import { Controller, useForm } from "react-hook-form";

export const RegisterPage = (): JSX.Element => {
  const { control, handleSubmit } = useForm({
    defaultValues: {
      username: "",
      password: "",
      repeatedPassword: "",
    },
  });
  const onSubmit = (data: any) => Alert.alert(JSON.stringify(data));

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

        <View>
          <Text style={styles.inputLabel}>Nome de usuário</Text>
          <Controller
            name="username"
            control={control}
            rules={{
              required: true,
            }}
            render={({ field: { onChange, onBlur, value } }) => (
              <Input onBlur={onBlur} onChangeText={onChange} value={value} />
            )}
          />

          <Text style={styles.inputLabel}>Senha</Text>
          <Controller
            name="password"
            control={control}
            rules={{
              required: true,
            }}
            render={({ field: { onChange, onBlur, value } }) => (
              <Input onBlur={onBlur} onChangeText={onChange} value={value} />
            )}
          />

          <Text style={styles.inputLabel}>Redigite sua senha</Text>
          <Controller
            name="repeatedPassword"
            control={control}
            rules={{
              required: true,
            }}
            render={({ field: { onChange, onBlur, value } }) => (
              <Input onBlur={onBlur} onChangeText={onChange} value={value} />
            )}
          />

          <Button
            title="Criar conta"
            style={{ alignSelf: "flex-start", paddingHorizontal: 23 }}
            onPress={handleSubmit(onSubmit)}
          />
        </View>

        <View>
          <Paragraph
            style={{ color: "black", textAlign: "center", marginTop: 8 }}
          >
            Já é membro?{" "}
            <Text style={{ textDecorationLine: "underline", color: "#FF006E" }}>
              Faça Login
            </Text>
          </Paragraph>
        </View>
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
    justifyContent: "space-between",
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
});
