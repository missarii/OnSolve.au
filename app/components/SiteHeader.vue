<script setup lang="ts">
const mobileOpen = ref(false)
const links = [
  { label: 'Home', to: '/' },
  { label: 'About Us', to: '/#about' },
  { label: 'Services', to: '/#services' },
  { label: 'Why Us', to: '/#why-us' },
  { label: 'Projects', to: '/#projects' },
  { label: 'Team', to: '/#team' },
  { label: 'Blog', to: '/#blog' },
  { label: 'Contact', to: '/#contact' }
]
</script>

<template>
  <header class="header">
    <div class="container header-inner">
      <NuxtLink to="/" class="logo" @click="mobileOpen = false">
        <span class="logo-mark">◎</span>
        <span class="logo-text">On<span class="accent">Solve</span></span>
      </NuxtLink>

      <nav class="nav" :class="{ open: mobileOpen }">
        <NuxtLink v-for="link in links" :key="link.label" :to="link.to" @click="mobileOpen = false">
          {{ link.label }}
        </NuxtLink>
      </nav>

      <div class="header-actions">
        <button class="search-btn" aria-label="Search">🔍</button>
        <a href="#contact" class="btn btn-primary header-cta">Get Started</a>
        <button class="burger" aria-label="Menu" @click="mobileOpen = !mobileOpen">
          ☰
        </button>
      </div>
    </div>
  </header>
</template>

<style scoped>
.header {
  position: sticky;
  top: 0;
  z-index: 100;
  background: var(--white);
  border-bottom: 1px solid var(--border);
}
.header-inner {
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 72px;
  gap: 1.5rem;
}
.logo {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 1.5rem;
  font-weight: 800;
  color: var(--navy);
}
.logo-mark { color: var(--orange); font-size: 1.6rem; }
.accent { color: var(--orange); }

.nav {
  display: flex;
  gap: 1.75rem;
  font-weight: 500;
  font-size: 0.95rem;
}
.nav a:hover, .nav a.router-link-active:not([href='/']) { color: var(--orange); }

.header-actions { display: flex; align-items: center; gap: 1rem; }
.search-btn { background: none; border: none; cursor: pointer; font-size: 1.05rem; }
.burger { display: none; background: none; border: none; font-size: 1.4rem; cursor: pointer; }

@media (max-width: 900px) {
  .nav {
    display: none;
    position: absolute;
    top: 72px;
    left: 0;
    right: 0;
    background: var(--white);
    flex-direction: column;
    padding: 1rem 4%;
    border-bottom: 1px solid var(--border);
    box-shadow: 0 8px 20px rgba(15, 23, 42, 0.08);
  }
  .nav.open { display: flex; }
  .burger { display: block; }
  .header-cta { display: none; }
}
</style>
