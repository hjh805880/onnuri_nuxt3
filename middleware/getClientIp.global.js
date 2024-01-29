export default function (req, res, next) {
  if (!req) {
    return;
  }
  const ip = req.headers && (req.headers["x-forwarded-for"] || req.connection.remoteAddress);
  // IP 주소를 req 객체에 추가
  req.clientIp = ip;
  if (typeof next === 'function') {
    next();
  }
}
