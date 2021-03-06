// В работе мы регистрируем сервис-воркера для обслуживания ресурсов из локального кеша.
// Это позволяет приложению загружаться быстрее при последующих посещениях в рабочей среде
// и даст возможность работать в автономном режиме.
// Однако это также означает, что разработчики (и пользователи)
// будут видеть развернутые обновления только при посещении страницы "N+1",
// поскольку ранее кэшированные ресурсы обновляются в фоновом режиме.

// Чтобы узнать больше о преимуществах этой модели, прочтите https://goo.gl/KwvDNy.
// Эта ссылка также включает инструкции по отказу от такого поведения.

const isLocalhost = Boolean(
  window.location.hostname === 'localhost' ||
    // [::1] - это локальный адрес IPv6.
    window.location.hostname === '[::1]' ||
    // 127.0.0.1/8 считается локальным хостом для IPv4.
    window.location.hostname.match(
      /^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/
    )
);

export default function register() {
  if (process.env.NODE_ENV === 'production' && 'serviceWorker' in navigator) {
    // Конструктор URL доступен во всех браузерах, поддерживающих SW.
    const publicUrl = new URL(process.env.PUBLIC_URL, window.location);
    if (publicUrl.origin !== window.location.origin) {
      // Наш serviceWorker не сработает, если PUBLIC_URL находится вне каталога нашей страницы.
      // Это может произойти, если для обслуживания активов используется CDN;
      // см. https://github.com/facebookincubator/create-react-app/issues/2374
      return;
    }

    window.addEventListener('load', () => {
      const swUrl = `${process.env.PUBLIC_URL}/service-worker.js`;

      if (isLocalhost) {
        // Это работает на локальном хосте. Давайте проверим, существует ли сервис-воркер.
        checkValidServiceWorker(swUrl);
        // Добавьте дополнительное ведение журнала на localhost,
        // указав разработчикам на документацию по serviceWorker/PWA.
        navigator.serviceWorker.ready.then(() => {
          console.log(
            'Это веб-приложение в первую очередь обслуживается из рабочего кеша. ' +
              'Чтобы узнать больше, посетите https://goo.gl/SC7cgQ'
          );
        });
      } else {
        // Не является локальным хостом. Просто зарегистрируйте SW
        registerValidSW(swUrl);
      }
    });
  }
}

function registerValidSW(swUrl) {
  navigator.serviceWorker
    .register(swUrl)
    .then(registration => {
      registration.onupdatefound = () => {
        const installingWorker = registration.installing;
        installingWorker.onstatechange = () => {
          if (installingWorker.state === 'installed') {
            if (navigator.serviceWorker.controller) {
              // На этом этапе старый контент будет очищен,
              // а новый контент будет добавлен в кеш.
              // Это идеальное время для отображения сообщения «Доступен новый контент; обновите».
              // сообщение в вашем веб-приложении.
              console.log('Доступен новый контент; пожалуйста, обновите.');
            } else {
              // На данный момент всё готово.
              // Это идеальное время для отображения сообщения
              // «Контент кэширован для использования в автономном режиме». сообщение.
              console.log('Контент кэшируется для использования в автономном режиме.');
            }
          }
        };
      };
    })
    .catch(error => {
      console.error('Ошибка при регистрации сервис-воркера:', error);
    });
}

function checkValidServiceWorker(swUrl) {
  // Проверьте, можно ли найти сервисного работника. Если не удается перезагрузить страницу.
  fetch(swUrl)
    .then(response => {
      // Убедитесь, что сервис-воркер существует и что мы действительно получаем файл JS.
      if (
        response.status === 404 ||
        response.headers.get('content-type').indexOf('javascript') === -1
      ) {
        // Сервисный работник не найден. Наверное, другое приложение. Обновите страницу.
        navigator.serviceWorker.ready.then(registration => {
          registration.unregister().then(() => {
            window.location.reload();
          });
        });
      } else {
        // Сервисный работник найден. Действуйте как обычно.
        registerValidSW(swUrl);
      }
    })
    .catch(() => {
      console.log(
        'Нет подключения к Интернету. Приложение работает в автономном режиме.'
      );
    });
}

export function unregister() {
  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.ready.then(registration => {
      registration.unregister();
    });
  }
}
