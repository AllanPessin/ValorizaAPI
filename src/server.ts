import express from 'express'

const app = express()
app.use(express.json())

app.get("/", (request, response) =>  {
  return response.json({message: "valoriza API"})
})

app.listen(3000, () => console.log("Server runnig!"))