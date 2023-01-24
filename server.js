const express = require('express')
const app = express()
const cors = require('cors')
const PORT = 8000

app.use(cors())

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
    },
    'unrecognised': {
        'fact': 'We did not recognise that animal :('
    }
}


app.get('/', (request,response) => {
    response.sendFile(__dirname + '/index.html')
})

app.get('/api/:kingdom', (request,response) => {
    const animalKingdom = request.params.kingdom.toLowerCase()
    if (animals[animalKingdom]) {
        response.json(animals[animalKingdom])
    }
    else {
        response.json(animals['unrecognised'])
    }
})

app.listen(process.env.PORT || PORT, ()=> {
    console.log(`The server is running on ${PORT}! Don't let it get away!`)
})