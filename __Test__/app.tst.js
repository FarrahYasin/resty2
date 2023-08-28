// import { test, expect, describe, beforeAll, afterEach, afterAll } from 'vitest'
// import '@testing-library/jest-dom';
// import { rest } from 'msw';
// import { setupServer } from 'msw/node';

// describe('Form component', () => {
//   const server = setupServer(
//     rest.get('https://swapi.dev/api/people/', (req, res, ctx) => {
//       return res(
//         ctx.status(200),
//         ctx.json([
//           { userId: 1, id: 1, title: 'film ', body: 'film ' },
//           { userId: 2, id: 2, title: 'movie ', body: 'movie ' },
//         ])
//       );
//     })
//   );

//   beforeAll(() => server.listen());
//   afterEach(() => {
//     server.resetHandlers();
//   });
//   afterAll(() => server.close());

 

//   test('fetches data from the API', async () => {
//     const response = await fetch('https://swapi.dev/api/people/');
//     expect(response.status).toBe(200);
//   });

  
    
// });