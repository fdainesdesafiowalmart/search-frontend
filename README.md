# Search Application

## Description

The Search Applications allows to search for products in the Walmart promotions database

## Running the Service

To run this service, you must set the following environment variables

| Variable                             | Description                              |
| ------------------------------------ |:----------------------------------------:|
| **VUE_APP_SEARCH_BFF_URI**           | URL to connect to the search BFF service |
| **VUE_APP_SEARCH_BFF_APIKEY_HEADER** | Search BFF service APIKEY Header Key     |
| **VUE_APP_SEARCH_BFF_APIKEY_VALUE**  | Search BFF service APIKEY Value          |


After setting the environment variables, use this command for start the service:
```sh
$ npm install
$ npm run serve
```

## Check the service status

To access the application, you should use the default URL

    curl -i http://localhost:8080

## Test the service
To run the unit tests, use this command
```sh
$ npm run test:unit
```

To run the integration tests, use this command
```sh
$ npm run test:integration
```

To run the both unit and integration test, use this command
```sh
$ npm run test
```
