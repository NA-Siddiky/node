const express = require('express');


const app = express();

// const rootCall = (request, response) => response.send("Thankyou")

app.get('/', (request, response) => {
    const fruit = {
        product: 'ada',
        price: 220,
    }
    response.send(fruit);
})

app.listen(3000, () => console.log('Listening to port 3000'))