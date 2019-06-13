# json-api-response-js

 JSON API compliant http response library.
 
[![npm version](https://badge.fury.io/js/json-api-response-js.svg)](https://badge.fury.io/js/json-api-response-js)
[![Build Status](https://travis-ci.org/jmilagroso/typcheckjs.svg?branch=master)](https://travis-ci.org/jmilagroso/typcheckjs)
[![Coverage Status](https://coveralls.io/repos/github/jmilagroso/json-api-response-js/badge.svg?branch=master)](https://coveralls.io/github/jmilagroso/json-api-response-js?branch=master)

## Tech

**json-api-response-js** uses a number of open source projects to work properly:

* [jsonapi-serializer](https://github.com/SeyZ/jsonapi-serializer) - A Node.js framework agnostic library for (de)serializing your data to JSON API (1.0 compliant). 
* [typcheckjs](https://github.com/jmilagroso/typcheckjs) - JS data type checking.

### Setup
```sh
npm install --save json-api-response-js
```

### Usage
```sh
const JSONApiResponse = require('json-api-response-js');
...
  axios.get(process.env.SOME_URL, {
    method: 'POST',
    headers: {
      ...
      'Content-Type': 'application/json',
      ...
    },
  }).then((response) => {
    callback(null, JSONApiResponse.ok({
      message: '...',
      data: { ... },
    }));
  }).catch((error) => {
    callback(null, JSONAPIResponse.internalServerError({
      message: '...',
      data: error,
    }));
  });
...
```

### Sample Output
```sh
// Handling Object Nested Payload
const payload = {
    id: 1,
    order_id: 10,
    name: 'John Doe1',
    info: {
      mobile: '+00 9822 333',
      age: 35,
    },
};

const response = JSONApiResponse.created(payload);
// Output
{ status: 201,
      headers:
       { 'Content-Type': 'application/vnd.api+json',
         responseHeaders:
          { 'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Credentials': true } },
      body: '{"data":{"type":"serializes","id":"1","attributes":{"id":1,"order-id":10,"name":"John Doe1","info":{"mobile":"+63 917 123 1234","age":35}}}}' }

// Handling Array Nested Payload
const arrayNestedPayload = [{
    id: 1,
    order_id: 10,
    name: 'John Doe1',
    info: {
      mobile: '+00 9822 333',
      age: 35,
    },
    country: {
      code: 'PH',
      name: 'Philippines'
    }
  },
  {
    id: 2,
    order_id: 11,
    name: 'John Doe1',
    info: {
      mobile: '+00 9822 333',
      age: 35,
    },
    country: {
      code: 'PH',
      name: 'Philippines'
    }
  }
];

const response = JSONApiResponse.accepted(arrayNestedPayload);
// Output
{ status: 201,
      headers: 
       { 'Content-Type': 'application/vnd.api+json',
         responseHeaders: 
          { 'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Credentials': true } },
      body: '{"data":[{"type":"serializes","id":"1","attributes":{"id":1,"order-id":10,"name":"John Doe1","info":{"mobile":"+00 9822 333","age":35},"country":{"code":"PH","name":"Philippines"}}},{"type":"serializes","id":"2","attributes":{"id":2,"order-id":11,"name":"John Doe1","info":{"mobile":"+00 9822 333","age":35},"country":{"code":"PH","name":"Philippines"}}}]}' }
```

### References
```sh
const JSONApiResponse = require('json-api-response-js');

// Status Code 200, OK
JSONApiResponse.ok({...});

// Status Code 201, Created
JSONApiResponse.created({...});

// Status Code 202, Accepted
JSONApiResponse.accepted({...});

// Status Code 206, Partial Content
JSONApiResponse.partialContent({...});

// Status Code 301, Moved Permanently
JSONApiResponse.movedPermanently({...});

// Status Code 304, Not Modified
JSONApiResponse.notModified({...});

// Status Code 400, Bad Request
JSONApiResponse.badRequest({...});

// Status Code 401, Unauthorized
JSONApiResponse.unauthorized({...});

// Status Code 403, Forbidden
JSONApiResponse.forbidden({...});

// Status Code 404, Not Found
JSONApiResponse.notFound({...});

// Status Code 405, Method Not Allowed
JSONApiResponse.methodNotAllowed({...});

// Status Code 500, Internal Server Error
JSONApiResponse.internalServerError({...});

// Custom. Statue 302, Found,
JSONApiResponse.custom({...}, 302, 'application/json', {
    'CUSTOM-HEADER': 'VALUE'
}});
```

### Tests
```sh
 ✘ jay@ThinkPad  /usr/share/nginx/html/json-api-response-js  npm test

> json-api-response-js@1.0.0 test /usr/share/nginx/html/json-api-response-js
> jest --coverage

 PASS  __tests__/index.test.js
  testing index.js
    ✓ it should invoke index.ok function with array and return JSON API standard response (5ms)
    ✓ it should invoke index.ok function with object and return JSON API standard response
    ✓ it should invoke index.ok function with object (nested) and return JSON API standard response (1ms)
    ✓ it should invoke index.created function with array and return JSON API standard response (1ms)
    ✓ it should invoke index.created function with object and return JSON API standard response
    ✓ it should invoke index.created function with object (nested) and return JSON API standard response (1ms)
    ✓ it should invoke index.accepted function with array and return JSON API standard response
    ✓ it should invoke index.accepted function with object and return JSON API standard response
    ✓ it should invoke index.accepted function with object (nested) and return JSON API standard response (1ms)
    ✓ it should invoke index.partialContent function with array and return JSON API standard response (1ms)
    ✓ it should invoke index.partialContent function with object and return JSON API standard response
    ✓ it should invoke index.partialContent function with object (nested) and return JSON API standard response
    ✓ it should invoke index.movedPermanently function with array and return JSON API standard response (1ms)
    ✓ it should invoke index.movedPermanently function with object and return JSON API standard response
    ✓ it should invoke index.movedPermanently function with object (nested) and return JSON API standard response
    ✓ it should invoke index.notModified function with array and return JSON API standard response
    ✓ it should invoke index.notModified function with object and return JSON API standard response
    ✓ it should invoke index.notModified function with object (nested) and return JSON API standard response
    ✓ it should invoke index.badRequest function with array and return JSON API standard response (1ms)
    ✓ it should invoke index.badRequest function with object and return JSON API standard response
    ✓ it should invoke index.badRequest function with object (nested) and return JSON API standard response
    ✓ it should invoke index.unauthorized function with array and return JSON API standard response (1ms)
    ✓ it should invoke index.unauthorized function with object and return JSON API standard response
    ✓ it should invoke index.unauthorized function with object (nested) and return JSON API standard response
    ✓ it should invoke index.forbidden function with array and return JSON API standard response (1ms)
    ✓ it should invoke index.forbidden function with object and return JSON API standard response
    ✓ it should invoke index.forbidden function with object (nested) and return JSON API standard response
    ✓ it should invoke index.notFound function with array and return JSON API standard response
    ✓ it should invoke index.notFound function with object and return JSON API standard response (1ms)
    ✓ it should invoke index.notFound function with object (nested) and return JSON API standard response
    ✓ it should invoke index.methodNotAllowed function with array and return JSON API standard response
    ✓ it should invoke index.methodNotAllowed function with object and return JSON API standard response (1ms)
    ✓ it should invoke index.methodNotAllowed function with object (nested) and return JSON API standard response
    ✓ it should invoke index.internalServerError function with array and return JSON API standard response
    ✓ it should invoke index.internalServerError function with object and return JSON API standard response (1ms)
    ✓ it should invoke index.internalServerError function with object (nested) and return JSON API standard response
    ✓ it should invoke index.custom function with array and return JSON API standard response
    ✓ it should invoke index.custom function with object and return JSON API standard response
    ✓ it should invoke index.custom function with object (nested) and return JSON API standard response (1ms)

----------|----------|----------|----------|----------|-------------------|
File      |  % Stmts | % Branch |  % Funcs |  % Lines | Uncovered Line #s |
----------|----------|----------|----------|----------|-------------------|
All files |      100 |    63.27 |      100 |      100 |                   |
 index.js |      100 |    63.27 |      100 |      100 |... 28,138,148,158 |
----------|----------|----------|----------|----------|-------------------|
Test Suites: 1 passed, 1 total
Tests:       39 passed, 39 total
Snapshots:   0 total
Time:        1.094s
Ran all test suites.
```
