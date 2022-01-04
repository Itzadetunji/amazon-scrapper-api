const express = require ('express');
const request = require('request-promise')

const app = express();
const PORT = process.env.PORT || 5000;

const apiKey = "8c12c7a264ed93210d6c52e027266dc8";
const baseUrl = `http://api.scraperapi.com?api_key=${apiKey}&autoparse=true`

app.use(express.json());

app.get('/', (req, res) => {
  res.send('Welcome to Amazon Scraper API');
})

//GET Product Details
app.get('/products/:productId', async (req, res) => {
  const {productId} = req.params;
  try{
    const response = await request();
  }
  catch (error){

  }
})

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));