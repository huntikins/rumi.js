import { Fragment } from "react";
import Nav from "components/nav/Nav";

const Game: React.FC = ({children}) => {
  return (
    <Fragment>
      <Nav />
      <main>
        {children}
      </main>
    </Fragment>
  );
}

export default Game