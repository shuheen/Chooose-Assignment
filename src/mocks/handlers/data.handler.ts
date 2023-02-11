// Service Worker REST API
import {rest} from 'msw';

// Mock
import {dataEndpoint, dataMock} from './../entities/data.mock';

// Accounts Handlers
export const fetchData = rest.get(dataEndpoint, (req, res, ctx) => {
  return res(ctx.json(dataMock));
});

export const fetchDataException = rest.get(dataEndpoint, (req, res, ctx) => {
  return res(ctx.status(500), ctx.json({error: 'Internal Server Error'}));
});
