import {useFonts} from 'expo-font'
import Navigator from './src/navigation/Navigator';
import { SafeAreaView, View } from 'react-native';
import { Provider } from 'react-redux';
import store from './src/store'


export default function App() {

  const [fontsLoaded, fontError] = useFonts({
    Josefin: require("./assets/JosefinSans-Regular.ttf"),
  })

  if(!fontsLoaded || fontError) {
    return null;
  }

  if(fontsLoaded && !fontError) {
    return (
      <Provider store={store}>
        <Navigator />
      </Provider>
    );
  }
}
