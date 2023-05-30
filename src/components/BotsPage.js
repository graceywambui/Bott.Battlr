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
  
  const releaseBot = bot => {
    const retainedBots = enlistedBots.filter(enlistedBot => enlistedBot.id !== bot.id)
    setEnlistedBots(retainedBots)
  }

  

  return (
    <div>
      <YourBotArmy enlistedBots={enlistedBots} setEnlistedBots={setEnlistedBots} releaseBot={releaseBot}  />
      <BotCollection enlistBot={enlistBot} />
    </div>
  )
}

export default BotsPage;
