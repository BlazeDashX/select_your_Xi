import { Suspense } from 'react';
import Navbar from './components/Navbar/Navbar';
import './App.css'
import AvailablePlayers from './components/AvailablePlayers/AvailablePlayers';
import SelectedPlayers from './components/SelectedPlayers/SelectedPlayers';

  const fetchPlayers= async()=>{
    const res = await fetch("./players.json");
    return res.json();
  }

function App() {
  const playersPromise = fetchPlayers();

  return (
    <>
    <div>
      <Navbar/>
      <Suspense fallback={<span className="loading loading-dots loading-xl"></span>
}>
              <AvailablePlayers 
              playersPromise={playersPromise}>

              </AvailablePlayers>
      </Suspense>
      {/* <SelectedPlayers></SelectedPlayers> */}
    </div>

    </>
  )
}

export default App
