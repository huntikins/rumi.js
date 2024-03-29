import { turnStart } from "game/actions";

function Deal({ game, setRumi }) {
  return (
    <button
      onClick={() => turnStart(game, setRumi)}
      type="button"
      className="text-center transition-all border-2 border-indigo-600 bg-indigo-600 hover:bg-white hover:text-indigo-600 py-2 px-12 text-white my-2"
    >
      Deal
    </button>
  );
}

export default Deal;
