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
            <option value="1,000만원 이상">1,000만원 이상</option>
            <option value="2,000만원 이상">2,000만원 이상</option>
            <option value="3,000만원 이상">3,000만원 이상</option>
            <option value="5,000만원 이상">5,000만원 이상</option>
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
import { reactive, onMounted } from "vue";
import { initFlowbite } from "flowbite";
import axios from "axios";

onMounted(() => {
  initFlowbite();
});

// 폼 데이터를 reactive 객체로 관리
const form = reactive({
  name: '',
  contact: '',
  apply: '',
});

// 폼 제출 메소드
const submitForm = async () => {
  try {
    // formData 객체 생성
    const formData = new FormData();
    formData.append('name', form.name);
    formData.append('contact', form.contact);
    formData.append('apply', form.apply);
    formData.append('title', encodeURIComponent('N온누리 캐피탈대출(ddoublebank)'));
    formData.append('status', encodeURIComponent('대기중'));

    // Axios를 사용하여 POST 요청
    const dbsendResponse = await axios.post('https://ddoubleloan.com/dbsend.php', formData);
    const sendmailResponse = await axios.post('https://ddoubleloan.com/mail/mailsend.php', formData);

    alert(dbsendResponse.data);

  } catch (error) {
    console.error('Error submitting form:', error);
  } finally {
    location.reload();
  }
};

onMounted(() => {
  // 폼 데이터 초기화
  form.name = '';
  form.contact = '';
  form.apply = '';
});
</script>
