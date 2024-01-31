<script>
export default {
  async asyncData({ req }) {
    const userIp = req ? req.clientIp : "";
    return { userIp };
  },
};
</script>

<template>
  <div class="bg-gray-100/80 px-4 py-6 overflow-hidden text-center">
    <div class="container flex items-center justify-center min-h-screen mx-auto">
      <div class="w-full px-8 py-16 bg-white rounded-md shadow-md">
        <div class="flex flex-col items-center space-y-6">
          <i class="fa-solid fa-triangle-exclamation text-8xl animate-pulse text-red-600"></i>
          <h1 class="text-9xl pb-4 font-extrabold text-red-600 border-b border-red-600">403</h1>
          <h2 class="mb-2 text-3xl font-bold text-gray-800">접근이 금지되었습니다</h2>
          <div class="flex flex-col items-center justify-center pt-2 space-y-2 text-lg">
            <p class="text-gray-600">사이트 내 악의적인 활동이 감지되어</p>
            <p class="text-gray-800">당신의 아이피</p>
            <span class="px-6 py-2 mx-1 text-2xl font-bold text-white bg-red-500 rounded-sm">{{ userIp }}</span>
            <p class="text-gray-800">접근이 차단되었습니다.</p>
          </div>
          <NuxtLink to="tel:01065471475" class="hover:bg-blue-700 flex items-center justify-center px-4 py-2 text-lg text-white transition duration-300 bg-blue-500 rounded-sm">
            <i class="fa-solid fa-headset mr-2"></i>
            홈페이지에 문의하기
          </NuxtLink>
        </div>
      </div>
    </div>
  </div>
</template>
