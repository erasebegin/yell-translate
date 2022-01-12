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
    <v-alert v-if="error" border="top" color="warning" class="ma-2">{{ error }}</v-alert>
    <v-btn type="submit" class="submit-button">Sign up</v-btn>
  </v-form>
</template>

<script>
import { ref } from "@vue/reactivity";
import useSignup from "../composables/useSignup";

const { error, signup } = useSignup();

export default {
  setup(props, context) {
    // refs
    const displayName = ref("");
    const email = ref("");
    const password = ref("");

    async function handleSubmit() {
      await signup(email.value, password.value, displayName.value);

      if(!error.value){
        context.emit('signup')
      }
    }

    return { error, displayName, email, password, handleSubmit };
  },
};
</script>

<style>
.submit-button {
  background-color: purple;
  color: white !important;
}
</style>