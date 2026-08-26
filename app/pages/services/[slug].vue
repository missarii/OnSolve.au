<script setup lang="ts">
const route = useRoute()
const services = useServices()
const service = services.find((s) => s.slug === route.params.slug)

if (!service) {
  throw createError({ statusCode: 404, statusMessage: 'Service Not Found' })
}

useSeoMeta({
  title: `${service.title} | OnSolve`,
  description: service.short
})

const others = services.filter((s) => s.slug !== service.slug).slice(0, 3)
</script>

<template>
  <main v-if="service">
    <section class="hero">
      <div class="container">
        <p class="crumbs"><NuxtLink to="/">Home</NuxtLink> / <NuxtLink to="/#services">Services</NuxtLink> / {{ service.title }}</p>
        <span class="icon">{{ service.icon }}</span>
        <h1>{{ service.title }}</h1>
        <p class="sub">{{ service.description }}</p>
        <a href="/#contact" class="btn btn-primary">Request a Consultation</a>
      </div>
    </section>

    <section class="detail">
      <div class="container detail-grid">
        <div>
          <h2>What's Included</h2>
          <ul class="features">
            <li v-for="f in service.features" :key="f">✔ {{ f }}</li>
          </ul>
          <div class="roi-note">
            <strong>💡 Curious about savings?</strong>
            <p>Clients typically reduce process costs by 30–40% within the first year. Book a free consultation for a custom savings estimate.</p>
          </div>
        </div>
        <aside>
          <h3>Explore Other Services</h3>
          <NuxtLink v-for="o in others" :key="o.slug" :to="`/services/${o.slug}`" class="side-card">
            <span>{{ o.icon }}</span>
            <div>
              <strong>{{ o.title }}</strong>
              <p>{{ o.short }}</p>
            </div>
          </NuxtLink>
        </aside>
      </div>
    </section>

    <section class="back-cta">
      <div class="container">
        <h2>Ready to get started with {{ service.title }}?</h2>
        <a href="/#contact" class="btn btn-primary">Talk to Our Team</a>
      </div>
    </section>
  </main>
</template>

<style scoped>
.hero {
  background: linear-gradient(135deg, var(--navy), #334155);
  color: var(--white);
  padding: 4rem 0;
}
.crumbs { font-size: 0.85rem; color: #94a3b8; margin-bottom: 1.5rem; }
.crumbs a:hover { color: var(--orange); }
.icon { font-size: 3.5rem; }
.hero h1 { color: var(--white); font-size: clamp(1.9rem, 4vw, 2.8rem); margin: 0.75rem 0; }
.sub { color: #cbd5e1; max-width: 640px; margin-bottom: 1.75rem; }

.detail { padding: 4.5rem 0; }
.detail-grid { display: grid; grid-template-columns: 1.5fr 1fr; gap: 3rem; }
.detail h2 { font-size: 1.5rem; margin-bottom: 1.25rem; }
.features li {
  padding: 0.65rem 0;
  border-bottom: 1px solid var(--border);
  color: var(--slate);
}
.roi-note {
  margin-top: 2rem;
  background: #fff7ed;
  border-left: 4px solid var(--orange);
  padding: 1.25rem;
  border-radius: 8px;
}
.roi-note strong { color: var(--navy); }
aside h3 { font-size: 1.15rem; margin-bottom: 1rem; }
.side-card {
  display: flex; gap: 0.85rem;
  padding: 1rem;
  border: 1px solid var(--border);
  border-radius: 10px;
  margin-bottom: 0.85rem;
  transition: border-color .2s;
}
.side-card:hover { border-color: var(--orange); }
.side-card strong { color: var(--navy); font-size: 0.95rem; }
.side-card p { font-size: 0.82rem; }

.back-cta {
  background: var(--light);
  text-align: center;
  padding: 3.5rem 0;
}
.back-cta h2 { margin-bottom: 1.5rem; }

@media (max-width: 900px) { .detail-grid { grid-template-columns: 1fr; } }
</style>
