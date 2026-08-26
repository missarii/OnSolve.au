<script setup lang="ts">
const features = [
  { icon: '✅', title: 'Quality Assurance', text: 'Rigorous QA processes and SLA-backed delivery on every engagement.' },
  { icon: '🏆', title: 'Great Products', text: 'Best-in-class service products refined over 5+ years of operations.' },
  { icon: '🤝', title: 'Dedicated Team', text: 'Hand-picked specialists who work as an extension of your business.' },
  { icon: '⏱️', title: '24/7 Support', text: 'Round-the-clock coverage so your customers are never left waiting.' }
]

// subtle mouse parallax for the whole hero scene
const shift = ref({ x: 0, y: 0 })
function onParallax(e: MouseEvent) {
  shift.value = {
    x: (e.clientX / window.innerWidth - 0.5) * 18,
    y: (e.clientY / window.innerHeight - 0.5) * 12
  }
}
onMounted(() => window.addEventListener('mousemove', onParallax))
onUnmounted(() => window.removeEventListener('mousemove', onParallax))

const faces = ['🏢', '📞', '📈', '🛠️', '💬', '⚙️']
</script>

<template>
  <section class="hero">
    <div class="container hero-grid">
      <div class="hero-copy" v-reveal>
        <span class="pill">★ Trusted BPO Partner Since 2021</span>
        <h1>High-Quality, Process-Driven <span class="accent">Outsourcing Solutions</span></h1>
        <p>
          OnSolve helps businesses optimize operations, cut costs, and scale faster
          with reliable outsourcing delivered by a dedicated team of experts.
        </p>
        <div class="hero-ctas">
          <a href="#contact" class="btn btn-primary">Get Started Today</a>
          <a href="#services" class="btn btn-outline">Explore Services</a>
        </div>
      </div>

      <div class="scene" aria-hidden="true">
        <img
          class="photo"
          src="https://images.unsplash.com/photo-1556761175-b413da4baf72?w=800&q=80&auto=format&fit=crop"
          alt=""
          :style="{ transform: `translate(${shift.x * -0.6}px, ${shift.y * -0.6}px)` }"
        >
        <div class="cube-stage" :style="{ transform: `translate(${shift.x}px, ${shift.y}px)` }">
          <div class="cube">
            <div v-for="face in faces" :key="face" class="face">{{ face }}</div>
          </div>
        </div>
        <div class="float-card f1">⚡ 99.9% SLA Uptime</div>
        <div class="float-card f2">🌍 24/7 Global Coverage</div>
      </div>
    </div>

    <div class="container feature-cards">
      <div v-for="(f, i) in features" :key="f.title" v-reveal="{ delay: i * 110 }">
        <Tilt3D>
          <div class="feature-card">
            <span class="fc-icon">{{ f.icon }}</span>
            <h3>{{ f.title }}</h3>
            <p>{{ f.text }}</p>
          </div>
        </Tilt3D>
      </div>
    </div>
  </section>
</template>


<style scoped>
.hero {
  position: relative;
  overflow: hidden;
  color: var(--white);
  padding: 5.5rem 0 3rem;
  background-color: var(--navy);
  background-size: cover;
  background-position: center;
  background-image:
    linear-gradient(135deg, rgba(15,23,42,0.93) 0%, rgba(30,41,59,0.87) 60%, rgba(51,65,85,0.82) 100%),
    url('https://images.unsplash.com/photo-1497366216548-37526070297c?w=1600&q=80&auto=format&fit=crop');
}
.hero-grid {
  display: grid;
  grid-template-columns: 1.15fr 1fr;
  align-items: center;
  gap: 3rem;
}
.pill {
  display: inline-block;
  background: rgba(249, 115, 22, 0.15);
  color: var(--orange);
  padding: 0.4rem 1rem;
  border-radius: 999px;
  font-size: 0.82rem;
  font-weight: 600;
  margin-bottom: 1.25rem;
}
h1 { color: var(--white); font-size: clamp(2rem, 5vw, 3.2rem); margin-bottom: 1.25rem; }
.accent { color: var(--orange); }
.hero-copy p { font-size: 1.08rem; color: #cbd5e1; max-width: 520px; }
.hero-ctas { display: flex; gap: 1rem; margin-top: 2rem; flex-wrap: wrap; }

.scene { position: relative; min-height: 320px; perspective: 1000px; }
.photo {
  position: absolute;
  top: 8%; right: 0;
  width: 82%;
  height: 300px;
  object-fit: cover;
  border-radius: 20px;
  box-shadow: 0 25px 70px rgba(0,0,0,0.45);
  transition: transform 0.2s ease-out;
}
.cube-stage {
  position: absolute;
  left: 6%;
  top: 22%;
  transform-style: preserve-3d;
  transition: transform 0.2s ease-out;
}
.cube {
  position: relative;
  width: 110px; height: 110px;
  margin: 20px;
  transform-style: preserve-3d;
  animation: cube-spin 14s linear infinite;
}
.face {
  position: absolute;
  width: 110px; height: 110px;
  display: flex; align-items: center; justify-content: center;
  font-size: 2.6rem;
  background: rgba(255, 255, 255, 0.94);
  border: 2px solid var(--orange);
  border-radius: 12px;
}
.face:nth-child(1) { transform: rotateY(0deg) translateZ(55px); }
.face:nth-child(2) { transform: rotateY(90deg) translateZ(55px); }
.face:nth-child(3) { transform: rotateY(180deg) translateZ(55px); }
.face:nth-child(4) { transform: rotateY(-90deg) translateZ(55px); }
.face:nth-child(5) { transform: rotateX(90deg) translateZ(55px); }
.face:nth-child(6) { transform: rotateX(-90deg) translateZ(55px); }
@keyframes cube-spin {
  from { transform: rotateX(-18deg) rotateY(0deg); }
  to { transform: rotateX(-18deg) rotateY(360deg); }
}

.float-card {
  position: absolute;
  z-index: 2;
  background: var(--white);
  color: var(--navy);
  padding: 0.75rem 1.1rem;
  border-radius: 10px;
  font-weight: 600; font-size: 0.85rem;
  box-shadow: 0 10px 30px rgba(0,0,0,0.25);
  animation: floaty 4s ease-in-out infinite;
}
.f1 { top: 2%; left: 34%; }
.f2 { bottom: 4%; right: 2%; animation-delay: 2s; }
@keyframes floaty {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-10px); }
}

.feature-cards {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1.25rem;
  margin-top: 4rem;
}
.feature-card {
  background: var(--white);
  color: var(--slate);
  padding: 1.5rem;
  border-radius: 14px;
  box-shadow: 0 10px 35px rgba(0,0,0,0.18);
  height: 100%;
}
.fc-icon { font-size: 1.8rem; }
.feature-card h3 { font-size: 1.05rem; margin: 0.6rem 0 0.4rem; }
.feature-card p { font-size: 0.87rem; }

@media (max-width: 980px) {
  .hero-grid { grid-template-columns: 1fr; text-align: center; }
  .hero-copy p { margin: 0 auto; }
  .hero-ctas { justify-content: center; }
  .scene { max-width: 480px; margin: 0 auto; }
  .feature-cards { grid-template-columns: repeat(2, 1fr); }
}
@media (max-width: 560px) {
  .feature-cards { grid-template-columns: 1fr; }
  .cube-stage { left: 0; top: 40%; }
}
</style>
