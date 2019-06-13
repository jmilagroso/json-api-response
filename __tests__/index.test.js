/* eslint-disable no-undef */
/* eslint-disable prefer-destructuring */

const index = require('../index');


describe('testing index.js', () => {
  let env;

  // mocking an environment
  beforeEach((done) => {
    env = process.env;
    process.env = {
    };
    done();
  });

  // restoring everything back
  afterEach(() => {
    process.env = env;
  });

  test('it should invoke index.ok function with array and return JSON API standard response', () => {
    const payload = [{
      id: 1,
      order_id: 10,
      name: 'John Doe1',
    },
    {
      id: 2,
      order_id: 11,
      name: 'John Doe1',
    }];

    const response = index.ok(payload);
    const obj = JSON.parse(response.body);

    expect(obj.data.length).toBe(2);
  });

  test('it should invoke index.ok function with object and return JSON API standard response', () => {
    const payload = {
      id: 1,
      order_id: 10,
      name: 'John Doe1',
    };

    const response = index.ok(payload);
    const obj = JSON.parse(response.body);

    expect('type' in obj.data).toBe(true);
  });

  test('it should invoke index.ok function with object (nested) and return JSON API standard response', () => {
    const payload = {
      id: 1,
      order_id: 10,
      name: 'John Doe1',
      info: {
        mobile: '+00 9822 333',
        age: 35,
      },
    };

    const response = index.ok(payload);
    const obj = JSON.parse(response.body);

    expect('type' in obj.data).toBe(true);
  });

  test('it should invoke index.created function with array and return JSON API standard response', () => {
    const payload = [{
      id: 1,
      order_id: 10,
      name: 'John Doe1',
    },
    {
      id: 2,
      order_id: 11,
      name: 'John Doe1',
    }];

    const response = index.created(payload);
    const obj = JSON.parse(response.body);

    expect(obj.data.length).toBe(2);
  });

  test('it should invoke index.created function with object and return JSON API standard response', () => {
    const payload = {
      id: 1,
      order_id: 10,
      name: 'John Doe1',
    };

    const response = index.created(payload);
    const obj = JSON.parse(response.body);

    expect('type' in obj.data).toBe(true);
  });

  test('it should invoke index.created function with object (nested) and return JSON API standard response', () => {
    const payload = {
      id: 1,
      order_id: 10,
      name: 'John Doe1',
      info: {
        mobile: '+00 9822 333',
        age: 35,
      },
    };

    const response = index.created(payload);
    const obj = JSON.parse(response.body);

    expect('type' in obj.data).toBe(true);
  });

  test('it should invoke index.accepted function with array and return JSON API standard response', () => {
    const payload = [{
      id: 1,
      order_id: 10,
      name: 'John Doe1',
      info: {
        mobile: '+00 9822 333',
        age: 35,
      },
      country: {
        code: 'PH',
        name: 'Philippines',
      },
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
        name: 'Philippines',
      },
    }];

    const response = index.accepted(payload);
    const obj = JSON.parse(response.body);

    expect(obj.data.length).toBe(2);
  });

  test('it should invoke index.accepted function with object and return JSON API standard response', () => {
    const payload = {
      id: 1,
      order_id: 10,
      name: 'John Doe1',
    };

    const response = index.accepted(payload);
    const obj = JSON.parse(response.body);

    expect('type' in obj.data).toBe(true);
  });

  test('it should invoke index.accepted function with object (nested) and return JSON API standard response', () => {
    const payload = {
      id: 1,
      order_id: 10,
      name: 'John Doe1',
      info: {
        mobile: '+00 9822 333',
        age: 35,
      },
    };

    const response = index.accepted(payload);
    const obj = JSON.parse(response.body);

    expect('type' in obj.data).toBe(true);
  });

  test('it should invoke index.partialContent function with array and return JSON API standard response', () => {
    const payload = [{
      code: 'Some Code',
      name: 'Some Message',
    },
    {
      code: 'Some Code',
      name: 'Some Message',
    }];

    const response = index.partialContent(payload);
    const obj = JSON.parse(response.body);

    expect(obj.data.length).toBe(2);
  });

  test('it should invoke index.partialContent function with object and return JSON API standard response', () => {
    const payload = {
      code: 'Some Code',
      name: 'Some Message',
    };

    const response = index.partialContent(payload);
    const obj = JSON.parse(response.body);

    expect('type' in obj.data).toBe(true);
  });

  test('it should invoke index.partialContent function with object (nested) and return JSON API standard response', () => {
    const payload = {
      code: {
        name: 'Code name',
      },
      name: 'Some Message',
    };

    const response = index.partialContent(payload);
    const obj = JSON.parse(response.body);

    expect('type' in obj.data).toBe(true);
  });

  test('it should invoke index.movedPermanently function with array and return JSON API standard response', () => {
    const payload = [{
      code: 'Some Code',
      name: 'Some Message',
    },
    {
      code: 'Some Code',
      name: 'Some Message',
    }];

    const response = index.movedPermanently(payload);
    const obj = JSON.parse(response.body);

    expect(obj.data.length).toBe(2);
  });

  test('it should invoke index.movedPermanently function with object and return JSON API standard response', () => {
    const payload = {
      code: 'Some Code',
      name: 'Some Message',
    };

    const response = index.movedPermanently(payload);
    const obj = JSON.parse(response.body);

    expect('type' in obj.data).toBe(true);
  });

  test('it should invoke index.movedPermanently function with object (nested) and return JSON API standard response', () => {
    const payload = {
      code: {
        name: 'Code name',
      },
      name: 'Some Message',
    };

    const response = index.movedPermanently(payload);
    const obj = JSON.parse(response.body);

    expect('type' in obj.data).toBe(true);
  });

  test('it should invoke index.notModified function with array and return JSON API standard response', () => {
    const payload = [{
      code: 'Some Code',
      name: 'Some Message',
    },
    {
      code: 'Some Code',
      name: 'Some Message',
    }];

    const response = index.notModified(payload);
    const obj = JSON.parse(response.body);

    expect(obj.data.length).toBe(2);
  });

  test('it should invoke index.notModified function with object and return JSON API standard response', () => {
    const payload = {
      code: 'Some Code',
      name: 'Some Message',
    };

    const response = index.notModified(payload);
    const obj = JSON.parse(response.body);

    expect('type' in obj.data).toBe(true);
  });

  test('it should invoke index.notModified function with object (nested) and return JSON API standard response', () => {
    const payload = {
      code: {
        name: 'Code name',
      },
      name: 'Some Message',
    };

    const response = index.notModified(payload);
    const obj = JSON.parse(response.body);

    expect('type' in obj.data).toBe(true);
  });

  test('it should invoke index.badRequest function with array and return JSON API standard response', () => {
    const payload = [{
      code: 'Some Code',
      name: 'Some Message',
    },
    {
      code: 'Some Code',
      name: 'Some Message',
    }];

    const response = index.badRequest(payload);
    const obj = JSON.parse(response.body);

    expect(obj.data.length).toBe(2);
  });

  test('it should invoke index.badRequest function with object and return JSON API standard response', () => {
    const payload = {
      code: 'Some Code',
      name: 'Some Message',
    };

    const response = index.badRequest(payload);
    const obj = JSON.parse(response.body);

    expect('type' in obj.data).toBe(true);
  });

  test('it should invoke index.badRequest function with object (nested) and return JSON API standard response', () => {
    const payload = {
      code: {
        name: 'Code name',
      },
      name: 'Some Message',
    };

    const response = index.badRequest(payload);
    const obj = JSON.parse(response.body);

    expect('type' in obj.data).toBe(true);
  });

  test('it should invoke index.unauthorized function with array and return JSON API standard response', () => {
    const payload = [{
      code: 'Some Code',
      name: 'Some Message',
    },
    {
      code: 'Some Code',
      name: 'Some Message',
    }];

    const response = index.unauthorized(payload);
    const obj = JSON.parse(response.body);

    expect(obj.data.length).toBe(2);
  });

  test('it should invoke index.unauthorized function with object and return JSON API standard response', () => {
    const payload = {
      code: 'Some Code',
      name: 'Some Message',
    };

    const response = index.unauthorized(payload);
    const obj = JSON.parse(response.body);

    expect('type' in obj.data).toBe(true);
  });

  test('it should invoke index.unauthorized function with object (nested) and return JSON API standard response', () => {
    const payload = {
      code: {
        name: 'Code name',
      },
      name: 'Some Message',
    };

    const response = index.unauthorized(payload);
    const obj = JSON.parse(response.body);

    expect('type' in obj.data).toBe(true);
  });

  test('it should invoke index.forbidden function with array and return JSON API standard response', () => {
    const payload = [{
      code: 'Some Code',
      name: 'Some Message',
    },
    {
      code: 'Some Code',
      name: 'Some Message',
    }];

    const response = index.forbidden(payload);
    const obj = JSON.parse(response.body);
    expect(obj.data.length).toBe(2);
  });

  test('it should invoke index.forbidden function with object and return JSON API standard response', () => {
    const payload = {
      code: 'Some Code',
      name: 'Some Message',
    };

    const response = index.forbidden(payload);
    const obj = JSON.parse(response.body);

    expect('type' in obj.data).toBe(true);
  });

  test('it should invoke index.forbidden function with object (nested) and return JSON API standard response', () => {
    const payload = {
      code: {
        name: 'Code name',
      },
      name: 'Some Message',
    };

    const response = index.forbidden(payload);
    const obj = JSON.parse(response.body);
    expect('type' in obj.data).toBe(true);
  });

  test('it should invoke index.notFound function with array and return JSON API standard response', () => {
    const payload = [{
      code: 'Some Code',
      name: 'Some Message',
    },
    {
      code: 'Some Code',
      name: 'Some Message',
    }];

    const response = index.notFound(payload);
    const obj = JSON.parse(response.body);
    expect(obj.data.length).toBe(2);
  });

  test('it should invoke index.notFound function with object and return JSON API standard response', () => {
    const payload = {
      code: 'Some Code',
      name: 'Some Message',
    };

    const response = index.notFound(payload);
    const obj = JSON.parse(response.body);

    expect('type' in obj.data).toBe(true);
  });

  test('it should invoke index.notFound function with object (nested) and return JSON API standard response', () => {
    const payload = {
      code: {
        name: 'Code name',
      },
      name: 'Some Message',
    };

    const response = index.notFound(payload);
    const obj = JSON.parse(response.body);

    expect('type' in obj.data).toBe(true);
  });

  test('it should invoke index.methodNotAllowed function with array and return JSON API standard response', () => {
    const payload = [{
      code: 'Some Code',
      name: 'Some Message',
    },
    {
      code: 'Some Code',
      name: 'Some Message',
    }];

    const response = index.methodNotAllowed(payload);
    const obj = JSON.parse(response.body);
    expect(obj.data.length).toBe(2);
  });

  test('it should invoke index.methodNotAllowed function with object and return JSON API standard response', () => {
    const payload = {
      code: 'Some Code',
      name: 'Some Message',
    };

    const response = index.methodNotAllowed(payload);
    const obj = JSON.parse(response.body);
    expect('type' in obj.data).toBe(true);
  });

  test('it should invoke index.methodNotAllowed function with object (nested) and return JSON API standard response', () => {
    const payload = {
      code: {
        name: 'Code name',
      },
      name: 'Some Message',
    };

    const response = index.methodNotAllowed(payload);
    const obj = JSON.parse(response.body);
    expect('type' in obj.data).toBe(true);
  });

  test('it should invoke index.internalServerError function with array and return JSON API standard response', () => {
    const payload = [{
      code: 'Some Code',
      name: 'Some Message',
    },
    {
      code: 'Some Code',
      name: 'Some Message',
    }];

    const response = index.internalServerError(payload);
    const obj = JSON.parse(response.body);

    expect(obj.data.length).toBe(2);
  });

  test('it should invoke index.internalServerError function with object and return JSON API standard response', () => {
    const payload = {
      code: 'Some Code',
      name: 'Some Message',
    };

    const response = index.internalServerError(payload);
    const obj = JSON.parse(response.body);

    expect('type' in obj.data).toBe(true);
  });

  test('it should invoke index.internalServerError function with object (nested) and return JSON API standard response', () => {
    const payload = {
      code: {
        name: 'Code name',
      },
      name: 'Some Message',
    };

    const response = index.internalServerError(payload);
    const obj = JSON.parse(response.body);

    expect('type' in obj.data).toBe(true);
  });

  test('it should invoke index.custom function with array and return JSON API standard response', () => {
    const payload = [{
      code: 'Some Code',
      name: 'Some Message',
    },
    {
      code: 'Some Code',
      name: 'Some Message',
    }];

    const response = index.custom(payload);
    const obj = JSON.parse(response.body);

    expect(obj.data.length).toBe(2);
  });

  test('it should invoke index.custom function with object and return JSON API standard response', () => {
    const payload = {
      code: 'Some Code',
      name: 'Some Message',
    };

    const response = index.custom(payload);
    const obj = JSON.parse(response.body);

    expect('type' in obj.data).toBe(true);
  });

  test('it should invoke index.custom function with object (nested) and return JSON API standard response', () => {
    const payload = {
      code: {
        name: 'Code name',
      },
      name: 'Some Message',
    };

    const response = index.custom(payload);
    const obj = JSON.parse(response.body);

    expect('type' in obj.data).toBe(true);
  });
});
