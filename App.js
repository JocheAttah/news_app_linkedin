import * as React from "react";
import { NavigationContainer, DefaultTheme } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { DetailsScreen, HomeScreen } from "./screens";
import {
  useFonts,
  Montserrat_100Thin,
  Montserrat_200ExtraLight,
  Montserrat_300Light,
  Montserrat_400Regular,
  Montserrat_500Medium,
  Montserrat_600SemiBold,
  Montserrat_700Bold,
  Montserrat_800ExtraBold,
  Montserrat_900Black,
} from "@expo-google-fonts/montserrat";
import AppLoading from "expo-app-loading";
import OurContext from "./API/OurContext";

const MyTheme = {
  dark: false,
  colors: {
    primary: "rgb(255, 45, 85)",
    background: "rgb(242, 242, 242)",
    card: "rgb(255, 255, 255)",
    text: "rgb(28, 28, 30)",
    border: "rgb(199, 199, 204)",
    notification: "rgb(255, 69, 58)",
  },
};

const Stack = createNativeStackNavigator();

function App() {
  const [loadedFonts] = useFonts({
    Thin: Montserrat_100Thin,
    ExtraLight: Montserrat_200ExtraLight,
    Light: Montserrat_300Light,
    Regular: Montserrat_400Regular,
    Medium: Montserrat_500Medium,
    SemiBold: Montserrat_600SemiBold,
    Bold: Montserrat_700Bold,
    ExtraBold: Montserrat_800ExtraBold,
    Black: Montserrat_900Black,
  });

  if (!loadedFonts) {
    return <AppLoading />;
  }

  return (
    <OurContext>
      <NavigationContainer theme={MyTheme}>
        <Stack.Navigator
          initialRouteName="Details"
          screenOptions={{
            headerShown: false,
          }}
        >
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="Details" component={DetailsScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </OurContext>
  );
}

export default App;
