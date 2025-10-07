<script setup lang="ts">
import { email } from "zod";

definePageMeta({
  layout: false,
  middleware: "guest",
});
const { loggedIn, user, fetch: refreshSession } = useUserSession();

const credentials = reactive({
  email: "",
  password: "",
});

const errors = reactive({
  email: "",
  password: "",
  general: "",
});

async function login() {
  errors.email = "";
  errors.password = "";

  $fetch("/api/login", {
    method: "POST",
    body: credentials,
  })
    .then(async () => {
      await refreshSession();
      await navigateTo("/");
    })
    .catch((error) => {
      if (error.status === 400) {
        errors.email = "Invalid email or password";
      } else if (error.status === 422) {
        errors.general = "Please check your credentials";
      } else {
        errors.general = "Login failed. Please try again.";
      }
    });
}
</script>

<template>
  <div
    class="bg-neutral min-h-dvh text-white flex items-center justify-center p-4"
  >
    <div class="w-full max-w-md border border-gray-500 rounded-lg p-6">
      <figure class="mb-2 flex justify-center">
        <img src="~/assets/images/veriflix-logo.svg" alt="Veriflix Logo" />
      </figure>
      <h1 class=" text-3xl font-bold mb-5">Sign in</h1>
      <form class="text-white flex flex-col gap-2" @submit.prevent="login">
        <input
          v-model="credentials.email"
          type="email"
          class="input bg-neutral w-full border-gray-600"
          :class="{ 'border-red-500': errors.email }"
          placeholder="Enter your email"
          aria-describedby="email"
        />
        <p v-if="errors.email" class="text-red-400 text-sm mt-1">
          {{ errors.email }}
        </p>
        <input
          v-model="credentials.password"
          type="password"
          class="input bg-neutral w-full border-gray-600"
          :class="{ 'border-red-500': errors.password }"
          placeholder="Enter your password"
        />
        <p v-if="errors.password" class="text-red-400 text-sm mt-1">
          {{ errors.password }}
        </p>
        <p v-if="errors.general" class="text-red-400 text-sm text-center">
          {{ errors.general }}
        </p>
        <button type="submit" class="btn mt-5">Login</button>
      </form>
    </div>
  </div>
</template>
