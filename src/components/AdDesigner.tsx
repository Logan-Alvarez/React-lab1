import React, { useState } from "react";
import Ad from "./Ad";

function AdDesigner() {
  let [flavor, setFlavor] = useState<string>("");
  let [theme, setTheme] = useState<boolean>(false);
  let [fontSize, setFontSize] = useState<number>(40);

  let addTheme = "";
  function AdBlueMoon() {
    setFlavor((flavor = "Blue Moon"));
  }

  function AdVanilla() {
    setFlavor((flavor = "Vanilla"));
  }

  function AdSuperMan() {
    setFlavor((flavor = "SuperMan"));
  }

  if (theme) {
    addTheme = "darkTheme";
  }

  return (
    <div className="AdDesigner">
      <h2 className="header">Ad Designer</h2>
      {/* <div className={"AdContainer " + addTheme}>
        <p>Vote For</p>
        <h3 style={{ fontSize: `${fontSize}px` }} className="header">
          {flavor}
        </h3>
      </div> */}
      <Ad flavor={flavor} fontSize={fontSize} darkTheme={theme} />
      <section className="support">
        <h4>What to support</h4>
        <button onClick={AdBlueMoon} disabled={flavor === "Blue Moon"}>
          Blue Moon
        </button>
        <button onClick={AdVanilla} disabled={flavor === "Vanilla"}>
          Vanilla
        </button>
        <button onClick={AdSuperMan} disabled={flavor === "SuperMan"}>
          SuperMan
        </button>
      </section>
      <section>
        <h4>Color Theme</h4>
        <button onClick={() => setTheme((theme = false))} disabled={!theme}>
          Light
        </button>
        <button onClick={() => setTheme((theme = true))} disabled={theme}>
          Dark
        </button>
      </section>
      <section>
        <h4>Font Size</h4>
        <button onClick={() => setFontSize(fontSize - 1)}>Down</button>
        <span>{fontSize} </span>
        <button onClick={() => setFontSize(fontSize + 1)}>Up</button>
      </section>
    </div>
  );
}

export default AdDesigner;
