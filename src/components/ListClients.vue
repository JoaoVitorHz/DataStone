<template>
  <div class="max-w-md mx-auto">
    <h2 class="text-2xl font-semibold mb-4">Lista de Clientes</h2>
    <ul>
      <li v-for="client in clients" :key="client.Cpf" class="flex flex-col">
        <div>
            {{ client.Name }} - {{ client.IsActive == true ? "Ativo" : "Inativo" }}
        </div>
        <div class="flex gap-1">
            <button @click="editarCliente(client)" class="bg-[#8234E9] px-5 py-2 rounded-md">Editar</button>
            <button @click="toggleActiveClient(client)" class="bg-[#8234E9] px-5 py-2 rounded-md">Ativar Cliente</button>
        </div>
      </li>
    </ul>

    <div v-if="clientsForEdit">
      <form @submit.prevent="salveEdit" class="flex flex-col gap-3">
        <div class="flex flex-col">
          <label for="nome">Nome:</label>
          <input v-model="clientsForEdit.Name" required class="bg-gray-950 border-gray-600 border px-2 py-1 outline-none" />
        </div>

        <div class="flex flex-col">
          <label for="cpf">CPF:</label>
          <input v-model="clientsForEdit.Cpf" required disabled class="bg-gray-950 border-gray-600 border px-2 py-1 outline-none"  />
        </div>

        <div class="flex flex-col">
          <label for="telefone">Telefone:</label>
          <input v-model="clientsForEdit.Phone" required class="bg-gray-950 border-gray-600 border px-2 py-1 outline-none" />
        </div>

        <div class="flex flex-col">
          <label for="email">E-mail:</label>
          <input v-model="clientsForEdit.Email" required class="bg-gray-950 border-gray-600 border px-2 py-1 outline-none" />
        </div>

        <div class="flex flex-col">
          <label for="ativo">Ativo:</label>
          <select v-model="clientsForEdit.IsActive" class="bg-gray-950 border-gray-600 border px-2 py-1 outline-none" >
            <option value="True">Sim</option>
            <option value="False">Não</option>
          </select>
        </div>

        <button type="button" @click="CancelEdit" class="bg-[#da3832] px-5 py-2 rounded-md">Cancelar Edicao</button>
        <button type="submit" class="bg-[#8234E9] px-5 py-2 rounded-md">Salvar Edição</button>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      clients: [],
      clientsForEdit: null,
    };
  },
  mounted() {
    this.clients = JSON.parse(localStorage.getItem("clientes")) || [];
  },
  methods: {
    editarCliente(client) {
      this.clientsForEdit = { ...client };
    },
    CancelEdit() {
      this.clientsForEdit = null;
    },
    toggleActiveClient(client) {
      client.IsActive = !client.IsActive;
      localStorage.setItem("clientes", JSON.stringify(this.clients));
      console.log("Cliente ativado/inativado:", client);
    },
    salveEdit() {
      const index = this.clients.findIndex(
        (c) => c.Cpf === this.clientsForEdit.Cpf
      );
      if (index !== -1) {
        this.clients[index] = { ...this.clientsForEdit };
        localStorage.setItem("clientes", JSON.stringify(this.clients));
        this.clientsForEdit = null; // Desativar o modo de edição
      }
    },
  },
};
</script>
