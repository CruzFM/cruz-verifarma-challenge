<script setup lang="ts">
definePageMeta({
  layout: false,
});
const { loggedIn, user, fetch: refreshSession } = useUserSession();
const credentials = reactive({
  email: "",
  password: "",
});
async function login() {
  $fetch("/api/login", {
    method: "POST",
    body: credentials,
  })
    .then(async () => {
      await refreshSession();
      await navigateTo("/");
    })
    .catch(() => alert("Bad credentials"));
}
</script>

<template>
  <div
    class="bg-neutral min-h-dvh text-white flex items-center justify-center p-4"
  >
    <div class="w-full max-w-md border border-gray-500 rounded-lg p-6">
      <figure class="mb-6 flex justify-center">
        <img src="~/assets/images/veriflix-logo.svg" alt="Veriflix Logo" />
      </figure>
      <form class="text-white flex flex-col gap-2" @submit.prevent="login">
        <input
          v-model="credentials.email"
          type="email"
          class="input bg-neutral w-full border-gray-600"
          placeholder="Enter your email"
          aria-describedby="email"
        />
        <input
          v-model="credentials.password"
          type="password"
          class="input bg-neutral w-full border-gray-600"
          placeholder="Enter your password"
        />
        <button type="submit" class="btn">Login</button>
      </form>
    </div>
  </div>
</template>
