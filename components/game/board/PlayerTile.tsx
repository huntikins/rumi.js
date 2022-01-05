import Hand from "../Hand";
import placeholderImg from "../../../public/cards/default/back.png";

function PlayerTile({ player, goal }) {
  function placeholderCard(count: number) {
    const cardArr = [...Array(count)].map(
      (card) =>
        (card = {
          front: placeholderImg,
          alt: "Placeholder card image tile",
        })
    );

    return cardArr;
  }
  return (
    <div className="player-tile flex justify-between items-center max-w-4xl mx-auto text-indigo-600 border-indigo-600 border-4 rounded-full p-2 m-2">
      <div className="player-tile__meta flex items-start flex-col pl-6">
        <div className="player-title__meta--info">
          <h3 className="font-bold tracking-wider">{player.username}</h3>
        </div>
        <div className="flex items-center">
          <div className="player-tile__meta--img p-2">
            <img
              className="rounded-full"
              height="50"
              width="50"
              src={player.icon}
              alt=""
            />
          </div>
          <div className="text-right">
            <div className="player-title__meta--score">
              Score: {player.score}
            </div>
            <div className="player-title__cards--discards">
              Discards: {player.hand.length}
            </div>
          </div>
        </div>
      </div>
      <div className="player-title__cards flex justify-between items-center px-4">
        <div
          className={`player-title__cards--runs flex flex-col text-center ${
            !goal.runs ? "hidden" : ""
          }`}
        >
          <h4>Runs</h4>
          <div className="flex">
            {[...Array(goal.runs)].map((_, index) => (
              <Hand
                cards={placeholderCard(4)}
                key={index + goal.runs + "runs"}
              />
            ))}
          </div>
        </div>
        <div
          className={`player-title__cards--sets flex flex-col text-center ${
            !goal.sets ? "hidden" : ""
          }`}
        >
          <h4>Sets</h4>
          <div className="flex">
            {[...Array(goal.sets)].map((_, index) => (
              <Hand
                cards={placeholderCard(3)}
                key={index + goal.sets + "sets"}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default PlayerTile;
