const JSONAPISerializer = require('jsonapi-serializer').Serializer;
const Typcheckjs = require('typcheckjs');

module.exports = {
  serialize(payload, t) {
    let keys = [];
    if (Typcheckjs.isArray(payload)) {
      keys = Object.keys(payload[0]);
    } else if (Typcheckjs.isObject(payload)) {
      keys = Object.keys(payload);
    }

    const type = (t === '' || Typcheckjs.isNull(t) || Typcheckjs.isUndefined(t)) ? 'response' : t;

    const json = new JSONAPISerializer(type, {
      attributes: keys,
    }).serialize(payload);

    return json;
  },
  handler(
    data = {},
    type,
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
      body: JSON.stringify(this.serialize(data, type)),
    };
  },
  ok(
    data = {},
    type = '',
    contentType = 'application/vnd.api+json',
    responseHeaders = {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Credentials': true,
    },
  ) {
    return this.handler(data, type, 200, contentType, responseHeaders);
  },
  created(
    data = {},
    type = '',
    contentType = 'application/vnd.api+json',
    responseHeaders = {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Credentials': true,
    },
  ) {
    return this.handler(data, type, 201, contentType, responseHeaders);
  },
  accepted(
    data = {},
    type = '',
    contentType = 'application/vnd.api+json',
    responseHeaders = {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Credentials': true,
    },
  ) {
    return this.handler(data, type, 201, contentType, responseHeaders);
  },
  partialContent(
    data = {},
    type = '',
    contentType = 'application/vnd.api+json',
    responseHeaders = {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Credentials': true,
    },
  ) {
    return this.handler(data, type, 206, contentType, responseHeaders);
  },
  movedPermanently(
    data = {},
    type = '',
    contentType = 'application/vnd.api+json',
    responseHeaders = {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Credentials': true,
    },
  ) {
    return this.handler(data, type, 301, contentType, responseHeaders);
  },
  notModified(
    data = {},
    type = '',
    contentType = 'application/vnd.api+json',
    responseHeaders = {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Credentials': true,
    },
  ) {
    return this.handler(data, type, 304, contentType, responseHeaders);
  },
  badRequest(
    data = {},
    type = '',
    contentType = 'application/vnd.api+json',
    responseHeaders = {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Credentials': true,
    },
  ) {
    return this.handler(data, type, 400, contentType, responseHeaders);
  },
  unauthorized(
    data = {},
    type = '',
    contentType = 'application/vnd.api+json',
    responseHeaders = {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Credentials': true,
    },
  ) {
    return this.handler(data, type, 401, contentType, responseHeaders);
  },
  forbidden(
    data = {},
    type = '',
    contentType = 'application/vnd.api+json',
    responseHeaders = {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Credentials': true,
    },
  ) {
    return this.handler(data, type, 403, contentType, responseHeaders);
  },
  notFound(
    data = {},
    type = '',
    contentType = 'application/vnd.api+json',
    responseHeaders = {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Credentials': true,
    },
  ) {
    return this.handler(data, type, 404, contentType, responseHeaders);
  },
  methodNotAllowed(
    data = {},
    type = '',
    contentType = 'application/vnd.api+json',
    responseHeaders = {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Credentials': true,
    },
  ) {
    return this.handler(data, type, 405, contentType, responseHeaders);
  },
  internalServerError(
    data = {},
    type = '',
    contentType = 'application/vnd.api+json',
    responseHeaders = {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Credentials': true,
    },
  ) {
    return this.handler(data, type, 500, contentType, responseHeaders);
  },
  custom(
    data = {},
    type = '',
    status = 200,
    contentType = 'application/vnd.api+json',
    responseHeaders = {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Credentials': true,
    },
  ) {
    return this.handler(data, type, status, contentType, responseHeaders);
  },
};
