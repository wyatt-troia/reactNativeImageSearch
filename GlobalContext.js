import React from "react";

const GlobalContext = React.createContext({ images: [], detailImage: null });

class GlobalContextProvider extends React.Component {
  state = {
    images: [],
    detailImage: null
  };

  updateImages = images => {
    this.setState({ images });
  };

  updateDetailImage = detailImage => {
    this.setState({ detailImage });
  };

  render() {
    return (
      <GlobalContext.Provider
        value={{
          ...this.state,
          updateImages: this.updateImages,
          updateDetailImage: this.updateDetailImage
        }}
      >
        {this.props.children}
      </GlobalContext.Provider>
    );
  }
}

// create the consumer as higher order component
const withGlobalContext = ChildComponent => props => (
  <GlobalContext.Consumer>
    {context => <ChildComponent {...props} global={context} />}
  </GlobalContext.Consumer>
);

module.exports = {
  GlobalContextProvider,
  withGlobalContext
};
