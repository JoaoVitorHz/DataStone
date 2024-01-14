<script setup>
  import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <header class="w-full h-16 flex items-center gap-5 border-b-[1px] px-5 border-gray-400">
    <RouterLink to="/ClientForm" class="hover:text-[#8234E9] transition-[700ms]">Cadastrar Clientes</RouterLink>
    <RouterLink to="/ProductForm" class="hover:text-[#8234E9] transition-[700ms]">Cadastrar Produtos</RouterLink>
    <RouterLink to="/" class="hover:text-[#8234E9] transition-[700ms]">Associar Produtos</RouterLink>
    <RouterLink to="/ListClients" class="hover:text-[#8234E9] transition-[700ms]">Listar Clientes</RouterLink>
    <RouterLink to="/ListProduct" class="hover:text-[#8234E9] transition-[700ms]">Listar Produtos</RouterLink>
  </header>

  <div class="flex justify-center items-center mt-11">
    <RouterView />
  </div>
</template>

<style scoped>
</style>
