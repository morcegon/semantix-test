import MockAdapter from 'axios-mock-adapter';

import { instance, chartInfo } from './Api';

const mock = new MockAdapter(instance);

const sucessResponse = [
  {
    label: 'january',
    value: 3000,
  },
  {
    label: 'february',
    value: 2000,
  },
];

describe('api service', () => {
  it('can return sucessfull result', async () => {
    expect.hasAssertions();

    mock.onGet('/anual-result').reply(200, sucessResponse);

    const resp = await chartInfo('anual-result');

    expect(resp).toStrictEqual({
      sucess: true,
      data: sucessResponse,
    });
  });
});
