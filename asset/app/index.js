import {Navigation} from 'react-native-navigation';

import {registerScreen} from './asset/app/screens';

registerScreen();


Navigation.startTabBasedApp({
  tabs: [
    {
    label: 'Home',
    screen: 'tab.Home',
    title: 'Home',
    icon: require('./asset/img/one.png'),
    },
    {
      label: 'Heroes',
    screen: 'tab.Heroes',
    title: 'Heroes',
    icon: require('./asset/img/one.png'),
    },
    {
      label: 'Settings',
    screen: 'tab.Settings',
    title: 'Setings',
    icon: require('./asset/img/one.png'),
    },
  ]
});