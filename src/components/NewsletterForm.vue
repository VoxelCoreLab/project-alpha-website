<template>
  <form @submit="onSubmit">
    <fieldset class="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4 mt-4">
      <legend class="fieldset-legend">Was ist deine E-Mail?</legend>
      <label class="input"
        :class="{ 'input-error': isEmailFieldTouched && errors.email, 'input-success': isEmailFieldTouched && isEmailFieldValid }">
        <svg class="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
          <g stroke-linejoin="round" stroke-linecap="round" stroke-width="2.5" fill="none" stroke="currentColor">
            <rect width="20" height="16" x="2" y="4" rx="2"></rect>
            <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
          </g>
        </svg>
        <input type="text" name="email" v-model="email" @blur="handleBlur"
          placeholder="Hier deine E-Mail eingeben..." />
      </label>
      <div v-if="isEmailFieldTouched && errors.email" class="text-error">{{ errors.email }}</div>

      <button class="btn btn-neutral mt-4">Beim Newsletter anmelden</button>
    </fieldset>
  </form>

  <dialog ref="newsletterSuccessModal" class="modal">
    <div class="modal-box">
      <form method="dialog">
        <button class="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
      </form>
      <h3 class="text-lg font-bold">Beim Newsletter angemeldet</h3>
      <p class="py-4">Du hast dich erfolgreich beim Newsletter angemeldet!</p>
      <div class="modal-action">
        <form method="dialog">
          <!-- if there is a button in form, it will close the modal -->
          <button class="btn">OK</button>
        </form>
      </div>
    </div>
    <form method="dialog" class="modal-backdrop">
      <button>close</button>
    </form>
  </dialog>
</template>

<script lang="ts" setup>
import { useField, useForm, useIsFieldTouched, useIsFieldValid } from 'vee-validate';
import { toTypedSchema } from '@vee-validate/zod';
import * as zod from 'zod';
import { ref } from 'vue';

const newsletterSuccessModal = ref<HTMLDialogElement | null>(null);

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
const onSubmit = handleSubmit(_ => {
  validate();
  newsletterSuccessModal.value?.showModal()
});

const isEmailFieldTouched = useIsFieldTouched('email')
const isEmailFieldValid = useIsFieldValid('email')
</script>