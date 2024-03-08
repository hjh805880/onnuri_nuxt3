// server/middleware/blockIPs.js
import { createError, sendRedirect } from 'h3';
import fetch from 'node-fetch';

export default defineEventHandler(async (event) => {
  // 클라이언트의 IP 주소와 사용자 에이전트를 가져옵니다.
  const visitorIp = getHeader(event, 'x-forwarded-for')?.split(',').shift() || event.req.socket?.remoteAddress;
  const visitorUserAgent = getHeader(event, 'user-agent');

  try {
    // 외부 API에서 차단된 IP 주소와 사용자 에이전트 목록을 가져옵니다.
    const response = await fetch("https://ddoubleloan.com/ip_block/ip_api.php?action=get_blocked_ips_and_user_agents");
    if (!response.ok) {
      throw new Error('Failed to fetch blocked data');
    }
    const blockedData = await response.json();

    // 차단 여부를 확인합니다.
    const isBlocked = blockedData.some(entry => 
      entry.ip_address === visitorIp || entry.user_agent === visitorUserAgent
    );

    if (isBlocked) {
      // 차단된 경우, 403 페이지로 리다이렉트합니다.
      throw createError({
        statusCode: 403,
        statusMessage: "Forbidden",
        data: "Access denied"
      });
    }
  } catch (error) {
    console.error('Error:', error);
    throw createError({ statusCode: 500, statusMessage: "Internal Server Error" });
  }
});
