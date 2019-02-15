import React from "react";
import { Image } from "react-native";

module.exports = class DetailScreen extends React.Component {
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
};
