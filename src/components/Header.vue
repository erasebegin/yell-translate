<template>
  <header>
    <v-icon large color="purple" @click="redirect('/')">mdi-home</v-icon>
    <v-icon large color="purple" @click="redirect('/settings')"
      >mdi-cog-outline</v-icon
    >
  </header>
</template>

<script>
import { useRouter } from "vue-router";
import getUser from "../composables/getUser";
const { user } = getUser();

export default {
  setup() {
    const router = useRouter();

    function redirect(path) {
      router.push(path);
    }

    return { redirect, user };
  },
};
</script>

<style>
header {
  padding: 1rem;
  display: flex;
  justify-content: space-between;
}
</style>