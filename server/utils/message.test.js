var expect = require('expect');

var { generateMessage, generateLocationMessage } = require('./message');

describe('generateMessage', () => {
  it('should generate the correct message object', () => {
    const from = 'from';
    const text = 'text';

    const message = generateMessage(from, text);

    expect(message).toInclude({ from, text });
    expect(message.createdAt).toBeA('number');
  });
});

describe('generateLocationMessage', () => {
  it('should generate the correct location object', () => {
    const from = 'from';
    const latitude = 1;
    const longitude = 1;

    const message = generateLocationMessage(from, latitude, longitude);

    expect(message).toInclude({
      from,
      url: `https://www.google.de/maps?q=${latitude},${longitude}`
    });
    expect(message.createdAt).toBeA('number');
  });
});