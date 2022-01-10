<template>
  <v-form @submit.prevent="handleSubmit" class="text-center">
    <v-text-field
      type="text"
      label="display name"
      required
      v-model="displayname"
    ></v-text-field>
    <v-text-field
      type="email"
      required
      label="email"
      v-model="email"
    ></v-text-field>
    <v-text-field
      type="password"
      required
      label="password"
      v-model="password"
    ></v-text-field>
    <v-btn class="submit-button">Sign up</v-btn>
  </v-form>
</template>

<script>
import { ref } from "@vue/reactivity";

export default {
  setup() {
    // refs
    const displayName = ref("");
    const email = ref("");
    const password = ref("");

    function handleSubmit() {
      console.log(displayName.value, email.value, password.value);
    }

    return { displayName, email, password, handleSubmit };
  },
};
</script>

<style>
  .submit-button {
    background-color: purple;
    color: white;
  }
</style>