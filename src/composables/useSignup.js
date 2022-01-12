import { ref } from "vue";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { updateProfile } from "firebase/auth";
import { auth } from "../firebase/config";

const error = ref(null);

const signup = async (email, password, displayName) => {
  error.value = null;

  try {
    const res = await createUserWithEmailAndPassword(auth, email, password);

    if (!res) {
      throw new Error("Could not complete signup");
    }

    await updateProfile(auth.currentUser, {
      displayName: displayName,
    });

    error.value = null;
    console.log(res)
    return res;
  } catch (err) {
    console.log(err);
    error.value = err.message;
  }
};

const useSignup = () => {
  return { error, signup };
};

export default useSignup;
