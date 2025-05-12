const express = require('express');
const axios = require('axios');
const cors = require('cors');



const app = express();
const port = 3000;

app.use(cors());

app.use(express.json());
app.use(express.urlencoded({ extended: true}));

app.get('/users', async (req, res) => {
    const urlUsers = 'https://api-books-ac3j.onrender.com/users';

    try {
        const resUser = await axios.get(urlUsers);
    
        res.json(resUser.data)


    } catch(error) {
        res.status(404).json({error:'error al cargar los datos'})
      }
    
});

app.get('/books', async(req, res) => {
    const urlBooks = 'https://api-books-ac3j.onrender.com/books';

    try {
        const resBook = await axios.get(urlBooks);

        res.json(resBook.data)

    } catch (error) {
        res.status(404).json({error: 'Error al cargar los datos'});
    }
});



app.listen(port, () => {
    console.log(`Servidor express escuchando en el puerto http://localhost:${port}`)
})