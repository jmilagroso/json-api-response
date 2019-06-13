const JSONAPISerializer = require('jsonapi-serializer').Serializer;
const Typcheckjs = require('typcheckjs');

module.exports = {
  serialize(payload, serializeName = 'serialize') {
    let keys = [];
    if (Typcheckjs.isArray(payload)) {
      keys = Object.keys(payload[0]);
    } else if (Typcheckjs.isObject(payload)) {
      keys = Object.keys(payload);
    }

    const json = new JSONAPISerializer(serializeName, {
      attributes: keys,
    }).serialize(payload);

    return json;
  },
  handler(
    data = {},
    status = 200,
    contentType = 'application/vnd.api+json',
    responseHeaders = {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Credentials': true,
    },
  ) {
    return {
      status,
      headers: {
        'Content-Type': contentType,
        responseHeaders,
      },
      body: JSON.stringify(this.serialize(data)),
    };
  },
  ok(
    data = {},
    contentType = 'application/vnd.api+json',
    responseHeaders = {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Credentials': true,
    },
  ) {
    return this.handler(data, 200, contentType, responseHeaders);
  },
  created(
    data = {},
    contentType = 'application/vnd.api+json',
    responseHeaders = {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Credentials': true,
    },
  ) {
    return this.handler(data, 201, contentType, responseHeaders);
  },
  accepted(
    data = {},
    contentType = 'application/vnd.api+json',
    responseHeaders = {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Credentials': true,
    },
  ) {
    return this.handler(data, 201, contentType, responseHeaders);
  },
  partialContent(
    data = {},
    contentType = 'application/vnd.api+json',
    responseHeaders = {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Credentials': true,
    },
  ) {
    return this.handler(data, 206, contentType, responseHeaders);
  },
  movedPermanently(
    data = {},
    contentType = 'application/vnd.api+json',
    responseHeaders = {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Credentials': true,
    },
  ) {
    return this.handler(data, 301, contentType, responseHeaders);
  },
  notModified(
    data = {},
    contentType = 'application/vnd.api+json',
    responseHeaders = {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Credentials': true,
    },
  ) {
    return this.handler(data, 304, contentType, responseHeaders);
  },
  badRequest(
    data = {},
    contentType = 'application/vnd.api+json',
    responseHeaders = {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Credentials': true,
    },
  ) {
    return this.handler(data, 400, contentType, responseHeaders);
  },
  unauthorized(
    data = {},
    contentType = 'application/vnd.api+json',
    responseHeaders = {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Credentials': true,
    },
  ) {
    return this.handler(data, 401, contentType, responseHeaders);
  },
  forbidden(
    data = {},
    contentType = 'application/vnd.api+json',
    responseHeaders = {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Credentials': true,
    },
  ) {
    return this.handler(data, 403, contentType, responseHeaders);
  },
  notFound(
    data = {},
    contentType = 'application/vnd.api+json',
    responseHeaders = {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Credentials': true,
    },
  ) {
    return this.handler(data, 404, contentType, responseHeaders);
  },
  methodNotAllowed(
    data = {},
    contentType = 'application/vnd.api+json',
    responseHeaders = {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Credentials': true,
    },
  ) {
    return this.handler(data, 405, contentType, responseHeaders);
  },
  internalServerError(
    data = {},
    contentType = 'application/vnd.api+json',
    responseHeaders = {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Credentials': true,
    },
  ) {
    return this.handler(data, 500, contentType, responseHeaders);
  },
  custom(
    data = {},
    status = 200,
    contentType = 'application/vnd.api+json',
    responseHeaders = {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Credentials': true,
    },
  ) {
    return this.handler(data, status, contentType, responseHeaders);
  },
};
