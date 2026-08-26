<script setup lang="ts">
const { services } = useServices()

const form = reactive({
  name: '',
  email: '',
  phone: '',
  message: '',
  selected: [] as string[]
})

const submitted = ref(false)

function toggle(slug: string) {
  const i = form.selected.indexOf(slug)
  i === -1 ? form.selected.push(slug) : form.selected.splice(i, 1)
}

function submit() {
  // Hook this up to your API endpoint / CRM integration
  console.log('Lead captured:', form)
  submitted.value = true
}
</script>

<template>
  <section id="contact" class="contact">
    <div class="container contact-grid">
      <div class="cta-block">
        <span class="section-tag">Get In Touch</span>
        <h2>Best Creative Agency That Will Provide The Best Solution For You</h2>
        <p>
          Tell us what you need to outsource and our solutions team will get back
          to you within one business day with a tailored proposal and pricing.
        </p>
        <ul class="points">
          <li>✔ Free consultation & process audit</li>
          <li>✔ Transparent, usage-based pricing</li>
          <li>✔ No long-term lock-in contracts</li>
        </ul>

        <!-- Google Maps embed (keyless) -->
        <div class="map-card" v-reveal>
          <h3>📍 Visit Our Office</h3>
          <iframe
            src="https://www.google.com/maps?q=100+Business+Ave,+New+York,+NY&output=embed"
            width="100%"
            height="240"
            style="border: 0; border-radius: 12px;"
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
            title="OnSolve company location on Google Maps"
            allowfullscreen
          />
        </div>
      </div>

      <form class="form" @submit.prevent="submit">
        <template v-if="!submitted">
          <input v-model="form.name" type="text" placeholder="Full Name" required />
          <input v-model="form.email" type="email" placeholder="Email Address" required />
          <input v-model="form.phone" type="tel" placeholder="Phone Number" required />

          <fieldset>
            <legend>Which services are you interested in?</legend>
            <label v-for="s in services" :key="s.slug" class="check">
              <input
                type="checkbox"
                :checked="form.selected.includes(s.slug)"
                @change="toggle(s.slug)"
              />
              {{ s.title }}
            </label>
          </fieldset>

          <textarea v-model="form.message" rows="3" placeholder="Tell us about your project (optional)" />

          <button type="submit" class="btn btn-primary submit">Request a Consultation →</button>
        </template>
        <div v-else class="success">
          <h3>🎉 Thank you, {{ form.name }}!</h3>
          <p>Your request has been received. Our team will contact you within 24 hours.</p>
        </div>
      </form>
    </div>
  </section>
</template>

<style scoped>
.contact {
  padding: 5.5rem 0;
  background: linear-gradient(135deg, #0f172a, #1e293b);
  color: var(--white);
}
.contact-grid {
  display: grid;
  grid-template-columns: 1fr 1.1fr;
  gap: 3.5rem;
  align-items: start;
}
.cta-block h2 { color: var(--white); font-size: clamp(1.6rem, 3vw, 2.3rem); margin-bottom: 1rem; }
.cta-block p { color: #cbd5e1; }
.points { margin-top: 1.5rem; }
.points li { margin-bottom: 0.7rem; color: var(--orange); font-weight: 500; }
.map-card { margin-top: 2rem; }
.map-card h3 { color: var(--white); margin-bottom: 0.8rem; font-size: 1.1rem; }


.form {
  background: var(--white);
  border-radius: 16px;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
}
.form input[type='text'],
.form input[type='email'],
.form input[type='tel'],
.form textarea {
  width: 100%;
  padding: 0.85rem 1rem;
  border: 1px solid var(--border);
  border-radius: 8px;
  font-size: 0.95rem;
  font-family: inherit;
}
.form input:focus, .form textarea:focus {
  outline: none;
  border-color: var(--orange);
}
fieldset { border: none; }
legend { font-weight: 600; color: var(--navy); margin-bottom: 0.6rem; }
.checks { columns: 2; gap: .5rem; }
.check {
  display: block;
  font-size: 0.88rem;
  padding: 0.3rem 0;
  cursor: pointer;
  break-inside: avoid;
}
.check input { accent-color: var(--orange); margin-right: 0.45rem; }
.submit { width: 100%; font-size: 1rem; }
.success { text-align: center; padding: 2rem 0; }
.success h3 { margin-bottom: 0.75rem; }

@media (max-width: 900px) { .contact-grid { grid-template-columns: 1fr; } }
</style>
