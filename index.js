const express = require('express');


const app = express();

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

app.listen(4200, () => console.log('Listening to port 3000'))