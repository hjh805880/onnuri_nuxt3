<template>
  <!-- 푸터시작 -->
  <footer id="footer" class="bg-black-800 break-keep w-full px-6 py-24 text-left text-white">
    <div class="flex flex-col space-y-6 text-lg font-light">
      <img src="~/assets/img/logo_w.svg" alt="온누리대부중개 무직자대출 소액대출 비대면대출" class="w-[80%] mb-4" />
      <div class="opacity-80 space-y-6">
        <p class="">대출금리 : 연 20%이내 (담보대출에 한해 심사기준에 따라 차등적용) 연체이율 : 연 20% 이내 대출중개수수료 없음 중개수수료를 요구하거나 받는것은 불법으로 대출과 관련된 일체 수수료를 받지 않습니다. 취급수수료 등 기타부대비용 없음 상환방법 : 원리금균등상환방식, 만기일시상환방식 이자 외 추가비용 없음 단, 일부 담보대출상품에 한해 저당설정, 해지비용 및 조기상환수수료가 발생할수 있습니다. 조기상환조건 : 대출실행일로 부터 1년 이내 상환시 최초 대출금 2% 적용, 단 이자와 조기상환 수수료의 합산액은 20%를 초과하지 않음. 이 사이트에서 광고되는 상품들의 상환기간은 모두 60일 이상이며 최장 상환기간 120개월 미만입니다. 대출 총비용 예시는 다음과 같습니다. 1,000,000원을 12개월 동안 이자 20%, 최대 이자율 20%로 대출할시 총 상환금액은 1,111,614원입니다. (대출 상품에 따라 달라질 수 있습니다.)</p>
        <p class="font-medium text-red-500">“과도한 빚은 당신에게 큰 불행을 안겨줄 수 있습니다. 중개수수료를 요구하거나 받는 것은 불법입니다.” “대출 시 귀하의 신용등급이 하락할 수 있습니다.”</p>
      </div>
      <ul class="space-y-2 font-medium">
        <li class="">대부중개업등록번호 : 2024-4090465-25-5-00001(대부중개업)</li>
        <li class="">사업자번호 : 649-44-01017</li>
        <li class="">대표자 : 李洙景</li>
        <li class="">상호 : 온누리대부중개</li>
        <li class="">주소 : 경기도 김포시 김포한강1로51번길 18, 701-35호(장기동 신우프라자)</li>
        <li class="">등록기관 : 일자리경제과: 031-980-2563</li>
        <li class="">상담전화 : 010-3468-3554</li>
      </ul>
      <p class="">금리비교 컨설팅은 100% 무료상담입니다.</p>
      <p class="opacity-60 whitespace-nowrap text-sm">Copyright ⓒ 온누리대부중개. All rights reserved.</p>
    </div>
  </footer>
</template>

<script setup lang="ts">
import AOS from "aos";
import "aos/dist/aos.css";

onMounted(() => {
  AOS.init({
    once: false,
  });
});
</script>
