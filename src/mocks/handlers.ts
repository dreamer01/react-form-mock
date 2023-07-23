import { rest } from 'msw';

export const handlers = [
  // Ignore font and SVG requests
  rest.get('*', (req) => {
    if (req.url.href.endsWith('.ttf') || req.url.href.endsWith('.svg')) {
      return req.passthrough();
    }
  }),
  rest.post(
    'https://www.mocky.io/v2/5d9d9219310000153650e30b',
    (_req, res, ctx) => res(ctx.delay(1000), ctx.json({ result: 'success' }))
  ),
];
