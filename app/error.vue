<template>
  <main class="error-page">
    <h1>404</h1>
    <p>The page you're looking for doesn't exist.</p>
    <NuxtLink to="/" class="btn btn-primary">Back to Home</NuxtLink>
  </main>
</template>

<style scoped>
.error-page {
  min-height: 60vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  text-align: center;
  padding: 2rem;
}
h1 { font-size: 5rem; color: var(--orange); }
</style>
