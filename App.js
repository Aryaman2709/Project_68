import React from 'react';
import { StyleSheet, Text, View , Image} from 'react-native';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import {createAppContainer} from 'react-navigation'
import FacebookScreen from './screens/fb'
import InstagramScreen from './screens/in'

export default class App extends React.Component{
  render(){
    return(
      <AppContainer/>
    )
  }
}

const TabNavigator = createBottomTabNavigator({
  Facebook:{screen:FacebookScreen},
  Instagram:{screen:InstagramScreen}
},{
  defaultNavigationOptions : ({navigation}) => ({
    tabBarIcon: ({})=>{
      const routeName = navigation.state.routeName
      if (routeName === 'Facebook'){
        return (
          <Image
          source={ require ('./assets/fb.png')}
          style = {{width : 40, height: 40}}
          />
          
        )
      }else if (routeName==='Instagram'){
        return(
          <Image
          source={require('./assets/insta.png')}
        style = {{width:40, height:40}}
          />
        )
      }
    }
    })
})

const AppContainer = createAppContainer(TabNavigator)
