<template>
  <div class="after:content-[url('~/assets/img/form_visual_bg.webp')] z-20 after:-z-10 after:bottom-[30%] relative after:absolute after:-scale-x-100">
    <div class="px-4">
      <div data-aos="fade-up" data-aos-duration="1200" class="text-black-800 shadow-black-500/80 w-full px-6 py-12 bg-white rounded-md shadow-md">
        <form id="calcForm" @submit="calculateMonthlyPayment" class="" autocomplete="off">
          <div class="text-black-700 flex flex-col items-start justify-center gap-4 text-xl font-bold">
            <div class="whitespace-nowrap flex items-center justify-start w-full space-x-2">
              <div class="rowCenter border-primary-500 text-primary-500 h-14 w-[calc(90%-60px)] px-4 py-2 space-x-2 border-2 rounded-md">
                <i class="fa-solid fa-coins"></i>
                <input v-model="calcPrice" type="text" placeholder="1,000" required class="ring-0 focus:ring-0 focus:border-0 placeholder:font-medium w-full px-2 text-xl font-bold border-none" />
                <span class="font-bold">만원</span>
              </div>
              <span class="">을</span>
            </div>

            <div class="whitespace-nowrap flex items-center justify-start w-full space-x-2">
              <div class="rowCenter border-primary-500 text-primary-500 h-14 w-[calc(90%-60px)] py-2 pl-4 pr-1 space-x-2 border-2 rounded-md">
                <i class="fa-solid fa-calendar-days"></i>
                <select v-model="calcPeriod" required class="ring-0 form-select focus:ring-0 focus:border-0 placeholder:font-medium w-full px-2 text-xl font-bold border-none">
                  <option value="12" selected>12개월</option>
                  <option value="24">24개월</option>
                  <option value="36">36개월</option>
                  <option value="48">48개월</option>
                  <option value="60">60개월</option>
                  <option value="72">72개월</option>
                  <option value="84">84개월</option>
                  <option value="96">96개월</option>
                  <option value="108">108개월</option>
                  <option value="120">120개월</option>
                </select>
              </div>
              <span class="">에 걸쳐</span>
            </div>

            <div class="whitespace-nowrap flex items-center justify-start w-full space-x-2">
              <div class="rowCenter border-primary-500 text-primary-500 h-14 w-[calc(90%-60px)] px-4 py-2 space-x-2 border-2 rounded-md">
                <i class="fa-solid fa-chart-simple"></i>
                <input v-model="calcPercent" type="text" placeholder="6.8" required class="ring-0 focus:ring-0 focus:border-0 placeholder:font-medium w-full px-2 text-xl font-bold border-none" />
                <span class="font-bold">%</span>
              </div>
              <span class="">의 금리로</span>
            </div>

            <span class="text-black-700 pl-[2px] mt-3">매달 <b class="underline-offset-8 text-primary-500 underline">일정한 금액</b>을 상환한다면?</span>

            <button type="submit" class="bg-gradient-to-tl to-primary-500 from-secondary-500 rowCenter px-8 py-2 mt-3 font-bold text-white rounded-md">
              <i class="fa-solid fa-calculator mr-2"></i>
              월 납입금 계산하기
            </button>

            <img src="~/assets/img/calc_effect.webp" alt="온누리대부중개 무직자대출 소액대출 비대면대출" class="w-full mt-4" />

            <div class="text-black-800 pl-[2px] flex flex-col items-start justify-center mt-2 font-bold leading-snug">
              <span class="bg-black-500 px-3 py-1 text-sm font-normal text-white rounded-full">이자 포함 금액</span>
              <span class="mt-2 text-2xl">월 상환금액은</span>
              <div class="rowCenter -mt-2">
                <span id="calcResult" class="text-primary-500 underline-offset-4 text-3xl font-extrabold underline">{{ monthlyPayment }}</span>
                <span class="text-2xl">원 입니다.</span>
              </div>
            </div>
            <div class="text-black-500 flex flex-col items-start justify-center mt-2 space-y-2 text-sm font-light text-left">
              <div class="rowCenter w-fit space-x-2">
                <i class="fa-solid fa-circle-exclamation"></i>
                <span class=""
                  >납입금은 <NuxtLink to="https://help.3o3.co.kr/hc/ko/articles/17606680473753-%EC%9B%90%EA%B8%88%EA%B7%A0%EB%93%B1%EC%83%81%ED%99%98VS%EC%9B%90%EB%A6%AC%EA%B8%88%EA%B7%A0%EB%93%B1%EC%83%81%ED%99%98-%EC%B0%A8%EC%9D%B4%EC%A0%90-1%EB%B6%84-%EC%9A%94%EC%95%BD" target="_blank" class="underline-offset-4 text-primary-500 font-medium underline" rel="noopener noreferrer nofollow">원리금 균등상환 <i class="fa-solid fa-arrow-up-right-from-square fa-xs mr-1"></i></NuxtLink>으로 계산되었으며, 금리 할인 혜택은 포함되어 있지 않습니다.</span
                >
              </div>
              <div class="rowCenter w-fit space-x-2">
                <i class="fa-solid fa-circle-exclamation"></i>
                <span class=""
                  >정확한 개인별 한도 및 금리는 한도조회를 통해 확인하실 수 있으며,
                  <div class="text-primary-500 font-medium">한도조회 시 개인신용평점에는 영향이 없습니다.</div></span
                >
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      calcPrice: "",
      calcPeriod: "12",
      calcPercent: "",
      monthlyPayment: "000",
    };
  },
  methods: {
    calculateMonthlyPayment(event) {
      event.preventDefault();

      const loanAmount = parseInt(this.calcPrice.replace(/,/g, "")) * 10000;
      const interestRate = parseFloat(this.calcPercent) / 100;
      const loanPeriod = parseInt(this.calcPeriod);

      const monthlyInterestRate = interestRate / 12;
      const monthlyPayment = (loanAmount * monthlyInterestRate) / (1 - Math.pow(1 + monthlyInterestRate, -loanPeriod));

      this.monthlyPayment = monthlyPayment
        .toFixed(0)
        .toString()
        .replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    },
  },
};
</script>
