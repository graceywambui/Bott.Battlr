import React from "react";
import BotCard from "./BotCard";


function YourBotArmy({ enlistedBots, dischargeBot, setEnlistedBots, enlistBot }) {
 
  //your bot army code here...
  const removeBot = botId => {
    // Filter out the bot with the provided ID from the enlistedBots array
    const updatedBots = enlistedBots.filter(bot => bot.id !== botId);
    setEnlistedBots(updatedBots);
  };


  return (
    <div className="ui segment inverted olive bot-army">
      <div className="ui five column grid">
        <div className="row bot-army-row">
          {enlistedBots.map(bot => (
            <BotCard onClick={enlistBot} bot={bot} />
          ))}
          Your Bot Army
        </div>
      </div>
    </div>
  );
}

export default YourBotArmy;
