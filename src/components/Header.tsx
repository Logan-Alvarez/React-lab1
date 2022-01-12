import React from "react";

interface Prop {
  user: string;
}

function Header({ user }: Prop) {
  return (
    <div>
      <header>
        <h1 className="header">Ice Cream Wars</h1>
        <span className="user">Welcome {user}</span>
      </header>
    </div>
  );
}

export default Header;
