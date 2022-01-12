<template>
  <v-container>
    <v-row>
      <v-col md="6" offset-md="3" class="text-center mb-3 mt-4">
        <div v-if="showLogin">
          <h1 class="pb-4">Log in</h1>
          <LoginForm @login="redirectToHome" />
          <p class="mt-4">
            No account? <span @click="showLogin = false">Sign up here</span>.
          </p>
        </div>

        <div v-else>
          <h1>Sign up</h1>
          <SignupForm @signup="redirectToHome" />
          <p class="mt-4">
            Already have an account?
            <span @click="showLogin = true">Log in here</span>.
          </p>
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { ref } from "@vue/reactivity";
import { useRouter } from "vue-router";
import SignupForm from "../components/SignupForm.vue";
import LoginForm from "../components/LoginForm.vue";

export default {
  components: { SignupForm, LoginForm },
  setup() {
    const showLogin = ref(true);
    const router = useRouter();

    function redirectToHome() {
      router.push({ name: "Home" });
    }

    return { showLogin, redirectToHome };
  },
};
</script>

<style scoped>
span {
  text-decoration: underline;
  color: purple;
  cursor: pointer;
}
</style>
