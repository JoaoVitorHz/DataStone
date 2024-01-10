<template>
    <div>
        <h2>Associar Produtos ao Cliente</h2>
        <form @submit.prevent="AssociateProducts">
            <label for="client">Selecione o Cliente:</label>
            <select v-model="selectedCliente" required>
                <!-- Client Options-->
            </select>

            <label for="product">Selecione os Produtos:</label>
            <select v-model="selectedProdutos" multiple required>
                <!-- Product Options-->
            </select>

            <button type="submit">Associar Produtos</button>
        </form>
    </div>
</template>
  
<script>
export default {
    data() {
        return {
            selectedCliente: null,
            selectedProdutos: [],
        };
    },
    methods: {
        AssociateProducts() {
            console.log('Produtos associados ao cliente:', this.selectedCliente, this.selectedProdutos);
        },
    },
};
</script>
  