// server/api/checkBlock.js

import fetch from "node-fetch";

export default async (req, res) => {
  const visitorIp = req.headers["x-forwarded-for"]?.split(",").shift() || req.connection?.remoteAddress;
  const visitorUserAgent = req.headers["user-agent"];

  try {
    const response = await fetch("https://ddoubleloan.com/ip_block/ip_api.php?action=get_blocked_ips_and_user_agents");
    const text = await response.text();
    const blockedData = JSON.parse(text);

    const isBlocked = blockedData.some((entry) => entry.ip_address === visitorIp || entry.user_agent === visitorUserAgent);

    if (isBlocked) {
      res.status(403).json({ blocked: true });
    } else {
      res.status(200).json({ blocked: false });
    }
  } catch (error) {
    console.error("Error:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};
