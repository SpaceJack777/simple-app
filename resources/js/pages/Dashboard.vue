<script>
import AdminLayout from '../Layouts/AdminLayout.vue'

export default {
  layout: AdminLayout, // 👈 tells Inertia to use AdminLayout for this page
  props: {
    title: String,
  },
}
</script>
<template>
  <AdminLayout>
    Dashboard
    123
  </AdminLayout>
</template>
