// Node ja Express-kirjasto
// tämä tulee tehdä, kun "npm install express --save" on tehty
const express = require('express')
const app = express()
const morgan = require('morgan')
const cors = require('cors')

// npm init
// asenna myös npm install --save-dev nodemon
// kehitysaikainen tiedoston päivitys
// Same origin policy onglema tulee etee. Asenettava "npm install cors" backendiin 

// json-parseri. Tällä päästään requestin mukana tulleeseen dataan käsiksi
app.use(express.json()) 

// tällä saadaan loggaus ulos terminaalissa. Näkee, mitä hakuja on tehty
app.use(morgan('tiny'))

// sallii porttien 3000 ja 3001 kommunikointia keskenään
app.use(cors())

// jos haluaa muokata taulukkoa, niin pitää olla "let"
let persons = [
        
    { 
      "name": "Arto Hellas", 
      "number": "040-123456",
      "id": 1
    },
    { 
      "name": "Ada Lovelace", 
      "number": "39-44-5323523",
      "id": 2
    },
    { 
      "name": "Dan Abramov", 
      "number": "12-43-234345",
      "id": 3
    },
    { 
      "name": "Mary Poppendieck", 
      "number": "39-23-6423122",
      "id": 4
    },
    { 
      "name": "Juho Kemppainen", 
      "number": "0506 3858294",
      "id": 5
    }
]

// GET - kaikki data
app.get('/api/persons', (req, res) => {
    res.json(persons)
})

// GET - info sivu
app.get('/info', (req, res) => {
    res.send(`<p>Phonebook has info for <strong> ${persons.length} </strong> people</p> 
    ${new Date()}`)

})

// GET - yksittäinen ID
app.get('/api/persons/:id', (req, res) => {
    const id = Number(req.params.id)
    const person = persons.find(p => p.id === id)

    if (person) {
        res.json(person)
      } else {
        res.status(404).end()
      }

})

//DELETE - poisto
app.delete('/api/persons/:id', (req, res) => {
    const id = Number(req.params.id)
    persons = persons.filter(p => p.id !== id)
  
    res.status(204).end()
})
// generoi ID:n
const generateId = () => {
    const maxId = persons.length > 0
        ? Math.max(...persons.map(p => p.id))
        : 0
    return maxId + 1
}
// POST - uuden tiedon lisäys
app.post('/api/persons', (req, res) => {
    const body = req.body
    console.log(body);
   
    const newRecord = {
        name: body.name,
        number: body.number,
        id: generateId()
    }

    if (!body.name || !body.number) {
        // return on oltava, muuten koodi jatkaa suoritusta loppuun asti
        return(res.status(404).json({error : 'content missing'}))
    }
    // jos nimi on jo olemassa 
    if (persons.find(p => p.name === newRecord.name)) {
        return(res.status(400).json({error : 'name must be unique'}))
    }

    persons = persons.concat(newRecord)

    res.json(newRecord)
})

// Middleware - jos käyttäjä eksyy olemattomalle sivulle
const unknownEndpoint = (request, response) => {
    response.status(404).send('<h1>Here is nothing</h1>')
}
app.use(unknownEndpoint)

// kuuntelijan pitää kuunella porttia aina, jotta back-end osaisi vastata pyyntöihin
// 3001 vastakohta on ympäristömuuttujassa PORT määritetty portti
const PORT = process.env.PORT || 3001
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})


// 3.1 - 3.6
// 3.7