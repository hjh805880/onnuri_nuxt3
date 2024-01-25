<template>
  <img src="/favicon.ico" alt="" class="">
  <div class="container p-4 mx-auto">
    <h1 class="mb-6 text-2xl font-bold">신청 폼</h1>
    <form @submit.prevent="submitForm" class="space-y-4">
      <div>
        <label for="name" class="block mb-2">이름:</label>
        <input
          type="text"
          id="name"
          v-model="form.name"
          required
          class="w-full p-2 border"
        />
      </div>
      <div>
        <label for="email" class="block mb-2">이메일:</label>
        <input
          type="email"
          id="email"
          v-model="form.email"
          required
          class="w-full p-2 border"
        />
      </div>
      <div>
        <label for="message" class="block mb-2">메시지:</label>
        <textarea
          id="message"
          v-model="form.message"
          required
          class="w-full p-2 border"
        ></textarea>
      </div>
      <button type="submit" class="p-3 text-white bg-blue-500 rounded">
        제출
      </button>
    </form>
  </div>

  <NuxtLink to="/sub01">go</NuxtLink>
</template>

<script setup>
import { ref } from 'vue';

const form = ref({
  name: '',
  email: '',
  message: '',
});

const submitForm = async () => {
  try {
    const response = await fetch('/api/sendEmail', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(form.value),
    });

    if (!response.ok) {
      throw new Error('서버 에러');
    }

    const responseData = await response.json();
    console.log(responseData.message);
  } catch (error) {
    console.error('제출 중 에러 발생:', error);
  }
};
</script>
