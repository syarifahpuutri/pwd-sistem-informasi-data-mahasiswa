<script setup>
import { ref, onMounted } from 'vue';
import { useRouter } from 'vue-router';
import MahasiswaForm from '../components/MahasiswaForm.vue';
import { getMahasiswaById, updateMahasiswa } from '../services/mahasiswaService';

const props = defineProps({ id: { type: String, required: true } });
const router = useRouter();
const data = ref({});
const loading = ref(false);
const error = ref('');

onMounted(async () => {
  try {
    const res = await getMahasiswaById(props.id);
    data.value = res.data.data;
  } catch (e) {
    error.value = 'Data tidak ditemukan';
  }
});

const simpan = async (form) => {
  loading.value = true;
  error.value = '';
  try {
    await updateMahasiswa(props.id, form);
    router.push('/');
  } catch (e) {
    error.value = e.response?.data?.message || 'Gagal memperbarui data';
  } finally {
    loading.value = false;
  }
};
</script>

<template>
  <div>
    <h1 class="mb-4 text-xl font-bold text-untan-900">Edit mahasiswa</h1>
    <p v-if="error" class="mb-3 rounded-md bg-red-50 p-3 text-sm text-red-700">{{ error }}</p>
    <MahasiswaForm :initial-data="data" submit-label="Update" :loading="loading" @submit="simpan" @cancel="router.push('/')" />
  </div>
</template>
