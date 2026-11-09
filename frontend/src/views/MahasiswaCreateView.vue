<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import MahasiswaForm from '../components/MahasiswaForm.vue';
import { createMahasiswa } from '../services/mahasiswaService';

const router = useRouter();
const loading = ref(false);
const error = ref('');

const simpan = async (data) => {
  loading.value = true;
  error.value = '';
  try {
    await createMahasiswa(data);
    router.push('/');
  } catch (e) {
    error.value = e.response?.data?.message || 'Gagal menyimpan data';
  } finally {
    loading.value = false;
  }
};
</script>

<template>
  <div>
    <h1 class="mb-4 text-xl font-bold text-untan-900">Tambah mahasiswa</h1>
    <p v-if="error" class="mb-3 rounded-md bg-red-50 p-3 text-sm text-red-700">{{ error }}</p>
    <MahasiswaForm submit-label="Simpan" :loading="loading" @submit="simpan" @cancel="router.push('/')" />
  </div>
</template>
