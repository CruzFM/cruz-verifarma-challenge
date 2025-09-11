<script setup lang="ts">
const { user, clear: clearSession } = useUserSession()

async function logout() {
  await clearSession()
  await navigateTo('/login')
}

</script>

<template>
  <footer
    class="footer sm:footer-horizontal bg-neutral text-neutral-content p-10 mt-9 sm:justify-items-center"
  >
    <nav>
      <h6 class="footer-title">About This Project</h6>
      <p class="text-sm">Full-stack web application</p>
      <p class="text-sm">Built with Nuxt.js, Tailwind CSS and DaisyUI</p>
      <p class="text-sm">Responsive design implementation</p>
    </nav>
    <nav>
      <h6 class="footer-title">Let's Connect</h6>
      <a class="link link-hover" href="https://fernandocruz.vercel.app/">Portfolio</a>
      <a class="link link-hover" href="https://www.linkedin.com/in/cruzfernandomartin/">LinkedIn</a>
    </nav>
    <nav>
      <h6 class="footer-title">Development Notes</h6>
      <p class="text-sm mb-0">Designed and Developed by Fernando Cruz</p>
      <p class="text-sm mb-0">Made for educational/demonstration purposes</p>
      <p class="text-sm mb-0">I don't own Verifarma© nor any depicted media</p>
    </nav>
    <nav>
        <h6 class="footer-title">Account</h6>
        <button class="link link-hover text-error" @click="logout">Sign Out</button>
    </nav>
  </footer>
</template>