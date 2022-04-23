export const HEADER_DATA = {
  navContent: [
    { content: 'Главная', link: '/' },
    { content: 'Акции', link: '/promotions' },
    { content: 'Прайс', link: '/price' },
    { content: 'Условия работы', link: '/terms' },
    { content: 'Гарантии', link: '/guarantees' },
    { content: 'Контакты', link: '/contacts' },
  ],
  cities: {
    mass: [{ content: 'Санкт-Петербург' }],
  },

  timeContent: {
    number: '8 909 098 98 98',
    timetable: 'с 9:00 - до 21:00',
  },

  cityContent: [
    { linc: '#', text: 'Aрхангельск' },
    { linc: '#', text: 'Владивосток' },
    { linc: '#', text: 'Калининград' },
    { linc: '#', text: 'Москва' },
    { linc: '#', text: 'Ростов на Дону' },
    { linc: '#', text: 'Санкт-Петербург' },
  ],
}

export const MAIN_DATA = {
  breakingSpoiler: {
    modifier: 'breaking',
    title: 'Основные причины поломки',
    subtitle:
      'Читайте  подробнее о причинах поломки клавиатуры Macbook Air 13 ',
    imgDesktopPng1x: require('@/assets/img/breaking/breaking-desktop1x.png'),
    imgDesktopPng2x: require('@/assets/img/breaking/breaking-desktop2x.png'),
    imgMobilePng1x: require('@/assets/img/breaking/breaking-mobile1x.png'),
    imgMobilePng2x: require('@/assets/img/breaking/breaking-mobile2x.png'),
    spoilers: [
      {
        isShow: false,
        title: 'Испорчен подключающий кабель',
        description:
          'В данном случае провод подлежит замене на такой же. Если замена невозможна следует произвести обрезку поврежденных участков \n' +
          'и спаять провод снова (при невозможности самостоятельной \n' +
          'спайки провода вам придется заменить клавиатуру).',
      },
      {
        isShow: false,
        title: 'Испорчен подключающий кабель',
        description:
          'В данном случае провод подлежит замене на такой же. Если замена невозможна следует произвести обрезку поврежденных участков \n' +
          'и спаять провод снова (при невозможности самостоятельной \n' +
          'спайки провода вам придется заменить клавиатуру).',
      },
      {
        isShow: false,
        title: 'Испорчен подключающий кабель',
        description:
          'В данном случае провод подлежит замене на такой же. Если замена невозможна следует произвести обрезку поврежденных участков \n' +
          'и спаять провод снова (при невозможности самостоятельной \n' +
          'спайки провода вам придется заменить клавиатуру).',
      },
      {
        isShow: false,
        title: 'Испорчен подключающий кабель',
        description:
          'В данном случае провод подлежит замене на такой же. Если замена невозможна следует произвести обрезку поврежденных участков \n' +
          'и спаять провод снова (при невозможности самостоятельной \n' +
          'спайки провода вам придется заменить клавиатуру).',
      },
    ],
  },

  heroContent: {
    main: {
      span: 'Сервисный центр',
      title: `ремонта устройств в\u00A0Санкт-Петербурге`,
      description:
        'Расчитайте стоимость ремонта вашего устройства всего за 1 минуту!',
      img: require('@/assets/img/background-phone.png'),
    },

    promotion: {
      span: 'Акции и скидки',
      title: `на ремонт у нас`,
      description: 'Получите скидку 10% \n' + 'на первый ремонт прямо сейчас',
      img: require('@/assets/img/promotions-page/background-promotion.png'),
    },
  },

  deviceHero: {
    hero: {
      modifier: 'device',
      button: 'Оформить заявку',
      page: 'main',
      span: 'Ремонт ноутбуков',
      title: `Санкт-Петербурге`,
      description:
        'Оформите заявку на БЕСПЛАТНУЮ консультацию и получите СКИДКУ 10% при заказе',
      imgDesktopPng1x: require('@/assets/img/device/device-desktop1x.png'),
      imgDesktopPng2x: require('@/assets/img/device/device-desktop2x.png'),
      imgMobilePng1x: require('@/assets/img/device/device-mobile1x.png'),
      imgMobilePng2x: require('@/assets/img/device/device-mobile2x.png'),
    },
  },

  deviceNameContent: {
    hero: {
      button: 'Оформить заявку',
      modifier: 'device',
      page: 'device',
      action: 'Ремонт ноутбуков',
      city: `Samsung`,
      model: 'в Санкт-Петербурге',

      description:
        'Оформите заявку на БЕСПЛАТНУЮ консультацию и получите СКИДКУ 10% при заказе',
      imgDesktopPng1x: require('@/assets/img/device/device-desktop1x.png'),
      imgDesktopPng2x: require('@/assets/img/device/device-desktop2x.png'),
      imgMobilePng1x: require('@/assets/img/device/device-mobile1x.png'),
      imgMobilePng2x: require('@/assets/img/device/device-mobile2x.png'),
    },
  },

  deviceModel: {
    hero: {
      button: 'Оформить заявку',
      modifier: 'device',
      page: 'model',
      action: 'Ремонт',
      model: 'Samsung',
      index: 'NP305U1A',

      description:
        'Оформите заявку на БЕСПЛАТНУЮ консультацию и получите СКИДКУ 10% при заказе',
      imgDesktopPng1x: require('@/assets/img/device/device-desktop1x.png'),
      imgDesktopPng2x: require('@/assets/img/device/device-desktop2x.png'),
      imgMobilePng1x: require('@/assets/img/device/device-mobile1x.png'),
      imgMobilePng2x: require('@/assets/img/device/device-mobile2x.png'),
    },
  },

  breakingDeviceHero: {
    hero: {
      button: 'Оформить заявку',
      modifier: 'device',
      page: 'common',
      action: 'Ремонт клавиатуры',
      device: 'Macbook Air 13',
      city: 'в Санкт-Петербурге',

      description:
        'Оформите заявку на БЕСПЛАТНУЮ консультацию и получите СКИДКУ 10% при заказе',
      imgDesktopPng1x: require('@/assets/img/device/device-desktop1x.png'),
      imgDesktopPng2x: require('@/assets/img/device/device-desktop2x.png'),
      imgMobilePng1x: require('@/assets/img/device/device-mobile1x.png'),
      imgMobilePng2x: require('@/assets/img/device/device-mobile2x.png'),
    },
  },

  commonDeviceHero: {
    hero: {
      button: 'Оформить заявку',
      modifier: 'device',
      page: 'breaking',
      action: 'Ремонт клавиатуры',
      device: 'ноутбука',
      city: 'в Санкт-Петербурге',

      description:
        'Оформите заявку на БЕСПЛАТНУЮ консультацию и получите СКИДКУ 10% при заказе',
      imgDesktopPng1x: require('@/assets/img/device/device-desktop1x.png'),
      imgDesktopPng2x: require('@/assets/img/device/device-desktop2x.png'),
      imgMobilePng1x: require('@/assets/img/device/device-mobile1x.png'),
      imgMobilePng2x: require('@/assets/img/device/device-mobile2x.png'),
    },
  },

  brandsContent: {
    title: 'Бренды:',
    brands: [
      {
        device: 'acer-icon',
        linc: '/#',
      },
      {
        device: 'asus',
        linc: '/#',
      },
      {
        device: 'mi-icon',
        linc: '/#',
      },
      {
        device: 'huawei-icon',
        linc: '/#',
      },
      {
        device: 'samsung-icon',
        linc: '/#',
      },
      {
        device: 'apple',
        linc: '/#',
      },
      {
        device: 'dell-icon',
        linc: '/#',
      },
      {
        device: 'hp',
        linc: '/#',
      },
      {
        device: 'lenovo-icon',
        linc: '/#',
      },
      {
        device: 'oppo-icon',
        linc: '/#',
      },
      {
        device: 'vivo-icon',
        linc: '/#',
      },
      {
        device: 'dexp',
        linc: '/#',
      },
    ],
    allBrands: [
      { brand: 'apple', linc: '#' },
      { brand: 'apple', linc: '#' },
      { brand: 'apple', linc: '#' },
      { brand: 'apple', linc: '#' },
      { brand: 'apple', linc: '#' },
      { brand: 'apple', linc: '#' },
      { brand: 'apple', linc: '#' },
      { brand: 'apple', linc: '#' },
      { brand: 'apple', linc: '#' },
      { brand: 'apple', linc: '#' },
      { brand: 'apple', linc: '#' },
    ],
    button: 'Все бренды',
  },

  breakingContent: {
    title: 'Другие поломки',
    breakingCards: [
      {
        title: 'Греется',
        time: 'Ремонт от 30 минут',
        price: '1500₽',
      },
      {
        title: 'Греется',
        time: 'Ремонт от 30 минут',
        price: '1500₽',
      },
      {
        title: 'Греется',
        time: 'Ремонт от 30 минут',
        price: '1500₽',
      },
    ],
    secondary: 'Отправить заявку',
    primary: 'Моей поломки здесь нет',
  },

  heroIconsNames: [
    { link: '#', name: 'android' },
    { link: '#', name: 'windows' },
    { link: '#', name: 'android' },
    { link: '#', name: 'android' },
    { link: '#', name: 'windows' },
    { link: '#', name: 'mi' },
    { link: '#', name: 'huawei' },
    { link: '#', name: 'android' },
    { link: '#', name: 'android' },
    { link: '#', name: 'windows' },
    { link: '#', name: 'android' },
    { link: '#', name: 'android' },
    { link: '#', name: 'windows' },
    { link: '#', name: 'mi' },
    { link: '#', name: 'huawei' },
    { link: '#', name: 'windows' },
    { link: '#', name: 'huawei' },
    { link: '#', name: 'windows' },
  ],

  selectContent: [
    {
      modifier: 'header',
      linc: '#',
      mass: [{ content: 'Смартфоны' }],
    },
    {
      modifier: 'header',
      linc: '#',
      mass: [{ content: 'Планшеты' }],
    },
    {
      modifier: 'header',
      linc: '#',
      mass: [{ content: 'Ноутбуки' }],
    },
    {
      modifier: 'header',
      linc: '#',
      mass: [{ content: 'Моноблоки' }],
    },
    { modifier: 'header', linc: '#', mass: [{ content: 'Смартфоны' }] },
    {
      modifier: 'header',
      linc: '#',
      mass: [{ content: 'Компьютеры' }],
    },
    { modifier: 'header', linc: '#', mass: [{ content: 'Телевизоры' }] },
    {
      modifier: 'header-list',
      isList: true,
      mass: [
        { content: 'Другие устройства', modifier: 'header-last', linc: '#' },
        { content: 'Другие устройства', modifier: 'header', linc: '#' },
        { content: 'Другие устройства', modifier: 'header', linc: '#' },
        { content: 'Другие устройства', modifier: 'header', linc: '#' },
      ],
    },
  ],

  selectContentMobile: [
    {
      modifier: 'header-mobile',
      linc: '#',
      mass: [{ content: 'Смартфоны' }],
    },
    {
      modifier: 'header-mobile',
      linc: '#',
      mass: [{ content: 'Планшеты' }],
    },
    {
      modifier: 'header-mobile',
      linc: '#',
      mass: [{ content: 'Ноутбуки' }],
    },
    {
      modifier: 'header-mobile',
      linc: '#',
      mass: [{ content: 'Моноблоки' }],
    },
    {
      modifier: 'header-mobile',
      linc: '#',
      mass: [{ content: 'Смартфоны' }],
    },
    {
      modifier: 'header-mobile',
      linc: '#',
      mass: [{ content: 'Компьютеры' }],
    },
    {
      modifier: 'header-mobile',
      linc: '#',
      mass: [{ content: 'Телевизоры' }],
    },
    {
      modifier: 'header-mobile-list',
      isList: true,
      mass: [
        { content: 'Другие устройства', modifier: 'header-last', linc: '#' },
        { content: 'Другие устройства', modifier: 'header', linc: '#' },
        { content: 'Другие устройства', modifier: 'header', linc: '#' },
        { content: 'Другие устройства', modifier: 'header', linc: '#' },
      ],
    },
  ],

  swiperContent: {
    firstText: 'Популярные модели',
    fourthText: 'Устройства,  которые часто ремонтируют у нас:',
    mass: [
      {
        img: require('@/assets/img/mobile.png'),
        title: 'Apple',
        description: 'Iphone 6',
        price: '750₽',
        service: 'Ремонт Iphone 6',
        time: '30',
      },
      {
        img: require('@/assets/img/pc.png'),
        title: 'Samsung',
        description: 'smart monitor m8',
        price: '750₽',
        service: 'Ремонт Iphone 6',
        time: '30',
      },
      {
        img: require('@/assets/img/coffee-machine.png'),
        title: 'C.M.A.',
        description: 'ASTORIA CALYPSO AEP',
        price: '750₽',
        service: 'Ремонт Iphone 6',
        time: '30',
      },
      {
        img: require('@/assets/img/camera.png'),
        title: 'Canon',
        description: 'EOS 7D Mark II',
        price: '750₽',
        service: 'Ремонт Iphone 6',
        time: '30',
      },
      {
        img: require('@/assets/img/mobile.png'),
        title: 'Apple',
        description: 'Iphone 6',
        price: '750₽',
        service: 'Ремонт Iphone 6',
        time: '30',
      },
      {
        img: require('@/assets/img/mobile.png'),
        title: 'Apple',
        description: 'Iphone 6',
        price: '750₽',
        service: 'Ремонт Iphone 6',
        time: '30',
      },
      {
        img: require('@/assets/img/mobile.png'),
        title: 'Apple',
        description: 'Iphone 6',
        price: '750₽',
        service: 'Ремонт Iphone 6',
        time: '30',
      },
      {
        img: require('@/assets/img/mobile.png'),
        title: 'Apple',
        description: 'Iphone 6',
        price: '750₽',
        service: 'Ремонт Iphone 6',
        time: '30',
      },
    ],
  },

  swiperDevice: {
    firstText: 'Распространенные поломки',
    fourthText: 'Устройства, которые часто ремонтируют у нас:',
    mass: [
      {
        img: require('@/assets/img/device/apple.png'),
        title: 'Apple',
        description: 'Iphone 6',
        price: '750₽',
        service: 'Разбился экран',
        time: '30',
      },
      {
        img: require('@/assets/img/device/samsung.png'),
        title: 'Samsung',
        description: 'smart monitor m8',
        price: '750₽',
        service: 'Разбился экран',
        time: '30',
      },
      {
        img: require('@/assets/img/device/asus.png'),
        title: 'C.M.A.',
        description: 'ASTORIA CALYPSO AEP',
        price: '750₽',
        service: 'Разбился экран',
        time: '30',
      },
      {
        img: require('@/assets/img/device/microsoft.png'),
        title: 'Canon',
        description: 'EOS 7D Mark II',
        price: '750₽',
        service: 'Разбился экран',
        time: '30',
      },
      {
        img: require('@/assets/img/device/apple.png'),
        title: 'Apple',
        description: 'Iphone 6',
        price: '750₽',
        service: 'Разбился экран',
        time: '30',
      },
      {
        img: require('@/assets/img/device/samsung.png'),
        title: 'Samsung',
        description: 'smart monitor m8',
        price: '750₽',
        service: 'Разбился экран',
        time: '30',
      },
      {
        img: require('@/assets/img/device/asus.png'),
        title: 'C.M.A.',
        description: 'ASTORIA CALYPSO AEP',
        price: '750₽',
        service: 'Разбился экран',
        time: '30',
      },
      {
        img: require('@/assets/img/device/microsoft.png'),
        title: 'Canon',
        description: 'EOS 7D Mark II',
        price: '750₽',
        service: 'Разбился экран',
        time: '30',
      },
    ],
  },

  swiperDeviceCommon: {
    firstText: 'Самые популярные поломки ',
    secondText: 'Macbook Air 13',
    fourthText: 'Устройства, которые часто ремонтируют у нас:',
    mass: [
      {
        img: require('@/assets/img/device/apple.png'),
        title: 'Apple',
        description: 'Iphone 6',
        price: '750₽',
        service: 'Разбился экран',
        time: '30',
      },
      {
        img: require('@/assets/img/device/samsung.png'),
        title: 'Samsung',
        description: 'smart monitor m8',
        price: '750₽',
        service: 'Разбился экран',
        time: '30',
      },
      {
        img: require('@/assets/img/device/asus.png'),
        title: 'C.M.A.',
        description: 'ASTORIA CALYPSO AEP',
        price: '750₽',
        service: 'Разбился экран',
        time: '30',
      },
      {
        img: require('@/assets/img/device/microsoft.png'),
        title: 'Canon',
        description: 'EOS 7D Mark II',
        price: '750₽',
        service: 'Разбился экран',
        time: '30',
      },
      {
        img: require('@/assets/img/device/apple.png'),
        title: 'Apple',
        description: 'Iphone 6',
        price: '750₽',
        service: 'Разбился экран',
        time: '30',
      },
      {
        img: require('@/assets/img/device/samsung.png'),
        title: 'Samsung',
        description: 'smart monitor m8',
        price: '750₽',
        service: 'Разбился экран',
        time: '30',
      },
      {
        img: require('@/assets/img/device/asus.png'),
        title: 'C.M.A.',
        description: 'ASTORIA CALYPSO AEP',
        price: '750₽',
        service: 'Разбился экран',
        time: '30',
      },
      {
        img: require('@/assets/img/device/microsoft.png'),
        title: 'Canon',
        description: 'EOS 7D Mark II',
        price: '750₽',
        service: 'Разбился экран',
        time: '30',
      },
    ],
  },

  swiperBreakingPage: {
    firstText: 'Распространенные поломки',
    secondText: 'Samsung',
    fourthText: 'Устройства которые часто ремонтируют у нас:',
    mass: [
      {
        img: require('@/assets/img/device/apple.png'),
        title: 'Apple',
        description: 'Iphone 6',
        price: '750₽',
        service: 'Разбился экран',
        time: '30',
      },
      {
        img: require('@/assets/img/device/samsung.png'),
        title: 'Samsung',
        description: 'smart monitor m8',
        price: '750₽',
        service: 'Разбился экран',
        time: '30',
      },
      {
        img: require('@/assets/img/device/asus.png'),
        title: 'C.M.A.',
        description: 'ASTORIA CALYPSO AEP',
        price: '750₽',
        service: 'Разбился экран',
        time: '30',
      },
      {
        img: require('@/assets/img/device/microsoft.png'),
        title: 'Canon',
        description: 'EOS 7D Mark II',
        price: '750₽',
        service: 'Разбился экран',
        time: '30',
      },
      {
        img: require('@/assets/img/device/apple.png'),
        title: 'Apple',
        description: 'Iphone 6',
        price: '750₽',
        service: 'Разбился экран',
        time: '30',
      },
      {
        img: require('@/assets/img/device/samsung.png'),
        title: 'Samsung',
        description: 'smart monitor m8',
        price: '750₽',
        service: 'Разбился экран',
        time: '30',
      },
      {
        img: require('@/assets/img/device/asus.png'),
        title: 'C.M.A.',
        description: 'ASTORIA CALYPSO AEP',
        price: '750₽',
        service: 'Разбился экран',
        time: '30',
      },
      {
        img: require('@/assets/img/device/microsoft.png'),
        title: 'Canon',
        description: 'EOS 7D Mark II',
        price: '750₽',
        service: 'Разбился экран',
        time: '30',
      },
    ],
  },

  swiperBreakingModal: {
    firstText: 'Распространенные поломки',
    fourthText: 'Устройства которые часто ремонтируют у нас:',
    mass: [
      {
        img: require('@/assets/img/device/apple.png'),
        title: 'Apple',
        description: 'Iphone 6',
        price: '750₽',
        service: 'Разбился экран',
        time: '30',
      },
      {
        img: require('@/assets/img/device/samsung.png'),
        title: 'Samsung',
        description: 'smart monitor m8',
        price: '750₽',
        service: 'Разбился экран',
        time: '30',
      },
      {
        img: require('@/assets/img/device/asus.png'),
        title: 'C.M.A.',
        description: 'ASTORIA CALYPSO AEP',
        price: '750₽',
        service: 'Разбился экран',
        time: '30',
      },
      {
        img: require('@/assets/img/device/microsoft.png'),
        title: 'Canon',
        description: 'EOS 7D Mark II',
        price: '750₽',
        service: 'Разбился экран',
        time: '30',
      },
      {
        img: require('@/assets/img/device/apple.png'),
        title: 'Apple',
        description: 'Iphone 6',
        price: '750₽',
        service: 'Разбился экран',
        time: '30',
      },
      {
        img: require('@/assets/img/device/samsung.png'),
        title: 'Samsung',
        description: 'smart monitor m8',
        price: '750₽',
        service: 'Разбился экран',
        time: '30',
      },
      {
        img: require('@/assets/img/device/asus.png'),
        title: 'C.M.A.',
        description: 'ASTORIA CALYPSO AEP',
        price: '750₽',
        service: 'Разбился экран',
        time: '30',
      },
      {
        img: require('@/assets/img/device/microsoft.png'),
        title: 'Canon',
        description: 'EOS 7D Mark II',
        price: '750₽',
        service: 'Разбился экран',
        time: '30',
      },
    ],
  },

  swiperModels: {
    firstText: 'Модели:',
    fourthText: 'Модели ноутбуков ',
    mass: [
      {
        img: require('@/assets/img/device/1.png'),
        title: 'MacBook Pro 13 2020',
        linc: 'macbookpro132020',
      },
      {
        img: require('@/assets/img/device/2.png'),
        title: 'MacBook Pro 13 2020',
        linc: 'macbookpro132020',
      },
      {
        img: require('@/assets/img/device/3.png'),
        title: 'MacBook Pro 13 2020',
        linc: 'macbookpro132020',
      },
      {
        img: require('@/assets/img/device/1.png'),
        title: 'MacBook Pro 13 2020',
        linc: 'macbookpro132020',
      },
      {
        img: require('@/assets/img/device/2.png'),
        title: 'MacBook Pro 13 2020',
        linc: 'macbookpro132020',
      },
    ],
  },

  swiperModelsPage: {
    firstText: 'Другие модели',
    secondText: 'ноутбуков ',
    thirdText: 'Samsung',
    fourthText: 'Модели ноутбуков',
    fifthText: 'Samsung',
    mass: [
      {
        img: require('@/assets/img/device/1.png'),
        title: 'MacBook Pro 13 2020',
        linc: 'macbookpro132020',
      },
      {
        img: require('@/assets/img/device/2.png'),
        title: 'MacBook Pro 13 2020',
        linc: 'macbookpro132020',
      },
      {
        img: require('@/assets/img/device/3.png'),
        title: 'MacBook Pro 13 2020',
        linc: 'macbookpro132020',
      },
      {
        img: require('@/assets/img/device/1.png'),
        title: 'MacBook Pro 13 2020',
        linc: 'macbookpro132020',
      },
      {
        img: require('@/assets/img/device/2.png'),
        title: 'MacBook Pro 13 2020',
        linc: 'macbookpro132020',
      },
    ],
  },

  swiperBreaking: {
    firstText: 'Распространенные поломки',
    secondText: 'Samsung',
    fourthText: 'Устройства',
    fifthText: 'Samsung',
    sixthText: 'которые часто ремонтируют у нас:',

    mass: [
      {
        img: require('@/assets/img/device/apple.png'),
        title: 'Apple',
        description: 'Iphone 6',
        price: '750₽',
        service: 'Разбился экран',
        time: '30',
      },
      {
        img: require('@/assets/img/device/samsung.png'),
        title: 'Samsung',
        description: 'smart monitor m8',
        price: '750₽',
        service: 'Разбился экран',
        time: '30',
      },
      {
        img: require('@/assets/img/device/asus.png'),
        title: 'C.M.A.',
        description: 'ASTORIA CALYPSO AEP',
        price: '750₽',
        service: 'Разбился экран',
        time: '30',
      },
      {
        img: require('@/assets/img/device/microsoft.png'),
        title: 'Canon',
        description: 'EOS 7D Mark II',
        price: '750₽',
        service: 'Разбился экран',
        time: '30',
      },
      {
        img: require('@/assets/img/device/apple.png'),
        title: 'Apple',
        description: 'Iphone 6',
        price: '750₽',
        service: 'Разбился экран',
        time: '30',
      },
      {
        img: require('@/assets/img/device/samsung.png'),
        title: 'Samsung',
        description: 'smart monitor m8',
        price: '750₽',
        service: 'Разбился экран',
        time: '30',
      },
      {
        img: require('@/assets/img/device/asus.png'),
        title: 'C.M.A.',
        description: 'ASTORIA CALYPSO AEP',
        price: '750₽',
        service: 'Разбился экран',
        time: '30',
      },
      {
        img: require('@/assets/img/device/microsoft.png'),
        title: 'Canon',
        description: 'EOS 7D Mark II',
        price: '750₽',
        service: 'Разбился экран',
        time: '30',
      },
    ],
  },

  formContent: {
    firstModal: {
      modifier: 'first',
      firstText: 'Стоимость ремонта от ',
      secondText: '800₽',
      description: 'Оставьте заявку, чтобы узнать точную цену',
      namePlaceholder: 'Имя',
      telPlaceholder: 'Телефон',
      button: 'Оставить заявку',
      terms: [
        {
          text: 'Нажимая кнопку “Оставить заявку”, я даю согласие на обработку персональных данных',
        },
        {
          text: 'Цена указана примерно, для получения более точной информации свяжитесь с нами',
        },
      ],
      imgDesktopPng1x: require('@/assets/img/form/second-form-desctop1x.png'),
      imgDesktopPng2x: require('@/assets/img/form/second-form-desctop2x.png'),
      imgMobilePng1x: require('@/assets/img/form/second-form-mobile1x.png'),
      imgMobilePng2x: require('@/assets/img/form/second-form-mobile2x.png'),
    },

    modelForm: {
      modifier: 'model',
      firstText: 'Не работает',
      secondText: 'Samsung',
      thirdText: 'NP305U1A',
      description: 'Оставьте заявку, чтобы узнать точную цену',
      namePlaceholder: 'Имя',
      telPlaceholder: 'Телефон',
      button: 'Оставить заявку',
      terms: [
        {
          text: 'Нажимая кнопку “Оставить заявку”, я даю согласие на обработку персональных данных',
        },
        {
          text: 'Цена указана примерно, для получения более точной информации свяжитесь с нами',
        },
      ],
      imgDesktopPng1x: require('@/assets/img/form/second-form-desctop1x.png'),
      imgDesktopPng2x: require('@/assets/img/form/second-form-desctop2x.png'),
      imgMobilePng1x: require('@/assets/img/form/second-form-mobile1x.png'),
      imgMobilePng2x: require('@/assets/img/form/second-form-mobile2x.png'),
    },

    commonForm: {
      modifier: 'common',
      firstText: 'Не работает',
      secondText: 'клавиатура',
      thirdText: 'Macbook Air 13?',
      description: 'Оставьте заявку, чтобы узнать точную цену',
      namePlaceholder: 'Имя',
      telPlaceholder: 'Телефон',
      button: 'Оставить заявку',
      terms: [
        {
          text: 'Нажимая кнопку “Оставить заявку”, я даю согласие на обработку персональных данных',
        },
        {
          text: 'Цена указана примерно, для получения более точной информации свяжитесь с нами',
        },
      ],
      imgDesktopPng1x: require('@/assets/img/form/second-form-desctop1x.png'),
      imgDesktopPng2x: require('@/assets/img/form/second-form-desctop2x.png'),
      imgMobilePng1x: require('@/assets/img/form/second-form-mobile1x.png'),
      imgMobilePng2x: require('@/assets/img/form/second-form-mobile2x.png'),
    },

    secondModal: {
      firstText: 'Проблемы с устройством?',
      description: 'Оставьте заявку и мы свяжемся с вами',
      namePlaceholder: 'Имя',
      telPlaceholder: 'Телефон',
      button: 'Оставить заявку',
      terms: [
        {
          text: 'Нажимая кнопку “Оставить заявку”, я даю согласие на обработку персональных данных',
        },
      ],
      imgDesktopPng1x: require('@/assets/img/form/first-form-desctop1x.png'),
      imgDesktopPng2x: require('@/assets/img/form/first-form-desctop2x.png'),
      imgMobilePng1x: require('@/assets/img/form/first-form-mobile1x.png'),
      imgMobilePng2x: require('@/assets/img/form/first-form-mobile2x.png'),
    },
  },

  videoContent: {
    title: 'Работаем лучше всех. Только посмотрите!',
    subtitle:
      'Наш сервисный центр в Санкт-Петербурге занимается проведением качественного ремонта,а также восстановлением программного обеспечения различных устройств',
    button: 'Рассчитать стоимость',
  },

  graphicContent: {
    title: 'Уже 15 лет делаем добро',
    buttons: [
      {
        title: 'Гарантия от 1 года',
        hoverTitle: 'Ремонт от 30 минут',
        hoverSubtitle: 'Ремонтируем ваше устройство от 30 минут',
        icon: 'garant',
      },
      {
        title: 'Быстрое обслуживание',
        hoverTitle: 'Ремонт от 30 минут',
        hoverSubtitle: 'Ремонтируем ваше устройство от 30 минут',
        subtitle: 'Ремонтируем ваше устройство от 30 минут',
        icon: 'time',
      },
      {
        title: 'Работаем при вас, следите за процессом',
        hoverTitle: 'Ремонт от 30 минут',
        hoverSubtitle: 'Ремонтируем ваше устройство от 30 минут',
        icon: 'eye',
      },
      {
        title: 'Только оригинальные детали',
        hoverTitle: 'Ремонт от 30 минут',
        hoverSubtitle: 'Ремонтируем ваше устройство от 30 минут',
        icon: 'crown',
      },
    ],
  },

  spoilerContent: {
    title: 'Как мы работаем:',
    subtitle: 'Ремонт техники всегда проходит по слаженной схеме. ',
    spoilers: [
      {
        title: 'Проводим диагностику',
        description:
          'Прежде чем мы начнем ремонт, нам нужно выявить причину поломки и внимательно оценить ее тяжесть, а также каким образом лучше ее исправить. Это может занять некоторое время перед ремонтом.',
        isShow: false,
      },
      {
        title: 'Рассказываем о ремонте',
        description:
          'Прежде чем мы начнем ремонт, нам нужно выявить причину поломки и внимательно оценить ее тяжесть, а также каким образом лучше ее исправить. Это может занять некоторое время перед ремонтом.',
        isShow: false,
      },
      {
        title: 'Ремонтируем',
        description:
          'Прежде чем мы начнем ремонт, нам нужно выявить причину поломки и внимательно оценить ее тяжесть, а также каким образом лучше ее исправить. Это может занять некоторое время перед ремонтом.',
        isShow: false,
      },
    ],
  },

  schemeContent: {
    title: 'Схема работы',
    blocks: [
      {
        text: 'Вы оставляете заявку и наш менеджер связывается с Вами',
      },
      {
        text: 'Предлагаем решение вашей проблемы',
      },
      {
        text: 'Проводим диагностику на месте ',
      },
      {
        text: 'Начинаем ремонт',
      },
    ],
  },

  discountContent: {
    banner: {
      span: 'Скидки 15%',
      text: 'на все виды ремонта до конца июля 2022',
      src: require('@/assets/img/promotions-page/mac.png'),
      alt: 'macbook',
      button: 'Получить скидку',
      card: 'Забрать скидки!',
    },
    title: 'Все скидки и акции',
    cards: [
      {
        title: 'Первый ремонт',
        text: 'Дарим скидку 10% всем, кто придет к нам впервые. Акция действует на любые устройства и ремонт',
        modifier: 'pink',
      },
      {
        title: 'Празник к нам приходит',
        text: 'Сломалась техника в новогодние праздники? Не беда, починим и подарим скидку 15% на ремонт с 1 по 10 января включительно',
        modifier: 'blue',
      },
      {
        title: 'День рождения',
        text: 'Нельзя портить такой день! Поэтому починим ваше устройство за 1 день и подарим скидку 25%',
        modifier: 'purple',
      },

      {
        title: 'Черная пятница',
        text: 'В черную пятницу скидки всем! Относи устройство на ремонт и получай скидку 5%. Действует с 11 ноября по 15 включительно',
        modifier: 'green',
      },
    ],
  },

  guaranteesContent: {
    firstCard: {
      span: 'Гарантия',
      title: 'на все виды работ',
      text: 'Наша компания ответственно подходит к выполнению всех работ и готова предоставить собственную гарантию после их осуществления.',
      img: require('@/assets/img/guaranties-page/guaranties-list.png'),
      alt: 'list',
    },
    secondCard: {
      title: 'Гарантия до 3 месяцев',
      text: 'Она предлагается на срок до 3 месяцев, так вы будете полностью уверены в качестве ремонта.',
      img: require('@/assets/img/guaranties-page/guaranties-clocks.png'),
      alt: 'clocks',
    },
    thirdCard: {
      title: 'Бесплатные повторные работы',
      firstParagraph:
        'Если в течение 3 месяцев произойдет повторная поломка компонентов, которые были установлены нашими специалистами мы возмемся за ремонт бесплатно',
      secondParagraph:
        'Такие случаи большая редкость в нашей компании. Но все-таки клиентам будет приятно осознавать, что они полностью защищены от возможных проблем в будущем.',
    },
  },

  treatmentContent: {
    firstSpan: 'Обращаясь к нам,',
    secondSpan: ' вы будете полностью уверены в качестве',
    thirdSpan: ' проведенных работ',
    cards: [
      {
        imgDesktopPng1x: require('@/assets/img/guaranties-page/treatment-woman-desktop1x.png'),
        imgDesktopPng2x: require('@/assets/img/guaranties-page/treatment-woman-desktop2x.png'),
        imgMobilePng1x: require('@/assets/img/guaranties-page/treatment-woman-mobile1x.png'),
        imgMobilePng2x: require('@/assets/img/guaranties-page/treatment-woman-mobile2x.png'),
        mobileSize: '185',
        desktopSize: '215',
        alt: 'woman',
        text: 'Наша компания заботиться о своих клиентах, вы всегда сможете получить грамотную поддержку.',
      },
      {
        imgDesktopPng1x: require('@/assets/img/guaranties-page/treatment-hands-desktop1x.png'),
        imgDesktopPng2x: require('@/assets/img/guaranties-page/treatment-hands-desktop2x.png'),
        imgMobilePng1x: require('@/assets/img/guaranties-page/treatment-hands-mobile1x.png'),
        imgMobilePng2x: require('@/assets/img/guaranties-page/treatment-hands-mobile2x.png'),
        mobileSize: '192',
        desktopSize: '306',
        alt: 'hands',
        text: 'В случае если произойдет повторная поломка, сотрудники быстро вернут вашу технику к работе.',
      },
    ],
  },

  infoModal: {
    firstSpan: 'Помните',
    secondSpan: ' что профессиональный сервис',
    text: ' всегда предоставляет качественную помощь и не бросает своих клиентов после ремонта.',
    description:
      'Теперь вы знаете, к кому необходимо обратиться, чтобы выполнить качественный ремонт!',
  },

  contactsHeroContent: {
    title: 'Контакты',
    action: 'Позвоните нам',
    link: '89990989898',
    number: '8 999 098 98 98',
    numberIconName: 'contacts-phone',
    text: 'Работаем без перерывов и выходных',
    workTime: '9:00 - 21:00',
    timeIconName: 'contacts-time',
    imgDesktopPng1x: require('@/assets/img/contacts/contacts-background1x.png'),
    imgDesktopPng2x: require('@/assets/img/contacts/contacts-background2x.png'),
    imgMobilePng1x: require('@/assets/img/contacts/contacts-background-mobile1x.png'),
    imgMobilePng2x: require('@/assets/img/contacts/contacts-background-mobile2x.png'),
  },

  contactsContent: {
    title: 'Ждем вас ',
    span: 'по адрeсу',
    address: 'Мучной переулок, 32134 Садовая улица офис 3',
    addressIconName: 'contacts-location',
  },

  notFoundContent: {
    span: '404',
    title:
      'Страница не существует или была удалена. Вернитесь на главную страницу',
    button: 'Вернуться на главную ',
  },

  resultsContent: {
    valid: true,
    title: 'Результаты',
    span: ' поиска',
    img: require('@/assets/img/result-page/result-background.png'),
    result: [
      { linc: '#', text: 'Ремонт ноутбуков Samsung', number: '17' },
      { linc: '#', text: 'Ремонт ноутбуков Samsung', number: '7' },
      { linc: '#', text: 'Ремонт ноутбуков Samsung', number: '11' },
      { linc: '#', text: 'Ремонт ноутбуков Samsung', number: '10' },
      { linc: '#', text: 'Ремонт ноутбуков Samsung', number: '4' },
    ],
    alt: 'pc',
  },

  emptyResultContent: {
    firstText: 'По запросу ',
    searchText: 'смесители оптом',
    secondText: 'ничего не найдено',
    actionText: 'Возможно вам интересно:',
    devices: [
      {
        button: 'Смартфоны',
        linc: '#',
      },
      {
        button: 'Планшеты',
        linc: '#',
      },
      {
        button: 'Ноутбуки',
        linc: '#',
      },
      {
        button: 'Моноблоки',
        linc: '#',
      },
      {
        button: 'Компьютеры',
        linc: '#',
      },
      {
        button: 'Телевизоры',
        linc: '#',
      },
      {
        button: 'Другие устройства',
        linc: '#',
      },
    ],
  },
}

export const POPUP_DATA = {
  formData: {
    title: 'Оставьте заявку',
    description: 'И мы перезвоним вам через несколько минут',
    name: 'Имя',
    tel: 'Телефон',
    button: 'Перезвоните мне',
  },
  finallyContent: {
    text: 'Спасибо за Вашу заявку',
    button: 'Готово!',
  },
}

export const PAGE_DATA = {
  main: {
    heroModal: {
      isShow: true,
      hero: {
        modifier: 'main',
        button: 'Расчитать стоимость',
        page: 'main',
        span: 'Сервисный центр',
        title: `ремонта устройств в\u00A0Санкт-Петербурге`,
        description:
          'Расчитайте стоимость ремонта вашего устройства всего за 1 минуту!',
        imgDesktopPng1x: require('@/assets/img/main/main-background1x.png'),
        imgDesktopPng2x: require('@/assets/img/main/main-background2x.png'),
        imgMobilePng1x: require('@/assets/img/main/main-background-mobile1x.png'),
        imgMobilePng2x: require('@/assets/img/main/main-background-mobile2x.png'),
      },
    },
    termsGraphicModal: false,
    priceFormModal: false,
    heroContact: false,
    contactsModal: false,
    guaranteesModal: false,
    priceModal: false,
    findModal: false,
    actionModal: {
      isShow: false,
    },
    swiperModal: true,
    formModal: {
      first: true,
      second: false,
      third: true,
    },
    discountsModal: false,
    promotionModal: true,
    gridModal: true,
    calcModal: true,
    videoModal: true,
    graphicModal: true,
    spoilerGuaranteesModal: {
      isShow: false,
    },
    spoilerModal: {
      isShow: true,
      title: 'Как мы работаем:',
      subtitle: 'Ремонт техники всегда проходит по слаженной схеме. ',
      spoilers: [
        {
          title: 'Проводим диагностику',
          description:
            'Прежде чем мы начнем ремонт, нам нужно выявить причину поломки и внимательно оценить ее тяжесть, а также каким образом лучше ее исправить. Это может занять некоторое время перед ремонтом.',
          isShow: false,
        },
        {
          title: 'Рассказываем о ремонте',
          description:
            'Прежде чем мы начнем ремонт, нам нужно выявить причину поломки и внимательно оценить ее тяжесть, а также каким образом лучше ее исправить. Это может занять некоторое время перед ремонтом.',
          isShow: false,
        },
        {
          title: 'Ремонтируем',
          description:
            'Прежде чем мы начнем ремонт, нам нужно выявить причину поломки и внимательно оценить ее тяжесть, а также каким образом лучше ее исправить. Это может занять некоторое время перед ремонтом.',
          isShow: false,
        },
      ],
    },
    treatmentModal: false,
    infoModal: false,
    schemeModal: true,
    // formModal: true,
  },

  promotion: {
    heroModal: {
      isShow: true,
      hero: {
        modifier: 'promotion',
        button: 'Получить скидку',
        page: 'main',
        span: 'Акции и скидки',
        title: `на ремонт у нас`,
        description: 'Получите скидку 10% \n' + 'на первый ремонт прямо сейчас',
        imgDesktopPng1x: require('@/assets/img/promotions/promotions-background1x.png'),
        imgDesktopPng2x: require('@/assets/img/promotions/promotions-background2x.png'),
        imgMobilePng1x: require('@/assets/img/promotions/promotions-background-mobile1x.png'),
        imgMobilePng2x: require('@/assets/img/promotions/promotions-background-mobile2x.png'),
      },
    },
    termsGraphicModal: false,
    priceFormModal: false,
    heroContact: false,
    contactsModal: false,
    guaranteesModal: false,
    priceModal: false,
    findModal: false,
    actionModal: {
      isShow: false,
    },
    gridModal: true,
    calcModal: true,
    videoModal: true,
    graphicModal: true,
    spoilerGuaranteesModal: {
      isShow: false,
    },
    spoilerModal: {
      isShow: true,
      title: 'Как мы работаем:',
      subtitle: 'Ремонт техники всегда проходит по слаженной схеме. ',
      spoilers: [
        {
          title: 'Проводим диагностику',
          description:
            'Прежде чем мы начнем ремонт, нам нужно выявить причину поломки и внимательно оценить ее тяжесть, а также каким образом лучше ее исправить. Это может занять некоторое время перед ремонтом.',
          isShow: false,
        },
        {
          title: 'Рассказываем о ремонте',
          description:
            'Прежде чем мы начнем ремонт, нам нужно выявить причину поломки и внимательно оценить ее тяжесть, а также каким образом лучше ее исправить. Это может занять некоторое время перед ремонтом.',
          isShow: false,
        },
        {
          title: 'Ремонтируем',
          description:
            'Прежде чем мы начнем ремонт, нам нужно выявить причину поломки и внимательно оценить ее тяжесть, а также каким образом лучше ее исправить. Это может занять некоторое время перед ремонтом.',
          isShow: false,
        },
      ],
    },
    treatmentModal: false,
    infoModal: false,
    schemeModal: true,
    swiperModal: false,
    formModal: {
      first: false,
      second: false,
      third: true,
      fourth: false,
    },
    discountsModal: true,
    promotionModal: true,
  },

  price: {
    termsGraphicModal: false,
    heroModal: {
      isShow: true,
      hero: {
        modifier: 'price',
        button: 'Узнать стоимость',
        page: 'main',
        span: 'Прайс на ремонт',
        title: 'устройств',
        description: 'Узнайте стоимость вашего ремонта за пару кликов',
        imgDesktopPng1x: require('@/assets/img/price/price-background1x.png'),
        imgDesktopPng2x: require('@/assets/img/price/price-background2x.png'),
        imgMobilePng1x: require('@/assets/img/price/price-background-mobile1x.png'),
        imgMobilePng2x: require('@/assets/img/price/price-background-mobile2x.png'),
      },
      heroContact: false,
      contactsModal: false,
    },
    priceFormModal: true,
    guaranteesModal: false,
    priceModal: true,
    findModal: {
      isShow: true,
      content: {
        title: 'Узнать стоимость ремонта',
        subtitle: 'Ремонт ноутбуков:',
        repair: [
          {
            name: 'Замена матрицы',
            price: 'от 1000₽',
          },
          {
            name: 'Замена клавиатуры',
            price: 'от 900₽',
          },
          {
            name: 'Чистка ноутбука от пыли',
            price: '920₽',
          },
          {
            name: 'Ремонт корпусных элементов',
            price: 'от 300₽',
          },
          {
            name: 'Восстановление после залития',
            price: 'от 1000₽',
          },
          {
            name: 'Сложный ремонт материнских плат',
            price: 'от 1200₽',
          },
          {
            name: 'Замена термопасты',
            price: '300₽ ',
          },
          {
            name: 'Апгрейд ноутбука',
            price: 'от 500₽',
          },
          {
            name: 'Выезд мастера и диагностика',
            price: 'Бесплатно',
          },
        ],
      },
    },
    actionModal: {
      isShow: true,
      title: 'Не нашли свою модель и поломку?',
      subtitle: 'Свяжитесь с нами и мы проконсультируем!',
      button: 'Связаться с нами?',
    },
    gridModal: true,
    calcModal: true,
    videoModal: true,
    graphicModal: true,
    spoilerGuaranteesModal: {
      isShow: false,
    },
    spoilerModal: {
      isShow: true,
      title: 'Как мы работаем:',
      subtitle: 'Ремонт техники всегда проходит по слаженной схеме. ',
      spoilers: [
        {
          title: 'Проводим диагностику',
          description:
            'Прежде чем мы начнем ремонт, нам нужно выявить причину поломки и внимательно оценить ее тяжесть, а также каким образом лучше ее исправить. Это может занять некоторое время перед ремонтом.',
          isShow: false,
        },
        {
          title: 'Рассказываем о ремонте',
          description:
            'Прежде чем мы начнем ремонт, нам нужно выявить причину поломки и внимательно оценить ее тяжесть, а также каким образом лучше ее исправить. Это может занять некоторое время перед ремонтом.',
          isShow: false,
        },
        {
          title: 'Ремонтируем',
          description:
            'Прежде чем мы начнем ремонт, нам нужно выявить причину поломки и внимательно оценить ее тяжесть, а также каким образом лучше ее исправить. Это может занять некоторое время перед ремонтом.',
          isShow: false,
        },
      ],
    },
    treatmentModal: false,
    infoModal: false,
    schemeModal: true,
    // formModal: true,
    swiperModal: false,
    formModal: {
      first: false,
      second: false,
      third: true,
      fourth: true,
    },
    discountsModal: false,
    promotionModal: false,
  },

  terms: {
    heroModal: {
      isShow: true,
      hero: {
        modifier: 'terms',
        button: 'Читать об условиях',
        page: 'main',
        span: 'Условия работы',
        title: 'нашего сервиса',
        description: 'Не делайте ремонт совего устройства пока не прочитаете !',
        imgDesktopPng1x: require('@/assets/img/terms/terms-background1x.png'),
        imgDesktopPng2x: require('@/assets/img/terms/terms-background2x.png'),
        imgMobilePng1x: require('@/assets/img/terms/terms-background-mobile1x.png'),
        imgMobilePng2x: require('@/assets/img/terms/terms-background-mobile2x.png'),
      },
    },
    termsGraphicModal: true,
    priceFormModal: true,
    heroContact: false,
    contactsModal: false,
    priceModal: false,
    findModal: {
      isShow: false,
    },
    actionModal: {
      isShow: true,
      title: 'Нужен ремонт?',
      subtitle: 'Свяжитесь с нами и мы проконсультируем!',
      button: 'Связаться с нами',
    },
    gridModal: true,
    calcModal: true,
    videoModal: true,
    graphicModal: true,
    spoilerGuaranteesModal: {
      isShow: false,
    },
    spoilerModal: {
      isShow: true,
      title: 'Как мы работаем:',
      subtitle: 'Ремонт техники всегда проходит по слаженной схеме. ',
      spoilers: [
        {
          title: 'Проводим диагностику',
          description:
            'Прежде чем мы начнем ремонт, нам нужно выявить причину поломки и внимательно оценить ее тяжесть, а также каким образом лучше ее исправить. Это может занять некоторое время перед ремонтом.',
          isShow: false,
        },
        {
          title: 'Рассказываем о ремонте',
          description:
            'Прежде чем мы начнем ремонт, нам нужно выявить причину поломки и внимательно оценить ее тяжесть, а также каким образом лучше ее исправить. Это может занять некоторое время перед ремонтом.',
          isShow: false,
        },
        {
          title: 'Ремонтируем',
          description:
            'Прежде чем мы начнем ремонт, нам нужно выявить причину поломки и внимательно оценить ее тяжесть, а также каким образом лучше ее исправить. Это может занять некоторое время перед ремонтом.',
          isShow: false,
        },
      ],
    },
    treatmentModal: false,
    infoModal: false,
    schemeModal: true,
    swiperModal: false,
    formModal: {
      first: false,
      second: false,
      third: true,
      fourth: true,
    },
    discountsModal: false,
    promotionModal: false,
  },

  guarantees: {
    heroModal: {
      isShow: true,
      hero: {
        modifier: 'guarantees',
        button: 'Читать о гарантиях',
        page: 'main',
        span: 'У нас 100%',
        title: 'Гарантии',
        description: 'Не делайте ремонт совего устройства пока не прочитаете !',
        imgDesktopPng1x: require('@/assets/img/guarantees/garantees-background1x.png'),
        imgDesktopPng2x: require('@/assets/img/guarantees/garantees-background2x.png'),
        imgMobilePng1x: require('@/assets/img/guarantees/garantees-background-mobile1x.png'),
        imgMobilePng2x: require('@/assets/img/guarantees/garantees-background-mobile2x.png'),
      },
    },
    termsGraphicModal: false,
    priceFormModal: true,
    heroContact: false,
    contactsModal: false,
    guaranteesModal: true,
    priceModal: false,
    findModal: {
      isShow: false,
    },
    actionModal: {
      isShow: false,
    },
    gridModal: true,
    calcModal: true,
    videoModal: true,
    graphicModal: true,
    spoilerGuaranteesModal: {
      isShow: true,
      title: 'Ремонт ноутбуков с гарантией',
      subtitle: 'Ремонт техники всегда проходит по слаженной схеме.  ',
      spoilers: [
        {
          title: 'Потребовалось гарантийное обслуживание',
          description:
            'Прежде чем мы начнем ремонт, нам нужно выявить причину поломки и внимательно оценить ее тяжесть, а также каким образом лучше ее исправить. Это может занять некоторое время перед ремонтом.',
          isShow: false,
        },
        {
          title: 'Срок гарантии',
          description:
            'Прежде чем мы начнем ремонт, нам нужно выявить причину поломки и внимательно оценить ее тяжесть, а также каким образом лучше ее исправить. Это может занять некоторое время перед ремонтом.',
          isShow: false,
        },
        {
          title: 'Тестирование',
          description:
            'Прежде чем мы начнем ремонт, нам нужно выявить причину поломки и внимательно оценить ее тяжесть, а также каким образом лучше ее исправить. Это может занять некоторое время перед ремонтом.',
          isShow: false,
        },
      ],
    },
    spoilerModal: {
      isShow: true,
      title: 'Как мы работаем:',
      subtitle: 'Ремонт техники всегда проходит по слаженной схеме. ',
      spoilers: [
        {
          title: 'Проводим диагностику',
          description:
            'Прежде чем мы начнем ремонт, нам нужно выявить причину поломки и внимательно оценить ее тяжесть, а также каким образом лучше ее исправить. Это может занять некоторое время перед ремонтом.',
          isShow: false,
        },
        {
          title: 'Рассказываем о ремонте',
          description:
            'Прежде чем мы начнем ремонт, нам нужно выявить причину поломки и внимательно оценить ее тяжесть, а также каким образом лучше ее исправить. Это может занять некоторое время перед ремонтом.',
          isShow: false,
        },
        {
          title: 'Ремонтируем',
          description:
            'Прежде чем мы начнем ремонт, нам нужно выявить причину поломки и внимательно оценить ее тяжесть, а также каким образом лучше ее исправить. Это может занять некоторое время перед ремонтом.',
          isShow: false,
        },
      ],
    },
    treatmentModal: true,
    infoModal: true,
    schemeModal: true,
    // formModal: true,
    swiperModal: false,
    formModal: {
      first: false,
      second: false,
      third: true,
      fourth: true,
    },
    discountsModal: false,
    promotionModal: false,
  },

  contacts: {
    heroModal: {
      isShow: false,
    },
    termsGraphicModal: false,
    priceFormModal: true,
    heroContact: true,
    contactsModal: true,
    guaranteesModal: false,
    priceModal: false,
    findModal: {
      isShow: false,
    },
    actionModal: {
      isShow: false,
    },
    gridModal: false,
    calcModal: false,
    videoModal: false,
    graphicModal: false,
    spoilerGuaranteesModal: {
      isShow: false,
    },
    spoilerModal: {
      isShow: false,
    },
    treatmentModal: false,
    infoModal: false,
    schemeModal: false,
    swiperModal: false,
    formModal: {
      first: false,
      second: false,
      third: true,
      fourth: false,
    },
    discountsModal: false,
    promotionModal: false,
  },
}
