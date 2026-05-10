import { useState } from 'react';
import userImg from '../../assets/user.png';
import flagImg from '../../assets/flag.png';

const PlayerCard = ({ player, setAvailableBalance, availableBalance }) => {
    const[isSelected,setIsSelected] = useState(false);

    const handleSelected =(playerData)=>{
        const playerPrice = playerData.price.split("BDT").join("").split(",").join("");
        
        if(availableBalance < playerPrice){
            alert("You don't have enough balance to select this player");
            return;
        }
        setIsSelected(true);
        setAvailableBalance( 
            availableBalance - playerPrice);
    }


    return (
        <div className="card bg-base-100 w-96 shadow-xl  border-2 border-green-300">
            <figure>
                <img className="p-4 w-full h-75 object-cover"
                    src={player["player-image"]}
                    alt="Shoes" />
            </figure>
            <div className="m-4">
                <div className='flex items-center'>
                    <img className='w-6 h-6' src={userImg} alt="User" />
                    <h2 className="card-title ml-2">{player["player-name"]}</h2>
                </div>
                <div className='flex justify-between mt-4 border-b border-gray-400 pb-2'>
                    <div className='flex items-center'>
                        <img className='w-5 h-5' src={flagImg} alt="Flag" />
                        <span className='ml-2'>{player["player-country"]}</span>
                    </div>
                    <button className='btn ml-2 '>{player["playing-role"]}</button>
                </div>

                <div className='flex justify-between font-bold'>
                    <span>Rating</span>
                    <span>{player.rating}</span>
                </div>

                <div className='flex justify-between mt-4'>
                    <span className='font-bold'>{player["bating-style"]}</span>
                    <span >{player["bowling-style"]}</span>
                </div>

                <div className="card-actions flex justify-between items-center mt-4">
                    <p className='font-bold'>Price: <span>{player.price}</span></p>
                    <button 
                        disabled={isSelected}
                        onClick={()=>{
                            handleSelected(player);
                        }}
                        className="btn ">
                        {isSelected ===true ? "Selected" : "Choose player"}
                    </button>
                </div>
            </div>
        </div>
    );
};

export default PlayerCard;