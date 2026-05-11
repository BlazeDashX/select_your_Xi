
import { use } from "react";
import PlayerCard from "../PlayerCard/PlayerCard";
const AvailablePlayers = ({ playersPromise, setAvailableBalance, availableBalance, setPurchasedPlayers, purchasedPlayers }) => {
    const playerData = use(playersPromise);
    return (
        <div className="max-w-300 mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 mt-8">

            {
                playerData.map(player =>
                    <PlayerCard
                        key={player["player-id"]}
                        player={player}
                        setAvailableBalance={setAvailableBalance}
                        availableBalance={availableBalance}
                        purchasedPlayers={purchasedPlayers}
                        setPurchasedPlayers={setPurchasedPlayers}
                    ></PlayerCard>

                )
            }

        </div>
    );
};

export default AvailablePlayers;