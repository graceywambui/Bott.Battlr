import React, { useEffect, useState } from "react";
import BotCard from "./BotCard";

function BotCollection({ enlistBot }) {
  const [bots, setBots] = useState([]);
  // const [enlistedBots, setEnlistedBots] = useState([]);
  // Your code here
  useEffect(() => {
    fetch("http://localhost:8002/bots")
    .then(response => response.json())
    .then(data => setBots(data))
    .catch(error => console.error(error));
  }, []);

  // const enlistBot = bot => {
  //   if (!enlistedBots.find(enlistedBot => enlistedBot.id === bot.id)) {
  //     setEnlistedBots(prevEnlistedBots => [...prevEnlistedBots, bot]);
  //   }
  // };
  
  return (
    <div className="ui four column grid">
      <div className="row">
        {bots.map(bot => 
          <BotCard onClick={enlistBot} bot={bot} /> )}
        Collection of all bots
        
      </div>
    </div>
  );
}

export default BotCollection;
