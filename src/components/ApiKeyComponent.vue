<template>
  <q-dialog persistent ref="dialogRef">
    <q-card style="min-width: 330px">
      <q-card-section>
        <div class="text-h6 q-mb-md">API Key</div>

        <q-input dense v-model="apiKey" label="Your API Key"></q-input>
      </q-card-section>
      <q-card-actions align="right">
        <q-btn
          :disable="!apiKey"
          flat
          label="Confirm"
          color="primary"
          @click="onOk"
        />
      </q-card-actions>
    </q-card>
  </q-dialog>
</template>

<script setup lang="ts">
import { useDialogPluginComponent } from 'quasar';
import { ref } from 'vue';

const { onDialogOK, dialogRef } = useDialogPluginComponent();

const apiKey = ref('');

const onOk = () => {
  onDialogOK(apiKey.value);
};
</script>
