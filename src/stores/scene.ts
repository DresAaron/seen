import { defineStore } from 'pinia';
import JinaAI from 'jinaai';
import { Dialog } from 'quasar';
import ApiKeyComponent from 'src/components/ApiKeyComponent.vue';
import { ref } from 'vue';

const useSceneStore = defineStore('scene', (): any => {
  const apiKey = ref('');
  const jinaai = ref<JinaAI>();

  const initApiKey = () => {
    return new Promise<string>((resolve) => {
      Dialog.create({
        component: ApiKeyComponent,
      }).onOk((key: string) => {
        resolve(key);
        apiKey.value = key;
        jinaai.value = new JinaAI({
          secrets: {
            'scenex-secret': apiKey.value,
          },
        });
      });
    });
  };

  const describeImage = async (image: string) => {
    const result = await jinaai.value?.describe({
      data: [
        {
          image: image,
          algorithm: 'Glide',
          features: ['tts'],
          languages: ['zh-CN'],
        },
      ],
    });
    return result;
  };

  return {
    apiKey,
    describeImage,
    initApiKey,
  };
});

export default useSceneStore;
