import React from "react";
import { createStackNavigator, createAppContainer } from "react-navigation";
import HomeScreen from "./components/HomeScreen.js";
import ResultsScreen from "./components/ResultsScreen.js";
import DetailScreen from "./components/DetailScreen.js";
import { GlobalContextProvider } from "./GlobalContext.js";

const RootStack = createStackNavigator(
  {
    Home: HomeScreen,
    Results: ResultsScreen,
    Detail: DetailScreen
  },
  {
    initialRouteName: "Home"
  }
);

const AppContainer = createAppContainer(RootStack);

export default class App extends React.Component {
  render() {
    return (
      <GlobalContextProvider>
        <AppContainer />
      </GlobalContextProvider>
    );
  }
}
