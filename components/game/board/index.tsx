import Play from "../actions/Play";
import Buy from "../actions/Buy";
import Deal from "../actions/Deal";
import Discard from "../actions/Discard";
import Draw from "../actions/Draw";
import Hand from "../Hand";

import GameDeck from "game/models/GameDeck";

function Board({game}) {

    const deck = new (GameDeck as any)(2)
   const cards = deck.genDeck('rumi')
    game.cards = cards

    {/* TODO:
        - Implement client firestore
        - update game instance with user id
        - create maps to show cards
        - use the goal obj to lay out the boilerplate cards
        - work on remaining class functions
    */}

    console.log(game)
  return (
    <>
      <section className="game">
        <div className="game-list">
          <ul className="game-list__section">
            <li className="game-list__section--item w-full">
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
                    <div className="player-title__meta--score">
                        0
                    </div>
                  </div>
                </div>
                <div className="player-title__cards">
                  <div className="player-title__cards--runs">
                    <Hand />
                  </div>
                  <div className="player-title__cards--sets">
                    <Hand />
                  </div>
                  <div className="player-title__cards--discards px-2">
                    4 Discards
                  </div>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </section>
      <section className="player fixed w-full bottom-0">
        <div className="player-ui bg-gray-200">
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
            <Discard />
            <Draw />
            <Play />
          </div>
        </div>
        <div className="player-hand">
          <Hand />
        </div>
      </section>
    </>
  );
}

export default Board;
