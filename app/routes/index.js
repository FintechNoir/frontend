import Ember from 'ember';

export default Ember.Route.extend({
  setupController(controller){
    let openMobile = Ember.Object.create({
      id: 'open-mobile',
      title: 'Открытие.Мобайл',
      subtitle: 'Виртуальный оператор под брендом Открытия',
      sounds: ['1', '2', '3', '4', '5'],
      content: '<ul>' +
      '<li><span><p>Для создания полноценной экосистемы Банк Открытие внедряет виртуального мобильного оператора под собственным брендом. Интеграция банковских продуктов с современными услугами связи обеспечит дополнительные возможности для клиентов банка в части информационной безопасности, оптимизации расходов на связь.</p></span></li>' +
      '<li><span><p>Предоставление услуг предполагается на базе инфраструктуры нескольких операторов. Абонент сможет сохранить свой номер при переходе на «Открытие Мобайл» с другого мобильного оператора благодаря свободной переносимости телефонных номеров.</p></span></li>' +
      '</ul>'
    });

    let transfers = Ember.Object.create({
      id: 'transfers',
      title: 'Переводы',
      subtitle: 'Внедрение технологии распознавания лиц в систему p2p-переводов',
      sounds: ['1', '2', '3', '4'],
      content: '<ul>' +
      '<li><span><p>В приложении «Открытие.Переводы» можно отправить деньги по фотографии. ' +
      'Пользователю необходимо войти в мобильное приложение и ввести сумму, которую собирается отправить, сфотографировать или выбрать из галереи фотографию того, кому хочет отправить деньги, и прикрепить ее к платежу. Затем VisionLabs Photo Maker — технология, позволяющая выбрать лучший кадр из видеопотока и анализирующая фотоизображения — распознает лицо и сравнивает его с базой клиентов Банка. После идентификации лица операция подтверждается.</p></span></li>' +
      '<li><span><p>Сервис безопасен для пользователей, так как для отправки перевода клиент должен быть авторизован в мобильном приложении.</p></span></li>' +
      '</ul>'
    });

    let voiceRecognition = Ember.Object.create({
      id: 'voice-recognition',
      title: 'Voice Recognition',
      sounds: ['1', '2', '3', '4', '5', '6', '7'],
      content: '<ul>' +
      '<li><span><p>Система распознавания речи улучшает такие показатели  работы офисов Банка как продажи услуг, удовлетворенность клиентов, дисциплинированность сотрудников. ' +
      'В рамках проекта, который длился три месяца, сотрудники отделений носили «умные бейджи» в течение всего дня и после работы вставляли их в специальное устройство для выгрузки голосовых скриптов.</p></span></li>' +
      '<li><span><p>Все аудиозаписи, передаваемые этими устройствами на центральный сервер в зашифрованном виде, обрабатываются согласно настройкам САР (фразы, слова, сценарии и т.п.) и используются для формирования живой (instant) аналитики по каждому из сотрудников и ДО в целом.</p></span></li>' +
      '<li><span><p>В рамках пилотного проекта удалось увеличить рост продаж ключевых продуктов Банка и повысить операционную эффективность отделений.</p></span></li>' +
      '</ul>'
    });

    let srl = Ember.Object.create({
      id: 'srl',
      title: 'СРЛ',
      subtitle: 'Cистема распознавания лиц в системе электронной очереди и банкоматах банка',
      sounds: ['1', '2', '3', '4'],
      content: '<ul>' +
      '<li><span><p>Внедрение системы распознавания лиц позволяет дополнить привычные способы идентификации клиента банка, уменьшить количество мошеннических действий, улучшить качество обслуживания в офисах и реализовать различные инновационные сервисы, такие как P2P переводы по фотографии и удаленная авторизация.</p></span></li>' +
      '</ul>'
    });

    let lifeStyle = Ember.Object.create({
      id: 'life-style',
      title: 'LifeStyle-помощник',
      subtitle: 'Психопрофилирование менеджеров Private Banking для улучшения совместимости менеджеров и их клиентов',
      sounds: ['1', '2', '3', '4', '5'],
      content: '<ul>' +
      '<li><span><p>Уникальный портал услуг - PREMIUM LIFESTYLE DIGITAL SPACE персонализирован под каждого пользователя . На витрине событий, клиент может воспользоваться продуктами разных категорий: подарки, недвижимость, путешествия, инвестиции, здоровье, искусство.</p></span></li>' +
      '<li><span><p>Персонализация построена на основе фундаментальных работ по психологии, технологии коммуникации и анализа данных. Для каждого клиента выстраивается его персональная жизненная траектория. Использую эти траектории, мы предлагаем лайф-стайл продукты, превращая банк в полноценного помощника по финансовому планированию.</p></span></li>' +
      '</ul>'
    });

    let hrTech = Ember.Object.create({
      id: 'hr-tech',
      title: 'HRTech',
      subtitle: 'Оптимизация HR процессов для банка «Открытие» при помощи AI (искусственного интеллекта)',
      sounds: ['1', '2', '3'],
      content: '<ul>' +
      '<li><span><p>Современные технологии работы с большими данными и машинное обучение способны находить нужных сотрудников за более короткие сроки. Такой подход позволять сократить время подбора до 70%.</p></span></li>' +
      '<li><span><p>Искусственный интеллект позволяет автоматизировать назначение встреч с рекрутерами, анализ видеообращении кандидатов, а уже после подбора прогнозировать увольнения сотрудников в ближайшие три месяца.</p></span></li>' +
      '</ul>'
    });

    let chatBot = Ember.Object.create({
      id: 'chat-bot',
      title: 'ChatBot',
      subtitle: 'Умная автоматизация работы операторов чата в контакт-центре Банка',
      sounds: ['1', '2', '3', '4', '5'],
      content: '<ul>' +
      '<li><span><p>Объединив сильные стороны человека и робота удалось добиться сокращения среднего времени ответа операторами на текстовые сообщения клиентов почти в 2 раза. ' +
      'Искусственный интеллект подсказывает оператору ответы, а также самообучается в режиме реального времени, наблюдая за поведением клиентов и операторов.</p></span></li>' +
      '<li><span><p>Накопив данные, искусственный интеллект сможет отвечать на самые частые вопросы без участия человека, а операторы будут отвечать на вопросы, требующие осмысления и креативности.</p></span></li>' +
      '</ul>'
    });

    let vr = Ember.Object.create({
      id: 'vr',
      title: 'VR-недвижимость',
      subtitle: 'Маркетплейс для продажи недвижимости в VR (виртуальной реальности) с детальным моделированием планировок продаваемых квартир',
      sounds: ['1', '2', '3', '4', '5'],
      content: '<ul>' +
      '<li><span><p>Банк Открытие разрабатывает маркетплейс для продажи недвижимости в виртуальной реальности с детальным моделированием планировок продаваемых квартир.</p></span></li>' +
      '<li><span><p>Вы сможете увидеть и свою будущую квартиру и двор с прилегающей территорией в  виртуальной реальности.</p></span></li>' +
      '<li><span><p>Удобная интерактивная карта подскажет вам, где находятся такие важные инфраструктурные объекты как остановки общественного транспорта, метро, школы, поликлиники и торговые цены.</p></span></li>' +
      '<li><span><p>Мы создали для клиента комфортные условия для удаленного выбора недвижимости. А если у клиента нет шлема виртуальной реальности, нужно просто прийти в офис банка, в котором есть VR-шоурум.</p></span></li>' +
      '</ul>'
    });

    let banking = Ember.Object.create({
      id: 'iot',
      title: 'Banking 3.0',
      content: '<ul>' +
      '<li><span><p>Развитие современных цифровых технологий порождает новое качество финансовых сервисов, которые вплетаются в обычную жизнь человека и становятся незаметными.</p></span></li>' +
      '<li><span><p>Сложные технологии предлагают удобные и простые решения задач потребителей, упрощая их жизнь, становясь личным консьержем и персональным помощником.</p></span></li>' +
      '<li><span><p>Например, ваше банковское приложение может предложить купить цветы супруги в годовщину свадьбы всего за 1 клик. Вы не ищите цветы в интернете, вам не нужно помнить о днях рождениях, встречах и других важных событиях. Банкинг три ноль напомнить об этом и сделает все необходимое.</p></span></li>' +
      '</ul>'
    });

    let fintechEvents = Ember.Object.create({
      id: 'fintech-events',
      title: 'Fintech events',
      content: '<ul>' +
      '<li><span><p>OPEN FIGHTS  - Хакатоны Банка «Открытие” на различные тематики: от разработки лучшего финтах-приложения, до поиска идей и концепций новых продуктов в сфере кредитования малого бизнеса.</p></span></li>' +
      '<li><span><p>Fintech Cup 2017  - Чемпионат по программированию и аналитике в области финансовых технологий и банкинга. Это соревнование для студентов, аспирантов, выпускников в двух областях: бизнес-аналитика и программирование для сферы финансовых технологий.</p></span></li>' +
      '<li><span><p>Открытие Начало - research-лаборатория и стартап академия для студентов и выпускников, которые хотят поработать над собственным проектом внутри Банка.</p></span></li>' +
      '<li><span><p>Spb Startup Day 2017 – презентация проектов Банка Открытие. Демонстрация инновационных технологий биометрии и виртуальной реальности. Показ работы системы распознавания лиц. Розыгрыш ценных призов (шахматы с автографом гроссмейстера Карякина С.А.). Викторины. Посещение виртуального отделения Банка и общения с виртуальным риэлторов.</p></span></li>' +
      '<li><span><p>Iclub – клуб инноваций Банка "Открытие"</p></span></li>' +
      '</ul>'
    });

    let digitalEthics = Ember.Object.create({
      id: 'digital-ethics',
      title: 'Цифровая этика',
      content: '<ul>' +
      '<li><span><p>История сети супермаркетов Target, когда алгоритм определил беременность девочки и стал посылать ей купоны на товары для беременных, еще до того как семья девочки узнала о ее беременности часто приводится как пример возможностей больших данных и машинного обучения, но она также подняла волну протеста и стоила Target лояльности своих клиентов.</p></span></li>' +
      '<li><span><p>Вопросы Цифровой Этики сегодня поднимаются на уровень стратегии компании и с каждым днем их важность будет расти. ' +
      'Этично или цинично, но большинство компаний вынуждены не показывать насколько умны их алгоритмы, только чтобы не потерять лояльность своей аудитории.</p></span></li>' +
      '<li><span><p>Банк Открытие совместно с порталом N+1 создали специальный проект освещающий этические проблемы , которые появляются в связи с развитием цифровизации.</p></span></li>' +
      '<li><span><p>Iclub – клуб инноваций Банка "Открытие"</p></span></li>' +
      '</ul>'
    });

    let medtech = Ember.Object.create({
      id: 'medtech',
      title: 'MedTech',
      content: '<ul>' +
      '<li><span><p>Банк «Открытие» в партнерстве с компанией OnDoc запустил акцию повышенного кэшбэка за услуги медицинских клиник. Банк возвращает  10% при оплате картой медицинских услуг в клиниках-партнерах ONDOC, а также телемедицинских консультаций.</p></span></li>' +
      '</ul>'
    });

    let iot = Ember.Object.create({
      id: 'iot',
      title: 'iOT',
      content: '<ul>' +
      '<li><span><p>Интернет вещей - общее название набора технологий связанных с сетями и взаимодействиями физических предметов, оснащенных встроенными датчиками, способное перестроить экономические и общественные процессы.' +
      'В Открытии ведется разработка следующих проектов:</p></span></li>' +
      '<li><span><p>B2B страхование - B2B Продукт страхования имущества с использованием телеметрии.</p></span></li>' +
      '<li><span><p>B2C страхование - использование данных, полученных с датчиков носимых  устройств клиентов банка (Apple watch) страховой компанией, для своевременного выявления рисков, например при программах страхования жизни.</p></span></li>' +
      '</ul>'
    });

    let blockchain = Ember.Object.create({
      id: 'blockchain',
      title: 'Blockchain',
      content: '<ul>' +
      '<li><span><p>Blockchain это структура данных представляющая собой список записей агрегированных в виде блоков, которые связаны и защищены с помощью криптографии. Объекты данных в этой структуре устойчивы к их модификации  даже при наличии физического доступа к хранилищу данных. Это позволяет создавать доверенную среду для хранения и обмена информацией.</p></span></li>' +
      '<li><span><p>Блокчейн децентрализован, он работает на множестве серверов, что повышает надежность системы.</p></span></li>' +
      '<li><span><p>Блокчейн становится хорошим подспорьем для любых сервисов, где нужно обеспечить целостность и неизменность данных. На базе этой технологии можно построить сервисы микроплатежей, банковских операции, хранение биометрических данных, юридически значимых документов и много другого.</p></span></li>' +
      '</ul><p>Блокчейн-проекты банка “Открытие”:</p><ul>' +
      '<li><span><p>KYC (кей-вай-си) физических лиц.</p></span></li>' +
      '<li><span><p>KYC  (кей-вай-си) юридических лиц.</p></span></li>' +
      '<li><span><p>Платежи физических лиц.</p></span></li>' +
      '<li><span><p>Платежи юридических лиц.</p></span></li>' +
      '</ul>'
    });

    controller.set('openMobile', openMobile);
    controller.set('transfers', transfers);
    controller.set('voiceRecognition', voiceRecognition);
    controller.set('srl', srl);
    controller.set('lifeStyle', lifeStyle);
    controller.set('hrTech', hrTech);
    controller.set('chatBot', chatBot);
    controller.set('vr', vr);
    controller.set('banking', banking);
    controller.set('fintechEvents', fintechEvents);
    controller.set('digitalEthics', digitalEthics);
    controller.set('medtech', medtech);
    controller.set('iot', iot);
    controller.set('blockchain', blockchain);
  }
});