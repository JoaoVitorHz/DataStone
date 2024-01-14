<template>
  <div class="flex flex-col">
    <h2>Cadastro de Produto</h2>
    <form @submit.prevent="CreateProduct" class="flex flex-col gap-3">
      <div class="flex flex-col">
        <label for="name">Nome:</label>
        <input type="text" v-model="product.name" required class="bg-gray-950 border-gray-600 border  px-2 py-1 outline-none"/>
      </div>

      <div class="flex flex-col">
        <label for="ativo">Ativo:</label>
        <select v-model="product.isActive" class="bg-gray-950 border-gray-600 border  px-2 py-1 outline-none">
          <option value="trul">Sim</option>
          <option value="false">Não</option>
        </select>
      </div>
      
      <button type="submit" class="bg-[#8234E9] px-5 py-2 rounded-md">Cadastrar Produto</button>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      product: {
        name: "",
        isActive: "",
      },
    };
  },
  methods: {
    CreateProduct() {
      let Products = JSON.parse(localStorage.getItem("produtos")) || [];
      Products.push(this.product);
      localStorage.setItem("produtos", JSON.stringify(Products));
    },
  },
};
</script>
