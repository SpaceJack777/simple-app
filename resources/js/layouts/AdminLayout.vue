<script>
console.log('admin layout')
export default {}
</script>

<template>
  <div>
    <header style="padding: 1rem; background: #222; color: #fff;">
      <h1>Admin Layout</h1>
    </header>

    <main style="padding: 1rem;">
      <slot />
    </main>
  </div>
</template>
