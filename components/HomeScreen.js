import React from "react";
import { Button, View, TextInput } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";

const PlaceholderContext = React.createContext("Search free images");

module.exports = class HomeScreen extends React.Component {
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
};
