<script setup lang="ts">
useSeoMeta({
  title: 'OnSolve — High-Quality, Process-Driven Outsourcing Solutions',
  description:
    'BPO outsourcing, call center, customer service, data processing, tech support & more. OnSolve delivers process-driven outsourcing that cuts costs and scales with you.'
})
</script>

<template>
  <main>
    <HomeHero />
    <section id="about" class="about">
      <div class="container about-grid">
        <div class="about-visual" v-reveal>
          <img
            src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=700&q=80&auto=format&fit=crop"
            alt="OnSolve team collaborating in a modern office"
            loading="lazy"
          />
          <div class="exp-badge">
            <strong>5+</strong>
            <span>Years of Excellence</span>
          </div>
        </div>
        <div v-reveal="{ delay: 150 }">
          <span class="section-tag">About Us</span>
          <h2 class="section-title">Strategic Outsourcing Solutions Built on Process</h2>
          <p>
            Why do clients select OnSolve? Because we don't just take tasks off your plate —
            we re-engineer them. Our process-driven approach documents every workflow,
            measures every metric, and continuously improves every outcome, so you save
            operational costs while gaining a partner invested in your growth.
          </p>
          <a href="#services" class="btn btn-dark about-btn">Discover Our Services</a>
        </div>
      </div>
    </section>
    <HomeServices />
    <HomeWhyUs />
    <HomeProjects />
    <HomeTeam />
    <HomeContact />
    <HomeBlog />
  </main>
</template>

<style scoped>
.about { padding: 5.5rem 0 0; }
.about-grid {
  display: grid;
  grid-template-columns: 1fr 1.4fr;
  gap: 3.5rem;
  align-items: center;
}
.about-visual {
  position: relative;
  max-width: 380px;
  margin: 0 auto;
}
.about-visual img {
  border-radius: 20px;
  box-shadow: 0 20px 50px rgba(15, 23, 42, 0.15);
}
.exp-badge {
  position: absolute;
  bottom: -18px;
  right: -14px;
  background: var(--orange);
  color: var(--white);
  border-radius: 14px;
  padding: 0.8rem 1.2rem;
  text-align: center;
  box-shadow: 0 12px 30px rgba(249, 115, 22, 0.4);
  animation: floaty 4s ease-in-out infinite;
}
.exp-badge strong { display: block; font-size: 1.7rem; line-height: 1; }
.exp-badge span { font-size: 0.72rem; font-weight: 600; }
@keyframes floaty {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-8px); }
}

.about-btn { margin-top: 1.5rem; }
@media (max-width: 900px) {
  .about-grid { grid-template-columns: 1fr; text-align: center; }
}
</style>
