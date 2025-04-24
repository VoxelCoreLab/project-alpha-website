<template>
  <form @submit="onSubmit">
    <fieldset class="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4 mt-4">
      <legend class="fieldset-legend">Was ist deine E-Mail?</legend>
      <label class="input" :class="{ 'input-error': isEmailFieldTouched && errors.email, 'input-success': isEmailFieldTouched && isEmailFieldValid }">
        <svg class="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
          <g stroke-linejoin="round" stroke-linecap="round" stroke-width="2.5" fill="none" stroke="currentColor">
            <rect width="20" height="16" x="2" y="4" rx="2"></rect>
            <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
          </g>
        </svg>
        <input type="text" name="email" v-model="email" @blur="handleBlur" placeholder="Hier deine E-Mail eingeben..." />
      </label>
      <div v-if="isEmailFieldTouched && errors.email" class="text-error">{{ errors.email }}</div>

      <button class="btn btn-neutral mt-4">Beim Newsletter anmelden</button>
    </fieldset>
  </form>
</template>

<script lang="ts" setup>
import { useField, useForm, useIsFieldTouched, useIsFieldValid } from 'vee-validate';
import { toTypedSchema } from '@vee-validate/zod';
import * as zod from 'zod';
const validationSchema = toTypedSchema(
  zod.object({
    email: zod.string({
      required_error: 'Eine valide E-Mail eingeben: beispiel@mail.com'
    }).nonempty('Eine valide E-Mail eingeben: beispiel@mail.com').email({ message: 'Eine valide E-Mail eingeben: beispiel@mail.com' }),
  }).required()
);
const { handleSubmit, errors, validate } = useForm({
  validationSchema,
});
const { value: email, handleBlur } = useField('email');
const onSubmit = handleSubmit(values => {
  validate();
  alert(JSON.stringify(values, null, 2));
});

const isEmailFieldTouched = useIsFieldTouched('email')
const isEmailFieldValid = useIsFieldValid('email')
</script>