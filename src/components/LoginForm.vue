<template>
  <v-form @submit.prevent="handleSubmit" class="text-center">
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
    <v-btn type="submit" class="submit-button">Log in</v-btn>
  </v-form>
</template>

<script>
import { ref } from "@vue/reactivity";
import useLogin from '../composables/useLogin'

const {error, login} = useLogin();

export default {
  setup(props, context) {
    // refs
    const email = ref("");
    const password = ref("");


    function handleSubmit() {
      login(email.value, password.value)

      if(!error.value){
        context.emit('login')
      }
    }

    return { error, email, password, handleSubmit };
  },
};
</script>

<style>
.submit-button {
  background-color: purple;
  color: white !important;
}
</style>