import { Fragment } from "react";
import Nav from "components/nav/Nav";

const App: React.FC = ({children}) => {
  return (
    <Fragment>
      <Nav />
      <main className="pt-20 h-screen">
        {children}
      </main>
    </Fragment>
  );
}

export default App