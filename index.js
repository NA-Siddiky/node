const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser')


const app = express();
app.use(cors());
app.use(bodyParser.json());

const users = ["Asad", "Moin", "Sabid", "Susmita", "Sohana", "Sabana"]

// get
app.get('/', (request, response) => {
    const fruit = {
        product: 'ada',
        price: 220,
    }
    response.send(fruit);
});

app.get('/users/:id', (request, response) => {
    // console.log(request.params.id);
    const id = request.params.id;
    const name = users[id];
    response.send({ id, name });
})

// post 
app.post('/addUser', (req, res) => {
    // console.log("data-received", req.body);
    const user = req.body;
    user.id = 55;
    res.send(user)
})
const port = 4000;
app.listen(port, () => console.log('Listening to port ' + port))