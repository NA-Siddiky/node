const express = require('express');


const app = express();

// const rootCall = (request, response) => response.send("Thankyou")

app.get('/', (request, response) => {
    response.send("Thanks A LOT")
})

app.listen(4000, () => console.log('Listening to port 3000'))