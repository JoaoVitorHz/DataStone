<template>
  <div class="max-w-md mx-auto">
    <h2 class="text-2xl font-semibold mb-4">Lista de Produtos</h2>
    <ul>
      <li v-for="product in products" :key="product.name" class="flex flex-col">
        <div>
          {{ product.name }} - {{ product.isActive == true ? 'Ativo' : 'Inativo' }}
        </div>
        <div class="flex gap-1">
          <button @click="EditProduct(product)" class="bg-[#8234E9] px-5 py-2 rounded-md">Editar</button>
          <button @click="toggleActiveProduct(product)" class="bg-[#8234E9] px-5 py-2 rounded-md">Toggle Ativo</button>
        </div>
      </li>
    </ul>

    <div v-if="productForEdit">
      <form @submit.prevent="SaveEdit"  class="flex flex-col gap-3">
        <label for="nome">Nome:</label>
        <input v-model="productForEdit.name" required class="bg-gray-950 border-gray-600 border px-2 py-1 outline-none" />

        <label for="ativo">Ativo:</label>
        <select v-model="productForEdit.isActive" class="bg-gray-950 border-gray-600 border px-2 py-1 outline-none">
          <option value="True">Sim</option>
          <option value="False">Não</option>
        </select>

        <button type="submit" class="bg-[#8234E9] px-5 py-2 rounded-md">Salvar Edição</button>
        <button type="button" @click="CancelEdit" class="bg-[#da3832] px-5 py-2 rounded-md">Fechar</button>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      products: [],
      productForEdit: null,
    };
  },
  mounted() {
    this.products = JSON.parse(localStorage.getItem('produtos')) || [];
  },
  methods: {
    EditProduct(product) {
      this.productForEdit = { ...product };
    },
    toggleActiveProduct(product) {
      product.isActive = !product.isActive;
      localStorage.setItem('produtos', JSON.stringify(this.products));
      console.log('Produto ativado/inativado:', product);
    },
    SaveEdit() {
      const index = this.products.findIndex(p => p.nome === this.productForEdit.name);
      if (index !== -1) {
        this.products[index] = { ...this.productForEdit };
        localStorage.setItem('produtos', JSON.stringify(this.products));
        this.productForEdit = null;
      }
    },
    CancelEdit() {
      this.productForEdit = null;
    },
  },
};
</script>
