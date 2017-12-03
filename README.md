# Brandwatch-challenge
This application was created using [create-react-app](https://github.com/facebookincubator/create-react-app). It also uses [react-tagcloud](https://github.com/madox2/react-tagcloud) for rendering the topic cloud.

## Example
![Example of application](http://oi65.tinypic.com/33e0rix.jpg)

## Structure of the application
* `/__tests__:`
  * Contains tests for Header component and helpers function.

* `/components:`
  * Contains presentational components which are used by the application.
  * Header is a component which returns a header with the title of the application.
  * Info is a component which shows additional information of a topic.

* `/containers:`
  * App is the heart of the application which manages how things work.
  * App contains TagCloud, which maps all the topics in topic.json and renders them into a cloud.

## Installation process
Clone the repo and install dependencies by typing `npm install` if using npm or `yarn` if using yarn.

## Scripts
* Use `npm build` or `yarn build` to create an optimized production build in /build folder.
* Use `npm start` or `yarn start` to launch the app in the browser using a development server.
* Use `npm test` or `yarn test` to run all tests.
