
import { use } from "react";
import PlayerCard from "../PlayerCard/PlayerCard";
const AvailablePlayers = ({ playersPromise, setAvailableBalance, availableBalance }) => {
    const playerData = use(playersPromise);
    console.log(playerData);
    return (
        <div className="max-w-300 mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 mt-8">

            {
                playerData.map(player => 
                <PlayerCard 
                    key={player.id} 
                    player={player} 
                    setAvailableBalance={setAvailableBalance}
                    availableBalance={availableBalance}
                ></PlayerCard>

                )
            }

        </div>
    );
};

export default AvailablePlayers;