import React, { useState } from "react";
import YourBotArmy from "./YourBotArmy";
import BotCollection from "./BotCollection";


function BotsPage() {
  const [enlistedBots, setEnlistedBots] = useState([])

  const enlistBot = bot => {
    if (!enlistedBots.find(enlistedBot => enlistedBot.id === bot.id)) {
      setEnlistedBots(prevEnlistedBots => [...prevEnlistedBots, bot]);
    }
  };

  return (
    <div>
      <YourBotArmy enlistedBots={enlistedBots} setEnlistedBots={setEnlistedBots} enlistBot={enlistBot} />
      <BotCollection enlistBot={enlistBot} />
    </div>
  )
}

export default BotsPage;
