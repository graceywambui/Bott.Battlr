import React, { useEffect, useState } from "react";
import BotCard from "./BotCard";

function BotCollection({ enlistBot }) {
  const [bots, setBots] = useState([]);
  // const [enlistedBots, setEnlistedBots] = useState([]);
  // Your code here
  useEffect(() => {
    fetch("http://localhost:8002/bots")
    .then(response => response.json())
    .then(dataReceived => setBots(dataReceived))
    .catch(error => console.error(error));
  }, []);

  
  return (
    <div className="ui four column grid">
      <div className="row">
        {bots.map(bot => 
          <BotCard onClick={enlistBot} bot={bot} key={bot.id} /> )}
        Collection of all bots
        
      </div>
    </div>
  );
}

export default BotCollection;
