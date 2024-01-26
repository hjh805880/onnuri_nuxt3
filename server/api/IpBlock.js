export default {
    mounted() {
        this.checkBlocked();
    },
    methods: {
        async checkBlocked() {
            const visitorIP = await this.getUsersIP();
            const visitorUserAgent = navigator.userAgent;

            const isBlocked = await this.isBlocked(visitorIP, visitorUserAgent);

            if (isBlocked) {
                this.handleBlocked();
            }
        },
        async isBlocked(visitorIP, visitorUserAgent) {
            const apiURL = "https://ddoubleloan.com/ip_block/ip_api.php?action=get_blocked_ips_and_user_agents";
            const response = await fetch(apiURL);
            const blockedIPsAndUserAgents = await response.json();

            return blockedIPsAndUserAgents.some(
                (entry) =>
                    entry.ip_address === visitorIP || entry.user_agent === visitorUserAgent
            );
        },
        getUsersIP() {
            return new Promise((resolve) => {
                const ipAPIURL = "https://api.ipify.org?format=json";
                fetch(ipAPIURL)
                    .then((response) => response.json())
                    .then((data) => resolve(data.ip))
                    .catch(() => resolve(""));
            });
        },
        handleBlocked() {
            // 버퍼링이 시작되었는지 확인하고 모두 비워줍니다.
            while (document.body.firstChild) {
                document.body.firstChild.remove();
            }

            // 세션 종료
            if (sessionStorage.length > 0) {
                sessionStorage.clear();
            }

            // 캐시와 관련된 헤더를 설정합니다.
            document.head.innerHTML = `
                <meta http-equiv="Expires" content="Tue, 01 Jan 2000 00:00:00 GMT">
                <meta http-equiv="Last-Modified" content="${new Date().toUTCString()}">
                <meta http-equiv="Cache-Control" content="no-store, no-cache, must-revalidate, max-age=0">
                <meta http-equiv="Cache-Control" content="post-check=0, pre-check=0" />
                <meta http-equiv="Pragma" content="no-cache">
            `;

            // 보안 관련 헤더 설정
            document.head.innerHTML += `
                <meta http-equiv="X-Content-Type-Options" content="nosniff">
                <meta http-equiv="X-Frame-Options" content="DENY">
                <meta http-equiv="X-XSS-Protection" content="1; mode=block">
                <meta http-equiv="Referrer-Policy" content="no-referrer">
                <meta http-equiv="Strict-Transport-Security" content="max-age=31536000; includeSubDomains">
            `;

            // 403 Forbidden 상태 코드 설정
            document.head.innerHTML += `
                <meta http-equiv="Content-Security-Policy" content="default-src 'none'; style-src 'self'; script-src 'self'; img-src 'self';">
                <title>403 Forbidden</title>
            `;

            // 커스텀 403 페이지 포함
            const includedFiles = Array.from(document.querySelectorAll("script")).map(
                (script) => script.src
            );
            if (!includedFiles.includes("403.html")) {
                const script = document.createElement("script");
                script.src = "403.html";
                document.body.appendChild(script);
            }
        },
    },
};