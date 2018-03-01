
# Newsly 📰
Newsly is a **work-in-progress** news tracking mobile app, that connects the sources to
[News API](https://newsapi.org/). It is still in development stage.

The app contains a Master/Detail flow type UI and uses [React Native](http://facebook.github.io/react-native/).
Currently, the app doesn't have any architecture yet. 

Also, themeing isn't applied to the app

### React Native development
Newsly uses the these libraries:s

 * uses [Axios](https://github.com/axios/axios) Promise based HTTP client
 * uses [React Navigation](https://reactnavigation.org/) for routing and navigation
 * uses [Moment](https://momentjs.com/) for date/time manipulation

### Motivation
Learning another programming language can be so much fun.

### Development setup
```
$ npm install
$ NEWS_API={your_news_api_key} react-native run-ios
```

### API keys
You need to register at [News API](https://newsapi.org/) and get an API key.
When you obtain the API key, include this as a parameter when running the app through terminal

### Code Style
This project follows the [Airbnb JavaScript Style Guide](https://github.com/airbnb/javascript)

### TODO
 * applying [Redux](https://redux.js.org/)
 * unit tests
 * add more news sources
 * add retry mechanism

### Contributions
If you've found an error, you may file an issue.

Patches are encouraged, and may be submitted by forking this project and
sending a pull request would be awesome.
