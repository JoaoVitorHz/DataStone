<template>
  <div>
    <h2>Associar Produtos ao Cliente</h2>
    <form @submit.prevent="AssociateProducts" class="flex flex-col gap-3">
      <label for="client">Selecione o Cliente:</label>
      <select v-model="selectedClient" required class="bg-gray-950 border-gray-600 border  px-2 py-1 outline-none">
        <option v-for="client in Clients" :key="client.Cpf" :value="client.Cpf">{{ client.Name }}</option>
      </select>

      <label for="product">Selecione os Produtos:</label>
      <select v-model="selectedProduct"  required class="bg-gray-950 border-gray-600 border  px-2 py-1 outline-none">
        <option v-for="Product in Products" :key="Product.name" :value="Product.name">{{ Product.name }}</option>
      </select>

      <button type="submit" class="bg-[#8234E9] px-5 py-2 rounded-md">Associar Produtos</button>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      selectedClient: null,
      selectedProduct: [],
      Clients: [],
      Products: [],
    };
  },
  mounted() {
    this.Clients = JSON.parse(localStorage.getItem("clientes")) || [];
    this.Products = JSON.parse(localStorage.getItem("produtos")) || [];
  },
  methods: {
    AssociateProducts() {
      let Clients = this.Clients.find(c => c.Cpf === this.selectedClient);
      if (Clients) {
        Client.product = this.selectedProduct;
        localStorage.setItem('clientes', JSON.stringify(this.Clients));
      }
    },
  },
};
</script>
