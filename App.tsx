import { useFonts } from "expo-font";
import { RegisterPage } from "./src/pages/Register";

export default function App() {
  const [loaded] = useFonts({
    MontserratRegular: require("./assets/fonts/Montserrat-Regular.ttf"),
    MontserratMedium: require("./assets/fonts/Montserrat-Medium.ttf"),
    MontserratSemiBold: require("./assets/fonts/Montserrat-SemiBold.ttf"),
    MontserratBold: require("./assets/fonts/Montserrat-Bold.ttf"),
    LondrinaSolidLight: require("./assets/fonts/LondrinaSolid-Light.ttf"),
  });

  if (!loaded) return null;

  return <RegisterPage />;
}
