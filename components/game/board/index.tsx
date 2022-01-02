import Play from "../actions/Play";
import Buy from "../actions/Buy";
import Deal from "../actions/Deal";
import Discard from "../actions/Discard";
import Draw from "../actions/Draw";
import Hand from "../Hand";
import PlayerTile from "./PlayerTile";

import placeholderImg from "../../../assets/img/cards/default/back.png";

function Board({ game }) {
  {
    /* TODO:
        - Implement client firestore
        - shuffle players to populate currentPlayer
        - create start game function once all or enough players have joined (only available for the host)
        - update game instance with user id
        - create maps to show cards
        - use the goal obj to lay out the boilerplate cards
        - work on remaining class functions
    */
  }

  console.log(game)

  function placeholderCard(count: any) {
    const cardArr = [...Array(count)].map(
      (card) =>
        (card = {
          img: placeholderImg,
          alt: "Placeholder card image",
        })
    );

    return cardArr;
  }

  return (
    <>
      <section className="game">
        <div className="game-list">
          <ul className="game-list__section">
            <li className="game-list__section--item w-full">
              {game.players.map((player)=>{
                  return(
                    <PlayerTile player={player} goal={game.goal} key={player.id}/>
                  )
              })}
            </li>
          </ul>
        </div>
      </section>
      <section className="player fixed w-full bottom-0 bg-gray-400">
        <div className="player-ui bg-gray-300">
          <div className="player-ui__meta">
            <div className="player-tile">
              <div className="player-tile__img">
                <img src="" alt="" />
              </div>
              <div className="player-tile__meta">
                <div className="player-title__meta--score"></div>
              </div>
            </div>
          </div>
          <div className="player-ui__actions flex justify-around items-center py-4">
            <Buy />
            <Deal />
            <Draw />
          </div>
        </div>
        
        <div className="flex justify-between p-4">
            <div className="player-hand">
            {
                <Hand cards={placeholderCard(game.goal.cardCount)} type="player"/>
            }
            </div>
            <div>
                <div><Play /></div>
                <div><Discard /></div>
            </div>
        </div>
      </section>
    </>
  );
}

export default Board;
