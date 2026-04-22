import { defineConfig } from 'vitepress'

export default defineConfig({
  lang: 'ru-RU',
  title: 'GoSMS Legal',
  description: 'Юридически значимые документы сервиса GoSMS',

  head: [
    ['link', { rel: 'icon', href: '/favicon.ico' }],
    ['meta', { name: 'theme-color', content: '#5C6BC0' }],
  ],

  themeConfig: {
    logo: { src: '/logo.webp', alt: 'GoSMS' },
    siteTitle: 'Правовые документы',

    nav: [
      { text: 'Главная', link: '/' },
      { text: 'GoSMS.ru', link: 'https://gosms.ru', target: '_blank' },
    ],

    sidebar: [
      {
        text: 'Основные документы',
        items: [
          { text: 'Публичная оферта', link: '/public-offer' },
          { text: 'Пользовательское соглашение', link: '/user-agreement' },
          { text: 'Лицензионное соглашение', link: '/mobile-license' },
        ],
      },
      {
        text: 'Персональные данные',
        items: [
          { text: 'Политика конфиденциальности', link: '/privacy-policy' },
          { text: 'Согласие на обработку ПД', link: '/consent-pd' },
          { text: 'Соглашение о поручении обработки ПД', link: '/data-processing-agreement' },
        ],
      },
      {
        text: 'Рассылки и Cookie',
        items: [
          { text: 'Согласие на рекламные рассылки', link: '/consent-marketing' },
          { text: 'Политика Cookie', link: '/cookie-policy' },
        ],
      },
      {
        text: 'Использование сервиса',
        items: [
          { text: 'Правила допустимого использования', link: '/aup' },
        ],
      },
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/GoSMS-new' },
    ],

    footer: {
      message: 'ИП Ульянов Алексей Владимирович, ОГРНИП 321132600016985',
      copyright: '© 2021–2026 GoSMS.ru · support@gosms.ru',
    },

    search: {
      provider: 'local',
      options: {
        locales: {
          root: {
            translations: {
              button: { buttonText: 'Поиск', buttonAriaLabel: 'Поиск' },
              modal: {
                noResultsText: 'Ничего не найдено',
                resetButtonTitle: 'Сбросить',
                footer: {
                  selectText: 'выбрать',
                  navigateText: 'навигация',
                  closeText: 'закрыть',
                },
              },
            },
          },
        },
      },
    },

    docFooter: {
      prev: 'Назад',
      next: 'Вперёд',
    },

    darkModeSwitchLabel: 'Тема',
    lightModeSwitchTitle: 'Светлая тема',
    darkModeSwitchTitle: 'Тёмная тема',
    sidebarMenuLabel: 'Меню',
    returnToTopLabel: 'Наверх',
    outline: {
      label: 'На этой странице',
    },
    lastUpdated: {
      text: 'Последнее обновление',
    },
  },

  lastUpdated: true,
  cleanUrls: true,

  sitemap: {
    hostname: 'https://legal.gosms.ru',
  },
})
