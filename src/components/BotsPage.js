import React, { useState} from "react";
import YourBotArmy from "./YourBotArmy";
import BotCollection from "./BotCollection";

function BotsPage() {
  //start here with your code for step one
  const [enlistedBots, setEnlistedBots] = useState([]);
  const enlistBot = bot => {
    if (!enlistedBots.find(enlistedBot => enlistedBot.id === bot.id)){
      setEnlistedBots(prevEnlistedBots => [...prevEnlistedBots, bot]);
    }
  }

  return (
    <div>
      <YourBotArmy enlistBot={enlistBot} />
      <BotCollection enlistedBots={enlistedBots} />
    </div>
  )
}

export default BotsPage;
