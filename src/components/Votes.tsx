import React, { useState } from "react";

function Votes() {
  const [voteBlueMoon, setVoteBlue] = useState<number>(0);
  const [voteVanilla, setVoteVanilla] = useState<number>(0);
  const [voteSuperman, setVoteSuperman] = useState<number>(0);
  let total = voteBlueMoon + voteVanilla + voteSuperman;
  let blueMoonAverage = (voteBlueMoon / total) * 100 || 0;
  let vanillaAverage = (voteVanilla / total) * 100 || 0;
  let SupermanAverage = (voteSuperman / total) * 100 || 0;
  return (
    <section>
      <h2>Vote Here</h2>
      <button onClick={() => setVoteBlue(voteBlueMoon + 1)}>Blue Moon</button>
      <button onClick={() => setVoteVanilla(voteVanilla + 1)}>Vanilla</button>
      <button onClick={() => setVoteSuperman(voteSuperman + 1)}>
        SuperMan
      </button>
      {total === 0 ? (
        <p>No votes yet</p>
      ) : (
        <div>
          <div className={voteBlueMoon === 0 ? "empty" : "random"}>
            <p>
              Blue Moon: {voteBlueMoon} ({blueMoonAverage.toFixed(1)}%)
            </p>
            <div
              style={{ width: `${voteBlueMoon}%` }}
              className="bluemoon"
            ></div>
          </div>
          <div className={voteVanilla === 0 ? "empty" : "random"}>
            <p>
              Vanilla: {voteVanilla} ({vanillaAverage.toFixed(1)}%)
            </p>
            <div style={{ width: `${voteVanilla}%` }} className="vanilla"></div>
          </div>
          <div className={voteSuperman === 0 ? "empty" : "random"}>
            <p>
              SuperMan: {voteSuperman} ({SupermanAverage.toFixed(1)}%)
            </p>
            <div
              style={{ width: `${voteSuperman}%` }}
              className="superman"
            ></div>
          </div>
        </div>
      )}
    </section>
  );
}

export default Votes;
