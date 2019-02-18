import React from "react";
import { Image } from "react-native";
import { withGlobalContext } from "./../GlobalContext.js";

class DetailScreen extends React.Component {
  constructor(props) {
    super(props);
  }

  static navigationOptions = {
    title: "Detail"
  };

  render() {
    const image = this.props.global.detailImage;

    return (
      <Image
        style={{ flex: 1, height: undefined, width: undefined }}
        resizeMode="contain"
        source={{ uri: image.largeImageURL }}
      />
    );
  }
}

module.exports = withGlobalContext(DetailScreen);
