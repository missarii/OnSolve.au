<script setup lang="ts">
const pillars = [
  {
    icon: '⚙️',
    title: 'Process Efficiency',
    text: 'We document, streamline, and automate your workflows so every task is done faster and with fewer errors.'
  },
  {
    icon: '🎯',
    title: 'Tailored Strategy',
    text: 'No cookie-cutter solutions — every engagement is designed around your industry, tools, and goals.'
  },
  {
    icon: '🕐',
    title: '24/7 Support',
    text: 'Our teams operate across time zones, giving you and your customers true around-the-clock coverage.'
  }
]

import { stats } from '~/composables/useServices'

</script>

<template>
  <section id="why-us" class="why">
    <div class="container why-grid">
      <div class="visual" aria-hidden="true">
        <div class="bulb">
          <span>💡</span>
          <p class="brand">On<span>Solve</span></p>
        </div>
      </div>
      <div class="copy" v-reveal>
        <span class="section-tag">Why Choose Us</span>
        <h2 class="section-title">Strategic Outsourcing Solutions That Actually Work</h2>
        <p class="lead">
          Clients select OnSolve to optimize processes and save operational costs —
          without sacrificing quality or control.
        </p>
        <ul>
          <li v-for="p in pillars" :key="p.title">
            <span class="badge-icon">{{ p.icon }}</span>
            <div>
              <h3>{{ p.title }}</h3>
              <p>{{ p.text }}</p>
            </div>
          </li>
        </ul>
      </div>
    </div>

    <div class="stats-bar">
      <div class="container stats-grid">
        <div v-for="s in stats" :key="s.label" class="stat">
          <strong>{{ s.value }}</strong>
          <span>{{ s.label }}</span>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.why { padding: 5.5rem 0 0; }
.why-grid {
  display: grid;
  grid-template-columns: 1fr 1.3fr;
  gap: 3.5rem;
  align-items: center;
}
.visual { display: flex; justify-content: center; }
.bulb {
  width: 260px; height: 260px;
  border-radius: 50%;
  background: linear-gradient(135deg, #fff7ed, #ffedd5);
  border: 2px dashed var(--orange);
  display: flex; flex-direction: column;
  align-items: center; justify-content: center;
  font-size: 5rem;
}
.brand { font-weight: 800; font-size: 1.4rem; color: var(--navy); margin-top: .5rem; }
.brand span { color: var(--orange); }

.copy .lead { margin-bottom: 1.75rem; }
.copy ul li { display: flex; gap: 1rem; margin-bottom: 1.4rem; }
.badge-icon {
  flex-shrink: 0;
  width: 52px; height: 52px;
  background: #fff7ed;
  border-radius: 12px;
  display: flex; align-items: center; justify-content: center;
  font-size: 1.5rem;
}
.copy h3 { font-size: 1.05rem; margin-bottom: 0.3rem; }
.copy li p { font-size: 0.92rem; }

.stats-bar {
  margin-top: 4rem;
  background: var(--navy);
  color: var(--white);
  padding: 2.5rem 0;
}
.stats-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1.5rem;
  text-align: center;
}
.stat strong {
  display: block;
  font-size: 2.4rem;
  color: var(--orange);
}
.stat span { color: #cbd5e1; font-size: 0.92rem; }

@media (max-width: 900px) {
  .why-grid { grid-template-columns: 1fr; text-align: center; }
  .copy ul li { text-align: left; }
  .stats-grid { grid-template-columns: repeat(2, 1fr); }
}
</style>
