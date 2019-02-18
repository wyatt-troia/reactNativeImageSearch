import React from "react";
import { View, FlatList, Image, TouchableHighlight } from "react-native";
import axios from "axios";
import pixabayKey from "./../pixabayKey.js";
import { withGlobalContext } from "./../GlobalContext.js";

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
      .get(`https://pixabay.com/api/?key=${pixabayKey}&q=${query}`)
      .then(result => {
        this.props.global.updateImages(result.data.hits);
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
          data={this.props.global.images}
          renderItem={({ item }) => (
            <TouchableHighlight
              onPress={() => {
                this.props.global.updateDetailImage(item);
                this.props.navigation.navigate("Detail");
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
        <Image
          style={{ width: 50, height: 50, marginBottom: 20 }}
          source={{ uri: "https://pixabay.com/static/img/logo_square.png" }}
        />
      </View>
    );
  }
}

module.exports = withGlobalContext(ResultsScreen);
