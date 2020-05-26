const fetch = require('node-fetch');
const fetchJokeAsync = require('./fetchJokeAsync');

jest.mock('node-fetch');

it('should fetch users', async () => {
  const joke = {
    id: '7h3oGtrOfxc',
    joke: 'Whiteboards ... are remarkable.',
    status: 200
  };
  
  fetch.mockImplementation(async () =>
    await {
      json: async () => await joke
    }
  );
  
  const data = await fetchJokeAsync();
  expect(data).toEqual('Whiteboards ... are remarkable.');
});
