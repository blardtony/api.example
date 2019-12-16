import express from 'express'
import cors from 'cors'
import bodyParser from 'body-parser'
import mongoose from 'mongoose'

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

app.post('/user', (req, res) =>{
  console.log(req.body)
})

app.get('*', (req, res) => {
  res.status(404)
  res.send('The requested URL was not found !')
})

app.listen(3000, () => {
  console.log('http://localhost:3000')
})
