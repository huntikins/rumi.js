import { useState } from "react";

function Discard({ game, setRumi, toDiscard, clearSelection, discardActive, setDiscardActive}) {

  function handleDiscard(){
    if(discardActive && toDiscard != null){
      setDiscardActive(false)
      // state has been updated
      // remove card from players hand and into the discards array then update remote with new values
    } else {
      clearSelection(null)
      setDiscardActive(true)
    }
  }

  return (
    <button
      onClick={handleDiscard}
      type="button"
      className={(toDiscard != null ? 'animate-pulse' : '') + ' text-center transition-all border-2 border-indigo-600 bg-indigo-600 hover:bg-white hover:text-indigo-600 py-2 px-12 text-white my-2'}
    >
      Discard
    </button>
  );
}

export default Discard;
