import { Carousel } from "./Carousel";
import Slide from "./Slide";

function Tutorial() {
  return (
    <>
      <Carousel>
        <Slide>
          <div>
            <h3>rumi.js</h3>
            <p>
              rumi.js is a card game based on the collecting of sets and runs.
              Each round expects a certain combination of either and the first
              person to empty their hand wins.
            </p>
          </div>
        </Slide>
        <Slide>
          <div>
            <h3>Sets & Runs</h3>
            <p>In order to win, you will need to know about sets & runs</p>
            <div>
              <h4>Sets</h4>
              <p>
                At least 3 of the same card type, suit does not matter here! If
                you have more than 3 that is even better, but 3 is the minimum
                to be considered a complete set.
              </p>
              <h4>Runs</h4>
              <p>
                Runs are a set of 4 cards that come in sequential order. Think
                about a royal flush - and not what the queen does when she has
                <em>the runs</em>, but 4 cards in order like so J, Q, K, A. Runs can
                start and end with an Ace, but cannot extend past in the
                opposite direction. Q, K, A, 2, 3 is not a valid run.
              </p>
            </div>
          </div>
        </Slide>
        <Slide>
        <div>
            <h3>Discarding & Buying</h3>
            <p>Every turn you discard one card from your hand, other players do this also and you may have an opportunity to get the card you need if someone discards by buying.</p>
            <div>
              <h4>Sets</h4>
              <p>
                At least 3 of the same card type, suit does not matter here! If
                you have more than 3 that is even better, but 3 is the minimum
                to be considered a complete set.
              </p>
              <h4>Runs</h4>
              <p>
                Runs are a set of 4 cards that come in sequential order. Think
                about a royal flush - and not what the queen does when she has
                <em>the runs</em>, but 4 cards in order like so J, Q, K, A. Runs can
                start and end with an Ace, but cannot extend past in the
                opposite direction. Q, K, A, 2, 3 is not a valid run.
              </p>
            </div>
          </div>
        </Slide>
      </Carousel>
    </>
  );
}

export default Tutorial;
