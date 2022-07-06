// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import { config } from "../../js/config";

const handler = async (req, res) => {
  const steamId = req.body.steamId;
  const steamApiKey = config.apiKey;
  if (!steamId) {
    res.status(400).send("Missing steamId");
    return;
  }

  const url = `https://api.steampowered.com/ISteamUser/GetPlayerSummaries/v2/?key=${steamApiKey}&steamids=${steamId}`;

  const response = await fetch(url);

  const data = await response.json();

  res.status(200).json(data.response.players[0]);
  res.end();
};

export default handler;
