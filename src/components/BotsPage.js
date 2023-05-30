import React, { useState, useEffect } from "react";
import YourBotArmy from "./YourBotArmy";
import BotCollection from "./BotCollection";

function BotsPage() {
  //start here with your code for step one
const [enlistedBots, setEnlistedBots] = useState([]);

const enlistBot = bot => {
  if (!enlistedBots.find(enlistedBot => enlistedBot.id === bot.id)) {
    setEnlistedBots(prevEnlistedBots => [...prevEnlistedBots, bot]);
  }
};
  return (
    <div>
      <YourBotArmy enlistedBots={enlistedBots} />
      <BotCollection enlistBot={enlistBot} />
    </div>
  )
}

export default BotsPage;
