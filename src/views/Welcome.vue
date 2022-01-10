<template>
  <v-container>
    <v-row>
      <v-col class="text-center mb-3">
        <h1>Sign up</h1>
      </v-col>
    </v-row>
    <v-row>
      <v-col md="6" offset-md="3">
        <SignupForm />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import SignupForm from "../components/SignupForm.vue";

export default {
  components: { SignupForm },
};
</script>

<style></style>
