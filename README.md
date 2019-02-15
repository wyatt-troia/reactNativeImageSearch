# React Native Image Search

An free image search app for iOS and Android, build using [React-Native](https://facebook.github.io/react-native/), [React-Navigation](https://reactnavigation.org/en/), [Pixabay API](https://pixabay.com/api/docs/), [React-Native-Vector-Icons](https://github.com/oblador/react-native-vector-icons), and [axios](https://github.com/axios/axios). 

Submitting a search query brings the user to a results screen of thumbnails. Clicking on a thumbnail bring the user to a high-resolution version of the selected image.

![Demo](https://imgur.com/UFjUtAb.gif)

![Demo](https://imgur.com/CpYjFEu.gif)



## Getting Started

Create an account on Pixabay and get your API key on [this page](https://pixabay.com/api/docs/). Create a file in the root project directory titled `pixabayKey.js` which consists of one line:
```
module.exports = <YOUR_PIXABAY_KEY_AS_A_STRING>;
```

Follow the React-Native [Getting Started](https://facebook.github.io/react-native/docs/getting-started) instructions

```
npm install
react-native run-ios OR react-native run-android
```
The app will then run in your iOS or Androis emulator.

## Author

- **Wyatt Troia** - [Github](https://github.com/wyatt-troia)

## Acknowledgments

- [React-Native](https://facebook.github.io/react-native/)
- [React-Navigation](https://reactnavigation.org/en/)
- [Pixabay API](https://pixabay.com/api/docs/)
- [React-Native-Vector-Icons](https://github.com/oblador/react-native-vector-icons)
- [axios](https://github.com/axios/axios)

## License

This project is licensed under the MIT License - see the [LICENSE.md](https://github.com/wyatt-troia/reactNativeImageSearch/blob/master/LICENSE) file for details
