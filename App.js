import Navigation from './src/navigators/navigation';
import { AuthProvider } from './src/hooks/provider/authProvider';
import useCheckUser from './src/hooks/custom/useCheckUser'
import * as SplashScreen from 'expo-splash-screen';
import { useEffect } from 'react';
import { StatusBar } from 'expo-status-bar';
import { setConfig } from './src/util/helper';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { store } from './src/store';
import { Provider } from 'react-redux';
import { injectStore } from './src/services/defaultAxiosConfig';

injectStore(store)


export default function App() {
  const authState = useCheckUser();
  const isUserReady = authState.ready

  useEffect(() => {
    hideSplash()

    const checkFirstEntry = async () => {
      const storedToken = await AsyncStorage.getItem('userInfo');
      if (!storedToken){
        setConfig(null)
      }else{
        setConfig(JSON.parse(storedToken).access_token)
      }
    }

    checkFirstEntry();

  }, [authState.ready])

  if (!isUserReady) return;

  return (
    <Provider store={store}>
      <AuthProvider authState={authState}>
        <StatusBar
          translucent={true}
        />
        <Navigation authState={authState} />
      </AuthProvider>
    </Provider>
  );
}

const hideSplash = () => {
  const hideSplashAsync = async() => await SplashScreen.hideAsync()
  hideSplashAsync()
}


