var socket = io();

socket.on('connect', function() {
  console.log('Connected to server');

  socket.emit('createMessage', {
    from: 'user',
    text: 'Hi, this is receiver'
  });
});

socket.on('disconnect', function() {
  console.log('Disconnected from server');
});

socket.on('newMessage', function(message) {
  console.log('newMessage', message);
});

socket.emit('createMessage', {
  from: 'John',
  text: 'Hi'
}, function(data) {
  console.log(data);
});