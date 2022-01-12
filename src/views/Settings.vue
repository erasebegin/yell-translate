<template>
  <Header />
  <v-container>
    <v-row>
      <v-col md="6" offset-md="3" class="text-center mb-3 mt-4">
        <v-btn class="submit-button" @click="handleClick">Logout</v-btn>
        <v-alert v-if="error" border="top" color="warning" class="ma-2">
          {{ error }}
        </v-alert>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import Header from "../components/Header.vue";
import useLogout from "../composables/useLogout";
import { useRouter } from "vue-router";

export default {
  components: { Header },
  setup() {
    const { error, logout } = useLogout();

    const router = useRouter();

    async function handleClick() {
      await logout();
      if (!error.value) {
        router.push({ name: "Welcome" });
      }
    }

    return { handleClick, error };
  },
};
</script>

<style>
</style>