import Navigation from './src/navigators/navigation';
import { AuthProvider } from './src/hooks/provider/authProvider';
import useCheckUser from './src/hooks/custom/useCheckUser'
import * as SplashScreen from 'expo-splash-screen';
import { useEffect } from 'react';

export default function App() {
  const authState = useCheckUser();
  const isUserReady = authState.ready

  useEffect(() => {
    hideSplash()
  }, [authState.ready])

  if (!isUserReady) return;

  return (
    <AuthProvider authState={authState}>
      <Navigation />
    </AuthProvider>
  );
}

const hideSplash = () => {
  const hideSplashAsync = async() => await SplashScreen.hideAsync()
  hideSplashAsync()
}


