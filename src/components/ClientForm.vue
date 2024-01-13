<template>
  <div>
    <h2>Cadastro de Cliente</h2>

    <form @submit.prevent="CreateClient" class="flex flex-col gap-3">
      <div class="flex flex-col">
        <label for="nome">Nome:</label>
        <input type="text" v-model="client.Name" required class="bg-gray-950 border-gray-600 border" />
      </div>

      <div class="flex flex-col">
        <label for="documento">Documento:</label>
        <input type="text" v-model="client.Cpf" required  class="bg-gray-950 border-gray-600 border"/>
      </div>

      <div class="flex flex-col">
        <label for="telefone">Telefone:</label>
        <input type="text" v-model="client.Phone" required class="bg-gray-950 border-gray-600 border"/>
      </div>

      <div class="flex flex-col">
        <label for="email">E-mail:</label>
        <input type="email" v-model="client.Email" required class="bg-gray-950 border-gray-600 border"/>
      </div>

      <div class="flex flex-col">
        <label for="ativo">Ativo:</label>
        <select v-model="client.IsActive" class="bg-gray-950 border-gray-600 border">
          <option value="True">Sim</option>
          <option value="false">Não</option>
        </select>
      </div>

      <button type="submit" class="bg-[#8234E9] px-5 py-2 rounded-md">Cadastrar Cliente</button>
    </form>
  </div>
</template>

<script setup></script>

<script>
export default {
  data() {
    return {
      client: {
        Name: "",
        Cpf: "",
        Phone: "",
        Email: "",
        IsActive: "true",
      },
    };
  },
  methods: {
    CreateClient() {
      let Clients = JSON.parse(localStorage.getItem("clientes")) || [];
      
      if (Clients.some(c => c.Cpf === this.client.Cpf)) {
        console.error('CPF já cadastrado para outro cliente.');
        return;
      }
      
      Clients.push(this.client);
      localStorage.setItem("clientes", JSON.stringify(Clients));
    },
  },
};
</script>
