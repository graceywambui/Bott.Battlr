import React from "react";

function YourBotArmy({ enlistedBots, dischargeBot }) {
  //your bot army code here...

  return (
    <div className="ui segment inverted olive bot-army">
      <div className="ui five column grid">
        <div className="row bot-army-row">
          {enlistedBots.map(bot => (
            <div key={bot.id} className="column">
              <button onClick={() => dischargeBot(bot.id)} className="ui red button">
                x
              </button>
              <img src={bot.avatar_url} alt={bot.name} />
              <h3>{bot.name}</h3>
              <p>Health: {bot.health}</p>
              <p>Damage: {bot.damage}</p>
              <p>Armor: {bot.armor}</p>
              <p>Class: {bot.bot_class}</p>
              <p>Catchphrase: {bot.catchphrase}</p>
            </div>
          ))}
          Your Bot Army
        </div>
      </div>
    </div>
  );
}

export default YourBotArmy;
