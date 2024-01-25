export default defineEventHandler(async (event) => {
    const body = await useBody(event);
    // body 변수에 폼 데이터가 담겨 있습니다.
  
    // 이메일 전송 로직 구현...
    // 예: nodemailer 라이브러리를 사용하여 이메일 전송
  
    return {
      success: true,
      message: '이메일 전송 성공',
    };
  });
  