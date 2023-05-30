import React, { useEffect, useState } from "react";

function BotCollection() {
  const [bots, setBots] = useState([]);
  const [enlistedBots, setEnlistedBots] = useState([]);
  // Your code here
  useEffect(() => {
    fetch("http://localhost:8002/bots")
    .then(response => response.json())
    .then(data => setBots(data))
    .catch(error => console.error(error));
  }, []);

  const enlistBot = bot => {
    if (!enlistedBots.find(enlistedBot => enlistedBot.id === bot.id)) {
      setEnlistedBots(prevEnlistedBots => [...prevEnlistedBots, bot]);
    }
  };
  
  return (
    <div className="ui four column grid">
      <div className="row">
        {bots.map(bot => (
          <div key={bot.id} className="column">
            <button>
            <img src={bot.avatar_url} alt={bot.name} />
            <h3>{bot.name}</h3>
            <p>Health: {bot.health}</p>
            <p>Damage: {bot.damage}</p>
            <p>Armor: {bot.armor}</p>
            <p>Class: {bot.bot_class}</p>
            <p>Catchphrase: {bot.catchphrase}</p>
            {/* <button onClick={() => enlistBot(bot)}>Enlist</button> */}
            </button>
          </div>
        ))}
        Collection of all bots
        
      </div>
    </div>
  );
}

export default BotCollection;
