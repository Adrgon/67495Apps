import {useFonts} from 'expo-font'
import Navigator from './src/navigation/Navigator';

export default function App() {

  const [fontsLoaded, fontError] = useFonts({
    Josefin: require("./assets/JosefinSans-Regular.ttf"),
  })

  if(!fontsLoaded || fontError) {
    return null;
  }

  if(fontsLoaded && !fontError) {
    return (
      <Navigator />
    );
  }
}
