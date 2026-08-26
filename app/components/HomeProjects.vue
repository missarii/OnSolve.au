<script setup lang="ts">
interface Project {
  title: string
  client: string
  category: string
  img: string
  result: string
  tags: string[]
}

const categories = ['All', 'BPO Operations', 'Customer Support', 'Data & Tech']

const projects: Project[] = [
  {
    title: 'Global Retail Back-Office Overhaul',
    client: 'RetailChain Co.',
    category: 'BPO Operations',
    img: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&q=80&auto=format&fit=crop',
    result: '-38% operational costs in year one',
    tags: ['Data Entry', 'Invoicing', 'Payroll']
  },
  {
    title: '24/7 Multilingual Helpdesk Launch',
    client: 'SaaSly Software',
    category: 'Customer Support',
    img: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?w=800&q=80&auto=format&fit=crop',
    result: 'CSAT score up from 71% to 94%',
    tags: ['Tech Support', 'Live Chat', 'Tier 1–3']
  },
  {
    title: 'Lead Gen Engine for Fintech Scale-Up',
    client: 'PayFlow Inc.',
    category: 'BPO Operations',
    img: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80&auto=format&fit=crop',
    result: '420+ qualified meetings booked in 6 months',
    tags: ['Telemarketing', 'Appointment Setting', 'CRM']
  },
  {
    title: 'E-commerce Store Ops Migration',
    client: 'UrbanWear Group',
    category: 'Data & Tech',
    img: 'https://images.unsplash.com/photo-1523474253046-8cd2748b5fd2?w=800&q=80&auto=format&fit=crop',
    result: '12k+ orders processed monthly at 99.7% accuracy',
    tags: ['Listings', 'Order Processing', 'Returns']
  },
  {
    title: 'Healthcare Records Digitization',
    client: 'MediCare Plus',
    category: 'Data & Tech',
    img: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&q=80&auto=format&fit=crop',
    result: '1.2M records digitized with zero breaches',
    tags: ['Document Digitization', 'Compliance', 'Validation']
  },
  {
    title: 'Peak-Season Call Center Surge Team',
    client: 'TravelNest Airlines',
    category: 'Customer Support',
    img: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=800&q=80&auto=format&fit=crop',
    result: 'Handled 3x call volume with <60s hold times',
    tags: ['Inbound Calls', 'Surge Scaling', 'Multilingual']
  }
]

const active = ref('All')
const filtered = computed(() =>
  active.value === 'All' ? projects : projects.filter((p) => p.category === active.value)
)
</script>

<template>
  <section id="projects" class="projects">
    <div class="container">
      <div class="section-head" v-reveal>
        <span class="section-tag">Portfolio</span>
        <h2 class="section-title">Projects We've Already Delivered</h2>
        <p>Real engagements, measurable outcomes — a snapshot of the work our teams ship every day.</p>
      </div>

      <!-- Category filter -->
      <div class="filters" v-reveal>
        <button
          v-for="c in categories"
          :key="c"
          class="filter-btn"
          :class="{ active: active === c }"
          @click="active = c"
        >
          {{ c }}
        </button>
      </div>

      <TransitionGroup name="proj" tag="div" class="grid">
        <article v-for="(p, i) in filtered" :key="p.title" class="card" v-reveal="{ delay: i * 90 }">
          <Tilt3D>
            <div class="card-inner">
              <div class="thumb">
                <img :src="p.img" :alt="p.title" loading="lazy" />
                <div class="overlay">
                  <span class="result">{{ p.result }}</span>
                </div>
                <span class="cat-badge">{{ p.category }}</span>
              </div>
              <div class="body">
                <p class="client">{{ p.client }}</p>
                <h3>{{ p.title }}</h3>
                <ul class="tags">
                  <li v-for="t in p.tags" :key="t">{{ t }}</li>

                </ul>
              </div>
            </div>
          </Tilt3D>
        </article>
      </TransitionGroup>

      <div class="more-wrap" v-reveal>
        <a href="#contact" class="btn btn-dark">Become Our Next Success Story →</a>
      </div>
    </div>
  </section>
</template>


<style scoped>
.projects { padding: 5.5rem 0; background: var(--white); }

.filters {
  display: flex;
  justify-content: center;
  gap: 0.7rem;
  flex-wrap: wrap;
  margin-bottom: 2.75rem;
}
.filter-btn {
  padding: 0.55rem 1.3rem;
  border-radius: 999px;
  border: 1.5px solid var(--border);
  background: var(--light);
  color: var(--slate);
  font-weight: 600;
  font-size: 0.88rem;
  cursor: pointer;
  transition: all 0.25s ease;
}
.filter-btn:hover { border-color: var(--orange); color: var(--orange); }
.filter-btn.active {
  background: var(--orange);
  border-color: var(--orange);
  color: var(--white);
  box-shadow: 0 8px 20px rgba(249, 115, 22, 0.35);
}

/* smooth add/remove animation when filtering */
.proj-enter-active, .proj-leave-active { transition: all 0.45s cubic-bezier(0.22, 1, 0.36, 1); }
.proj-enter-from { opacity: 0; transform: translateY(24px) scale(0.96); }
.proj-leave-to { opacity: 0; transform: scale(0.94); }

.grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.5rem;
}
.card-inner {
  background: var(--white);
  border: 1px solid var(--border);
  border-radius: 16px;
  overflow: hidden;
  transition: box-shadow 0.3s;
  height: 100%;
}
.card-inner:hover { box-shadow: 0 20px 45px rgba(15, 23, 42, 0.14); }

.thumb { position: relative; height: 190px; overflow: hidden; }
.thumb img {
  width: 100%; height: 100%;
  object-fit: cover;
  transition: transform 0.5s ease;
}
.card:hover .thumb img { transform: scale(1.08); }

.overlay {
  position: absolute;
  inset: 0;
  display: flex; align-items: flex-end;
  padding: 1rem;
  background: linear-gradient(to top, rgba(15,23,42,0.85), transparent 60%);
  opacity: 0;
  transition: opacity 0.35s ease;
}
.card:hover .overlay { opacity: 1; }
.result {
  color: var(--white);
  font-weight: 700;
  font-size: 0.92rem;
  transform: translateY(10px);
  transition: transform 0.35s ease;
}
.card:hover .result { transform: translateY(0); }

.cat-badge {
  position: absolute;
  top: 12px; left: 12px;
  background: var(--orange);
  color: var(--white);
  font-size: 0.72rem;
  font-weight: 700;
  padding: 0.3rem 0.75rem;
  border-radius: 999px;
  text-transform: uppercase;
  letter-spacing: 0.5px;
}

.body { padding: 1.25rem 1.3rem 1.4rem; }
.client { color: var(--orange); font-weight: 600; font-size: 0.8rem; margin-bottom: 0.3rem; }
.body h3 { font-size: 1.05rem; line-height: 1.35; }
.tags { display: flex; flex-wrap: wrap; gap: 0.45rem; margin-top: 0.9rem; }
.tags li {
  background: var(--light);
  border: 1px solid var(--border);
  border-radius: 999px;
  font-size: 0.74rem;
  padding: 0.22rem 0.7rem;
  color: var(--slate);
}

.more-wrap { text-align: center; margin-top: 3rem; }

@media (max-width: 980px) { .grid { grid-template-columns: repeat(2, 1fr); } }
@media (max-width: 600px) { .grid { grid-template-columns: 1fr; } }
</style>
