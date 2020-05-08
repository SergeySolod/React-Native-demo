import {createAppContainer} from 'react-navigation'
import {createStackNavigator} from 'react-navigation-stack'
import Home from "../screens/home/Home";
import RequestStep1 from "../screens/request/RequestStep1";
import RequestStep2 from "../screens/request/RequestStep2";
import RequestStep3 from "../screens/request/RequestStep3";
import RequestStep4 from "../screens/request/RequestStep4";
import New from "../screens/tables/new/New";
import Completed from "../screens/tables/completed/Completed";
import Executed from "../screens/tables/executed/Executed";
import Failed from "../screens/tables/failed/Failed";
import Canceled from "../screens/tables/canceled/Canceled";

const PostNavigator = createStackNavigator(
    {
        Home: Home,
        Request1: RequestStep1,
        Request2: RequestStep2,
        Request3: RequestStep3,
        Request4: RequestStep4,
        New: New,
        Completed: Completed,
        Executed: Executed,
        Failed: Failed,
        Canceled: Canceled,
    },
    {
        initialRouteName: 'Home',
        defaultNavigationOptions: {
            headerStyle: {
                backgroundColor: '#4740e3'
            },
            headerTintColor: '#fff'
        }
    }
)

export const AppNavigation = createAppContainer(PostNavigator)