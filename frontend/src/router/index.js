import { createRouter, createWebHistory } from 'vue-router';
import MahasiswaListView from '../views/MahasiswaListView.vue';
import MahasiswaCreateView from '../views/MahasiswaCreateView.vue';
import MahasiswaEditView from '../views/MahasiswaEditView.vue';

export default createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', name: 'mahasiswa-list', component: MahasiswaListView },
    { path: '/tambah', name: 'mahasiswa-create', component: MahasiswaCreateView },
    { path: '/edit/:id', name: 'mahasiswa-edit', component: MahasiswaEditView, props: true },
  ],
});
