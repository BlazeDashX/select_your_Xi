import { Suspense, useState } from 'react';
import Navbar from './components/Navbar/Navbar';
import './App.css'
import AvailablePlayers from './components/AvailablePlayers/AvailablePlayers';
import SelectedPlayers from './components/SelectedPlayers/SelectedPlayers';

const fetchPlayers = async () => {
  const res = await fetch("./players.json");
  return res.json();
}

function App() {
  const playersPromise = fetchPlayers();
  const [toggle,setToggle] =useState(true);

  return (
    <>
      <div>
        <Navbar />

        <div className=' max-w-300 mx-auto flex justify-between items-center mt-8 px-4'>
          <h1 className='font-bold text-2xl'>Available Players</h1>
          <div className='flex font-bold'>
            <button onClick={()=>setToggle(true)} 
            className={`py-3 px-4 border border-gray-400 rounded-l-2xl border-r-0 cursor-pointer ${toggle===true ? "bg-[#E7FE29]":""}`}>Available</button>
            <button onClick={()=>setToggle(false)} 
            className={`py-3 px-4 border border-gray-400 rounded-r-2xl border-l-0 cursor-pointer ${toggle===false ? "bg-[#E7FE29]":""}`}>Selected <span>(0)</span></button>
          </div>
        </div>


        {
          toggle === true ?<Suspense fallback={<span className=" loading loading-dots loading-xl"></span>
        }>
          <AvailablePlayers
            playersPromise={playersPromise}>

          </AvailablePlayers>
        </Suspense> : <SelectedPlayers></SelectedPlayers>
        }

      </div>

    </>
  )
}

export default App
