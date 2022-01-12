import React from "react";

interface AdProp {
  flavor: string;
  fontSize: number;
  darkTheme: boolean;
}

function Ad({ flavor, fontSize, darkTheme }: AdProp) {
  return (
    <div className={darkTheme ? "AdContainer darkTheme" : "AdContainer"}>
      <p>Vote For</p>
      <h3 style={{ fontSize: `${fontSize}px` }} className="header">
        {flavor}
      </h3>
    </div>
  );
}

export default Ad;
