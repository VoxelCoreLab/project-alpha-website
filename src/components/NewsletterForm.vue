<template>
  <form @submit="onSubmit">
    <fieldset class="fieldset bg-base-100 rounded-box p-4 mt-4 shadow-lg border border-secondary/40 w-full md:w-xs">
      <legend class="fieldset-legend">What is your E-Mail?</legend>
      <label class="input w-full floating-label"
        :class="{ 'input-error': isEmailFieldTouched && errors.email, 'input-success': isEmailFieldTouched && isEmailFieldValid }">
        <span>Your Email</span>
        <svg class="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
          <g stroke-linejoin="round" stroke-linecap="round" stroke-width="2.5" fill="none" stroke="currentColor">
            <rect width="20" height="16" x="2" y="4" rx="2"></rect>
            <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
          </g>
        </svg>
        <input class="text-base" type="text" name="email" v-model="email" @blur="handleBlur"
          placeholder="Enter your email..." autocomplete="email" />
      </label>
      <div v-if="isEmailFieldTouched && errors.email" class="text-error" role="alert" aria-live="assertive">
        {{ errors.email }}
      </div>

      <button class="btn btn-primary mt-4 uppercase">Subscribe to Newsletter</button>
    </fieldset>
  </form>

  <dialog ref="newsletterSuccessModal" class="modal">
    <div class="modal-box">
      <form method="dialog">
        <button class="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
      </form>
      <h3 class="text-lg font-cinzel font-bold italic uppercase md:text-2xl">Subscribed to Newsletter</h3>
      <p class="py-4">You have successfully subscribed to the newsletter!</p>
      <img alt="" src="../assets/adler.webp" class="h-40 w-40 mx-auto mt-4" />
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
      required_error: 'Enter a valid E-Mail: example@mail.com'
    }).nonempty('Enter a valid E-Mail: example@mail.com').email({ message: 'Enter a valid E-Mail: example@mail.com' }),
  }).required()
);
const { handleSubmit, errors, validate } = useForm({
  validationSchema,
});
const { value: email, handleBlur } = useField<string>('email');
const onSubmit = handleSubmit(async _ => {
  validate();
  try {
    await signUpForNewsletter(email.value);
    newsletterSuccessModal.value?.showModal()
  } catch (error) {
    console.error('Failed to subscribe:', error);
    return;
  }
});

const isEmailFieldTouched = useIsFieldTouched('email')
const isEmailFieldValid = useIsFieldValid('email')

const signUpForNewsletter = async (email: string) => {
  const LISTMONK_API = 'https://listmonk.pibern.ch/api/public/subscription';
  const LISTMONK_LIST_ID = 'eaad840b-18cd-42d0-be35-cbac29616679';
  const payload = {
    email,
    name: '',
    list_uuids: [LISTMONK_LIST_ID],
  };

  const response = await fetch(LISTMONK_API, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload),
  });
  if (!response.ok) {
    throw new Error('Failed to subscribe to the newsletter');
  }
  return response.json();
}
</script>