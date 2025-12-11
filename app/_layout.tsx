import FontAwesome from '@expo/vector-icons/FontAwesome';
import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native'; 
import { Stack } from 'expo-router'; 
import { useFonts } from 'expo-font'; 
import * as SplashScreen from 'expo-splash-screen'; import { useEffect } from 'react';
import 'react-native-reanimated';
import { useColorScheme } from '../components/useColorScheme'; 
 // Evita que el splash desaparezca antes de cargar fuentes
SplashScreen.preventAutoHideAsync(); 
export default function RootLayout() {
 const [loaded, error] = useFonts({
 SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
  ...FontAwesome.font, 
});
   useEffect(() => { if (error) throw error; },
    [error]); useEffect(() => { if (loaded) {
       SplashScreen.hideAsync(); } 
      }, 
      [loaded]); 
      if (!loaded) return null;
       return <RootLayoutNav />; }
        function RootLayoutNav() { const colorScheme = useColorScheme();
           return ( <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
            
         <Stack> 
          {/* Tu grupo de tabs */}
           <Stack.Screen name="(tabs)" options={{ headerShown: false }} /> 
           {/* Rutas globales */} 
           <Stack.Screen name="modal" options={{ presentation: 'modal' }} /> 
           <Stack.Screen name="game" options={{ headerShown: false }} /> 
           <Stack.Screen name="admin" options={{ headerShown: false }} /> 
           <Stack.Screen name="auth" options={{ headerShown: false }} /> 
           </Stack> </ThemeProvider> ); }