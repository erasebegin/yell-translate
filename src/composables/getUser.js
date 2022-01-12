import { ref } from "vue";
import { auth } from "../firebase/config";
import { onAuthStateChanged } from "firebase/auth";

const userRef = ref(auth.currentUser);

onAuthStateChanged(auth, (user) => {
  console.log("user state change. current user: ", user);
  userRef.value = user;
});

function getUser() {
  return { userRef };
}

export default getUser;
