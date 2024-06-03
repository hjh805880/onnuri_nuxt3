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

        <!-- 대출상품 선택 필드 -->
        <div class="col-span-1">
          <label for="kind" class="text-black-700 pl-1 text-lg font-bold">대출상품</label>
          <select v-model="form.kind" name="kind" id="kind" class="onnuriInput" required>
              <option name="kind" value="" selected disabled>대출상품을 선택해주세요.</option>
              <option name="kind" value="무직자대출">무직자대출</option>
              <option name="kind" value="여성/주부대출">여성/주부대출</option>
              <option name="kind" value="군인대출">군인대출</option>
              <option name="kind" value="청년대출">청년대출</option>
              <option name="kind" value="직장인대출">직장인대출</option>
              <option name="kind" value="사업자대출">사업자대출</option>
              <option name="kind" value="프리랜서대출">프리랜서대출</option>
          </select>
      </div>

        <!-- 신청금액 선택 필드 -->
        <div class="col-span-1">
          <label for="apply" class="text-black-700 pl-1 text-lg font-bold">신청금액</label>
          <select v-model="form.apply" id="apply" class="onnuriInput" required>
            <option name="" value="" selected disabled>신청금액을 선택해주세요.</option>
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

        <!-- 제출 버튼 -->
        <button type="submit" class="bg-gradient-to-tl mt-4 to-primary-500 from-secondary-500 w-full px-2 py-4 text-lg font-bold text-white rounded-md animate-bounce animate-infinite animate-duration-[800ms]">
          <i class="fa-solid fa-user-shield mr-2"></i>
          신용등급 영향없는 한도조회
        </button>
        <span class="text-black-500 pl-1 text-sm font-light">
          ※ 연체/신불 6일이상 진행불가.<br />
          ※ 명의도용 및 허위 신청 시 법적인처벌을 받을 수 있습니다.
        </span>
      </div>
    </form>
  </div>
</template>

<script setup lang="ts">
import { reactive, onMounted } from "vue";
import { initFlowbite } from "flowbite";

onMounted(() => {
  initFlowbite();
});

const form = reactive({
  name: "",
  contact: "",
  kind: "",
  apply: "",
  title: "G금성 캐피탈대출(onloan.kr)",
  status: "대기중",
});

const submitForm = async () => {
  try {
    const formData = new FormData();
    formData.append("name", form.name);
    formData.append("contact", form.contact);
    formData.append("kind", form.kind);
    formData.append("field5", form.apply);
    formData.append("title", form.title);
    formData.append("status", form.status);

    const response = await fetch("https://ddoubleloan.com/dbsend.php", {
      method: "POST",
      body: formData,
    });

    const responseMail = await fetch("https://ddoubleloan.com/mail/mailsend.php", {
      method: "POST",
      body: formData,
    });

    const responseText = await response.text();

    alert(responseText);
  } catch (error) {
    console.error("Error submitting form:", error);
  } finally {
    location.reload();
  }
};
</script>
