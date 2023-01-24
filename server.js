const express = require('express')
const app = express()
const PORT = 8000

const animals = {
    'fish': { 
        'fact': 'something fishy'
    },
    'mammal': {
        'fact': 'something furry'
    },
    'reptile': {
        'fact': 'something scaly'
    },
    'amphibian': {
        'fact': 'something slimy'
    },
    'bird': {
        'fact': 'something feathery'
    },
    'insect': {
        'fact': 'something squishy'
    },
    'fungus': {
        'fact': 'something fungi'
    },
    'plant': {
        'fact': 'something leafy'
    }
}


app.get('/', (request,response) => {
    response.sendFile(__dirname + '/index.html')
})

app.get('/js/main.js', (request,response) => {
    response.sendFile(__dirname + '/js/main.js')
})

app.get('/api/:animalKingdom', (request,response) => {
    const selectedKingdom = request.params.animalKingdom.toLowerCase()
    if (animals[selectedKingdom]) {
        response.json(animals[selectedKingdom])
    }
    else {
        response.json(`'We didn't recognise that animal :(`)
    }
})

app.listen(process.env.PORT || PORT, ()=> {
    console.log(`The server is running on ${PORT}! Don't let it get away!`)
})