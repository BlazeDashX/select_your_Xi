
import SelectedCard from '../SelectedCard/SelectedCard';
const SelectedPlayers = ({ purchasedPlayers, removePlayer }) => {
    return (
        <div className="max-w-300 mx-auto mt-4">
            {
            purchasedPlayers.map((player) => (
                <SelectedCard 
                    key={player["player-id"]}
                    player={player}
                    purchasedPlayers={purchasedPlayers}
                    removePlayer={removePlayer}
                >
                </SelectedCard>  
            ))}
        </div>
    );
};

export default SelectedPlayers;