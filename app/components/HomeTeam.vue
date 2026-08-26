<script setup lang="ts">
interface Member {
  name: string
  role: string
  bio: string
  img: string
}

const members: Member[] = [
  {
    name: 'Daniel Reyes',
    role: 'Chief Executive Officer',
    bio: '15+ years in global BPO operations, formerly led delivery for a Fortune 500 outsourcing firm.',
    img: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=500&q=80&auto=format&fit=crop'
  },
  {
    name: 'Sarah Whitmore',
    role: 'Head of Operations',
    bio: 'Six Sigma Black Belt obsessed with process optimization and measurable SLA outcomes.',
    img: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=500&q=80&auto=format&fit=crop'
  },
  {
    name: 'Marcus Lee',
    role: 'Director of Technology',
    bio: 'Builds the automation stack behind OnSolve — from ticketing integrations to AI-assisted QA.',
    img: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=500&q=80&auto=format&fit=crop'
  },
  {
    name: 'Priya Nair',
    role: 'Client Success Lead',
    bio: 'Your first call and biggest advocate — ensures every engagement exceeds its KPIs.',
    img: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=500&q=80&auto=format&fit=crop'
  }
]

// simple mouse parallax on section background
const bgPos = ref('50% 50%')
function parallax(e: MouseEvent) {
  const x = (e.clientX / window.innerWidth - 0.5) * 30
  const y = (e.clientY / window.innerHeight - 0.5) * 20
  bgPos.value = `${50 + x}% ${50 + y}%`
}
onMounted(() => window.addEventListener('mousemove', parallax))
onUnmounted(() => window.removeEventListener('mousemove', parallax))
</script>

<template>
  <section id="team" class="team" :style="{ backgroundPosition: bgPos }">
    <div class="container">
      <div class="section-head" v-reveal>
        <span class="section-tag">Our Team</span>
        <h2 class="section-title">Meet The People Behind OnSolve</h2>
        <p>A leadership team with decades of combined experience running world-class outsourcing operations.</p>
      </div>

      <div class="grid">
        <div v-for="(m, i) in members" :key="m.name" v-reveal="{ delay: i * 120 }">
          <Tilt3D>
            <article class="card">
              <div class="photo-ring">
                <img :src="m.img" :alt="m.name" loading="lazy" />
              </div>
              <h3>{{ m.name }}</h3>
              <p class="role">{{ m.role }}</p>
              <p class="bio">{{ m.bio }}</p>
              <div class="socials">
                <a href="#" aria-label="LinkedIn">in</a>
                <a href="#" aria-label="Email">✉</a>
                <a href="#" aria-label="X">𝕏</a>
              </div>
            </article>
          </Tilt3D>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.team {
  padding: 5.5rem 0;
  background:
    radial-gradient(circle at 85% 15%, rgba(249, 115, 22, 0.07), transparent 45%),
    radial-gradient(circle at 10% 90%, rgba(15, 23, 42, 0.05), transparent 45%),
    var(--light);
  transition: background-position 0.4s ease-out;
}
.grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1.4rem;
}
.card {
  background: var(--white);
  border-radius: 18px;
  border: 1px solid var(--border);
  text-align: center;
  padding: 2rem 1.4rem 1.6rem;
  box-shadow: 0 8px 24px rgba(15, 23, 42, 0.06);
  transition: box-shadow 0.3s;
}
.card:hover { box-shadow: 0 22px 45px rgba(249, 115, 22, 0.16); }
.photo-ring {
  width: 118px; height: 118px;
  margin: 0 auto 1.1rem;
  border-radius: 50%;
  padding: 4px;
  background: conic-gradient(var(--orange), #fdba74, var(--orange));
  animation: spin-hue 6s linear infinite;
}
@keyframes spin-hue { to { filter: hue-rotate(360deg); } }
.photo-ring img {
  width: 100%; height: 100%;
  object-fit: cover;
  border-radius: 50%;
  border: 3px solid var(--white);
}
.card h3 { font-size: 1.05rem; }
.role { color: var(--orange); font-weight: 600; font-size: 0.82rem; margin: 0.25rem 0 0.7rem; }
.bio { font-size: 0.85rem; }
.socials { display: flex; justify-content: center; gap: 0.55rem; margin-top: 1.1rem; }
.socials a {
  width: 32px; height: 32px;
  border-radius: 50%;
  background: var(--light);
  display: flex; align-items: center; justify-content: center;
  font-size: 0.78rem;
  transition: all 0.2s;
}
.socials a:hover { background: var(--orange); color: var(--white); }

@media (max-width: 1000px) { .grid { grid-template-columns: repeat(2, 1fr); } }
@media (max-width: 560px) { .grid { grid-template-columns: 1fr; } }
</style>
