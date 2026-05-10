import userImg from '../../assets/user.png';
import flagImg from '../../assets/flag.png';
import { use } from "react";
const AvailablePlayers = ({ playersPromise }) => {
    const playerData = use(playersPromise);
    console.log(playerData);
    return (
        <div className="max-w-300 mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 mt-8">

            {
                playerData.map(player =>
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
                                <button className="btn ">Choose player</button>
                            </div>
                        </div>
                    </div>
                )
            }

        </div>
    );
};

export default AvailablePlayers;