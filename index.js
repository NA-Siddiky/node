const express = require('express');

const app = express();

const users = ["Asad", "Moin", "Sabid", "Susmita", "Sohana", "Sabana"]
// const rootCall = (request, response) => response.send("Thankyou")

app.get('/', (request, response) => {
    const fruit = {
        product: 'ada',
        price: 220,
    }
    response.send(fruit);
});
app.get('/fruits/banana', (request, response) => {
    response.send({ fruit: 'banana', quantity: 100, price: 100 })
})

app.get('/users/:id', (request, response) => {
    // console.log(request.params.id);
    const id = request.params.id;
    console.log(request.query.sort);
    const name = users[id];
    response.send({ id, name });
})

const port = 4000;
app.listen(port, () => console.log('Listening to port ' + port))