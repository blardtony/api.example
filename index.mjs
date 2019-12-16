import express from 'express'
import cors from 'cors'
import bodyParser from 'body-parser'
import mongoose from 'mongoose'
import bcryptjs from 'bcryptjs'


mongoose.connect('mongodb://localhost/api-example', {
  useNewUrlParser: true,
  useCreateIndex: true
});

const db = mongoose.connection;

db.on('error', console.log);
db.once('open', () => {
  console.log('mongodb is connected')
});

const app = express()

const userSchema = new mongoose.Schema({
  name: String,
  email: {
    unique: true,
    type: String,
  },
  password: String
});

const user = mongoose.model('user', userSchema)

app.use(cors({
  origin: '*'
}))

app.use(bodyParser.json())

app.post('/user', async (req, res) =>{
  const email = req.body.email
  const password = req.body.password
  const name = req.body.name

  const hash = bcryptjs.hashSync(password, 8)
  const result = new user ({
    email,
    password: hash,
    name,
  })
  try {
    const data = (await result.save()).toObject()
    delete data.password
    res.json(data)
  } catch (e) {
    res.status(401)
    res.json({
      error: e.errmsg
    })
  }
})

app.get('*', (req, res) => {
  res.status(404)
  res.send('The requested URL was not found !')
})

app.listen(3000, () => {
  console.log('http://localhost:3000')
})
