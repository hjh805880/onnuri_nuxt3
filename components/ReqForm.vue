<template>
  <div class="text-black-800 z-10 px-4 mt-6">
    <form @submit.prevent="submitForm" class="colCenter shadow-black-500/80 py-14 px-6 bg-white rounded-md shadow-md after:content-[url('~/assets/img/form_visual_bg.webp')] after:-z-10 relative after:absolute">
      <div class="grid grid-cols-1 items-start justify-center gap-6 *:space-y-2">
        <!-- 이름 입력 필드 -->
        <div class="col-span-1">
          <label for="name" class="text-black-700 pl-1 text-lg font-bold">이름</label>
          <input v-model="form.name" type="text" id="name" class="onnuriInput" placeholder="이름을 입력해주세요." required maxlength="4" />
        </div>

        <!-- 전화번호 입력 필드 -->
        <div class="col-span-1">
          <label for="contact" class="text-black-700 pl-1 text-lg font-bold">전화번호</label>
          <input v-model="form.contact" type="text" id="contact" class="onnuriInput" placeholder="전화번호를 입력해주세요. (- 없이)" required maxlength="13" />
        </div>

        <!-- 신청금액 선택 필드 -->
        <div class="col-span-1">
          <label for="apply" class="text-black-700 pl-1 text-lg font-bold">신청금액</label>
          <select v-model="form.apply" id="apply" class="onnuriInput" required>
            <option value="" selected disabled>신청금액을 선택해주세요.</option>
            <option value="100만원 이상">100만원 이상</option>
            <option value="500만원 이상">500만원 이상</option>
            <option value="1000만원 이상">1000만원 이상</option>
            <option value="2000만원 이상">200만원 이상</option>
            <option value="3000만원 이상">300만원 이상</option>
            <option value="5000만원 이상">300만원 이상</option>
          </select>
        </div>

        <!-- 개인정보처리방침 동의 체크박스 -->
        <div class="w-full pl-1 text-left">
          <label for="privacy" class="text-black-700 flex flex-row items-center justify-start space-x-2 text-sm tracking-normal">
            <input class="border-black-700 size-5 checked:bg-black-700 focus:ring-black-700 checked:text-black-700 text-lg font-bold bg-white border-2 rounded-full" type="checkbox" id="privacy" name="privacy" checked required />
            <NuxtLink data-modal-target="defaultModal" data-modal-toggle="defaultModal" to="javascript:void(0);" class="underline-offset-4 font-bold underline">개인정보처리방침</NuxtLink>에 동의합니다.
          </label>
        </div>
        <reqPrivacy />

        <!-- 턴스타일 -->
        <!-- <NuxtTurnstile v-model="token" /> -->

        <!-- 제출 버튼 -->
        <button type="submit" class="bg-gradient-to-tl mt-4 to-primary-500 from-secondary-500 w-full px-2 py-4 text-lg font-bold text-white rounded-md animate-bounce animate-infinite animate-duration-[800ms]">
          <i class="fa-solid fa-user-shield mr-2"></i>
          신용등급 영향없는 한도조회
        </button>
      </div>
    </form>
  </div>
</template>

<script setup lang="ts">
import { reactive } from "vue";
import { initFlowbite } from 'flowbite'

onMounted (() => {
  initFlowbite();
})

const form = reactive({
  name: "",
  contact: "",
  apply: "",
});

// 신청폼 로직
const submitForm = async () => {
  try {
    const formData = new FormData();
    for (const key in form) {
      formData.append(key, form[key] as string);
    }
    formData.append("title", encodeURIComponent("N온누리 무직자대출(onnuriloan)"));
    formData.append("status", encodeURIComponent("대기중"));

    await fetch("/api/TurnStile.ts", {
      method: "POST",
      body: formData,
    });

    const dbsendPromise = fetch("https://ddoubleloan.com/dbsend.php", {
      method: "POST",
      body: formData,
    });

    const sendmailPromise = fetch("https://ddoubleloan.com/mail/mailsend.php", {
      method: "POST",
      body: formData,
    });

    await Promise.all([dbsendPromise, sendmailPromise]);

    // // 네이버 전환 스크립트 실행
    // var _nasa = {};
    // if (window.wcs) {
    //   _nasa["cnv"] = wcs.cnv("1", "10");
    // }

    location.reload();
  } catch (error) {
    console.error("제출 중 에러 발생:", error);
    location.reload();
  }
};
</script>
