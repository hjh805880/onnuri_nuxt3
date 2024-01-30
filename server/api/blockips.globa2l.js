// server/middleware/blockIPs.js

import fetch from 'node-fetch';

export default async (req, res, next) => {
  // 클라이언트의 IP 주소와 사용자 에이전트를 가져옵니다.
  const visitorIp = req.headers['x-forwarded-for']?.split(',').shift() || req.socket?.remoteAddress;
  const visitorUserAgent = req.headers['user-agent'];

  try {
    // 외부 API에서 차단된 IP 주소와 사용자 에이전트 목록을 가져옵니다.
    const response = await fetch("https://ddoubleloan.com/ip_block/ip_api.php?action=get_blocked_ips_and_user_agents");
    const blockedData = await response.json();

    // 차단 여부를 확인합니다.
    const isBlocked = blockedData.some(entry => 
      entry.ip_address === visitorIp || entry.user_agent === visitorUserAgent
    );

    if (isBlocked) {
      // 차단된 경우, 403 페이지로 리다이렉트합니다.
      res.writeHead(403, { Location: '/403' });
      res.end();
    } else {
      // 차단되지 않은 경우, 다음 미들웨어로 이동합니다.
      next();
    }
  } catch (error) {
    console.error('Error:', error);
    next();
  }
};
