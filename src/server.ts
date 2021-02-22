import express, { response } from 'express'

const app = express();

app.listen(3333, () => { console.log('running at 3333')})


const modafocaList = []

app.get("/", (request, response) => {
  return response.json({message: "welcome modafoca", modafocasList: modafocaList})
})

app.post("/", (request, response) => {
  return response.json({message: "tu nao adicionou ninguem na lista dos modafoca"})
})