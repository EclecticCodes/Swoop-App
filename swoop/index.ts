import { AppRegistry } from 'react-native';
import App from './app/App';
import { registerRootComponent } from 'expo';

const appName = "swoop";

// Register for Expo Web
registerRootComponent(App);

// Register for native (iOS/Android)
AppRegistry.registerComponent(appName, () => App);
