<template>
    <div>
      <h2>Cadastro de Produto</h2>
      <form @submit.prevent="CreateProduct">
        <label for="name">Nome:</label>
        <input type="text" v-model="product.name" required>
  
        <label for="ativo">Ativo:</label>
        <select v-model="product.isActive">
          <option value="trul">Sim</option>
          <option value="false">Não</option>
        </select>
  
        <button type="submit">Cadastrar Produto</button>
      </form>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        product: {
            name: '',
            isActive: '',
        },
      };
    },
    methods: {
       CreateProduct() {
        console.log('Produto cadastrado:', this.product);
      },
    },
  };
  </script>
  