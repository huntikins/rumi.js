const Tutorial: React.FC = () => {
  return (
    <div className="tutorial">
      <div className="tutorial-step py-4">
        <h2 className="text-center font-bold text-6xl mb-2">rumi.js</h2>
        <p className="text-center">
          rumi.js is a card game based on the collecting of sets and runs. Each
          round expects a certain combination of either and the first person to
          empty their hand wins.
        </p>
      </div>
      <hr />
      <div className="tutorial-step py-4">
        <div className="tutorial-step__details px-4 md:px-12">
          <h3 className="text-center font-bold">Sets</h3>
          <p className="mb-4">
            At least 3 of the same card type, suit does not matter here! If you
            have more than 3 that is even better, but 3 is the minimum to be
            considered a complete set.
          </p>
          <h3 className="text-center font-bold">Runs</h3>
          <p>
            Runs are a set of 4 cards that come in sequential order. Think about
            a royal flush - and not what the queen does when she has
            <em>the runs</em>, but 4 cards in order like so J, Q, K, A. Runs can
            start and end with an Ace, but cannot extend past in the opposite
            direction. Q, K, A, 2, 3 is not a valid run.
          </p>
        </div>
      </div>
      <hr />
      <div className="tutorial-step py-4">
        <p className="text-center pb-6">
          Every turn you discard one card from your hand, other players do this
          also and you may have an opportunity to get the card you need if
          someone discards by buying.
        </p>
        <div className="tutorial-step__details px-4 md:px-12">
          <h3 className="text-center font-bold">Discards</h3>
          <p className="mb-4">
            Every turn starts with the player drawing a card and ends with the
            player discarding a single card into their hand. Discards are placed
            in a pile and any player can attempt to buy the card that had been
            discarded.
          </p>
          <h3 className="text-center font-bold">Buying</h3>
          <p>
            If another player discards a card you have the opportunity to buy it
            from the discard pile. At the beginning turn, you can either take
            the discard or draw a new card, if it is not your turn and you buy,
            you must drw 1 additional card. The player who has the closest turn
            has priority
          </p>
        </div>
      </div>
      <hr />
      <div className="tutorial-step py-4">
        <h3 className="text-center font-bold">Points</h3>
        <p className="text-center pb-6">
          If you are left with cards in your hand when the round ends, your
          cards are calculated and a score is returned based on what cards you
          have. The goal of the game is to have the least amount of points.
        </p>
        <div className="tutorial-step__details px-4 md:px-12">
          <ul className="mb-4 text-center">
            <li>1-9 = 5 points</li>
            <li>10, J, Q, K = 10 points</li>
            <li>A = 20 points</li>
            <li>Joker = 50 points</li>
          </ul>
        </div>
      </div>
      <hr />
      <div className="tutorial-step py-4">
        <p className="text-center pb-6">
          If you are left with cards in your hand when the round ends, your
          cards are calculated and a score is returned based on what cards you
          have. The goal of the game is to have the least amount of points.
        </p>
        <div className="tutorial-step__details px-4 md:px-12">
          <h3 className="text-center font-bold">Points</h3>
          <ul className="mb-4 text-center">
            <li>1-9 = 5 points</li>
            <li>10, J, Q, K = 10 points</li>
            <li>A = 20 points</li>
            <li>Joker = 50 points</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Tutorial;
