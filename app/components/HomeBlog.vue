<script setup lang="ts">
const posts = [
  {
    date: 'Aug 18, 2026',
    author: 'OnSolve Team',
    title: '5 Signs Your Business Is Ready to Outsource Back-Office Operations',
    excerpt:
      'From rising admin costs to missed deadlines — here is how to know when outsourcing becomes the smarter move.',
    img: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=700&q=80&auto=format&fit=crop'
  },
  {
    date: 'Aug 4, 2026',
    author: 'M. Chen',
    title: 'In-House vs. Outsourced Call Centers: A Real Cost Comparison',
    excerpt:
      'We break down the true cost per contact for both models, including hidden expenses most companies forget.',
    img: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=700&q=80&auto=format&fit=crop'
  },
  {
    date: 'Jul 21, 2026',
    author: 'A. Rodriguez',
    title: 'How Process Documentation Unlocks 40% Faster Onboarding',
    excerpt:
      'Standard operating procedures are the backbone of scalable outsourcing. Learn how we build them in week one.',
    img: 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=700&q=80&auto=format&fit=crop'
  }
]
</script>

<template>
  <section id="blog" class="blog section">
    <div class="container">
      <div class="section-head" v-reveal>
        <span class="section-tag">Our Blog</span>
        <h2 class="section-title">Latest Blog & Articles</h2>
        <p>Insights on outsourcing, operations, and business growth from the OnSolve team.</p>
      </div>

      <div class="grid">
        <article v-for="(p, i) in posts" :key="p.title" v-reveal="{ delay: i * 120 }" class="post">
          <div class="thumb">
            <img :src="p.img" :alt="p.title" loading="lazy" />
          </div>
          <div class="body">
            <div class="meta">
              <span>📅 {{ p.date }}</span>
              <span>✍️ {{ p.author }}</span>
            </div>
            <h3>{{ p.title }}</h3>
            <p>{{ p.excerpt }}</p>
            <a href="#" class="read">Read Article →</a>
          </div>
        </article>
      </div>
    </div>
  </section>
</template>

<style scoped>
.blog { padding: 5.5rem 0; background: var(--light); }
.grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 1.5rem; }
.post {
  background: var(--white);
  border-radius: 14px;
  overflow: hidden;
  border: 1px solid var(--border);
  transition: transform 0.25s, box-shadow 0.25s;
  display: flex; flex-direction: column;
}
.post:hover { transform: translateY(-6px); box-shadow: 0 14px 35px rgba(15,23,42,0.1); }
.thumb { height: 170px; overflow: hidden; }
.thumb img {
  width: 100%; height: 100%;
  object-fit: cover;
  transition: transform 0.45s ease;
}
.post:hover .thumb img { transform: scale(1.08); }
.body { padding: 1.4rem; flex: 1; display: flex; flex-direction: column; }
.meta {
  display: flex; gap: 1rem;
  font-size: 0.78rem; color: #94a3b8; margin-bottom: 0.7rem;
}
.post h3 { font-size: 1.05rem; margin-bottom: 0.55rem; }
.post p { font-size: 0.9rem; flex: 1; }
.read { color: var(--orange); font-weight: 600; font-size: 0.88rem; margin-top: 1rem; }

@media (max-width: 900px) { .grid { grid-template-columns: 1fr; } }
</style>
