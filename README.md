## Application architecture

* "containers" folder contains react container components aware of the redux store
* "components" folder contains presentational components which receive state as props
* "services" folder contains js functions to retrieve data from backend services
* "state" folder contains the redux store, initial state, actions and reducers
* "assets" folder contains necessary assets like images

## Other notes

* Snapshot tests are provided for presentational components

## Install dependencies

### `yarn install`

## Start application in development mode

### `yarn start`

## Run unit tests

### `yarn test`

## Build application (production)

### `yarn build`