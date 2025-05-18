const express = require("express");
const cors = require("cors");
const axios = require("axios")

const app = express();
app.use(cors())
app.use(express.json());

app.get('/api/lyrics', async (req,res) => {
    const {artist, title} = req.query;
    try{
        const response = await axios.get(`https://api.lyrics.ovh/v1/${artist}/${title}`);
        res.json(response.data);
    }catch(err){
        res.status(404).json({msg: 'Lyrics not found'});
    }
})

app.listen(3001, ()=> {console.log("server is listening on port 3001")})