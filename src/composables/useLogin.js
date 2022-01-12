import { ref } from "vue";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase/config";

const error = ref(null);

const login = async (email, password) => {
  error.value = null;

  try {
    const res = await signInWithEmailAndPassword(auth, email, password);

    if (!res) {
      throw new Error("Could not login");
    }

    error.value = null;
    console.log(res)
    return res;
  } catch (err) {
    console.log(err);
    error.value = err.message;
  }
};

const useLogin = () => {
  return { error, login };
};

export default useLogin;
