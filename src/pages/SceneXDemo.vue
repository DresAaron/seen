<template>
  <q-card flat class="col-12" style="max-width: 500px; margin: 0 auto">
    <!-- <q-card-section> demo </q-card-section> -->

    <q-card-section>
      <template v-if="!isMobile">
        <video ref="videoCam" style="width: 100%; height: 300px"></video>

        <q-card-section class="row">
          <q-btn @click="toggleCapture">{{
            isCapturing ? 'Stop camera' : 'Start camera'
          }}</q-btn>
          <q-space />
          <q-btn @click="shoot" :disable="!isCapturing">Capture</q-btn>
        </q-card-section>
      </template>
      <template v-else>
        <input
          type="file"
          accept="image/*"
          capture="camera"
          ref="inputRef"
          @change="onMobileCapture"
          style="display: none"
        />
      </template>

      <q-img
        :placeholder-src="`images/placeholder.png`"
        :src="image"
        style="width: 100%"
        fit="contain"
        :class="{
          'q-mt-xl': !image,
        }"
      >
      </q-img>

      <q-separator v-if="image" class="q-my-md" />

      <q-card-section>
        <template v-if="!loading">
          <div v-if="scene">
            <!-- {{ scene.i18n['zh-CN'] }} -->
            {{ scene.i18n['en'] }}
          </div>
          <audio class="q-mt-md" style="width: 100%" v-if="scene" controls>
            <!-- <source :src="scene.tts['zh-CN']" type="audio/wav" /> -->
            <source :src="scene.tts['en']" type="audio/wav" />
          </audio>
          <template v-if="describeError">{{ describeError }}</template>
        </template>
        <div v-else-if="loading" class="q-pa-lg">
          <q-skeleton type="text" square width="30%" />
          <q-skeleton
            type="text"
            square
            width="100%"
            v-for="i in [1, 2, 3, 4, 5]"
            :key="i"
          />
        </div>
        api key - {{ apiKey }}
      </q-card-section>

      <q-card-actions>
        <q-btn
          v-if="isMobile"
          outline
          color="primary"
          class="q-mx-auto"
          :disable="loading"
          @click="triggerMobileCapture"
          >Open camera to capture
        </q-btn>
      </q-card-actions>
    </q-card-section>
  </q-card>
</template>
<script lang="ts" setup>
import { useQuasar } from 'quasar';
import { computed, onBeforeUnmount, onMounted, ref, nextTick } from 'vue';
import useSceneStore from 'stores/scene';
import { storeToRefs } from 'pinia';

const $q = useQuasar();
const sceneStore = useSceneStore();
const { apiKey } = storeToRefs(sceneStore);

const videoCam = ref<HTMLVideoElement | null>(null);

const isMobile = computed(() => {
  return $q.platform.is.mobile;
});

const isCapturing = ref(false);
const localStream = ref<MediaStream>();

const stopStream = () => {
  if (!localStream.value) return;
  localStream.value.getTracks().forEach((track) => track.stop());
  localStream.value = undefined;
};

const toggleCapture = async () => {
  isCapturing.value = !isCapturing.value;

  const videoEl = videoCam.value;
  if (!videoEl) return;

  if (isCapturing.value) {
    let All_mediaDevices = navigator.mediaDevices;
    if (!All_mediaDevices || !All_mediaDevices.getUserMedia) {
      console.log('getUserMedia() not supported.');
      return;
    }

    stopStream();
    localStream.value = await All_mediaDevices.getUserMedia({
      // audio: true,
      video: true,
    });

    if ('srcObject' in videoEl) {
      videoEl.srcObject = localStream.value;
    } else {
      (videoEl as any).src = window.URL.createObjectURL(
        localStream.value as any
      );
    }
    videoEl.onloadedmetadata = function (e) {
      videoEl.play();
    };
  } else {
    videoEl.pause();
    videoEl.srcObject = null;
    videoEl.src = '';
    localStream.value?.getTracks().forEach((track) => track.stop());
  }
};

const scaleFactor = 1;

/**
 * Captures a image frame from the provided video element.
 *
 * @param {Video} video HTML5 video element from where the image frame will be captured.
 * @param {Number} scaleFactor Factor to scale the canvas element that will be return. This is an optional parameter.
 *
 * @return {Canvas}
 */
function capture(video: HTMLVideoElement, scaleFactor: number) {
  if (scaleFactor == null) {
    scaleFactor = 1;
  }
  var w = video.videoWidth * scaleFactor;
  var h = video.videoHeight * scaleFactor;
  var canvas = document.createElement('canvas');
  canvas.width = w;
  canvas.height = h;
  var ctx = canvas.getContext('2d');
  if (!ctx) return;
  ctx.drawImage(video, 0, 0, w, h);
  return canvas;
}

/**
 * Invokes the <code>capture</code> function and attaches the canvas element to the DOM.
 */
function shoot() {
  const video = videoCam.value;
  if (!video) return;
  const canvas = capture(video, scaleFactor);
  if (!canvas) return;
  image.value = canvas.toDataURL('image/png');
  describe();
}

const toBase64 = (file: File) =>
  new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result);
    reader.onerror = reject;
  });

const loading = ref(false);
const image = ref();
const describeError = ref('');
const inputRef = ref<HTMLInputElement | null>(null);
const triggerMobileCapture = () => {
  if (!inputRef.value) return;
  inputRef.value.click();
};

const mobileOrientation = ref('portrait');
const orientation = ref('portrait');
const onMobileCapture = async () => {
  const file = inputRef.value?.files?.[0];
  if (!file) return;
  mobileOrientation.value = orientation.value;
  image.value = await toBase64(file);
  describe();
};

const scene = ref();
const describe = async () => {
  loading.value = true;
  try {
    const response = await sceneStore.describeImage(image.value);
    scene.value = response.results[0];
  } catch (e: any) {
    console.log(e);
    describeError.value = e.message;
  }
  loading.value = false;
};

const portrait = window.matchMedia('(orientation: portrait)');
const onScreenChange = (e: any) => {
  if (e.matches) {
    // Portrait mode
    orientation.value = 'portrait';
  } else {
    // Landscape
    orientation.value = 'landscape';
  }
};

onMounted(async () => {
  await nextTick();
  if (!apiKey?.value) {
    await sceneStore.initApiKey();
  }
  // window.alert('abc');
  portrait.addEventListener('change', onScreenChange);
});

onBeforeUnmount(() => {
  stopStream();
  portrait.removeEventListener('change', onScreenChange);
});
</script>
