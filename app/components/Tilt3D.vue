<script setup lang="ts">
const el = ref<HTMLElement | null>(null)

function onMove(e: MouseEvent) {
  const card = el.value
  if (!card) return
  const r = card.getBoundingClientRect()
  const x = (e.clientX - r.left) / r.width - 0.5
  const y = (e.clientY - r.top) / r.height - 0.5
  const max = 10
  card.style.transform = `rotateY(${x * max}deg) rotateX(${-y * max}deg)`
}
function onLeave() {
  if (el.value) el.value.style.transform = 'rotateY(0) rotateX(0)'
}
</script>

<template>
  <div class="tilt-wrap">
    <div ref="el" class="tilt" @mousemove="onMove" @mouseleave="onLeave">
      <slot />
    </div>
  </div>
</template>
