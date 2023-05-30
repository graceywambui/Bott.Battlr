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

  // Discharge a bot from their service forever, by clicking the red button marked
  // "x", which would delete the bot both from the backend and from the
  // `YourBotArmy` on the frontend.

  const dischargeBot = bot => {
    releaseBot (bot) 
    fetch('http://localhost:8002/bots/' + bot.id, {method:'DELETE'})
  }



  return (
    <div>
      <YourBotArmy enlistedBots={enlistedBots} setEnlistedBots={setEnlistedBots} releaseBot={releaseBot} discharge={dischargeBot}  />
      <BotCollection enlistBot={enlistBot} />
    </div>
  )
}

export default BotsPage;
