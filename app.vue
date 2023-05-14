<script setup lang="ts">
const { locale } = useI18n()

function toggleLang() {
  locale.value = locale.value === 'ar' ? 'en' : 'ar'
}
</script>

<template>
  <button class="!outline-none" @click="toggleLang">
    <div class="i-carbon-language" /> {{ locale }}
  </button> 

   <h1>test</h1>
   <p>{{ $t('welcome') }}</p>
</template>
