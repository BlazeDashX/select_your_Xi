import { Suspense, useState } from 'react';
import { ToastContainer } from 'react-toastify';
import Navbar from './components/Navbar/Navbar';
import './App.css'
import AvailablePlayers from './components/AvailablePlayers/AvailablePlayers';
import SelectedPlayers from './components/SelectedPlayers/SelectedPlayers';

const fetchPlayers = async () => {
  const res = await fetch("./players.json");
  return res.json();
}
const playersPromise = fetchPlayers();


function App() {
  const [toggle, setToggle] = useState(true);
  const [availableBalance, setAvailableBalance] = useState(60000000);
  const [purchasedPlayers, setPurchasedPlayers] = useState([]);

  const removePlayer = (p) => {
    const updatedPurchasedPlayers = purchasedPlayers.filter(player => player["player-id"] !== p["player-id"]);
    const playerPrice = Number(
      p.price.split("BDT").join("").split(",").join("")
    );
    setPurchasedPlayers(updatedPurchasedPlayers);
    setAvailableBalance(availableBalance + playerPrice);
  }

  return (
    <>
      <div>
        <Navbar availableBalance={availableBalance}></Navbar>

        <div className=' max-w-300 mx-auto flex justify-between items-center mt-8 px-4'>

          <h1 className='font-bold text-2xl'>
            {toggle === true ? "Available Players" : `Selected Players (${purchasedPlayers.length}/6)`}
          </h1>
          <div className='flex font-bold'>

            <button onClick={() => setToggle(true)}
              className={`py-3 px-4 border border-gray-400 rounded-l-2xl border-r-0 cursor-pointer ${toggle === true ? "bg-[#E7FE29]" : ""}`}>Available</button>

            <button onClick={() => setToggle(false)}
              className={`py-3 px-4 border border-gray-400 rounded-r-2xl border-l-0 cursor-pointer ${toggle === false ? "bg-[#E7FE29]" : ""}`}>Selected <span>({purchasedPlayers.length})</span></button>

          </div>
        </div>


        {
          toggle === true ? <Suspense fallback={<span className=" loading loading-dots loading-xl"></span>
          }>
            <AvailablePlayers
              playersPromise={playersPromise}
              availableBalance={availableBalance}
              setAvailableBalance={setAvailableBalance}
              purchasedPlayers={purchasedPlayers}
              setPurchasedPlayers={setPurchasedPlayers}
            >
            </AvailablePlayers>
          </Suspense> :
            <SelectedPlayers
              purchasedPlayers={purchasedPlayers}
              removePlayer={removePlayer}
            >
            </SelectedPlayers>
        }
      </div>
      <div className='w-300 mx-auto mt-4'>
          <button 
          onClick={() => setToggle(true)}
          className={` h-16 w-48 bg-[#E7FE29] rounded-3xl font-bold outline-2 p-4 border-4 border-white ${toggle === true ? "hidden" : "block"}`}>Add More Player</button>
      </div>

      <ToastContainer />

    </>
  )
}

export default App
