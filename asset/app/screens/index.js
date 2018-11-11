import {Navigation} from 'react-native-navigation';

import Home from './assets/app/screen/Home';
import Heroes from './assets/app/screen/Heroes';
import Settings from './assets/app/screen/Settings';


export function registerScreens(){
    Navigation.registerScreens('tab.Home', () => Home);
    Navigation.registerScreens('tab.Heroes', () => Heroes);
    Navigation.registerScreens('tab.Settings', () => Settings);
}