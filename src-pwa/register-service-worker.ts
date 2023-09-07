import { register } from 'register-service-worker';
import { Notify } from 'quasar';

// The ready(), registered(), cached(), updatefound() and updated()
// events passes a ServiceWorkerRegistration instance in their arguments.
// ServiceWorkerRegistration: https://developer.mozilla.org/en-US/docs/Web/API/ServiceWorkerRegistration

register(process.env.SERVICE_WORKER_FILE, {
  // The registrationOptions object will be passed as the second argument
  // to ServiceWorkerContainer.register()
  // https://developer.mozilla.org/en-US/docs/Web/API/ServiceWorkerContainer/register#Parameter

  // registrationOptions: { scope: './' },

  ready(/* registration */) {
    // console.log('Service worker is active.')
    // window.alert('abc');
  },

  registered(/* registration */) {
    // console.log('Service worker has been registered.')
    // Notify.create({
    //   color: 'negative',
    //   icon: 'update',
    //   caption:
    //     'A new version of SceneXplain is now available. To ensure the best experience, please click the refresh button.',
    //   message: 'SceneXplain is updated!',
    //   timeout: 0,
    //   multiLine: true,
    //   position: 'top',
    //   actions: [
    //     {
    //       label: 'Refresh',
    //       color: 'white',
    //       handler: async () => {
    //         const registration = await navigator.serviceWorker?.ready;
    //         if (registration?.waiting) {
    //           console.log('Waiting service worker found, skipping waiting');
    //           await registration.waiting.postMessage('SKIP_WAITING');
    //           console.log('Message sent');
    //           await new Promise((resolve) => setTimeout(resolve, 500));
    //         }
    //         window.location.reload();
    //       },
    //     },
    //   ],
    // });
    // window.alert('register');
  },

  cached(/* registration */) {
    // console.log('Content has been cached for offline use.')
  },

  updatefound(/* registration */) {
    // console.log('New content is downloading.')
  },

  updated(/* registration */) {
    // console.log('New content is available; please refresh.')
    console.log('New content is available; please refresh.');
    Notify.create({
      color: 'negative',
      icon: 'update',
      caption:
        'A new version of SceneXplain is now available. To ensure the best experience, please click the refresh button.',
      message: 'SceneXplain is updated!',
      timeout: 0,
      multiLine: true,
      position: 'top',
      actions: [
        {
          label: 'Refresh',
          color: 'white',
          handler: async () => {
            const registration = await navigator.serviceWorker?.ready;
            if (registration?.waiting) {
              console.log('Waiting service worker found, skipping waiting');
              await registration.waiting.postMessage('SKIP_WAITING');
              console.log('Message sent');
              await new Promise((resolve) => setTimeout(resolve, 500));
            }
            window.location.reload();
          },
        },
      ],
    });
  },

  offline() {
    // console.log('No internet connection found. App is running in offline mode.')
  },

  error(/* err */) {
    // console.error('Error during service worker registration:', err)
  },
});
