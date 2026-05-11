import deleteImg from '../../assets/delete.png';


const SelectedCard = ({ player, removePlayer }) => {

    const handleRemove = (player) => {
        removePlayer(player);
    }

    return (
        <div>
            <div className="border-2 border-gray-300 flex justify-between items-center p-4 rounded-xl">
                <div className='flex flex-center'>
                    <img className="h-12 rounded-xl" src={player["player-image"]} alt="" />
                    <div className='ml-2'>
                        <h1 className='font-bold'>{player["player-name"]}</h1>
                        <p className='font-xs'>{player["playing-role"]}</p>
                    </div>
                </div>
                <div>
                    <img
                        className="w-6 "
                        src={deleteImg} alt="Delete"
                        onClick={() => handleRemove(player)}
                    />
                </div>
            </div>
        </div>

    );
};

export default SelectedCard;