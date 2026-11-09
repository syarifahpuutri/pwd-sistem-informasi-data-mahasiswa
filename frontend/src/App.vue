<script setup>
import { RouterLink, RouterView } from 'vue-router';
</script>

<template>
  <header class="border-b-4 border-emas-400 bg-untan-600 text-white">
    <nav class="mx-auto flex max-w-5xl items-center justify-between px-4 py-3">
      <RouterLink to="/" class="text-lg font-bold">Data Mahasiswa</RouterLink>
      <RouterLink to="/tambah" class="rounded-md bg-emas-400 px-3 py-1.5 text-sm font-semibold text-untan-900 hover:bg-emas-500">
        + Tambah
      </RouterLink>
    </nav>
  </header>
  <main class="mx-auto max-w-5xl px-4 py-6">
    <RouterView />
  </main>
</template>
