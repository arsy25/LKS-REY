<template>
  <link
    rel="stylesheet"
    href="https://fonts.googleapis.com/css?family=Poppins"
  />
  <q-page class="bg-grey-3 flex flex-center">
    <div class="flex flex-center">
      <!-- logo desktop -->
      <q-card class="q-pa-md">
        <q-intersection transition="scale">
          <div class="text-center textlogindesktop">Let's login to your</div>
          <div class="textaccount text-center">account!</div>
          <div class="row q-gutter-md inputdesktop flex flex-center">
            <q-input
              v-model="username"
              outlined
              label="username"
              standout="bg-grey-4"
              class="col-8"
            >
              <template v-slot:append>
                <q-icon name="person" />
              </template>
            </q-input>

            <q-input
              v-model="password"
              outlined
              label="password"
              standout="bg-grey-4"
              :type="isPwd ? 'password' : 'text'"
              class="col-8"
            >
              <template v-slot:append>
                <q-icon
                  :name="isPwd ? 'visibility_off' : 'visibility'"
                  class="cursor-pointer"
                  @click="isPwd = !isPwd"
                />
              </template>
            </q-input>

            <q-btn class="logindesktop" flat label="Login" @click="login" />
            <!-- <q-btn flat label="Forgot Password" color="primary" /> -->
          </div>
        </q-intersection>
      </q-card>
    </div>
  </q-page>
</template>

<script>
import { ref } from "vue";
import { useRouter } from "vue-router";

export default {
  setup() {
    const router = useRouter();

    const username = ref("");
    const password = ref("");
    const isPwd = ref(true);

    const login = () => {
      // Simulasi data login yang benar
      const hardcodedUsername = "iam";
      const hardcodedPassword = "123";

      // Cek username dan password
      if (
        username.value === hardcodedUsername &&
        password.value === hardcodedPassword
      ) {
        // Redirect ke halaman berikutnya
        router.push("/admin");
      } else {
        // Tampilkan pesan error
        alert("Username atau password salah!");
      }
    };

    return {
      username,
      password,
      isPwd,
      login,
    };
  },
};
</script>

<style>
.input {
  margin-top: 20%;
}
.inputdesktop {
  margin-top: 5%;
}
.login {
  border: solid 1px black;
  margin-top: 12%;
  width: 95%;
  background-color: #1e90ff;
  font-family: Poppins;
  font-weight: 900;
}
.logindesktop {
  border: solid 1px black;
  margin-top: 12%;
  width: 66%;
  background-color: #1e90ff;
  font-family: Poppins;
  font-weight: 900;
}
.textlogin {
  font-family: Poppins;
  font-weight: 800;
  font-size: 200%;
}
.textlogindesktop {
  font-family: Poppins;
  font-weight: 800;
  font-size: 200%;
}
.textaccount {
  font-family: Poppins;
  font-weight: 800;
  font-size: 200%;
  color: #1e90ff;
}

.bglogin {
  background-color: #1e90ff;
  height: 100vh;
}
</style>
