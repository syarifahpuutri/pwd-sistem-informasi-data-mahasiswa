
<script setup>
import { reactive, watch } from 'vue';

const props = defineProps({
  initialData: { type: Object, default: () => ({}) },
  submitLabel: { type: String, default: 'Simpan' },
  loading: { type: Boolean, default: false },
});

const emit = defineEmits(['submit', 'cancel']);

const form = reactive({
  nim: '',
  nama: '',
  prodi: 'Informatika',
  angkatan: new Date().getFullYear(),
  email: '',
  ipk: '',
});

watch(
  () => props.initialData,
  (d) => {
    if (d && d.nim !== undefined) {
      Object.assign(form, d);
      form.ipk = d.ipk ?? '';
    }
  },
  { immediate: true }
);

const onSubmit = () => {
  emit('submit', {
    ...form,
    angkatan: Number(form.angkatan),
    ipk: Number(form.ipk),
  });
};
</script>

<template>
  <form
    @submit.prevent="onSubmit"
    class="grid gap-4 rounded-lg border border-slate-200 bg-white p-5 shadow-sm sm:grid-cols-2"
  >
    <div>
      <label class="mb-1 block text-sm font-medium" for="nim">NIM</label>
      <input
        id="nim"
        v-model="form.nim"
        class="input"
        required
        maxlength="15"
        placeholder="H1101251001"
      />
    </div>

    <div>
      <label class="mb-1 block text-sm font-medium" for="nama">Nama lengkap</label>
      <input
        id="nama"
        v-model="form.nama"
        class="input"
        required
        maxlength="100"
      />
    </div>

    <div>
      <label class="mb-1 block text-sm font-medium" for="prodi">Program studi</label>
      <input
        id="prodi"
        v-model="form.prodi"
        class="input"
        required
        maxlength="60"
      />
    </div>

    <div>
      <label class="mb-1 block text-sm font-medium" for="angkatan">Angkatan</label>
      <input
        id="angkatan"
        v-model="form.angkatan"
        type="number"
        min="2000"
        max="2100"
        class="input"
        required
      />
    </div>

    <div>
      <label class="mb-1 block text-sm font-medium" for="email">Email</label>
      <input
        id="email"
        v-model="form.email"
        type="email"
        class="input"
        required
        maxlength="100"
      />
    </div>

    <div>
      <label class="mb-1 block text-sm font-medium" for="ipk">IPK</label>
      <input
        id="ipk"
        v-model.number="form.ipk"
        type="number"
        min="0"
        max="4"
        step="0.01"
        class="input"
        required
        placeholder="Contoh: 3.75"
      />
    </div>

    <div class="flex gap-2 sm:col-span-2">
      <button
        type="submit"
        class="btn-primary"
        :disabled="loading"
      >
        {{ loading ? 'Menyimpan...' : submitLabel }}
      </button>

      <button
        type="button"
        class="btn-ghost"
        @click="emit('cancel')"
      >
        Batal
      </button>
    </div>
  </form>
</template>
