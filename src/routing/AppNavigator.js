import { createDrawerNavigator } from 'react-navigation-drawer';
import { createAppContainer,createSwitchNavigator } from 'react-navigation'; 
import BitCoin_StackNavigator from './stacks/BitCoinStack';
import Tech_StackNavigator from './stacks/TechnologyStack';
import Business_StackNavigator from './stacks/BusinessStack';
import Google_StackNavigator from './stacks/GoogleStack';
import WallStreet_StackNavigator from './stacks/WallStreetStack';
import About_StackNavigator from './stacks/AboutStack';
import SplashScreen from '../components/SplashScreen' 


const AppNavigator = createDrawerNavigator({   
    Tech: {
        screen: Tech_StackNavigator,
        navigationOptions: {
            drawerLabel: "Tech"          
        }
    },      
    Google: {
        screen: Google_StackNavigator,
        navigationOptions: {
            drawerLabel: "Google"
        }
    },
    Business: {
        screen: Business_StackNavigator,
        navigationOptions: {
            drawerLabel: "Business"
        }
    },
    WallStreet: {
        screen: WallStreet_StackNavigator,
        navigationOptions: {
            drawerLabel: "Wall Street"
        }
    },   
    Bitcoin: {
        screen: BitCoin_StackNavigator,
        navigationOptions: {
            drawerLabel: "Bitcoin"
        }
    },
    About: {
        screen: About_StackNavigator,
        navigationOptions: {
            drawerLabel: "NEWSER"
        }
    }
},{
    drawerBackgroundColor:'#343434',
    drawerType:'back',
    drawerWidth:200,  
    contentOptions: { 
        activeTintColor: '#ffffff',
        activeItemKey:'Tech',
        activeBackgroundColor:'#c21912',
        inactiveTintColor:'#ffffff'        
    }
});

const InitialNavigator = createSwitchNavigator({
    Splash: SplashScreen,
    App: AppNavigator
});

export default createAppContainer(InitialNavigator);