import { useState } from "react"
import axios from "axios";


function App() {
  const [title, settitle] = useState('');
  const [lyrics, setlyrics] = useState('');
  const [error, seterror] = useState('');
  const [artist, setartist] = useState('');

  const getdata = async ()=>{
    try{
      const response = await axios.get(`http://localhost:3001/api/lyrics?artist=${artist}&title=${title}`) ;
      setlyrics(response.data.lyrics);
      seterror('')
    }catch(err){
      seterror('Lyrics not found')
    }

  }
  

  return (
    
      <div className="min-h-screen bg-gradient-to-br from-indigo-500 to-purple-600 text-white flex items-center justify-center p-4">
        <div className="bg-white text-gray-900 rounded-2xl shadow-xl p-8 max-w-xl w-full">
      <h1 classname="text-3xl font-bold text-center mb-6">Lyrics Finder</h1>
      <input type="text" value={title} onChange={(e) => {settitle(e.target.value)}} placeholder="Song Name"
      className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
      />
      <input type="text" value= {artist} onChange={(e)=> {setartist(e.target.value)}} placeholder="Artist"
      className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500" />
      <button onClick={getdata}
      className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-3 rounded-lg transition">
        Find Lyrics</button>
      {lyrics && <pre>{lyrics}</pre>}
      {error && <pre>{error}</pre>}
    </div>
    </div>
  )
}

export default App
