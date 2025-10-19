<script setup lang="ts">
import AppLayout from '@/layouts/AppLayout.vue';
import { type BreadcrumbItem } from '@/types';
import { Head, useForm } from '@inertiajs/vue3';
import { route } from 'ziggy-js'
import { NForm, NInput, NButton } from 'naive-ui'

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Simple Form',
        href: route('simple.form.index'),
    },
];

const model = useForm({
  name: '',
  lastName: '',
  email: '',
  phone: '',
  website: '',
  dateOfBirth: null,
  dateRange: null,
  personalNumber: null,
  isCitizen: false,
})

</script>
<template>
    <Head title="Simple Form" />
    <AppLayout :breadcrumbs="breadcrumbs">
      <div class="p-4">
       <NForm
       v-model="model">
       <div class="grid grid-cols-2 gap-4">
        <NInput
          type="text"
          placeholder="Name"
          v-model:value="model.name"
        />

        <NInput
          type="text"
          placeholder="Last name"
          v-model:value="model.lastName"
        />

        <NInput
          type="text"
          placeholder="Email"
          v-model:value="model.email"
        />

        <NInput
          type="text"
          placeholder="Phone"
          v-model:value="model.phone"
        />

        <NInput
          type="text"
          placeholder="Website"
          v-model:value="model.website"
        />

        <NInput
          type="text"
          placeholder="Date of birth"
          v-model:value="model.dateOfBirth"
        />

        <NInput
          type="text"
          placeholder="Date range"
          v-model:value="model.dateRange"
        />
       </div>
       </NForm>
      </div>
      <pre class="absolute bottom-0">
       {{ model }}
      </pre>
    </AppLayout>
</template>
