import { IBMPlexSansJP_500Medium } from "@expo-google-fonts/ibm-plex-sans-jp";
import {
  Inter_400Regular,
  Inter_500Medium,
  Inter_600SemiBold,
  Inter_700Bold,
} from "@expo-google-fonts/inter";
import { useFonts } from "expo-font";

export function useFontsLoaded() {
  const [fontsLoaded] = useFonts({
    Inter_400Regular,
    Inter_500Medium,
    Inter_600SemiBold,
    Inter_700Bold,
    IBMPlexSansJP_500Medium,
  });

  return fontsLoaded;
}
