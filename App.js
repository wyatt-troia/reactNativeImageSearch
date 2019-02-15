import React from "react";
import {
  Button,
  View,
  TextInput,
  FlatList,
  Image,
  TouchableHighlight
} from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import { createStackNavigator, createAppContainer } from "react-navigation";
import axios from "axios";

const PlaceholderContext = React.createContext("Search free images");

class HomeScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = { query: "" };
  }
  static contextType = PlaceholderContext;
  render() {
    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Icon name="photo" size={150} color="rgb(44, 125, 246)" />
        <View
          style={{
            borderColor: "rgb(200, 200, 200)",
            borderWidth: 2,
            borderRadius: 20,
            paddingRight: 15,
            paddingLeft: 15,
            marginTop: 10,
            marginBottom: 10
          }}
        >
          <TextInput
            style={{
              height: 45,
              width: 200,
              fontSize: 20,
              textAlign: "center"
            }}
            placeholder={this.context}
            onChangeText={query => this.setState({ query })}
          />
        </View>

        <Button
          title="Search"
          onPress={() => {
            this.props.navigation.navigate("Results", {
              query: this.state.query
            });
          }}
        />
      </View>
    );
  }
}

class ResultsScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = { query: "" };
  }

  static navigationOptions = {
    title: "Results"
  };

  componentDidMount() {
    const { navigation } = this.props;
    const query = navigation.getParam("query", "NO-QUERY");
    axios
      .get(
        `https://pixabay.com/api/?key=11612455-299ff3746b12b5c7fb0bd7295&q=${query}`
      )
      .then(result => {
        this.setState({ photos: result.data.hits });
      });
  }

  _onLayout(event) {
    console.log(event.nativeEvent.layout);
    const { width, height } = event.nativeEvent.layout;
    const numColumns = width > height ? 4 : 2;
    this.setState({ numColumns });
  }

  render() {
    return (
      <View
        style={{ flex: 1, alignItems: "center", justifyContent: "center" }}
        onLayout={this._onLayout.bind(this)}
      >
        <FlatList
          numColumns={this.state.numColumns}
          data={this.state.photos || []}
          renderItem={({ item }) => (
            <TouchableHighlight
              onPress={() => {
                this.props.navigation.navigate("Detail", {
                  photo: item
                });
              }}
            >
              <Image
                style={{ width: 150, height: 150 }}
                source={{ uri: item.previewURL }}
              />
            </TouchableHighlight>
          )}
          key={this.state.numColumns}
          keyExtractor={(item, index) => String(index)}
        />
      </View>
    );
  }
}

class DetailScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = { text: "" };
  }

  static navigationOptions = {
    title: "Detail"
  };

  render() {
    const { navigation } = this.props;
    const photo = navigation.getParam("photo", "NO-PHOTO");

    return (
      <Image
        style={{ flex: 1, height: undefined, width: undefined }}
        resizeMode="contain"
        source={{ uri: photo.largeImageURL }}
      />
    );
  }
}

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
    return <AppContainer />;
  }
}
