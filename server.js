const express = require('express'),
      db = require('./model'),
      controller = require('./controller');

const app = express();
app.use(express.static('public'));

app.get('/', (req, res) => {
	res.sendFile('view/index.html', {root: __dirname});
});

app.get('/channel/:id/words', controller.words.show);
app.get('/channel/:id/messages', controller.messages.index);
app.get('/channels', controller.channels.index);
app.get('/users', controller.users.show);
app.get('/messages', controller.messages.saved_index);
app.post('/messages/:id', controller.messages.save);
app.delete('/messages/:id', controller.messages.remove);

app.listen(process.env.PORT || 3000, () => {
   console.log('Express started on port ' + (process.env.PORT || '3000'));
})
