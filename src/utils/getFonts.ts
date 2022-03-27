type KeysMatching<T, V> = NonNullable<
  { [K in keyof T]: T[K] extends V ? K : never }[keyof T]
>;

export const sources = {
  MontserratRegular: require("../../assets/fonts/Montserrat-Regular.ttf"),
  MontserratMedium: require("../../assets/fonts/Montserrat-Medium.ttf"),
  MontserratSemiBold: require("../../assets/fonts/Montserrat-SemiBold.ttf"),
  MontserratBold: require("../../assets/fonts/Montserrat-Bold.ttf"),
  LondrinaSolidLight: require("../../assets/fonts/LondrinaSolid-Light.ttf"),
};

type FontNames = KeysMatching<typeof sources, string>;

export const fonts: Record<FontNames, FontNames> = Object.fromEntries(
  Object.entries(sources).map(([key]) => [key, key])
) as Record<FontNames, FontNames>;
