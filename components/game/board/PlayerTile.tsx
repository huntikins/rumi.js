import Hand from "../Hand";
import placeholderImg from "../../../assets/img/cards/default/back.png";

function PlayerTile({game}) {
  function placeholderCard(count: number) {
    const cardArr = [...Array(count)].map(
      (card) =>
        (card = {
          img: placeholderImg,
          alt: "Placeholder card image tile",
        })
    );

    return cardArr;
  }
  return (
    <div className="player-tile flex justify-between items-center max-w-4xl mx-auto bg-indigo-600 text-white rounded-full p-2 m-2">
      <div className="player-tile__meta flex items-center">
        <div className="player-tile__meta--img p-2">
          <img
            className="rounded-full"
            height="50"
            width="50"
            src="https://avatars.dicebear.com/api/adventurer-neutral/sCdwl5Nfe8Q9LHtGjVrpbM0WSa02.svg"
            alt=""
          />
        </div>
        <div>
          <div className="player-title__meta--info">
            <h3 className="font-bold tracking-wider">Player 1</h3>
          </div>
          <div className="player-title__meta--score">0</div>
        </div>
      </div>
      <div className="player-title__cards flex justify-between items-center">
        <div>
          <div className={`player-title__cards--runs flex flex-col text-center ${!game.goal.runs ? 'hidden' : ''}`}>
            <h4>Runs</h4>
            <div className="flex">
              {[...Array(game.goal.runs)].map(() => (
                <Hand cards={placeholderCard(4)} />
              ))}
            </div>
          </div>
          <div className={`player-title__cards--sets flex flex-col text-center ${!game.goal.sets ? 'hidden' : ''}`}>
            <h4>Sets</h4>
            <div className="flex">
              {[...Array(game.goal.sets)].map(() => (
                <Hand cards={placeholderCard(3)} />
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="player-title__cards--discards px-2">
        {[...Array(game.goal.sets)].map(() => (
          <Hand cards={game.discards[0]} />
        ))}
      </div>
    </div>
  );
}

export default PlayerTile;
