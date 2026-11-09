<script setup>
import { ref, computed, onMounted } from 'vue';
import { RouterLink } from 'vue-router';
import { getAllMahasiswa, deleteMahasiswa } from '../services/mahasiswaService';

const list = ref([]);
const loading = ref(true);
const error = ref('');
const keyword = ref('');
const toast = ref('');

const filtered = computed(() => {
  const k = keyword.value.trim().toLowerCase();
  if (!k) return list.value;
  return list.value.filter((m) =>
    [m.nim, m.nama, m.prodi, m.email].some((v) => String(v).toLowerCase().includes(k))
  );
});

const tampilToast = (pesan) => {
  toast.value = pesan;
  setTimeout(() => (toast.value = ''), 2500);
};

const muat = async () => {
  loading.value = true;
  error.value = '';
  try {
    const res = await getAllMahasiswa();
    list.value = res.data.data;
  } catch (e) {
    error.value = 'Gagal memuat data. Pastikan backend berjalan di port 3000.';
  } finally {
    loading.value = false;
  }
};

const hapus = async (m) => {
  if (!confirm(`Hapus data ${m.nama} (${m.nim})?`)) return;
  try {
    await deleteMahasiswa(m.id);
    list.value = list.value.filter((x) => x.id !== m.id);
    tampilToast('Data berhasil dihapus');
  } catch (e) {
    tampilToast(e.response?.data?.message || 'Gagal menghapus data');
  }
};

onMounted(muat);
</script>

<template>
  <div>
    <div class="mb-4 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
      <h1 class="text-xl font-bold text-untan-900">Daftar mahasiswa</h1>
      <input v-model="keyword" class="input sm:w-72" placeholder="Cari NIM, nama, prodi, atau email" aria-label="Cari mahasiswa" />
    </div>

    <p v-if="loading" class="text-slate-500">Memuat data...</p>
    <p v-else-if="error" class="rounded-md bg-red-50 p-3 text-sm text-red-700">{{ error }}</p>

    <div v-else-if="filtered.length === 0" class="rounded-lg border border-dashed border-slate-300 p-8 text-center text-slate-500">
      Belum ada data yang cocok.
      <RouterLink to="/tambah" class="font-semibold text-untan-600 underline">Tambah mahasiswa</RouterLink>
    </div>

    <div v-else class="overflow-x-auto rounded-lg border border-slate-200 bg-white shadow-sm">
      <table class="min-w-full text-left text-sm">
        <thead class="bg-untan-50 text-untan-900">
          <tr>
            <th class="px-4 py-3 font-semibold">NIM</th>
            <th class="px-4 py-3 font-semibold">Nama</th>
            <th class="hidden px-4 py-3 font-semibold md:table-cell">Prodi</th>
            <th class="hidden px-4 py-3 font-semibold md:table-cell">Angkatan</th>
            <th class="hidden px-4 py-3 font-semibold lg:table-cell">Email</th>
            <th class="px-4 py-3 text-right font-semibold">Aksi</th>
          </tr>
        </thead>
        <tbody class="divide-y divide-slate-100">
          <tr v-for="m in filtered" :key="m.id" class="hover:bg-slate-50">
            <td class="px-4 py-3 font-medium">{{ m.nim }}</td>
            <td class="px-4 py-3">{{ m.nama }}</td>
            <td class="hidden px-4 py-3 md:table-cell">{{ m.prodi }}</td>
            <td class="hidden px-4 py-3 md:table-cell">{{ m.angkatan }}</td>
            <td class="hidden px-4 py-3 lg:table-cell">{{ m.email }}</td>
            <td class="px-4 py-3">
              <div class="flex justify-end gap-2">
                <RouterLink :to="{ name: 'mahasiswa-edit', params: { id: m.id } }" class="btn-ghost !px-3 !py-1">Edit</RouterLink>
                <button class="btn-danger !px-3 !py-1" @click="hapus(m)">Hapus</button>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>

    <div v-if="toast" role="status" class="fixed bottom-5 right-5 rounded-md bg-untan-900 px-4 py-2 text-sm text-white shadow-lg">
      {{ toast }}
    </div>
  </div>
</template>
