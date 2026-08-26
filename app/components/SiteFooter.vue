<script setup lang="ts">
const services = useServices()
</script>

<template>
  <footer class="footer">
    <div class="container footer-grid">
      <div class="footer-col about">
        <div class="logo">
          <span class="logo-mark">◎</span>
          <span>On<span class="accent">Solve</span></span>
        </div>
        <p>
          OnSolve delivers process-driven BPO and strategic outsourcing solutions
          that reduce operational costs and let you focus on what matters — growing your business.
        </p>
        <div class="socials">
          <a href="#" aria-label="Facebook">f</a>
          <a href="#" aria-label="X">𝕏</a>
          <a href="#" aria-label="LinkedIn">in</a>
          <a href="#" aria-label="Instagram">◎</a>
        </div>
      </div>

      <div class="footer-col">
        <h4>Quick Links</h4>
        <ul>
          <li><NuxtLink to="/">Home</NuxtLink></li>
          <li><NuxtLink to="/#about">About Us</NuxtLink></li>
          <li><NuxtLink to="/#services">Services</NuxtLink></li>
          <li><NuxtLink to="/#blog">Blog</NuxtLink></li>
          <li><NuxtLink to="/#contact">Contact</NuxtLink></li>
        </ul>
      </div>

      <div class="footer-col">
        <h4>Our Services</h4>
        <ul>
          <li v-for="s in services.slice(0, 7)" :key="s.slug">
            <NuxtLink :to="`/services/${s.slug}`">{{ s.title }}</NuxtLink>
          </li>
          <li><NuxtLink to="/#services">View all services →</NuxtLink></li>
        </ul>
      </div>

      <div class="footer-col">
        <h4>Contact & Trust</h4>
        <ul>
          <li>📧 info@onsolve.com</li>
          <li>📞 +1 (555) 012-3456</li>
          <li>📍 100 Business Ave, Suite 400</li>
        </ul>
        <div class="badges">
          <span class="badge">ISO 9001</span>
          <span class="badge">SOC 2</span>
          <span class="badge">GDPR ✓</span>
        </div>
      </div>
    </div>

    <div class="footer-bottom">
      <p>© {{ new Date().getFullYear() }} OnSolve. All rights reserved.</p>
    </div>
  </footer>
</template>

<style scoped>
.footer { background: var(--navy); color: #94a3b8; padding: 4rem 0 0; }
.footer-grid {
  display: grid;
  grid-template-columns: 1.4fr 1fr 1.4fr 1.2fr;
  gap: 2.5rem;
}
.logo { font-size: 1.4rem; font-weight: 800; color: var(--white); display: flex; gap: .4rem; align-items: center; }
.logo-mark, .accent { color: var(--orange); }
.about p { margin-top: 1rem; font-size: 0.92rem; }

.socials { display: flex; gap: 0.6rem; margin-top: 1.25rem; }
.socials a {
  width: 36px; height: 36px; border-radius: 50%;
  background: rgba(255,255,255,0.08);
  display: flex; align-items: center; justify-content: center;
  color: var(--white); font-size: 0.85rem; transition: background .2s;
}
.socials a:hover { background: var(--orange); }

.footer-col h4 { color: var(--white); margin-bottom: 1rem; }
.footer-col ul li { margin-bottom: 0.6rem; font-size: 0.92rem; }
.footer-col ul a:hover { color: var(--orange); }

.badges { display: flex; gap: 0.5rem; margin-top: 1.25rem; flex-wrap: wrap; }
.badge {
  border: 1px solid #334155; border-radius: 6px;
  padding: 0.35rem 0.7rem; font-size: 0.75rem; color: #cbd5e1;
}

.footer-bottom {
  margin-top: 3rem;
  border-top: 1px solid #1e293b;
  text-align: center;
  padding: 1.25rem 0;
  font-size: 0.85rem;
}

@media (max-width: 900px) { .footer-grid { grid-template-columns: 1fr 1fr; } }
@media (max-width: 560px) { .footer-grid { grid-template-columns: 1fr; } }
</style>
