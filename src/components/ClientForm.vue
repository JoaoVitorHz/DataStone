<template>
  <div>
    <h2>Cadastro de Cliente</h2>

    <form @submit.prevent="CreateClient">
      <label for="nome">Nome:</label>
      <input type="text" v-model="client.Name" required>

      <label for="documento">Documento:</label>
      <input type="text" v-model="client.Cpf" required>

      <label for="telefone">Telefone:</label>
      <input type="text" v-model="client.Phone" required>

      <label for="email">E-mail:</label>
      <input type="email" v-model="client.Email" required>

      <label for="ativo">Ativo:</label>
      <select v-model="client.IsActive">
        <option value="True">Sim</option>
        <option value="false">Não</option>
      </select>

      <button type="submit">Cadastrar Cliente</button>
    </form>

  </div>
</template>
  
<script setup>
</script>

<script>
export default {
  data() {
    return {
      client: {
        Name: '',
        Cpf: '',
        Phone: '',
        Email: '',
        IsActive: 'true',
      },
    };
  },
  methods: {
    CreateClient() {
      console.log('Cliente cadastrado:', this.client);
    },
  },
};
</script>
  