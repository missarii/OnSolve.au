<script setup lang="ts">
const services = useServices()
</script>

<template>
  <section id="services" class="services section">
    <div class="container">
      <div class="section-head">
        <span class="section-tag">Our Services</span>
        <h2 class="section-title">What Service We Offer</h2>
        <p>Twice the expertise at half the cost — every service routes to a dedicated landing page.</p>
      </div>

      <div class="grid">
        <div v-for="(s, i) in services" :key="s.slug" v-reveal="{ delay: (i % 3) * 110 }">
          <Tilt3D>
            <NuxtLink :to="`/services/${s.slug}`" class="card">
              <span class="icon tilt-inner">{{ s.icon }}</span>
              <h3>{{ s.title }}</h3>
              <p>{{ s.short }}</p>
              <span class="more">Learn more →</span>
            </NuxtLink>
          </Tilt3D>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.services { padding: 5.5rem 0; background: var(--light); }
.grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.4rem;
}
.card {
  background: var(--white);
  border: 1px solid var(--border);
  border-radius: 14px;
  padding: 1.8rem;
  transition: all 0.25s ease, transform 0.15s ease-out;
  display: flex;
  flex-direction: column;
  height: 100%;
}

.card:hover {
  transform: translateY(-6px);
  border-color: var(--orange);
  box-shadow: 0 14px 35px rgba(15, 23, 42, 0.08);
}
.icon { font-size: 2rem; }
.card h3 { font-size: 1.1rem; margin: 0.9rem 0 0.5rem; }
.card p { font-size: 0.9rem; flex: 1; }
.more { color: var(--orange); font-weight: 600; font-size: 0.88rem; margin-top: 1rem; }

@media (max-width: 980px) { .grid { grid-template-columns: repeat(2, 1fr); } }
@media (max-width: 560px) { .grid { grid-template-columns: 1fr; } }
</style>
