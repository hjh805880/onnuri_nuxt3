export default async (context) => {
  if (process.server) {
    const { req, redirect } = context;

    if (!req) {
      return;
    }

    const visitorIP = req.headers["x-forwarded-for"] || req.connection.remoteAddress;
    const visitorUserAgent = req.headers["user-agent"];

    const apiURL = "https://ddoubleloan.com/ip_block/ip_api.php?action=get_blocked_ips_and_user_agents";
    const response = await fetch(apiURL);
    const blockedIPsAndUserAgents = await response.json();

    const isBlocked = blockedIPsAndUserAgents.some((entry) => 
      entry.ip_address === visitorIP || entry.user_agent === visitorUserAgent
    );

    if (isBlocked) {
      return redirect("/403");
    }
  }
};
