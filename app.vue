<template>
  <div>
    <Header />
    <NuxtLoadingIndicator />
    <NuxtPage />
    <Footer />
  </div>
</template>

<!-- <script setup>
import { useRouter } from 'vue-router';
import { useFetch } from 'nuxt/app';

const router = useRouter();

const { data, error, execute } = useFetch('/api/checkBlock');

execute();

if (error.value) {
  console.error('Error:', error.value);
} else if (data.value && data.value.blocked) {
  router.push('/403');
}
</script> -->
