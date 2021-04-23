const DB = {

    // Направления: Код направления, название направления
    directions: [
        { code: 10407, name: "Отрожка - Ростов" },
        { code: 10408, name: "Журавка - Боченково" },
        { code: 10452, name: "Предугольная-Краснодонецк" },
        { code: 10453, name: "Зверево -Новомихайловская" },
        { code: 10454, name: "Лесостепь -Юбилейная" },
        { code: 10455, name: "Лесостепь -Усть - Донецкая" },
        { code: 10457, name: "Шахтная -Каменоломни" },
        { code: 10458, name: "Хотунок -Новочеркасска" },
        { code: 10459, name: "Кизитеринка -Батайск" },
        { code: 10460, name: "Развилка -Проточный" },
        { code: 10461, name: "7 подход ст. Лихая" },
        { code: 10462, name: "6 грузовой подход Батайск" },
        { code: 10463, name: "подход Предуг.-Новомихайл" },
        { code: 10467, name: "3 главный ст. Лихая" },
        { code: 10468, name: "Вых. парка ВСев на Ростов" },
        { code: 12801, name: "Урбах-Астрахань" },
        { code: 12802, name: "Червленная Узл.-Астрахань" },
        { code: 12901, name: "Грязи-Волгоград" },
        { code: 12938, name: "Пост 1067 км - Пост 6 км" },
        { code: 13002, name: "Горная -Несветай" },
        { code: 13036, name: "Несветай -Новошахтинск" },
        { code: 13101, name: "Лозовая -Ростов" },
        { code: 13105, name: "Хапры -Батайск" },
        { code: 13135, name: "Марцево -Таганрог - 2" },
        { code: 13136, name: "Таганрог -1 - Таганрог - 2" },
        { code: 13137, name: "Первомайская -Ростов" },
        { code: 13138, name: "Темерник - Зоологич Сад" },
        { code: 13157, name: "обход ст.Хапры" },
        { code: 13180, name: "Гниловская -КрасныйСад" },
        { code: 13201, name: "Батайск -Кривенковская" },
        { code: 13230, name: "Староминск1 -Староминск2" },
        { code: 13231, name: "Тимашевская -Ахтари" },
        { code: 13232, name: "Энемский обход" },
        { code: 13233, name: "Староминская петля" },
        { code: 13234, name: "Выход с Кр.Сада на Старом" },
        { code: 13235, name: "Староминские груз.подходы" },
        { code: 13301, name: "Армавир -Туапсе" },
        { code: 13302, name: "Туапсе -Веселое" },
        { code: 13303, name: "Веселое -Сухуми" },
        { code: 13330, name: "Курганная -Шедок" },
        { code: 13331, name: "Белореченская -Хаджох" },
        { code: 13332, name: "Комсомольская -Апшеронская" },
        { code: 13333, name: "Адлер-Роза Хутор" },
        { code: 13334, name: "Имерет.Курорт -Разъезд5км" },
        { code: 14101, name: "Ростов -Армавир" },
        { code: 14102, name: "Армавир -Мин.Воды" },
        { code: 14103, name: "Мин.Воды -Гудермес" },
        { code: 14104, name: "Прохладная -Гудермес" },
        { code: 14105, name: "Гудермес -Самур" },
        { code: 14136, name: "Сальские груз.подходы" },
        { code: 14137, name: "Тихорецкие груз.подходы" },
        { code: 14138, name: "14 обводной путь МинВоды" },
        { code: 14139, name: "Батайск -Азов" },
        { code: 14140, name: "Батайск -Сальск" },
        { code: 14141, name: "Сосыка -Ейск" },
        { code: 14142, name: "Краснод.обход Тихорецкая" },
        { code: 14143, name: "Сальский обход Тихорецкая" },
        { code: 14144, name: "Армавир I-Армавир II" },
        { code: 14145, name: "Зеленчук -Джегута" },
        { code: 14146, name: "Мин.Воды -Кисловодск" },
        { code: 14147, name: "Бештау -Железноводск" },
        { code: 14149, name: "Котляревская -Нальчик" },
        { code: 14150, name: "Дарг -Кох - Алагир" },
        { code: 14151, name: "Беслан -Владикавказ" },
        { code: 14153, name: "Гудермес - Разъезд 2 км" },
        { code: 14154, name: "Джалка -Гудермес" },
        { code: 14155, name: "Шамхал -Буйнакск" },
        { code: 14157, name: "Батайский обход" },
        { code: 14158, name: "Кизляр -Кизил - Юрт" },
        { code: 19201, name: "Дебальцево -Заповедная" },
        { code: 19202, name: "Заповедная -Замчалово" },
        { code: 19301, name: "Дебальцево -Миллерово" },
        { code: 19402, name: "Лихая -Волгоград" },
        { code: 19430, name: "6 подход ст. Лихая" },
        { code: 19440, name: "Морозовская -Куберле" },
        { code: 21101, name: "Разгуляевка -Н.Баскунчак" },
        { code: 21201, name: "Волгоград -Краснодар" },
        { code: 21202, name: "Энем -Новороссийск" },
        { code: 21203, name: "Козырьки -Гречаная" },
        { code: 21133, name: "Солончак-В.Баскунчак" },
        { code: 21233, name: "Песчанокопская -Передовая" },
        { code: 21237, name: "Крымская -Грушевая" },
        { code: 21238, name: "Новороссийская петля" },
        { code: 21302, name: "Разъезд 9 км - Кавказ" },
        { code: 21330, name: "Крымская -Тимашевская" },
        { code: 21331, name: "Юровский -Анапа" },
        { code: 21333, name: "Красная Стрела - Темрюк" },
        { code: 21334, name: "Подход 1 ст. Разъезд 9 км" },
        { code: 21335, name: "Подход 2 ст. Разъезд 9 км" },
        { code: 21401, name: "Кавказская -Элиста" },
        { code: 21402, name: "Кавказская -Краснодар" },
        { code: 21430, name: "Палагиада -Ставрополь" },
        { code: 21431, name: "Светлоград -Георгиевск" },
        { code: 21432, name: "Краснодар -Витаминный" },
        { code: 21433, name: "Краснодар -Пашковская" },
        { code: 21434, name: "Краснодар -Лорис" },
        { code: 21435, name: "Буденновск1 -Буденновск2" },
        { code: 21436, name: "Обвод. путь ст .Буденновск" },
        { code: 21437, name: "Обвод.путь ст.Пашковская" },
        { code: 55001, name: "На Железный Рог" },
        { code: 55002, name: "Вышестеблиевская -Керчь" },
    ],
    
    // Границы Сатнция и перегонов
    stationBoundaries: [
        {
            pch: 3,
            direction: "Отрожка - Ростов (10407)",
            track: 1,
            station: "Александровка(513541)",
            startCoordinate: "1186.287",
            endCoordinate: "1187.845"
          },
          {
            pch: 3,
            direction: "Отрожка - Ростов (10407)",
            track: 1,
            station: "Александровка - Кизитеринка",
            startCoordinate: "1187.846",
            endCoordinate: "1203.581"
          },
          {
            pch: 3,
            direction: "Отрожка - Ростов (10407)",
            track: 1,
            station: "Кизитеринка(513607)",
            startCoordinate: "1203.582",
            endCoordinate: "1205.459"
          },
          {
            pch: 3,
            direction: "Отрожка - Ростов (10407)",
            track: 1,
            station: "Кизитеринка - Развилка",
            startCoordinate: "1205.460",
            endCoordinate: "1210.786"
          },
          {
            pch: 3,
            direction: "Отрожка - Ростов (10407)",
            track: 1,
            station: "Развилка(510126)",
            startCoordinate: "1210.787",
            endCoordinate: "1210.793"
          },
          {
            pch: 3,
            direction: "Отрожка - Ростов (10407)",
            track: 1,
            station: "Развилка - Ростов-Товарный",
            startCoordinate: "1210.794",
            endCoordinate: "1215.249"
          },
          {
            pch: 3,
            direction: "Отрожка - Ростов (10407)",
            track: 1,
            station: "Ростов-Товарный(510100)",
            startCoordinate: "1215.250",
            endCoordinate: "1217.50"
          },
          {
            pch: 3,
            direction: "Отрожка - Ростов (10407)",
            track: 1,
            station: "Ростов-Товарный - Зоологический Сад",
            startCoordinate: "1217.51",
            endCoordinate: "1220.439"
          },
          {
            pch: 3,
            direction: "Отрожка - Ростов (10407)",
            track: 1,
            station: "Зоологический Сад(510153)",
            startCoordinate: "1220.440",
            endCoordinate: "1220.440"
          },
          {
            pch: 3,
            direction: "Отрожка - Ростов (10407)",
            track: 1,
            station: "Зоологический Сад - Ростов-Главный",
            startCoordinate: "1220.441",
            endCoordinate: "1224.515"
          },
          {
            pch: 3,
            direction: "Отрожка - Ростов (10407)",
            track: 1,
            station: "Ростов-Главный(510204)",
            startCoordinate: "1224.516",
            endCoordinate: "1225.458"
          },
          {
            pch: 3,
            direction: "Отрожка - Ростов (10407)",
            track: 2,
            station: "Александровка(513541)",
            startCoordinate: "1186.363",
            endCoordinate: "1187.766"
          },
          {
            pch: 3,
            direction: "Отрожка - Ростов (10407)",
            track: 2,
            station: "Александровка - Кизитеринка",
            startCoordinate: "1187.767",
            endCoordinate: "1203.497"
          },
          {
            pch: 3,
            direction: "Отрожка - Ростов (10407)",
            track: 2,
            station: "Кизитеринка(513607)",
            startCoordinate: "1203.498",
            endCoordinate: "1205.448"
          },
          {
            pch: 3,
            direction: "Отрожка - Ростов (10407)",
            track: 2,
            station: "Кизитеринка - Развилка",
            startCoordinate: "1205.449",
            endCoordinate: "1210.870"
          },
          {
            pch: 3,
            direction: "Отрожка - Ростов (10407)",
            track: 2,
            station: "Развилка(510126)",
            startCoordinate: "1210.871",
            endCoordinate: "1210.871"
          },
          {
            pch: 3,
            direction: "Отрожка - Ростов (10407)",
            track: 2,
            station: "Развилка - Ростов-Товарный",
            startCoordinate: "1210.872",
            endCoordinate: "1215.173"
          },
          {
            pch: 3,
            direction: "Отрожка - Ростов (10407)",
            track: 2,
            station: "Ростов-Товарный(510100)",
            startCoordinate: "1215.174",
            endCoordinate: "1217.128"
          },
          {
            pch: 3,
            direction: "Отрожка - Ростов (10407)",
            track: 2,
            station: "Ростов-Товарный - Зоологический Сад",
            startCoordinate: "1217.129",
            endCoordinate: "1220.514"
          },
          {
            pch: 3,
            direction: "Отрожка - Ростов (10407)",
            track: 2,
            station: "Зоологический Сад(510153)",
            startCoordinate: "1220.515",
            endCoordinate: "1220.527"
          },
          {
            pch: 3,
            direction: "Отрожка - Ростов (10407)",
            track: 2,
            station: "Зоологический Сад - Ростов-Главный",
            startCoordinate: "1220.528",
            endCoordinate: "1224.469"
          },
          {
            pch: 3,
            direction: "Отрожка - Ростов (10407)",
            track: 2,
            station: "Ростов-Главный(510204)",
            startCoordinate: "1224.470",
            endCoordinate: "1225.456"
          },
          {
            pch: 3,
            direction: "Кизитеринка - Батайск(10459)",
            track: 1,
            station: "Кизитеринка(513607)",
            startCoordinate: "1.150",
            endCoordinate: "1.150"
          },
          {
            pch: 3,
            direction: "Кизитеринка - Батайск(10459)",
            track: 1,
            station: "Кизитеринка - Проточный",
            startCoordinate: "1.151",
            endCoordinate: "3.260"
          },
          {
            pch: 3,
            direction: "Кизитеринка - Батайск(10459)",
            track: 1,
            station: "Проточный(510064)",
            startCoordinate: "3.261",
            endCoordinate: "3.930"
          },
          {
            pch: 3,
            direction: "Кизитеринка - Батайск(10459)",
            track: 2,
            station: "Кизитеринка(513607)",
            startCoordinate: "0.805",
            endCoordinate: "1.62"
          },
          {
            pch: 3,
            direction: "Кизитеринка - Батайск(10459)",
            track: 2,
            station: "Кизитеринка - Проточный",
            startCoordinate: "1.63",
            endCoordinate: "3.262"
          },
          {
            pch: 3,
            direction: "Кизитеринка - Батайск(10459)",
            track: 2,
            station: "Проточный(510064)",
            startCoordinate: "3.263",
            endCoordinate: "3.263"
          },
          {
            pch: 3,
            direction: "Развилка - Проточный (10460)",
            track: 1,
            station: "Развилка(510126)",
            startCoordinate: "1.92",
            endCoordinate: "2.98"
          },
          {
            pch: 3,
            direction: "Развилка - Проточный (10460)",
            track: 1,
            station: "Развилка - Проточный",
            startCoordinate: "1.99",
            endCoordinate: "4.222"
          },
          {
            pch: 3,
            direction: "Развилка - Проточный (10460)",
            track: 1,
            station: "Проточный(510064)",
            startCoordinate: "4.223",
            endCoordinate: "4.223"
          },
          {
            pch: 3,
            direction: "Лозовая - Ростов(13101)",
            track: 1,
            station: "Марцево(511404)",
            startCoordinate: "1273.89",
            endCoordinate: "1276.968"
          },
          {
            pch: 3,
            direction: "Лозовая - Ростов(13101)",
            track: 1,
            station: "Марцево - Таганрог-Пассажирский",
            startCoordinate: "1276.969",
            endCoordinate: "1278.923"
          },
          {
            pch: 3,
            direction: "Лозовая - Ростов(13101)",
            track: 1,
            station: "Таганрог-Пассажирский(511419)",
            startCoordinate: "1278.924",
            endCoordinate: "1280.372"
          },
          {
            pch: 3,
            direction: "Лозовая - Ростов(13101)",
            track: 1,
            station: "Таганрог-Пассажирский - Морская",
            startCoordinate: "1280.373",
            endCoordinate: "1293.281"
          },
          {
            pch: 3,
            direction: "Лозовая - Ростов(13101)",
            track: 1,
            station: "Морская(511349)",
            startCoordinate: "1293.282",
            endCoordinate: "1295.168"
          },
          {
            pch: 3,
            direction: "Лозовая - Ростов(13101)",
            track: 1,
            station: "Морская - Синявская",
            startCoordinate: "1295.169",
            endCoordinate: "1306.285"
          },
          {
            pch: 3,
            direction: "Лозовая - Ростов(13101)",
            track: 1,
            station: "Синявская(511350)",
            startCoordinate: "1306.286",
            endCoordinate: "1307.467"
          },
          {
            pch: 3,
            direction: "Лозовая - Ростов(13101)",
            track: 1,
            station: "Синявская - Хапры",
            startCoordinate: "1307.468",
            endCoordinate: "1325.896"
          },
          {
            pch: 3,
            direction: "Лозовая - Ростов(13101)",
            track: 1,
            station: "Хапры(510505)",
            startCoordinate: "1325.897",
            endCoordinate: "1330.373"
          },
          {
            pch: 3,
            direction: "Лозовая - Ростов(13101)",
            track: 1,
            station: "Хапры - Ростов-Западный",
            startCoordinate: "1330.374",
            endCoordinate: "1334.335"
          },
          {
            pch: 3,
            direction: "Лозовая - Ростов(13101)",
            track: 1,
            station: "Ростов-Западный(510401)",
            startCoordinate: "1334.336",
            endCoordinate: "1335.782"
          },
          {
            pch: 3,
            direction: "Лозовая - Ростов(13101)",
            track: 1,
            station: "Ростов-Западный(510401)",
            startCoordinate: "1335.783",
            endCoordinate: "1340.616"
          },
          {
            pch: 3,
            direction: "Лозовая - Ростов(13101)",
            track: 1,
            station: "Темерник(510238)",
            startCoordinate: "1340.617",
            endCoordinate: "1341.789"
          },
          {
            pch: 3,
            direction: "Лозовая - Ростов(13101)",
            track: 1,
            station: "Темерник - Ростов-Главный",
            startCoordinate: "1341.790",
            endCoordinate: "1345.337"
          },
          {
            pch: 3,
            direction: "Лозовая - Ростов(13101)",
            track: 1,
            station: "Ростов-Главный(510204)",
            startCoordinate: "1345.338",
            endCoordinate: "1346.1"
          },
          {
            pch: 3,
            direction: "Лозовая - Ростов(13101)",
            track: 2,
            station: "Марцево(511404)",
            startCoordinate: "1275.418",
            endCoordinate: "1276.856"
          },
          {
            pch: 3,
            direction: "Лозовая - Ростов(13101)",
            track: 2,
            station: "Марцево - Таганрог-Пассажирский",
            startCoordinate: "1276.857",
            endCoordinate: "1278.1000"
          },
          {
            pch: 3,
            direction: "Лозовая - Ростов(13101)",
            track: 2,
            station: "Таганрог-Пассажирский(511419)",
            startCoordinate: "1278.1001",
            endCoordinate: "1280.441"
          },
          {
            pch: 3,
            direction: "Лозовая - Ростов(13101)",
            track: 2,
            station: "Таганрог-Пассажирский -Морская",
            startCoordinate: "1280.442",
            endCoordinate: "1293.188"
          },
          {
            pch: 3,
            direction: "Лозовая - Ростов(13101)",
            track: 2,
            station: "Морская(511349)",
            startCoordinate: "1293.189",
            endCoordinate: "1295.234"
          },
          {
            pch: 3,
            direction: "Лозовая - Ростов(13101)",
            track: 2,
            station: "Морская - Синявская",
            startCoordinate: "1295.235",
            endCoordinate: "1306.200"
          },
          {
            pch: 3,
            direction: "Лозовая - Ростов(13101)",
            track: 2,
            station: "Синявская(511350)",
            startCoordinate: "1306.201",
            endCoordinate: "1307.541"
          },
          {
            pch: 3,
            direction: "Лозовая - Ростов(13101)",
            track: 2,
            station: "Синявская - Хапры",
            startCoordinate: "1307.542",
            endCoordinate: "1325.810"
          },
          {
            pch: 3,
            direction: "Лозовая - Ростов(13101)",
            track: 2,
            station: "Хапры(510505)",
            startCoordinate: "1325.811",
            endCoordinate: "1330.446"
          },
          {
            pch: 3,
            direction: "Лозовая - Ростов(13101)",
            track: 2,
            station: "Хапры - Ростов-Западный",
            startCoordinate: "1330.447",
            endCoordinate: "1334.246"
          },
          {
            pch: 3,
            direction: "Лозовая - Ростов(13101)",
            track: 2,
            station: "Ростов-Западный(510401)",
            startCoordinate: "1334.247",
            endCoordinate: "1335.849"
          },
          {
            pch: 3,
            direction: "Лозовая - Ростов(13101)",
            track: 2,
            station: "Ростов-Западный - Темерник",
            startCoordinate: "1335.850",
            endCoordinate: "1340.704"
          },
          {
            pch: 3,
            direction: "Лозовая - Ростов(13101)",
            track: 2,
            station: "Темерник(510238)",
            startCoordinate: "1340.705",
            endCoordinate: "1341.784"
          },
          {
            pch: 3,
            direction: "Лозовая - Ростов(13101)",
            track: 2,
            station: "Темерник - Ростов-Главный",
            startCoordinate: "1341.785",
            endCoordinate: "1345.296"
          },
          {
            pch: 3,
            direction: "Лозовая - Ростов(13101)",
            track: 2,
            station: "Ростов-Главный(510204)",
            startCoordinate: "1345.297",
            endCoordinate: "1346.1"
          },
          {
            pch: 3,
            direction: "Хапры - Батайск (13105)",
            track: 1,
            station: "Хапры(510505)",
            startCoordinate: "0.234",
            endCoordinate: "4.150"
          },
          {
            pch: 3,
            direction: "Хапры - Батайск (13105)",
            track: 1,
            station: "Хапры - Гниловская",
            startCoordinate: "4.151",
            endCoordinate: "8.617"
          },
          {
            pch: 3,
            direction: "Хапры - Батайск (13105)",
            track: 1,
            station: "Гниловская(510603)",
            startCoordinate: "8.618",
            endCoordinate: "10.960"
          },
          {
            pch: 3,
            direction: "Хапры - Батайск (13105)",
            track: 1,
            station: "Гниловская - Казачья",
            startCoordinate: "10.961",
            endCoordinate: "18.496"
          },
          {
            pch: 3,
            direction: "Хапры - Батайск (13105)",
            track: 1,
            station: "Казачья(510184)",
            startCoordinate: "18.497",
            endCoordinate: "22.484"
          },
          {
            pch: 3,
            direction: "Хапры - Батайск (13105)",
            track: 1,
            station: "Казачья - Хапры",
            startCoordinate: "22.485",
            endCoordinate: "0.173"
          },
          {
            pch: 3,
            direction: "Хапры - Батайск (13105)",
            track: 2,
            station: "Хапры(510505)",
            startCoordinate: "0.174",
            endCoordinate: "4.62"
          },
          {
            pch: 3,
            direction: "Хапры - Батайск (13105)",
            track: 2,
            station: "Хапры - Гниловская",
            startCoordinate: "4.63",
            endCoordinate: "8.694"
          },
          {
            pch: 3,
            direction: "Хапры - Батайск (13105)",
            track: 2,
            station: "Гниловская(510603)",
            startCoordinate: "8.695",
            endCoordinate: "14.499"
          },
          {
            pch: 3,
            direction: "Обход ст. Хапры (13157)",
            track: 1,
            station: "Хапры(510505)",
            startCoordinate: "1.1",
            endCoordinate: "3.219"
          },
          {
            pch: 3,
            direction: "Гниловская - КрасныйСад (13180)",
            track: 1,
            station: "Казачья",
            startCoordinate: "1.89",
            endCoordinate: "1.89"
          },
          {
            pch: 3,
            direction: "Марцево - Таганрог-2 (13136)",
            track: 1,
            station: "Марцево(511404)",
            startCoordinate: "1.1",
            endCoordinate: "1.1"
          },
          {
            pch: 3,
            direction: "Марцево - Таганрог-2 (13136)",
            track: 1,
            station: "Марцево - Таганрог",
            startCoordinate: "1.2",
            endCoordinate: "4.194"
          },
          {
            pch: 3,
            direction: "Марцево - Таганрог-2 (13136)",
            track: 1,
            station: "Таганрог(511508)",
            startCoordinate: "4.195",
            endCoordinate: "5.599"
          },
          {
            pch: 3,
            direction: "Таганрог-1 - Таганрог-2(13136)",
            track: 1,
            station: "Таганрог(511508)",
            startCoordinate: "5.562",
            endCoordinate: "6.806"
          },
          {
            pch: 3,
            direction: "Таганрог-1 - Таганрог-2(13136)",
            track: 1,
            station: "Таганрог - Таганрог-Пассажирский",
            startCoordinate: "6.807",
            endCoordinate: "11.68"
          },
          {
            pch: 3,
            direction: "Таганрог-1 - Таганрог-2(13136)",
            track: 1,
            station: "Таганрог-Пассажирский(511419)",
            startCoordinate: "11.69",
            endCoordinate: "12.250"
          },
          {
            pch: 3,
            direction: "Первомайская - Ростов(13137)",
            track: 1,
            station: "Гниловская(510603)",
            startCoordinate: "8.787",
            endCoordinate: "10.514"
          },
          {
            pch: 3,
            direction: "Первомайская - Ростов(13137)",
            track: 1,
            station: "Гниловская - Ростов-Главный",
            startCoordinate: "10.515",
            endCoordinate: "16.288"
          },
          {
            pch: 3,
            direction: "Первомайская - Ростов(13137)",
            track: 1,
            station: "Ростов-Главный(510204)",
            startCoordinate: "16.289",
            endCoordinate: "18.172"
          },
          {
            pch: 3,
            direction: "Темерник - Зоологич Сад(13138)",
            track: 1,
            station: "Темерник(510238)",
            startCoordinate: "1.275",
            endCoordinate: "1.275"
          },
          {
            pch: 3,
            direction: "Темерник - Зоологич Сад(13138)",
            track: 1,
            station: "Темерник - Зоологический Сад",
            startCoordinate: "1.276",
            endCoordinate: "3.802"
          },
          {
            pch: 3,
            direction: "Темерник - Зоологич Сад(13138)",
            track: 1,
            station: "Темерник(510238)",
            startCoordinate: "3.803",
            endCoordinate: "4.887"
          },
          {
            pch: 3,
            direction: "Ростов - Армавир(14101)",
            track: 1,
            station: "Ростов-Главный(510204)",
            startCoordinate: "1346.1",
            endCoordinate: "1347.79"
          },
          {
            pch: 3,
            direction: "Ростов - Армавир(14101)",
            track: 1,
            station: "Ростов-Главный - Заречная",
            startCoordinate: "1347.80",
            endCoordinate: "1347.499"
          },
          {
            direction: "Ростов - Армавир(14101)",
            track: 1,
            station: "Заречная(510702)",
            startCoordinate: "1347.500",
            endCoordinate: "1349.125"
          },
          {
            pch: 3,
            direction: "Ростов - Армавир(14101)",
            track: 2,
            station: "Ростов-Главный(510204)",
            startCoordinate: "1346.1",
            endCoordinate: "1346.980"
          },
          {
            pch: 3,
            direction: "Ростов - Армавир(14101)",
            track: 2,
            station: "Ростов-Главный - Заречная",
            startCoordinate: "1346.981",
            endCoordinate: "1347.499"
          },
          {
            direction: "Ростов - Армавир(14101)",
            track: 2,
            station: "Заречная(510702)",
            startCoordinate: "1347.500",
            endCoordinate: "1349.223"
          },
          {
            pch: 3,
            direction: "Ростов - Армавир(14101)",
            track: "IV",
            station: "Ростов-Главный(510204)",
            startCoordinate: "1346.1",
            endCoordinate: "1346.498"
          },
          {
            pch: 3,
            direction: "Ростов - Армавир(14101)",
            track: "V",
            station: "Ростов-Главный(510204)",
            startCoordinate: "1346.1",
            endCoordinate: "1346.597"
          },
          {
            pch: 4,
            direction: "Кизитеринка - Батайск(10459)",
            track: 1,
            station: "Зеленый Луг(510050)",
            startCoordinate: "7.148",
            endCoordinate: "9.753"
          },
          {
            pch: 4,
            direction: "Кизитеринка - Батайск(10459)",
            track: 1,
            station: "Зеленый Луг - Батайск",
            startCoordinate: "9.754",
            endCoordinate: "11.901"
          },
          {
            pch: 4,
            direction: "Кизитеринка - Батайск(10459)",
            track: 1,
            station: "Батайск(510007)",
            startCoordinate: "11.902",
            endCoordinate: "12.426"
          },
          {
            pch: 4,
            direction: "Кизитеринка - Батайск(10459)",
            track: 2,
            station: "Зеленый Луг(510050)",
            startCoordinate: ".",
            endCoordinate: "9.655"
          },
          {
            pch: 4,
            direction: "Кизитеринка - Батайск(10459)",
            track: 2,
            station: "Зеленый Луг - Батайск",
            startCoordinate: "9.656",
            endCoordinate: "11.950"
          },
          {
            pch: 4,
            direction: "Кизитеринка - Батайск(10459)",
            track: 2,
            station: "Батайск(510007)",
            startCoordinate: "11.951",
            endCoordinate: "12.348"
          },
          {
            pch: 4,
            direction: "6 грузовой подход Батайск(10462)",
            track: 1,
            station: "Батайск(510007)",
            startCoordinate: "1.1",
            endCoordinate: "1.979"
          },
          {
            pch: 4,
            direction: "Вых. парка ВСев на Ростов(10468)",
            track: 1,
            station: "Батайск(510007)",
            startCoordinate: "1.1",
            endCoordinate: "3.18"
          },
          {
            pch: 4,
            direction: "Хапры - Батайск(13105)",
            track: 1,
            station: "Батайск(510007)",
            startCoordinate: "24.74",
            endCoordinate: "25.132"
          },
          {
            pch: 4,
            direction: "Гниловская - КрасныйСад(13180)",
            track: 1,
            station: "Блокпост 19 км(510195)",
            startCoordinate: "2.223",
            endCoordinate: "2.303"
          },
          {
            pch: 4,
            direction: "Батайск - Кривенковская(13201)",
            track: 1,
            station: "Батайск(510007)",
            startCoordinate: "1360.935",
            endCoordinate: "1361.416"
          },
          {
            pch: 4,
            direction: "Батайск - Кривенковская(13201)",
            track: 1,
            station: "Батайск - Блокпост 7",
            startCoordinate: "1361.417",
            endCoordinate: "1363.314"
          },
          {
            pch: 4,
            direction: "Батайск - Кривенковская(13201)",
            track: 1,
            station: "Блокпост 7(510729)",
            startCoordinate: "1363.315",
            endCoordinate: "1364.777"
          },
          {
            pch: 4,
            direction: "Батайск - Кривенковская(13201)",
            track: 1,
            station: "Блокпост 7 - Высочино",
            startCoordinate: "1364.778",
            endCoordinate: "1371.538"
          },
          {
            pch: 4,
            direction: "Батайск - Кривенковская(13201)",
            track: 1,
            station: "Высочино(515335)",
            startCoordinate: "1371.539",
            endCoordinate: "1373.669"
          },
          {
            pch: 4,
            direction: "Батайск - Кривенковская(13201)",
            track: 1,
            station: "Высочино - Васильево-Петровская",
            startCoordinate: "1373.670",
            endCoordinate: "1389.336"
          },
          {
            pch: 4,
            direction: "Батайск - Кривенковская(13201)",
            track: 1,
            station: "Васильево-Петровская(515381)",
            startCoordinate: "1389.337",
            endCoordinate: "1391.949"
          },
          {
            pch: 4,
            direction: "Батайск - Кривенковская(13201)",
            track: 1,
            station: "Васильево-Петровская - Блок-пост 1410 км",
            startCoordinate: "1391.950",
            endCoordinate: "1410.50"
          },
          {
            pch: 4,
            direction: "Батайск - Кривенковская(13201)",
            track: 1,
            station: "Блок-пост 1410 км(55050)",
            startCoordinate: "1410.51",
            endCoordinate: "1410.61"
          },
          {
            pch: 4,
            direction: "Батайск - Кривенковская(13201)",
            track: 1,
            station: "Блок-пост 1410 км - Орловка-Кубанская",
            startCoordinate: "1410.62",
            endCoordinate: "1423.690"
          },
          {
            pch: 4,
            direction: "Батайск - Кривенковская(13201)",
            track: 1,
            station: "Орловка-Кубанская(515744)",
            startCoordinate: "1423.691",
            endCoordinate: "1426.226"
          },
          {
            pch: 4,
            direction: "Батайск - Кривенковская(13201)",
            track: 1,
            station: "Орловка-Кубанская - Блок-пост 1436 км",
            startCoordinate: "1426.227",
            endCoordinate: "1436.359"
          },
          {
            pch: 4,
            direction: "Батайск - Кривенковская(13201)",
            track: 1,
            station: "Блок-пост 1436 км(55555)",
            startCoordinate: "1436.360",
            endCoordinate: "."
          },
          {
            pch: 4,
            direction: "Батайск - Кривенковская(13201)",
            track: 2,
            station: "Блокпост 7(510729)",
            startCoordinate: "1363.320",
            endCoordinate: "1364.251"
          },
          {
            pch: 4,
            direction: "Батайск - Кривенковская(13201)",
            track: 2,
            station: "Блокпост 7 - Высочино",
            startCoordinate: "1364.252",
            endCoordinate: "1371.626"
          },
          {
            pch: 4,
            direction: "Батайск - Кривенковская(13201)",
            track: 2,
            station: "Высочино(515335)",
            startCoordinate: "1371.627",
            endCoordinate: "1373.699"
          },
          {
            pch: 4,
            direction: "Батайск - Кривенковская(13201)",
            track: 2,
            station: "Высочино - Васильево-Петровская",
            startCoordinate: "1373.700",
            endCoordinate: "1389.248"
          },
          {
            pch: 4,
            direction: "Батайск - Кривенковская(13201)",
            track: 2,
            station: "Васильево-Петровская(515381)",
            startCoordinate: "1389.249",
            endCoordinate: "1391.863"
          },
          {
            pch: 4,
            direction: "Батайск - Кривенковская(13201)",
            track: 2,
            station: "Васильево-Петровская - Блок-пост 1410 км",
            startCoordinate: "1391.864",
            endCoordinate: "1409.982"
          },
          {
            pch: 4,
            direction: "Батайск - Кривенковская(13201)",
            track: 2,
            station: "Блок-пост 1410 км(55050)",
            startCoordinate: "1409.983",
            endCoordinate: "1410.143"
          },
          {
            pch: 4,
            direction: "Батайск - Кривенковская(13201)",
            track: 2,
            station: "Блок-пост 1410 км - Орловка-Кубанская",
            startCoordinate: "1410.144",
            endCoordinate: "1423.601"
          },
          {
            pch: 4,
            direction: "Батайск - Кривенковская(13201)",
            track: 2,
            station: "Орловка-Кубанская(515744)",
            startCoordinate: "1423.602",
            endCoordinate: "1426.140"
          },
          {
            pch: 4,
            direction: "Батайск - Кривенковская(13201)",
            track: 2,
            station: "Орловка-Кубанская - Блок-пост 1436 км",
            startCoordinate: "1426.141",
            endCoordinate: "1436.450"
          },
          {
            pch: 4,
            direction: "Батайск - Кривенковская(13201)",
            track: 2,
            station: "Блок-пост 1436 км(55555)",
            startCoordinate: "1436.451",
            endCoordinate: "."
          },
          {
            pch: 4,
            direction: "Староминская петля(13233)",
            station: "Блокпост 7(510729)",
            startCoordinate: "1.1",
            endCoordinate: "2.952"
          },
          {
            pch: 4,
            direction: "Выход с Кр.Сада на Старом(13234)",
            station: "Блокпост 7(510729)",
            startCoordinate: "1.1",
            endCoordinate: "1.931"
          },
          {
            pch: 4,
            direction: "Староминские груз.подходы(13235)",
            station: "Блокпост 7(510729)",
            startCoordinate: "1.1",
            endCoordinate: "1.1"
          },
          {
            pch: 4,
            direction: "Староминские груз.подходы(13235)",
            station: "Блокпост 7 - Батайск",
            startCoordinate: "1.2",
            endCoordinate: "3.753"
          },
          {
            pch: 4,
            direction: "Староминские груз.подходы(13235)",
            station: "Батайск(510007)",
            startCoordinate: "3.754",
            endCoordinate: "4.102"
          },
          {
            pch: 4,
            direction: "Ростов - Армавир(14101)",
            track: 1,
            station: "Заречная - Блокпост 1352 км",
            startCoordinate: "1349.126",
            endCoordinate: "1352.109"
          },
          {
            pch: 4,
            direction: "Ростов - Армавир(14101)",
            track: 1,
            station: "Блокпост 1352 км(510177)",
            startCoordinate: "1352.110",
            endCoordinate: "1352.220"
          },
          {
            pch: 4,
            direction: "Ростов - Армавир(14101)",
            track: 1,
            station: "Блокпост 1352 км - Батайск",
            startCoordinate: "1352.221",
            endCoordinate: "1353.242"
          },
          {
            pch: 4,
            direction: "Ростов - Армавир(14101)",
            track: 1,
            station: "Батайск(510007)",
            startCoordinate: "1353.243",
            endCoordinate: "1361.173"
          },
          {
            pch: 4,
            direction: "Ростов - Армавир(14101)",
            track: 1,
            station: "Батайск - Койсуг",
            startCoordinate: "1361.174",
            endCoordinate: "1366.338"
          },
          {
            pch: 4,
            direction: "Ростов - Армавир(14101)",
            track: 1,
            station: "Койсуг(514101)",
            startCoordinate: "1366.339",
            endCoordinate: "1368.716"
          },
          {
            pch: 4,
            direction: "Ростов - Армавир(14101)",
            track: 1,
            station: "Койсуг - Каяла",
            startCoordinate: "1368.717",
            endCoordinate: "1379.888"
          },
          {
            pch: 4,
            direction: "Ростов - Армавир(14101)",
            track: 1,
            station: "Каяла(514205)",
            startCoordinate: "1379.889",
            endCoordinate: "1381.996"
          },
          {
            pch: 4,
            direction: "Ростов - Армавир(14101)",
            track: 1,
            station: "Каяла - Степная",
            startCoordinate: "1381.997",
            endCoordinate: "1406.230"
          },
          {
            pch: 4,
            direction: "Ростов - Армавир(14101)",
            track: 1,
            station: "Степная(514309)",
            startCoordinate: "1406.230",
            endCoordinate: "1407.805"
          },
          {
            pch: 4,
            direction: "Ростов - Армавир(14101)",
            track: 2,
            station: "Заречная - Блокпост 1352 км",
            startCoordinate: "1349.224",
            endCoordinate: "1352.103"
          },
          {
            pch: 4,
            direction: "Ростов - Армавир(14101)",
            track: 2,
            station: "Бдокпост 1352 км - Батайск",
            startCoordinate: "1352.104",
            endCoordinate: "1353.153"
          },
          {
            pch: 4,
            direction: "Ростов - Армавир(14101)",
            track: 2,
            station: "Батайск(510007)",
            startCoordinate: "1353.154",
            endCoordinate: "1361.320"
          },
          {
            pch: 4,
            direction: "Ростов - Армавир(14101)",
            track: 2,
            station: "Батайск - Койсуг",
            startCoordinate: "1361.321",
            endCoordinate: "1365.530"
          },
          {
            pch: 4,
            direction: "Ростов - Армавир(14101)",
            track: 2,
            station: "Койсуг(514101)",
            startCoordinate: "1365.531",
            endCoordinate: "1368.806"
          },
          {
            pch: 4,
            direction: "Ростов - Армавир(14101)",
            track: 2,
            station: "Койсуг - Каяла",
            startCoordinate: "1368.807",
            endCoordinate: "1379.816"
          },
          {
            pch: 4,
            direction: "Ростов - Армавир(14101)",
            track: 2,
            station: "Каяла(514205)",
            startCoordinate: "1379.817",
            endCoordinate: "1382.33"
          },
          {
            pch: 4,
            direction: "Ростов - Армавир(14101)",
            track: 2,
            station: "Каяла - Степная",
            startCoordinate: "1382.34",
            endCoordinate: "1406.169"
          },
          {
            pch: 4,
            direction: "Ростов - Армавир(14101)",
            track: 2,
            station: "Степная(514309)",
            startCoordinate: "1406.170",
            endCoordinate: "1407.727"
          },
          {
            pch: 4,
            direction: "Сальские груз. подходы(14136)",
            track: 1,
            station: "Батайск(510007)",
            startCoordinate: "1.1",
            endCoordinate: "2.673"
          },
          {
            pch: 4,
            direction: "Тихорецкие груз. подходы(14137)",
            track: 1,
            station: "Батайск(510007)",
            startCoordinate: "14.285",
            endCoordinate: "16.153"
          },
          {
            pch: 4,
            direction: "Тихорецкие груз. подходы(14137)",
            track: 1,
            station: "Батайск(510007)",
            startCoordinate: "14.495",
            endCoordinate: "16.232"
          },
          {
            pch: 4,
            direction: "Батайск - Азов(14139)",
            track: 1,
            station: "Батайск(510007)",
            startCoordinate: "3.842",
            endCoordinate: "4.30"
          },
          {
            pch: 4,
            direction: "Батайск - Азов(14139)",
            track: 1,
            station: "Батайск -Кулешовский",
            startCoordinate: "4.31",
            endCoordinate: "19.112"
          },
          {
            pch: 4,
            direction: "Батайск - Азов(14139)",
            track: 1,
            station: "Кулешовский(510830)",
            startCoordinate: "19.113",
            endCoordinate: "20.423"
          },
          {
            pch: 4,
            direction: "Батайск - Азов(14139)",
            track: 1,
            station: "Кулешовский - Азов",
            startCoordinate: "20.424",
            endCoordinate: "29.763"
          },
          {
            pch: 4,
            direction: "Батайск - Азов(14139)",
            track: 1,
            station: "Азов(510806)",
            startCoordinate: "29.764",
            endCoordinate: "31.346"
          },
          {
            pch: 4,
            direction: "Батайск - Сальск(14140)",
            station: "Батайск(510007)",
            startCoordinate: "1.291",
            endCoordinate: "5.909"
          },
          {
            pch: 4,
            direction: "Батайский обход(14157)",
            track: 1,
            station: "Блокпост 1352 км(510177)",
            startCoordinate: "1.158",
            endCoordinate: "1.158"
          },
          {
            pch: 4,
            direction: "Батайский обход(14157)",
            track: 1,
            station: "Блокпост 1352 км  - Блокпост 19 км",
            startCoordinate: "1.159",
            endCoordinate: "7.417"
          },
          {
            pch: 4,
            direction: "Батайский обход(14157)",
            track: 1,
            station: "Блокпост 19 км(510195)",
            startCoordinate: "7.418",
            endCoordinate: "7.418"
          },
          {
            pch: 4,
            direction: "Батайский обход(14157)",
            track: 1,
            station: "Блокпост 19 км - Блокпост 7",
            startCoordinate: "7.419",
            endCoordinate: "14.269"
          },
          {
            pch: 4,
            direction: "Батайский обход(14157)",
            track: 1,
            station: "Блокпост 7(510729)",
            startCoordinate: "14.270",
            endCoordinate: "14.270"
          },
          {
            pch: 4,
            direction: "Батайский обход(14157)",
            track: 1,
            station: "Блокпост 7 - Койсуг",
            startCoordinate: "14.271",
            endCoordinate: "17.296"
          },
          {
            pch: 4,
            direction: "Батайский обход(14157)",
            track: 1,
            station: "Койсуг(514101)",
            startCoordinate: "17.297",
            endCoordinate: "17.297"
          },
          {
            pch: 4,
            direction: "Батайский обход(14157)",
            track: 2,
            station: "Блокпост 1352 км(510177)",
            startCoordinate: "1.157",
            endCoordinate: "1.157"
          },
          {
            pch: 4,
            direction: "Батайский обход(14157)",
            track: 2,
            station: "Блокпост 1352 км - Блокпост 19 км",
            startCoordinate: "1.158",
            endCoordinate: "7.158"
          },
          {
            pch: 4,
            direction: "Батайский обход(14157)",
            track: 2,
            station: "Блокпост 19 км(510195)",
            startCoordinate: "7.159",
            endCoordinate: "7.313"
          },
          {
            pch: 4,
            direction: "Батайский обход(14157)",
            track: 2,
            station: "Блокпост 19 км - Блокпост 7",
            startCoordinate: "7.314",
            endCoordinate: "13.640"
          },
          {
            pch: 4,
            direction: "Батайский обход(14157)",
            track: 2,
            station: "Блокпост 7(510729)",
            startCoordinate: "13.639",
            endCoordinate: "13.639"
          },
          {
            pch: 4,
            direction: "Батайский обход(14157)",
            track: 2,
            station: "Блокпост 7 - Койсуг",
            startCoordinate: "13.640",
            endCoordinate: "16.235"
          },
          {
            pch: 4,
            direction: "Батайский обход(14157)",
            track: 2,
            station: "Койсуг(514101)",
            startCoordinate: "16.236",
            endCoordinate: "16.236"
          },
          {
            pch: 30,
            direction: "Червленная Узл.-Астрахань(12802)",
            track: 1,
            station: "Кизляр(542205)",
            startCoordinate: "80.507",
            endCoordinate: "83.160"
          },
          {
            pch: 30,
            direction: "Червленная Узл.-Астрахань(12802)",
            track: 1,
            station: "Кизляр - Разъезд №17",
            startCoordinate: "83.161",
            endCoordinate: "95.713"
          },
          {
            pch: 30,
            direction: "Червленная Узл.-Астрахань(12802)",
            track: 1,
            station: "Разъезд № 17(542101)",
            startCoordinate: "95.714",
            endCoordinate: "96.938"
          },
          {
            pch: 30,
            direction: "Червленная Узл.-Астрахань(12802)",
            track: 1,
            station: "Разъезд № 17 - Кара-Баглы",
            startCoordinate: "96.939",
            endCoordinate: "110.409"
          },
          {
            pch: 30,
            direction: "Червленная Узл.-Астрахань(12802)",
            track: 1,
            station: "Кара-Баглы(542046)",
            startCoordinate: "110.410",
            endCoordinate: "111.484"
          },
          {
            pch: 30,
            direction: "Червленная Узл.-Астрахань(12802)",
            track: 1,
            station: "Кара-Баглы - Разъезд № 15",
            startCoordinate: "111.485",
            endCoordinate: "127.129"
          },
          {
            pch: 30,
            direction: "Червленная Узл.-Астрахань(12802)",
            track: 1,
            station: "Разъезд № 15(542027)",
            startCoordinate: "127.130",
            endCoordinate: "128.227"
          },
          {
            pch: 30,
            direction: "Червленная Узл.-Астрахань(12802)",
            track: 1,
            station: "Разъезд № 15 - Кочубей",
            startCoordinate: "128.228",
            endCoordinate: "143.643"
          },
          {
            pch: 30,
            direction: "Червленная Узл.-Астрахань(12802)",
            track: 1,
            station: "Кочубей(542008)",
            startCoordinate: "143.644",
            endCoordinate: "144.903"
          },
          {
            pch: 30,
            direction: "Червленная Узл.-Астрахань(12802)",
            track: 1,
            station: "Кочубей - Разъезд № 14",
            startCoordinate: "144.903",
            endCoordinate: "159.718"
          },
          {
            pch: 30,
            direction: "Червленная Узл.-Астрахань(12802)",
            track: 1,
            station: "Разъезд № 14(541931)",
            startCoordinate: "159.719",
            endCoordinate: "160.755"
          },
          {
            pch: 30,
            direction: "Червленная Узл.-Астрахань(12802)",
            track: 1,
            station: "Разъезд № 14 - Кутан",
            startCoordinate: "160.756",
            endCoordinate: "175.823"
          },
          {
            pch: 30,
            direction: "Червленная Узл.-Астрахань(12802)",
            track: 1,
            station: "Кутан(541927)",
            startCoordinate: "175.824",
            endCoordinate: "176.895"
          },
          {
            pch: 30,
            direction: "Червленная Узл.-Астрахань(12802)",
            track: 1,
            station: "Кутан - Разъезд № 12",
            startCoordinate: "176.896",
            endCoordinate: "191.973"
          },
          {
            pch: 30,
            direction: "Червленная Узл.-Астрахань(12802)",
            track: 1,
            station: "Разъезд № 12(541912)",
            startCoordinate: "191.974",
            endCoordinate: "193.9"
          },
          {
            pch: 30,
            direction: "Червленная Узл.-Астрахань(12802)",
            track: 1,
            station: "Разъезд № 12 - Артезиан",
            startCoordinate: "193.10",
            endCoordinate: "205.836"
          },
          {
            pch: 30,
            direction: "Червленная Узл.-Астрахань(12802)",
            track: 1,
            station: "Артезиан(541908)",
            startCoordinate: "205.837",
            endCoordinate: "208.459"
          },
          {
            pch: 30,
            direction: "Червленная Узл.-Астрахань(12802)",
            track: 1,
            station: "Артезиан - Разъезд № 11",
            startCoordinate: "208.460",
            endCoordinate: "221.939"
          },
          {
            pch: 30,
            direction: "Червленная Узл.-Астрахань(12802)",
            track: 1,
            station: "Разъезд № 11(541838)",
            startCoordinate: "221.940",
            endCoordinate: "222.977"
          },
          {
            pch: 30,
            direction: "Червленная Узл.-Астрахань(12802)",
            track: 1,
            station: "Разъезд № 11 - Белое Озеро",
            startCoordinate: "222.978",
            endCoordinate: "237.303"
          },
          {
            pch: 30,
            direction: "Червленная Узл.-Астрахань(12802)",
            track: 1,
            station: "Белое Озеро(541823)",
            startCoordinate: "237.304",
            endCoordinate: "238.348"
          },
          {
            pch: 30,
            direction: "Червленная Узл.-Астрахань(12802)",
            track: 1,
            station: "Белое Озеро - Улан-Холл",
            startCoordinate: "238.349",
            endCoordinate: "263.560"
          },
          {
            pch: 30,
            direction: "Червленная Узл.-Астрахань(12802)",
            track: 1,
            station: "Улан-Холл(541804)",
            startCoordinate: "263.561",
            endCoordinate: "264.834"
          },
          {
            pch: 30,
            direction: "Червленная Узл.-Астрахань(12802)",
            track: 1,
            station: "Улан-Холл - Разъезд № 8",
            startCoordinate: "264.835",
            endCoordinate: "276.551"
          },
          {
            pch: 30,
            direction: "Червленная Узл.-Астрахань(12802)",
            track: 1,
            station: "Разъезд № 8(541734)",
            startCoordinate: "276.552",
            endCoordinate: "277.634"
          },
          {
            pch: 30,
            direction: "Червленная Узл.-Астрахань(12802)",
            track: 1,
            station: "Разъезд № 8 - Олейниково",
            startCoordinate: "277.635",
            endCoordinate: "291.699"
          },
          {
            pch: 30,
            direction: "Кизляр - Кизил-Юрт(14158)",
            track: 1,
            station: "Кизляр - Качалай",
            startCoordinate: "3.131",
            endCoordinate: "17.32"
          },
          {
            pch: 30,
            direction: "Кизляр - Кизил-Юрт(14158)",
            track: 1,
            station: "Качалай(542228)",
            startCoordinate: "17.33",
            endCoordinate: "18.96"
          },
          {
            pch: 30,
            direction: "Кизляр - Кизил-Юрт(14158)",
            track: 1,
            station: "Качалай - Герменчик",
            startCoordinate: "18.97",
            endCoordinate: "37.303"
          },
          {
            pch: 30,
            direction: "Кизляр - Кизил-Юрт(14158)",
            track: 1,
            station: "Герменчик(543209)",
            startCoordinate: "37.304",
            endCoordinate: "38.562"
          },
          {
            pch: 30,
            direction: "Кизляр - Кизил-Юрт(14158)",
            track: 1,
            station: "Герменчик - Куруш",
            startCoordinate: "38.563",
            endCoordinate: "59.207"
          },
          {
            pch: 30,
            direction: "Кизляр - Кизил-Юрт(14158)",
            track: 1,
            station: "Куруш(542247)",
            startCoordinate: "59.208",
            endCoordinate: "60.235"
          },
          {
            pch: 16,
            direction: "Гудермес - Самур(14105)",
            track: 1,
            station: "Хасав-Юрт(542703)",
            startCoordinate: "2203.125",
            endCoordinate: "2204.776"
          },
          {
            pch: 16,
            direction: "Гудермес - Самур(14105)",
            track: 1,
            station: "Хасав-Юрт - Карлан-Юрт",
            startCoordinate: "2204.777",
            endCoordinate: "2214.982"
          },
          {
            pch: 16,
            direction: "Гудермес - Самур(14105)",
            track: 1,
            station: "Карлан-Юрт(542722)",
            startCoordinate: "2214.983",
            endCoordinate: "2216.96"
          },
          {
            pch: 16,
            direction: "Гудермес - Самур(14105)",
            track: 1,
            station: "Карлан-Юрт - Сулак",
            startCoordinate: "2216.95",
            endCoordinate: "2224.627"
          },
          {
            pch: 16,
            direction: "Гудермес - Самур(14105)",
            track: 1,
            station: "Сулак(542749)",
            startCoordinate: "2224.628",
            endCoordinate: "2224.640"
          },
          {
            pch: 16,
            direction: "Гудермес - Самур(14105)",
            track: 1,
            station: "Сулак - Кизилюрт",
            startCoordinate: "2224.641",
            endCoordinate: "2227.245"
          },
          {
            pch: 16,
            direction: "Гудермес - Самур(14105)",
            track: 1,
            station: "Кизилюрт(542807)",
            startCoordinate: "2227.246",
            endCoordinate: "2228.803"
          },
          {
            pch: 16,
            direction: "Гудермес - Самур(14105)",
            track: 1,
            station: "Кизилюрт - Темиргое",
            startCoordinate: "2228.804",
            endCoordinate: "2251.421"
          },
          {
            pch: 16,
            direction: "Гудермес - Самур(14105)",
            track: 1,
            station: "Темиргое(542930)",
            startCoordinate: "2251.422",
            endCoordinate: "2254.55"
          },
          {
            pch: 16,
            direction: "Гудермес - Самур(14105)",
            track: 1,
            station: "Темиргое - Шамхал",
            startCoordinate: "2254.56",
            endCoordinate: "2268.974"
          },
          {
            pch: 16,
            direction: "Гудермес - Самур(14105)",
            track: 1,
            station: "Шамхал(543000)",
            startCoordinate: "2268.975",
            endCoordinate: "2270.415"
          },
          {
            pch: 16,
            direction: "Гудермес - Самур(14105)",
            track: 1,
            station: "Шамхал - Махачкала",
            startCoordinate: "2270.416",
            endCoordinate: "2277.828"
          },
          {
            pch: 16,
            direction: "Гудермес - Самур(14105)",
            track: 1,
            station: "Махачкала(543301)",
            startCoordinate: "2277.829",
            endCoordinate: "2286.631"
          },
          {
            pch: 16,
            direction: "Гудермес - Самур(14105)",
            track: 1,
            station: "Махачкала - Тарки",
            startCoordinate: "2286.632",
            endCoordinate: "2296.103"
          },
          {
            pch: 16,
            direction: "Гудермес - Самур(14105)",
            track: 1,
            station: "Тарки(543509)",
            startCoordinate: "2296.104",
            endCoordinate: "2297.881"
          },
          {
            pch: 16,
            direction: "Гудермес - Самур(14105)",
            track: 1,
            station: "Тарки - Манас",
            startCoordinate: "2297.882",
            endCoordinate: "2318.503"
          },
          {
            pch: 16,
            direction: "Гудермес - Самур(14105)",
            track: 1,
            station: "Манас(543706)",
            startCoordinate: "2318.504",
            endCoordinate: "2319.579"
          },
          {
            pch: 16,
            direction: "Гудермес - Самур(14105)",
            track: 1,
            station: "Манас - Ачи",
            startCoordinate: "2319.580",
            endCoordinate: "2326.688"
          },
          {
            pch: 16,
            direction: "Гудермес - Самур(14105)",
            track: 1,
            station: "Ачи(543836)",
            startCoordinate: "2326.689",
            endCoordinate: "2327.943"
          },
          {
            pch: 16,
            direction: "Гудермес - Самур(14105)",
            track: 1,
            station: "Ачи - Избербаш",
            startCoordinate: "2327.944",
            endCoordinate: "2346.615"
          },
          {
            pch: 16,
            direction: "Гудермес - Самур(14105)",
            track: 1,
            station: "Избербаш(543903)",
            startCoordinate: "2346.616",
            endCoordinate: "2347.888"
          },
          {
            pch: 16,
            direction: "Гудермес - Самур(14105)",
            track: 1,
            station: "Избербаш - Инчхе",
            startCoordinate: "2347.889",
            endCoordinate: "2356.645"
          },
          {
            pch: 16,
            direction: "Гудермес - Самур(14105)",
            track: 1,
            station: "Инчхе(544003)",
            startCoordinate: "2356.646",
            endCoordinate: "2357.981"
          },
          {
            pch: 16,
            direction: "Гудермес - Самур(14105)",
            track: 1,
            station: "Инчхе - Каягент",
            startCoordinate: "2357.980",
            endCoordinate: "2366.226"
          },
          {
            pch: 16,
            direction: "Гудермес - Самур(14105)",
            track: 1,
            station: "Каягент(544147)",
            startCoordinate: "2366.227",
            endCoordinate: "2367.670"
          },
          {
            pch: 16,
            direction: "Гудермес - Самур(14105)",
            track: 1,
            station: "Каягент - Берикей",
            startCoordinate: "2367.671",
            endCoordinate: "2385.929"
          },
          {
            pch: 16,
            direction: "Гудермес - Самур(14105)",
            track: 1,
            station: "Берикей(544210)",
            startCoordinate: "2385.930",
            endCoordinate: "2387.14"
          },
          {
            pch: 16,
            direction: "Гудермес - Самур(14105)",
            track: 1,
            station: "Берикей - Мамед-Кала",
            startCoordinate: "2387.15",
            endCoordinate: "2393.628"
          },
          {
            pch: 16,
            direction: "Гудермес - Самур(14105)",
            track: 1,
            station: "Мамед-Кала(544304)",
            startCoordinate: "2393.629",
            endCoordinate: "2394.841"
          },
          {
            pch: 16,
            direction: "Гудермес - Самур(14105)",
            track: 1,
            station: "Мамед-Кала - Дагестанские Огни",
            startCoordinate: "2394.842",
            endCoordinate: "2401.762"
          },
          {
            pch: 16,
            direction: "Гудермес - Самур(14105)",
            track: 1,
            station: "Дагестанские Огни(544408)",
            startCoordinate: "2401.763",
            endCoordinate: "2404.1"
          },
          {
            pch: 16,
            direction: "Гудермес - Самур(14105)",
            track: 1,
            station: "Дагестанские Огни - Дербент",
            startCoordinate: "2404.2",
            endCoordinate: "2414.587"
          },
          {
            pch: 16,
            direction: "Гудермес - Самур(14105)",
            track: 1,
            station: "Дербент(544501)",
            startCoordinate: "2414.588",
            endCoordinate: "2418.414"
          },
          {
            pch: 16,
            direction: "Гудермес - Самур(14105)",
            track: 1,
            station: "Дербент - Араблинский",
            startCoordinate: "2418.414",
            endCoordinate: "2424.725"
          },
          {
            pch: 16,
            direction: "Гудермес - Самур(14105)",
            track: 1,
            station: "Араблинский(544615)",
            startCoordinate: "2424.726",
            endCoordinate: "2425.861"
          },
          {
            pch: 16,
            direction: "Гудермес - Самур(14105)",
            track: 1,
            station: "Араблинский - Белиджи",
            startCoordinate: "2425.862",
            endCoordinate: "2436.344"
          },
          {
            pch: 16,
            direction: "Гудермес - Самур(14105)",
            track: 1,
            station: "Белиджи(544709)",
            startCoordinate: "2436.345",
            endCoordinate: "2437.535"
          },
          {
            pch: 16,
            direction: "Гудермес - Самур(14105)",
            track: 1,
            station: "Белиджи - Самур",
            startCoordinate: "2437.536",
            endCoordinate: "2446.738"
          },
          {
            pch: 16,
            direction: "Гудермес - Самур(14105)",
            track: 1,
            station: "Самур(544802)",
            startCoordinate: "2446.739",
            endCoordinate: "2447.998"
          },
          {
            pch: 16,
            direction: "Гудермес - Самур(14105)",
            track: 1,
            station: "Самур - Граница Дороги",
            startCoordinate: "2447.999",
            endCoordinate: "2455.499"
          },
          {
            pch: 16,
            direction: "Гудермес - Самур(14105)",
            track: 2,
            station: "Хасав-Юрт(542703)",
            startCoordinate: "2203.33",
            endCoordinate: "2204.700"
          },
          {
            pch: 16,
            direction: "Гудермес - Самур(14105)",
            track: 2,
            station: "Хасав-Юрт - Карлан-Юрт",
            startCoordinate: "2204.701",
            endCoordinate: "2214.905"
          },
          {
            pch: 16,
            direction: "Гудермес - Самур(14105)",
            track: 2,
            station: "Карлан-Юрт(542722)",
            startCoordinate: "2214.906",
            endCoordinate: "2216.194"
          },
          {
            pch: 16,
            direction: "Гудермес - Самур(14105)",
            track: 2,
            station: "Карлан-Юрт - Сулак",
            startCoordinate: "2216.195",
            endCoordinate: "2224.542"
          },
          {
            pch: 16,
            direction: "Гудермес - Самур(14105)",
            track: 2,
            station: "Сулак(542749)",
            startCoordinate: "2224.543",
            endCoordinate: "2224.721"
          },
          {
            pch: 16,
            direction: "Гудермес - Самур(14105)",
            track: 2,
            station: "Сулак - Кизилюрт",
            startCoordinate: "2224.722",
            endCoordinate: "2227.157"
          },
          {
            pch: 16,
            direction: "Гудермес - Самур(14105)",
            track: 2,
            station: "Кизилюрт(542807)",
            startCoordinate: "2227.158",
            endCoordinate: "2228.715"
          },
          {
            pch: 16,
            direction: "Гудермес - Самур(14105)",
            track: 2,
            station: "Кизилюрт - Темиргое",
            startCoordinate: "2228.716",
            endCoordinate: "2251.581"
          },
          {
            pch: 16,
            direction: "Гудермес - Самур(14105)",
            track: 2,
            station: "Темиргое(542930)",
            startCoordinate: "2251.582",
            endCoordinate: "2253.983"
          },
          {
            pch: 16,
            direction: "Гудермес - Самур(14105)",
            track: 2,
            station: "Темиргое - Шамхал",
            startCoordinate: "2253.984",
            endCoordinate: "2268.894"
          },
          {
            pch: 16,
            direction: "Гудермес - Самур(14105)",
            track: 2,
            station: "Шамхал(543000)",
            startCoordinate: "2268.895",
            endCoordinate: "2270.503"
          },
          {
            pch: 16,
            direction: "Гудермес - Самур(14105)",
            track: 2,
            station: "Шамхал - Махачкала",
            startCoordinate: "2270.504",
            endCoordinate: "2278.410"
          },
          {
            pch: 16,
            direction: "Гудермес - Самур(14105)",
            track: 2,
            station: "Махачкала(543301)",
            startCoordinate: "2278.411",
            endCoordinate: "2288.343"
          },
          {
            pch: 16,
            direction: "Гудермес - Самур(14105)",
            track: 2,
            station: "Махачкала - Тарки",
            startCoordinate: "2288.344",
            endCoordinate: "2296.37"
          },
          {
            pch: 16,
            direction: "Гудермес - Самур(14105)",
            track: 2,
            station: "Тарки(543509)",
            startCoordinate: "2296.38",
            endCoordinate: "2297.800"
          },
          {
            pch: 16,
            direction: "Гудермес - Самур(14105)",
            track: 2,
            station: "Тарки - Манас",
            startCoordinate: "2297.801",
            endCoordinate: "2318.422"
          },
          {
            pch: 16,
            direction: "Гудермес - Самур(14105)",
            track: 2,
            station: "Манас(543706)",
            startCoordinate: "2318.423",
            endCoordinate: "2319.684"
          },
          {
            pch: 16,
            direction: "Гудермес - Самур(14105)",
            track: 2,
            station: "Манас - Ачи",
            startCoordinate: "2319.685",
            endCoordinate: "2326.784"
          },
          {
            pch: 16,
            direction: "Гудермес - Самур(14105)",
            track: 2,
            station: "Ачи(543836)",
            startCoordinate: "2326.785",
            endCoordinate: "2327.866"
          },
          {
            pch: 16,
            direction: "Гудермес - Самур(14105)",
            track: 2,
            station: "Ачи - Избербаш",
            startCoordinate: "2327.867",
            endCoordinate: "2346.534"
          },
          {
            pch: 16,
            direction: "Гудермес - Самур(14105)",
            track: 2,
            station: "Избербаш(543903)",
            startCoordinate: "2346.535",
            endCoordinate: "2347.979"
          },
          {
            pch: 16,
            direction: "Гудермес - Самур(14105)",
            track: 2,
            station: "Избербаш - Инчхе",
            startCoordinate: "2347.980",
            endCoordinate: "2356.562"
          },
          {
            pch: 16,
            direction: "Гудермес - Самур(14105)",
            track: 2,
            station: "Инчхе(544003)",
            startCoordinate: "2356.563",
            endCoordinate: "2358.64"
          },
          {
            pch: 16,
            direction: "Гудермес - Самур(14105)",
            track: 2,
            station: "Инчхе - Каягент",
            startCoordinate: "2358.65",
            endCoordinate: "2366.320"
          },
          {
            pch: 16,
            direction: "Гудермес - Самур(14105)",
            track: 2,
            station: "Каягент(544147)",
            startCoordinate: "2366.321",
            endCoordinate: "2367.589"
          },
          {
            pch: 16,
            direction: "Гудермес - Самур(14105)",
            track: 2,
            station: "Каягент - Берикей",
            startCoordinate: "2367.590",
            endCoordinate: "2385.848"
          },
          {
            pch: 16,
            direction: "Гудермес - Самур(14105)",
            track: 2,
            station: "Берикей(544210)",
            startCoordinate: "2385.849",
            endCoordinate: "2387.104"
          },
          {
            pch: 16,
            direction: "Гудермес - Самур(14105)",
            track: 2,
            station: "Берикей - Мамед-Кала",
            startCoordinate: "2387.105",
            endCoordinate: "2393.545"
          },
          {
            pch: 16,
            direction: "Гудермес - Самур(14105)",
            track: 2,
            station: "Мамед-Кала(544304)",
            startCoordinate: "2393.546",
            endCoordinate: "2394.925"
          },
          {
            pch: 16,
            direction: "Гудермес - Самур(14105)",
            track: 2,
            station: "Мамед-Кала - Дагестанские Огни",
            startCoordinate: "2394.926",
            endCoordinate: "2401.695"
          },
          {
            pch: 16,
            direction: "Гудермес - Самур(14105)",
            track: 2,
            station: "Дагестанские Огни(544408)",
            startCoordinate: "2401.696",
            endCoordinate: "2404.110"
          },
          {
            pch: 16,
            direction: "Гудермес - Самур(14105)",
            track: 2,
            station: "Дагестанские Огни - Дербент",
            startCoordinate: "2404.111",
            endCoordinate: "2414.677"
          },
          {
            pch: 16,
            direction: "Гудермес - Самур(14105)",
            track: 2,
            station: "Дербент(544501)",
            startCoordinate: "2414.678",
            endCoordinate: "2418.342"
          },
          {
            pch: 16,
            direction: "Гудермес - Самур(14105)",
            track: 2,
            station: "Дербент - Араблинский",
            startCoordinate: "2418.343",
            endCoordinate: "2424.645"
          },
          {
            pch: 16,
            direction: "Гудермес - Самур(14105)",
            track: 2,
            station: "Араблинский(544615)",
            startCoordinate: "2424.646",
            endCoordinate: "2425.957"
          },
          {
            pch: 16,
            direction: "Гудермес - Самур(14105)",
            track: 2,
            station: "Араблинский - Белиджи",
            startCoordinate: "2425.958",
            endCoordinate: "2436.428"
          },
          {
            pch: 16,
            direction: "Гудермес - Самур(14105)",
            track: 2,
            station: "Белиджи(544709)",
            startCoordinate: "2436.429",
            endCoordinate: "2437.452"
          },
          {
            pch: 16,
            direction: "Гудермес - Самур(14105)",
            track: 2,
            station: "Белиджи - Самур",
            startCoordinate: "2437.453",
            endCoordinate: "2446.659"
          },
          {
            pch: 16,
            direction: "Гудермес - Самур(14105)",
            track: 2,
            station: "Самур(544802)",
            startCoordinate: "2446.660",
            endCoordinate: "2447.920"
          },
          {
            pch: 16,
            direction: "Гудермес - Самур(14105)",
            track: 2,
            station: "Самур - Граница Дороги",
            startCoordinate: "2447.921",
            endCoordinate: "2455.499"
          },
          {
            pch: 16,
            direction: "Шамхал - Буйнакск(14155)",
            track: 1,
            station: "Шамхал - Буйнакск",
            startCoordinate: "1.530",
            endCoordinate: "40.248"
          },
          {
            pch: 16,
            direction: "Шамхал - Буйнакск(14155)",
            track: 1,
            station: "Буйнакск(543104)",
            startCoordinate: "40.249",
            endCoordinate: "40.966"
          },
          {
            pch: 16,
            direction: "Кизляр - Кизил-Юрт(14158)",
            track: 1,
            station: "Сулак(542749)",
            startCoordinate: "79.575",
            endCoordinate: "79.575"
          },
          {
            pch: 15,
            direction: "Червленная Узл.-Астрахань(12802)",
            track: 1,
            station: "Червленная-Узловая(542512)",
            startCoordinate: "1.401",
            endCoordinate: "2.992"
          },
          {
            pch: 15,
            direction: "Червленная Узл.-Астрахань(12802)",
            track: 1,
            station: "Червленная-Узловая - Шелковская",
            startCoordinate: "2.993",
            endCoordinate: "29.375"
          },
          {
            pch: 15,
            direction: "Червленная Узл.-Астрахань(12802)",
            track: 1,
            station: "Шелковская(542402)",
            startCoordinate: "29.376",
            endCoordinate: "30.566"
          },
          {
            pch: 15,
            direction: "Червленная Узл.-Астрахань(12802)",
            track: 1,
            station: "Шелковская - Каргинская",
            startCoordinate: "30.567",
            endCoordinate: "59.942"
          },
          {
            pch: 15,
            direction: "Червленная Узл.-Астрахань(12802)",
            track: 1,
            station: "Каргинская(542329)",
            startCoordinate: "59.943",
            endCoordinate: "60.994"
          },
          {
            pch: 15,
            direction: "Мин. Воды-Гудермес(14103)",
            track: 1,
            station: "Грозный(540002)",
            startCoordinate: "2125.649",
            endCoordinate: "2128.394"
          },
          {
            pch: 15,
            direction: "Мин. Воды-Гудермес(14103)",
            track: 1,
            station: "Грозный - Ханкала",
            startCoordinate: "2128.395",
            endCoordinate: "2133.461"
          },
          {
            pch: 15,
            direction: "Мин. Воды-Гудермес(14103)",
            track: 1,
            station: "Ханкала(541306)",
            startCoordinate: "2133.462",
            endCoordinate: "2134.766"
          },
          {
            pch: 15,
            direction: "Мин. Воды-Гудермес(14103)",
            track: 1,
            station: "Ханкала - Аргун",
            startCoordinate: "2134.767",
            endCoordinate: "2142.827"
          },
          {
            pch: 15,
            direction: "Мин. Воды-Гудермес(14103)",
            track: 1,
            station: "Аргун(541405)",
            startCoordinate: "2142.828",
            endCoordinate: "2144.392"
          },
          {
            pch: 15,
            direction: "Мин. Воды-Гудермес(14103)",
            track: 1,
            station: "Аргун - Джалка",
            startCoordinate: "2144.393",
            endCoordinate: "2151.7065"
          },
          {
            pch: 15,
            direction: "Мин. Воды-Гудермес(14103)",
            track: 1,
            station: "Джалка(541423)",
            startCoordinate: "2151.706",
            endCoordinate: "2152.707"
          },
          {
            pch: 15,
            direction: "Мин. Воды-Гудермес(14103)",
            track: 1,
            station: "Джалка - Гудермес",
            startCoordinate: "2152.708",
            endCoordinate: "2161.479"
          },
          {
            pch: 15,
            direction: "Мин. Воды-Гудермес(14103)",
            track: 1,
            station: "Гудермес(542600)",
            startCoordinate: "2161.480",
            endCoordinate: "2162.531"
          },
          {
            pch: 15,
            direction: "Прохладная - Гудермес(14104)",
            track: 1,
            station: "Ищерская(539503)",
            startCoordinate: "88.805",
            endCoordinate: "90.363"
          },
          {
            pch: 15,
            direction: "Прохладная - Гудермес(14104)",
            track: 1,
            station: "Ищерская - Алпатово",
            startCoordinate: "90.363",
            endCoordinate: "99.363"
          },
          {
            pch: 15,
            direction: "Прохладная - Гудермес(14104)",
            track: 1,
            station: "Алпатово(539607)",
            startCoordinate: "99.363",
            endCoordinate: "100.673"
          },
          {
            pch: 15,
            direction: "Прохладная - Гудермес(14104)",
            track: 1,
            station: "Алпатово - Наурская",
            startCoordinate: "100.673",
            endCoordinate: "108.731"
          },
          {
            pch: 15,
            direction: "Прохладная - Гудермес(14104)",
            track: 1,
            station: "Наурская(539700)",
            startCoordinate: "108.731",
            endCoordinate: "110.298"
          },
          {
            pch: 15,
            direction: "Прохладная - Гудермес(14104)",
            track: 1,
            station: "Наурская - Терек",
            startCoordinate: "110.298",
            endCoordinate: "128.510"
          },
          {
            pch: 15,
            direction: "Прохладная - Гудермес(14104)",
            track: 1,
            station: "Терек(539804)",
            startCoordinate: "128.510",
            endCoordinate: "129.846"
          },
          {
            pch: 15,
            direction: "Прохладная - Гудермес(14104)",
            track: 1,
            station: "Терек - Червленная",
            startCoordinate: "129.846",
            endCoordinate: "155.716"
          },
          {
            pch: 15,
            direction: "Прохладная - Гудермес(14104)",
            track: 1,
            station: "Червленная(542506)",
            startCoordinate: "155.716",
            endCoordinate: "157.230"
          },
          {
            pch: 15,
            direction: "Прохладная - Гудермес(14104)",
            track: 1,
            station: "Червленная - Червленная-Узловая",
            startCoordinate: "157.230",
            endCoordinate: "164.104"
          },
          {
            pch: 15,
            direction: "Прохладная - Гудермес(14104)",
            track: 1,
            station: "Червленная-Узловая(542512)",
            startCoordinate: "164.104",
            endCoordinate: "168.23"
          },
          {
            pch: 15,
            direction: "Прохладная - Гудермес(14104)",
            track: 1,
            station: "Червленная-Узловая - Гудермес",
            startCoordinate: "168.23",
            endCoordinate: "178.380"
          },
          {
            pch: 15,
            direction: "Прохладная - Гудермес(14104)",
            track: 1,
            station: "Гудермес(542600)",
            startCoordinate: "178.380",
            endCoordinate: "181.715"
          },
          {
            pch: 15,
            direction: "Прохладная - Гудермес(14104)",
            track: 2,
            station: "Ищерская(539503)",
            startCoordinate: "88.899",
            endCoordinate: "90.456"
          },
          {
            pch: 15,
            direction: "Прохладная - Гудермес(14104)",
            track: 2,
            station: "Ищерская - Алпатово",
            startCoordinate: "90.457",
            endCoordinate: "99.273"
          },
          {
            pch: 15,
            direction: "Прохладная - Гудермес(14104)",
            track: 2,
            station: "Алпатово(539607)",
            startCoordinate: "99.274",
            endCoordinate: "100.586"
          },
          {
            pch: 15,
            direction: "Прохладная - Гудермес(14104)",
            track: 2,
            station: "Алпатово - Наурская",
            startCoordinate: "100.587",
            endCoordinate: "108.824"
          },
          {
            pch: 15,
            direction: "Прохладная - Гудермес(14104)",
            track: 2,
            station: "Наурская(539700)",
            startCoordinate: "108.825",
            endCoordinate: "110.218"
          },
          {
            pch: 15,
            direction: "Прохладная - Гудермес(14104)",
            track: 2,
            station: "Наурская - Терек",
            startCoordinate: "110.219",
            endCoordinate: "128.426"
          },
          {
            pch: 15,
            direction: "Прохладная - Гудермес(14104)",
            track: 2,
            station: "Терек(539804)",
            startCoordinate: "128.427",
            endCoordinate: "129.757"
          },
          {
            pch: 15,
            direction: "Прохладная - Гудермес(14104)",
            track: 2,
            station: "Терек - Червленная",
            startCoordinate: "129.758",
            endCoordinate: "155.827"
          },
          {
            pch: 15,
            direction: "Прохладная - Гудермес(14104)",
            track: 2,
            station: "Червленная(542506)",
            startCoordinate: "155.828",
            endCoordinate: "157.345"
          },
          {
            pch: 15,
            direction: "Прохладная - Гудермес(14104)",
            track: 2,
            station: "Червленная - Червленная-Узловая",
            startCoordinate: "157.346",
            endCoordinate: "165.17"
          },
          {
            pch: 15,
            direction: "Прохладная - Гудермес(14104)",
            track: 2,
            station: "Червленная-Узловая(542512)",
            startCoordinate: "165.18",
            endCoordinate: "168.118"
          },
          {
            pch: 15,
            direction: "Прохладная - Гудермес(14104)",
            track: 2,
            station: "Червленная-Узловая - Гудермес",
            startCoordinate: "168.119",
            endCoordinate: "178.309"
          },
          {
            pch: 15,
            direction: "Прохладная - Гудермес(14104)",
            track: 2,
            station: "Гудермес(542600)",
            startCoordinate: "178.310",
            endCoordinate: "182.826"
          },
          {
            pch: 15,
            direction: "Гудермес - Самур(14105)",
            track: 1,
            station: "Гудермес(542600)",
            startCoordinate: "2162.532",
            endCoordinate: "2164.103"
          },
          {
            pch: 15,
            direction: "Гудермес - Самур(14105)",
            track: 1,
            station: "Гудермес - Кади-Юрт",
            startCoordinate: "2164.104",
            endCoordinate: "2178.710"
          },
          {
            pch: 15,
            direction: "Гудермес - Самур(14105)",
            track: 1,
            station: "Кади-Юрт(542629)",
            startCoordinate: "2178.711",
            endCoordinate: "2180.224"
          },
          {
            pch: 15,
            direction: "Гудермес - Самур(14105)",
            track: 2,
            station: "Гудермес(542600)",
            startCoordinate: "2162.532",
            endCoordinate: "2164.190"
          },
          {
            pch: 15,
            direction: "Гудермес - Самур(14105)",
            track: 2,
            station: "Гудермес - Кади-Юрт",
            startCoordinate: "2164.191",
            endCoordinate: "2178.622"
          },
          {
            pch: 15,
            direction: "Гудермес - Самур(14105)",
            track: 2,
            station: "Кади-Юрт(542629)",
            startCoordinate: "2178.623",
            endCoordinate: "2180.333"
          },
          {
            pch: 15,
            direction: "Гудермес - Разъезд 2 км(14153)",
            track: 1,
            station: "Червленная-Узловая(542512)",
            startCoordinate: "1.746",
            endCoordinate: "3.0"
          },
          {
            pch: 15,
            direction: "Джалка - Гудермес(14154)",
            track: 1,
            station: "Гудермес(542600)",
            startCoordinate: "1.1",
            endCoordinate: "1.999"
          },
          {
            pch: 8,
            direction: " Армавир - Туапсе(13301)",
            track: 1,
            station: "Ост.Пункт 302 км - Армавир-Туапсинский",
            startCoordinate: "1648.7",
            endCoordinate: "1652.490"
          },
          {
            pch: 8,
            direction: " Армавир - Туапсе(13301)",
            track: 1,
            station: "Армавир-Туапсинский(530301)",
            startCoordinate: "1652.491",
            endCoordinate: "1653.874"
          },
          {
            direction: "Ростов - Армавир(14101)",
            track: 1,
            station: "Степная - Кущевка",
            startCoordinate: "1407.806",
            endCoordinate: "1428.162"
          },
          {
            pch: 8,
            direction: " Ростов - Армавир(14101)",
            track: 1,
            station: "Отрадо-Кубанская - Кубанская",
            startCoordinate: "1614.354",
            endCoordinate: "1633.226"
          },
          {
            pch: 8,
            direction: " Ростов - Армавир(14101)",
            track: 1,
            station: "Кубанская(529802)",
            startCoordinate: "1633.227",
            endCoordinate: "1634.859"
          },
          {
            pch: 8,
            direction: " Ростов - Армавир(14101)",
            track: 1,
            station: "Кубанская - Ост.Пункт 302 км",
            startCoordinate: "1634.860",
            endCoordinate: "1646.390"
          },
          {
            pch: 8,
            direction: " Ростов - Армавир(14101)",
            track: 1,
            station: "Ост.Пункт 302 км(529821)",
            startCoordinate: "1646.391",
            endCoordinate: "1647.659"
          },
          {
            direction: "Ростов - Армавир(14101)",
            track: 2,
            station: "Степная - Кущевка",
            startCoordinate: "1407.728",
            endCoordinate: "1428.251"
          },
          {
            pch: 8,
            direction: " Ростов - Армавир(14101)",
            track: 2,
            station: "Отрадо-Кубанская(529709)",
            startCoordinate: "1614.283",
            endCoordinate: "1617.298"
          },
          {
            pch: 8,
            direction: " Ростов - Армавир(14101)",
            track: 2,
            station: "Отрадо-Кубанская - Кубанская",
            startCoordinate: "1617.299",
            endCoordinate: "1633.305"
          },
          {
            pch: 8,
            direction: " Ростов - Армавир(14101)",
            track: 2,
            station: "Кубанская(529802)",
            startCoordinate: "1633.306",
            endCoordinate: "1634.783"
          },
          {
            pch: 8,
            direction: " Ростов - Армавир(14101)",
            track: 2,
            station: "Кубанская - Ост.Пункт 302 км",
            startCoordinate: "1634.784",
            endCoordinate: "1646.472"
          },
          {
            pch: 8,
            direction: " Ростов - Армавир(14101)",
            track: 2,
            station: "Ост.Пункт 302 км(529821)",
            startCoordinate: "1646.473",
            endCoordinate: "1647.589"
          },
          {
            pch: 8,
            direction: " Армавир - Мин. Воды(14102)",
            track: 1,
            station: "Ост.Пункт 302 км - Армавир-Ростовский",
            startCoordinate: "1647.660",
            endCoordinate: "1650.278"
          },
          {
            pch: 8,
            direction: " Армавир - Мин. Воды(14102)",
            track: 1,
            station: "Армавир-Ростовский(530208)",
            startCoordinate: "1650.279",
            endCoordinate: "1653.169"
          },
          {
            pch: 8,
            direction: " Армавир - Мин. Воды(14102)",
            track: 1,
            station: "Армавир-Ростовский - Коноково",
            startCoordinate: "1653.170",
            endCoordinate: "1675.81"
          },
          {
            pch: 8,
            direction: " Армавир - Мин. Воды(14102)",
            track: 1,
            station: "Коноково(530405)",
            startCoordinate: "1675.82",
            endCoordinate: "1676.725"
          },
          {
            pch: 8,
            direction: " Армавир - Мин. Воды(14102)",
            track: 1,
            station: "Коноково - Овечка",
            startCoordinate: "1676.726",
            endCoordinate: "1699.226"
          },
          {
            pch: 8,
            direction: " Армавир - Мин. Воды(14102)",
            track: 1,
            station: "Овечка(530509)",
            startCoordinate: "1699.227",
            endCoordinate: "1700.960"
          },
          {
            pch: 8,
            direction: " Армавир - Мин. Воды(14102)",
            track: 1,
            station: "Овечка - Богословская",
            startCoordinate: "1700.961",
            endCoordinate: "1719.20"
          },
          {
            pch: 8,
            direction: " Армавир - Мин. Воды(14102)",
            track: 1,
            station: "Богословская(530602)",
            startCoordinate: "1719.21",
            endCoordinate: "1720.674"
          },
          {
            pch: 8,
            direction: " Армавир - Мин. Воды(14102)",
            track: 1,
            station: "Богословская - Зеленчук",
            startCoordinate: "1720.675",
            endCoordinate: "1728.80"
          },
          {
            pch: 8,
            direction: " Армавир - Мин. Воды(14102)",
            track: 1,
            station: "Зеленчук(530706)",
            startCoordinate: "1728.81",
            endCoordinate: "1729.306"
          },
          {
            pch: 8,
            direction: " Армавир - Мин. Воды(14102)",
            track: 1,
            station: "Зеленчук - Невинномысская",
            startCoordinate: "1729.307",
            endCoordinate: "1732.370"
          },
          {
            pch: 8,
            direction: " Армавир - Мин. Воды(14102)",
            track: 1,
            station: "Невинномысская(531304)",
            startCoordinate: "1732.371",
            endCoordinate: "1734.926"
          },
          {
            pch: 8,
            direction: " Армавир - Мин. Воды(14102)",
            track: 1,
            station: "Невинномысская - Киан",
            startCoordinate: "1734.927",
            endCoordinate: "1753.722"
          },
          {
            pch: 8,
            direction: " Армавир - Мин. Воды(14102)",
            track: 1,
            station: "Киан(531376)",
            startCoordinate: "1753.723",
            endCoordinate: "1754.907"
          },
          {
            pch: 8,
            direction: " Армавир - Мин. Воды(14102)",
            track: 2,
            station: "Ост.Пункт 302 км - Армавир-Ростовский",
            startCoordinate: "1647.590",
            endCoordinate: "1650.367"
          },
          {
            pch: 8,
            direction: " Армавир - Мин. Воды(14102)",
            track: 2,
            station: "Армавир-Ростовский(530208)",
            startCoordinate: "1650.367",
            endCoordinate: "1653.92"
          },
          {
            pch: 8,
            direction: " Армавир - Мин. Воды(14102)",
            track: 2,
            station: "Армавир-Ростовский - Коноково",
            startCoordinate: "1653.93",
            endCoordinate: "1675.10"
          },
          {
            pch: 8,
            direction: " Армавир - Мин. Воды(14102)",
            track: 2,
            station: "Коноково(530405)",
            startCoordinate: "1675.11",
            endCoordinate: "1676.645"
          },
          {
            pch: 8,
            direction: " Армавир - Мин. Воды(14102)",
            track: 2,
            station: "Коноково - Овечка",
            startCoordinate: "1676.646",
            endCoordinate: "1699.352"
          },
          {
            pch: 8,
            direction: " Армавир - Мин. Воды(14102)",
            track: 2,
            station: "Овечка(530509)",
            startCoordinate: "1699.353",
            endCoordinate: "1700.886"
          },
          {
            pch: 8,
            direction: " Армавир - Мин. Воды(14102)",
            track: 2,
            station: "Овечка - Богословская",
            startCoordinate: "1700.887",
            endCoordinate: "1719.112"
          },
          {
            pch: 8,
            direction: " Армавир - Мин. Воды(14102)",
            track: 2,
            station: "Богословская(530602)",
            startCoordinate: "1719.113",
            endCoordinate: "1720.604"
          },
          {
            pch: 8,
            direction: " Армавир - Мин. Воды(14102)",
            track: 2,
            station: "Богословская - Зеленчук",
            startCoordinate: "1720.605",
            endCoordinate: "1728.193"
          },
          {
            pch: 8,
            direction: " Армавир - Мин. Воды(14102)",
            track: 2,
            station: "Зеленчук(530706)",
            startCoordinate: "1728.194",
            endCoordinate: "1729.234"
          },
          {
            pch: 8,
            direction: " Армавир - Мин. Воды(14102)",
            track: 2,
            station: "Зеленчук - Невинномысская",
            startCoordinate: "1729.235",
            endCoordinate: "1732.456"
          },
          {
            pch: 8,
            direction: " Армавир - Мин. Воды(14102)",
            track: 2,
            station: "Невинномысская(531304)",
            startCoordinate: "1732.457",
            endCoordinate: "1734.933"
          },
          {
            pch: 8,
            direction: " Армавир - Мин. Воды(14102)",
            track: 2,
            station: "Невинномысская - Киан",
            startCoordinate: "1734.934",
            endCoordinate: "1753.812"
          },
          {
            pch: 8,
            direction: " Армавир - Мин. Воды(14102)",
            track: 2,
            station: "Киан(531376)",
            startCoordinate: "1753.813",
            endCoordinate: "1754.836"
          },
          {
            pch: 8,
            direction: " Армавир I-Армавир II(14144)",
            track: 1,
            station: "Армавир-Ростовский(530208)",
            startCoordinate: "1.244",
            endCoordinate: "2.810"
          },
          {
            pch: 8,
            direction: " Армавир I-Армавир II(14144)",
            track: 1,
            station: "Армавир-Ростовский - Армавир-Туапсинский",
            startCoordinate: "2.811",
            endCoordinate: "4.397"
          },
          {
            pch: 8,
            direction: " Армавир I-Армавир II(14144)",
            track: 1,
            station: "Армавир-Туапсинский(530301)",
            startCoordinate: "4.398",
            endCoordinate: "5.0"
          },
          {
            pch: 8,
            direction: " Зеленчук - Джегута(14145)",
            track: 1,
            station: "Зеленчук(530706)",
            startCoordinate: "1.1",
            endCoordinate: "2.119"
          },
          {
            pch: 8,
            direction: " Зеленчук - Джегута(14145)",
            track: 1,
            station: "Зеленчук - Ураковская",
            startCoordinate: "2.120",
            endCoordinate: "22.210"
          },
          {
            pch: 8,
            direction: " Зеленчук - Джегута(14145)",
            track: 1,
            station: "Ураковская(530809)",
            startCoordinate: "22.211",
            endCoordinate: "23.243"
          },
          {
            pch: 8,
            direction: " Зеленчук - Джегута(14145)",
            track: 1,
            station: "Ураковская - Эркен-Шахар",
            startCoordinate: "23.244",
            endCoordinate: "30.626"
          },
          {
            pch: 8,
            direction: " Зеленчук - Джегута(14145)",
            track: 1,
            station: "Эркен-Шахар(530903)",
            startCoordinate: "30.627",
            endCoordinate: "31.685"
          },
          {
            pch: 8,
            direction: " Зеленчук - Джегута(14145)",
            track: 1,
            station: "Эркен-Шахар - Черкесск",
            startCoordinate: "31.686",
            endCoordinate: "48.373"
          },
          {
            pch: 8,
            direction: " Зеленчук - Джегута(14145)",
            track: 1,
            station: "Черкесск(531003)",
            startCoordinate: "48.374",
            endCoordinate: "49.856"
          },
          {
            pch: 8,
            direction: " Зеленчук - Джегута(14145)",
            track: 1,
            station: "Черкесск - Абазинка",
            startCoordinate: "49.857",
            endCoordinate: "59.70"
          },
          {
            pch: 8,
            direction: " Зеленчук - Джегута(14145)",
            track: 1,
            station: "Абазинка(531107)",
            startCoordinate: "59.71",
            endCoordinate: "60.333"
          },
          {
            pch: 8,
            direction: " Зеленчук - Джегута(14145)",
            track: 1,
            station: "Абазинка - Джегута",
            startCoordinate: "60.334",
            endCoordinate: "66.805"
          },
          {
            pch: 8,
            direction: " Зеленчук - Джегута(14145)",
            track: 1,
            station: "Джегута(531200)",
            startCoordinate: "66.806",
            endCoordinate: "67.939"
          },
          {
            direction: " Ростов - Армавир(14101)",
            track: 1,
            station: "Тихорецкая - Шохры",
            startCoordinate: "1528.662",
            endCoordinate: "1534.484"
          },
          {
            pch: 7,
            direction: " Ростов - Армавир(14101)",
            track: 1,
            station: "Шохры(520348)",
            startCoordinate: "1534.485",
            endCoordinate: "1535.1033"
          },
          {
            pch: 7,
            direction: " Ростов - Армавир(14101)",
            track: 1,
            station: "Шохры - Малороссийская",
            startCoordinate: "1536.1",
            endCoordinate: "1546.424"
          },
          {
            pch: 7,
            direction: " Ростов - Армавир(14101)",
            track: 1,
            station: "Малороссийская(520308)",
            startCoordinate: "1546.425",
            endCoordinate: "1548.386"
          },
          {
            pch: 7,
            direction: " Ростов - Армавир(14101)",
            track: 1,
            station: "Малороссийская - Мирская",
            startCoordinate: "1548.387",
            endCoordinate: "1567.303"
          },
          {
            pch: 7,
            direction: " Ростов - Армавир(14101)",
            track: 1,
            station: "Мирская(520403)",
            startCoordinate: "1567.304",
            endCoordinate: "1568.305"
          },
          {
            pch: 7,
            direction: " Ростов - Армавир(14101)",
            track: 1,
            station: "Мирская - Кавказская",
            startCoordinate: "1568.306",
            endCoordinate: "1583.910"
          },
          {
            pch: 7,
            direction: " Ростов - Армавир(14101)",
            track: 1,
            station: "Кавказская(520009)",
            startCoordinate: "1583.911",
            endCoordinate: "1589.380"
          },
          {
            pch: 7,
            direction: " Ростов - Армавир(14101)",
            track: 1,
            station: "Кавказская - Гирей",
            startCoordinate: "1589.381",
            endCoordinate: "1593.879"
          },
          {
            pch: 7,
            direction: " Ростов - Армавир(14101)",
            track: 1,
            station: "Гирей(529501)",
            startCoordinate: "1593.880",
            endCoordinate: "1595.211"
          },
          {
            pch: 7,
            direction: " Ростов - Армавир(14101)",
            track: 1,
            station: "Гирей - Гулькевичи",
            startCoordinate: "1595.212",
            endCoordinate: "1599.44"
          },
          {
            pch: 7,
            direction: " Ростов - Армавир(14101)",
            track: 1,
            station: "Гулькевичи(529605)",
            startCoordinate: "1599.45",
            endCoordinate: "1600.724"
          },
          {
            pch: 7,
            direction: " Ростов - Армавир(14101)",
            track: 2,
            station: "Шохры(520348)",
            startCoordinate: "1534.568",
            endCoordinate: "1535.947"
          },
          {
            pch: 7,
            direction: " Ростов - Армавир(14101)",
            track: 2,
            station: "Шохры - Малороссийская",
            startCoordinate: "1535.948",
            endCoordinate: "1546.346"
          },
          {
            pch: 7,
            direction: " Ростов - Армавир(14101)",
            track: 2,
            station: "Малороссийская(520308)",
            startCoordinate: "1546.347",
            endCoordinate: "1548.477"
          },
          {
            pch: 7,
            direction: " Ростов - Армавир(14101)",
            track: 2,
            station: "Малороссийская - Мирская",
            startCoordinate: "1548.478",
            endCoordinate: "1567.109"
          },
          {
            pch: 7,
            direction: " Ростов - Армавир(14101)",
            track: 2,
            station: "Мирская(520403)",
            startCoordinate: "1567.110",
            endCoordinate: "1568.391"
          },
          {
            pch: 7,
            direction: " Ростов - Армавир(14101)",
            track: 2,
            station: "Мирская - Кавказская",
            startCoordinate: "1568.392",
            endCoordinate: "1583.841"
          },
          {
            pch: 7,
            direction: " Ростов - Армавир(14101)",
            track: 2,
            station: "Кавказская(520009)",
            startCoordinate: "1583.842",
            endCoordinate: "1588.619"
          },
          {
            pch: 7,
            direction: " Ростов - Армавир(14101)",
            track: 2,
            station: "Кавказская - Гирей",
            startCoordinate: "1588.620",
            endCoordinate: "1593.804"
          },
          {
            pch: 7,
            direction: " Ростов - Армавир(14101)",
            track: 2,
            station: "Гирей(529501)",
            startCoordinate: "1593.805",
            endCoordinate: "1595.139"
          },
          {
            pch: 7,
            direction: " Ростов - Армавир(14101)",
            track: 2,
            station: "Гирей - Гулькевичи",
            startCoordinate: "1595.140",
            endCoordinate: "1599.131"
          },
          {
            pch: 7,
            direction: " Ростов - Армавир(14101)",
            track: 2,
            station: "Гулькевичи(529605)",
            startCoordinate: "1599.132",
            endCoordinate: "1600.816"
          },
          {
            pch: 7,
            direction: " Кавказская - Элиста(21401)",
            track: 1,
            station: "Кавказская(520009)",
            startCoordinate: "0.829",
            endCoordinate: "3.638"
          },
          {
            pch: 7,
            direction: " Кавказская - Элиста(21401)",
            track: 1,
            station: "Кавказская - Гетмановская",
            startCoordinate: "3.639",
            endCoordinate: "12.822"
          },
          {
            pch: 7,
            direction: " Кавказская - Элиста(21401)",
            track: 1,
            station: "Гетмановская(526202)",
            startCoordinate: "12.823",
            endCoordinate: "14.279"
          },
          {
            pch: 7,
            direction: " Кавказская - Элиста(21401)",
            track: 1,
            station: "Гетмановская - Темижбекская",
            startCoordinate: "14.280",
            endCoordinate: "25.327"
          },
          {
            pch: 7,
            direction: " Кавказская - Элиста(21401)",
            track: 1,
            station: "Темижбекская(526306)",
            startCoordinate: "25.328",
            endCoordinate: "26.474"
          },
          {
            pch: 7,
            direction: " Кавказская - Краснодар(21402)",
            track: 1,
            station: "Кавказская(520009)",
            startCoordinate: "2.89",
            endCoordinate: "8.251"
          },
          {
            pch: 7,
            direction: " Кавказская - Краснодар(21402)",
            track: 1,
            station: "Кавказская - Милованово",
            startCoordinate: "8.252",
            endCoordinate: "11.619"
          },
          {
            pch: 7,
            direction: " Кавказская - Краснодар(21402)",
            track: 1,
            station: "Милованово(52610)",
            startCoordinate: "11.620",
            endCoordinate: "12.794"
          },
          {
            pch: 7,
            direction: " Кавказская - Краснодар(21402)",
            track: 1,
            station: "Милованово - Гречишкино",
            startCoordinate: "12.795",
            endCoordinate: "32.511"
          },
          {
            pch: 7,
            direction: " Кавказская - Краснодар(21402)",
            track: 1,
            station: "Гречишкино(52600)",
            startCoordinate: "32.512",
            endCoordinate: "33.789"
          },
          {
            pch: 7,
            direction: " Кавказская - Краснодар(21402)",
            track: 1,
            station: "Гречишкино - Ладожская",
            startCoordinate: "33.790",
            endCoordinate: "54.947"
          },
          {
            pch: 7,
            direction: " Кавказская - Краснодар(21402)",
            track: 1,
            station: "Ладожская(52590)",
            startCoordinate: "54.948",
            endCoordinate: "56.152"
          },
          {
            pch: 7,
            direction: " Кавказская - Краснодар(21402)",
            track: 1,
            station: "Ладожская - Двубратский",
            startCoordinate: "56.153",
            endCoordinate: "65.745"
          },
          {
            pch: 7,
            direction: " Кавказская - Краснодар(21402)",
            track: 1,
            station: "Двубратский(52581)",
            startCoordinate: "65.746",
            endCoordinate: "67.350"
          },
          {
            direction: " Ростов - Армавир(14101)",
            track: 1,
            station: "Гулькевичи - Отрадо-Кубанская",
            startCoordinate: "1600.725",
            endCoordinate: "1614.353"
          },
          {
            pch: 6,
            direction: " Ростов - Армавир(14101)",
            track: 1,
            station: "Кущевка(514402)",
            startCoordinate: "1428.163",
            endCoordinate: "1429.901"
          },
          {
            pch: 6,
            direction: " Ростов - Армавир(14101)",
            track: 1,
            station: "Кущевка - Кисляковка",
            startCoordinate: "1429.902",
            endCoordinate: "1447.118"
          },
          {
            pch: 6,
            direction: " Ростов - Армавир(14101)",
            track: 1,
            station: "Кисляковка(514609)",
            startCoordinate: "1447.119",
            endCoordinate: "1448.882"
          },
          {
            pch: 6,
            direction: " Ростов - Армавир(14101)",
            track: 1,
            station: "Кисляковка - Крыловская",
            startCoordinate: "1448.883",
            endCoordinate: "1466.979"
          },
          {
            pch: 6,
            direction: " Ростов - Армавир(14101)",
            track: 1,
            station: "Крыловская(514703)",
            startCoordinate: "1466.980",
            endCoordinate: "1469.64"
          },
          {
            pch: 6,
            direction: " Ростов - Армавир(14101)",
            track: 1,
            station: "Крыловская - Сосыка-Ростовская",
            startCoordinate: "1469.65",
            endCoordinate: "1485.859"
          },
          {
            pch: 6,
            direction: " Ростов - Армавир(14101)",
            track: 1,
            station: "Сосыка-Ростовская(514807)",
            startCoordinate: "1485.860",
            endCoordinate: "1487.363"
          },
          {
            pch: 6,
            direction: " Ростов - Армавир(14101)",
            track: 1,
            station: "Сосыка-Ростовская - Леушковская",
            startCoordinate: "1487.364",
            endCoordinate: "1502.802"
          },
          {
            pch: 6,
            direction: " Ростов - Армавир(14101)",
            track: 1,
            station: "Леушковская(515030)",
            startCoordinate: "1502.803",
            endCoordinate: "1504.90"
          },
          {
            pch: 6,
            direction: " Ростов - Армавир(14101)",
            track: 1,
            station: "Леушковская - Тихонький",
            startCoordinate: "1504.91",
            endCoordinate: "1514.194"
          },
          {
            pch: 6,
            direction: " Ростов - Армавир(14101)",
            track: 1,
            station: "Тихонький(515104)",
            startCoordinate: "1514.195",
            endCoordinate: "1515.724"
          },
          {
            pch: 6,
            direction: " Ростов - Армавир(14101)",
            track: 1,
            station: "Тихонький - Тихорецкая",
            startCoordinate: "1515.725",
            endCoordinate: "1521.856"
          },
          {
            pch: 6,
            direction: " Ростов - Армавир(14101)",
            track: 1,
            station: "Тихорецкая(520102)",
            startCoordinate: "1521.857",
            endCoordinate: "1528.661"
          },
          {
            direction: " Ростов - Армавир(14101)",
            track: 2,
            station: "Гулькевичи - Отрадо-Кубанская",
            startCoordinate: "1600.817",
            endCoordinate: "1614.282"
          },
          {
            pch: 6,
            direction: " Ростов - Армавир(14101)",
            track: 2,
            station: "Кущевка(514402)",
            startCoordinate: "1428.252",
            endCoordinate: "1429.995"
          },
          {
            pch: 6,
            direction: " Ростов - Армавир(14101)",
            track: 2,
            station: "Кущевка - Кисляковка",
            startCoordinate: "1429.996",
            endCoordinate: "1447.212"
          },
          {
            pch: 6,
            direction: " Ростов - Армавир(14101)",
            track: 2,
            station: "Кисляковка(514609)",
            startCoordinate: "1447.213",
            endCoordinate: "1448.812"
          },
          {
            pch: 6,
            direction: " Ростов - Армавир(14101)",
            track: 2,
            station: "Кисляковка - Крыловская",
            startCoordinate: "1448.813",
            endCoordinate: "1465.781"
          },
          {
            pch: 6,
            direction: " Ростов - Армавир(14101)",
            track: 2,
            station: "Крыловская(514703)",
            startCoordinate: "1465.782",
            endCoordinate: "1468.977"
          },
          {
            pch: 6,
            direction: " Ростов - Армавир(14101)",
            track: 2,
            station: "Крыловская - Сосыка-Ростовская",
            startCoordinate: "1468.978",
            endCoordinate: "1485.946"
          },
          {
            pch: 6,
            direction: " Ростов - Армавир(14101)",
            track: 2,
            station: "Сосыка-Ростовская(514807)",
            startCoordinate: "1485.947",
            endCoordinate: "1487.292"
          },
          {
            pch: 6,
            direction: " Ростов - Армавир(14101)",
            track: 2,
            station: "Сосыка-Ростовская - Леушковская",
            startCoordinate: "1487.293",
            endCoordinate: "1502.723"
          },
          {
            pch: 6,
            direction: " Ростов - Армавир(14101)",
            track: 2,
            station: "Леушковская(515030)",
            startCoordinate: "1502.724",
            endCoordinate: "1504.172"
          },
          {
            pch: 6,
            direction: " Ростов - Армавир(14101)",
            track: 2,
            station: "Леушковская - Тихонький",
            startCoordinate: "1504.173",
            endCoordinate: "1514.281"
          },
          {
            pch: 6,
            direction: " Ростов - Армавир(14101)",
            track: 2,
            station: "Тихонький(515104)",
            startCoordinate: "1514.282",
            endCoordinate: "1516.274"
          },
          {
            pch: 6,
            direction: " Ростов - Армавир(14101)",
            track: 2,
            station: "Тихонький - Тихорецкая",
            startCoordinate: "1516.275",
            endCoordinate: "1521.940"
          },
          {
            pch: 6,
            direction: " Ростов - Армавир(14101)",
            track: 2,
            station: "Тихорецкая(520102)",
            startCoordinate: "1521.941",
            endCoordinate: "1528.741"
          },
          {
            pch: 6,
            direction: " Сосыка - Ейск(14141)",
            track: 1,
            station: "Сосыка-Ростовская(514807)",
            startCoordinate: "1.1",
            endCoordinate: "1.836"
          },
          {
            pch: 6,
            direction: " Краснод. обход Тихорецкая(14142)",
            track: 1,
            station: "Тихорецкая(520102)",
            startCoordinate: "1.1",
            endCoordinate: "2.375"
          },
          {
            pch: 6,
            direction: " Сальский обход Тихорецкая(14143)",
            track: 1,
            station: "Тихорецкая(520102)",
            startCoordinate: "1.1",
            endCoordinate: "3.762"
          },
          {
            pch: 6,
            direction: " Волгоград - Краснодар(21201)",
            track: 1,
            station: "Порошинская(517805)",
            startCoordinate: "515.412",
            endCoordinate: "517.661"
          },
          {
            pch: 6,
            direction: " Волгоград - Краснодар(21201)",
            track: 1,
            station: "Порошинская - Тихорецк",
            startCoordinate: "517.662",
            endCoordinate: "532.193"
          },
          {
            pch: 6,
            direction: " Волгоград - Краснодар(21201)",
            track: 1,
            station: "Тихорецкая(520102)",
            startCoordinate: "532.194",
            endCoordinate: "541.140"
          },
          {
            pch: 6,
            direction: " Волгоград - Краснодар(21201)",
            track: 1,
            station: "Тихорецк - Челбас",
            startCoordinate: "541.141",
            endCoordinate: "548.606"
          },
          {
            pch: 6,
            direction: " Волгоград - Краснодар(21201)",
            track: 1,
            station: "Челбас(52531)",
            startCoordinate: "548.607",
            endCoordinate: "549.753"
          },
          {
            pch: 6,
            direction: " Волгоград - Краснодар(21201)",
            track: 1,
            station: "Челбас - Газырь",
            startCoordinate: "549.754",
            endCoordinate: "556.503"
          },
          {
            pch: 6,
            direction: " Волгоград - Краснодар(21201)",
            track: 1,
            station: "Газырь(52521)",
            startCoordinate: "556.504",
            endCoordinate: "557.639"
          },
          {
            pch: 6,
            direction: " Волгоград - Краснодар(21201)",
            track: 1,
            station: "Газырь - Бурсак",
            startCoordinate: "557.640",
            endCoordinate: "565.400"
          },
          {
            pch: 6,
            direction: " Волгоград - Краснодар(21201)",
            track: 1,
            station: "Бурсак(52510)",
            startCoordinate: "565.401",
            endCoordinate: "566.479"
          },
          {
            pch: 6,
            direction: " Волгоград - Краснодар(21201)",
            track: 2,
            station: "Порошинская(517805)",
            startCoordinate: "515.501",
            endCoordinate: "517.575"
          },
          {
            pch: 6,
            direction: " Волгоград - Краснодар(21201)",
            track: 2,
            station: "Порошинская - Тихорецк",
            startCoordinate: "517.576",
            endCoordinate: "532.191"
          },
          {
            pch: 6,
            direction: " Волгоград - Краснодар(21201)",
            track: 2,
            station: "Тихорецкая(520102)",
            startCoordinate: "532.192",
            endCoordinate: "532.291"
          },
          {
            pch: 33,
            direction: " Отрожка - Ростов(10407)",
            track: 1,
            station: "Лихая(580003)",
            startCoordinate: "1059.55",
            endCoordinate: "1065.410"
          },
          {
            pch: 33,
            direction: " Отрожка - Ростов(10407)",
            track: 1,
            station: "Лихая - Замчалово",
            startCoordinate: "1065.411",
            endCoordinate: "1071.604"
          },
          {
            pch: 33,
            direction: " Отрожка - Ростов(10407)",
            track: 1,
            station: "Замчалово(580300)",
            startCoordinate: "1071.605",
            endCoordinate: "1073.356"
          },
          {
            pch: 33,
            direction: " Отрожка - Ростов(10407)",
            track: 2,
            station: "Лихая(580003)",
            startCoordinate: "1059.53",
            endCoordinate: "1063.394"
          },
          {
            pch: 33,
            direction: " Отрожка - Ростов(10407)",
            track: 2,
            station: "Лихая - Замчалово",
            startCoordinate: "1063.395",
            endCoordinate: "1071.640"
          },
          {
            pch: 33,
            direction: " Отрожка - Ростов(10407)",
            track: 2,
            station: "Замчалово(580300)",
            startCoordinate: "1071.641",
            endCoordinate: "1073.286"
          },
          {
            pch: 33,
            direction: " Отрожка - Ростов(10407)",
            track: 3,
            station: "Лихая(580003)",
            startCoordinate: "1063.275",
            endCoordinate: "1063.307"
          },
          {
            pch: 33,
            direction: " Отрожка - Ростов(10407)",
            track: 3,
            station: "Лихая - Замчалово",
            startCoordinate: "1063.308",
            endCoordinate: "1071.563"
          },
          {
            pch: 33,
            direction: " Отрожка - Ростов(10407)",
            track: 3,
            station: "Замчалово(580300)",
            startCoordinate: "1071.564",
            endCoordinate: "1073.373"
          },
          {
            pch: 33,
            direction: " 7 подход ст. Лихая(10461)",
            track: 1,
            station: "Лихая(580003)",
            startCoordinate: "1.1",
            endCoordinate: "2.981"
          },
          {
            pch: 33,
            direction: " 3 Главный путь Ст.Лихая(10467)",
            track: 1,
            station: "Лихая(580003)",
            startCoordinate: "1.1",
            endCoordinate: "1.742"
          },
          {
            pch: 33,
            direction: " Заповедная - Замчалово(19202)",
            track: 1,
            station: "Замчалово(580300)",
            startCoordinate: "6.857",
            endCoordinate: "."
          },
          {
            pch: 33,
            direction: " Лихая - Волгоград(19402)",
            track: 1,
            station: "Лихая(580003)",
            startCoordinate: "3.207",
            endCoordinate: "3.391"
          },
          {
            pch: 33,
            direction: " Лихая - Волгоград(19402)",
            track: 1,
            station: "Лихая - Репная",
            startCoordinate: "3.392",
            endCoordinate: "24.547"
          },
          {
            pch: 33,
            direction: " Лихая - Волгоград(19402)",
            track: 1,
            station: "Репная(587301)",
            startCoordinate: "24.548",
            endCoordinate: "26.399"
          },
          {
            pch: 33,
            direction: " Лихая - Волгоград(19402)",
            track: 1,
            station: "Репная - Васильевский",
            startCoordinate: "26.400",
            endCoordinate: "30.577"
          },
          {
            pch: 33,
            direction: " Лихая - Волгоград(19402)",
            track: 1,
            station: "Васильевский(587403)",
            startCoordinate: "30.578",
            endCoordinate: "31.941"
          },
          {
            pch: 33,
            direction: " Лихая - Волгоград(19402)",
            track: 1,
            station: "Васильевский - Какичев",
            startCoordinate: "31.942",
            endCoordinate: "43.722"
          },
          {
            pch: 33,
            direction: " Лихая - Волгоград(19402)",
            track: 1,
            station: "Какичев(587600)",
            startCoordinate: "43.723",
            endCoordinate: "44.637"
          },
          {
            pch: 33,
            direction: " Лихая - Волгоград(19402)",
            track: 1,
            station: "Какичев - Белая Калитва",
            startCoordinate: "44.638",
            endCoordinate: "48.617"
          },
          {
            pch: 33,
            direction: " Лихая - Волгоград(19402)",
            track: 1,
            station: "Белая Калитва(587704)",
            startCoordinate: "48.618",
            endCoordinate: "51.538"
          },
          {
            pch: 33,
            direction: " Лихая - Волгоград(19402)",
            track: 1,
            station: "Белая Калитва - Грачи",
            startCoordinate: "51.539",
            endCoordinate: "71.209"
          },
          {
            pch: 33,
            direction: " Лихая - Волгоград(19402)",
            track: 1,
            station: "Грачи(587808)",
            startCoordinate: "71.210",
            endCoordinate: "72.776"
          },
          {
            pch: 33,
            direction: " Лихая - Волгоград(19402)",
            track: 1,
            station: "Грачи - Жирнов",
            startCoordinate: "72.777",
            endCoordinate: "84.524"
          },
          {
            pch: 33,
            direction: " Лихая - Волгоград(19402)",
            track: 1,
            station: "Жирнов(587901)",
            startCoordinate: "84.525",
            endCoordinate: "85.866"
          },
          {
            pch: 33,
            direction: " Лихая - Волгоград(19402)",
            track: 1,
            station: "Жирнов - Быстрореченская",
            startCoordinate: "85.867",
            endCoordinate: "92.790"
          },
          {
            pch: 33,
            direction: " Лихая - Волгоград(19402)",
            track: 1,
            station: "Быстрореченская(588001)",
            startCoordinate: "92.791",
            endCoordinate: "94.32"
          },
          {
            pch: 33,
            direction: " Лихая - Волгоград(19402)",
            track: 1,
            station: "Быстрореченская - Тацинская",
            startCoordinate: "94.33",
            endCoordinate: "100.6"
          },
          {
            pch: 33,
            direction: " Лихая - Волгоград(19402)",
            track: 1,
            station: "Тацинская(588105)",
            startCoordinate: "100.7",
            endCoordinate: "101.318"
          },
          {
            pch: 33,
            direction: " Лихая - Волгоград(19402)",
            track: 1,
            station: "Тацинская - Ковылкин",
            startCoordinate: "101.319",
            endCoordinate: "118.313"
          },
          {
            pch: 33,
            direction: " Лихая - Волгоград(19402)",
            track: 1,
            station: "Ковылкин(588143)",
            startCoordinate: "118.314",
            endCoordinate: "119.322"
          },
          {
            pch: 33,
            direction: " Лихая - Волгоград(19402)",
            track: 1,
            station: "Ковылкин - Вальково",
            startCoordinate: "119.323",
            endCoordinate: "129.292"
          },
          {
            pch: 33,
            direction: " Лихая - Волгоград(19402)",
            track: 1,
            station: "Вальково(588209)",
            startCoordinate: "129.293",
            endCoordinate: "130.451"
          },
          {
            pch: 33,
            direction: " Лихая - Волгоград(19402)",
            track: 1,
            station: "Вальково - Морозовская",
            startCoordinate: "130.452",
            endCoordinate: "148.617"
          },
          {
            pch: 33,
            direction: " Лихая - Волгоград(19402)",
            track: 1,
            station: "Морозовская(588302)",
            startCoordinate: "148.618",
            endCoordinate: "151.607"
          },
          {
            pch: 33,
            direction: " Лихая - Волгоград(19402)",
            track: 1,
            station: "Морозовская - Вознесенский",
            startCoordinate: "151.608",
            endCoordinate: "153.1"
          },
          {
            pch: 33,
            direction: " Лихая - Волгоград(19402)",
            track: 2,
            station: "Лихая(580003)",
            startCoordinate: "1.1",
            endCoordinate: "3.530"
          },
          {
            pch: 33,
            direction: " Лихая - Волгоград(19402)",
            track: 2,
            station: "Лихая - Репная",
            startCoordinate: "3.531",
            endCoordinate: "24.479"
          },
          {
            pch: 33,
            direction: " Лихая - Волгоград(19402)",
            track: 2,
            station: "Репная(587301)",
            startCoordinate: "24.479",
            endCoordinate: "26.323"
          },
          {
            pch: 33,
            direction: " Лихая - Волгоград(19402)",
            track: 2,
            station: "Репная - Васильевский",
            startCoordinate: "26.324",
            endCoordinate: "30.505"
          },
          {
            pch: 33,
            direction: " Лихая - Волгоград(19402)",
            track: 2,
            station: "Васильевский(587403)",
            startCoordinate: "30.506",
            endCoordinate: "32.38"
          },
          {
            pch: 33,
            direction: " Лихая - Волгоград(19402)",
            track: 2,
            station: "Васильевский - Какичев",
            startCoordinate: "32.39",
            endCoordinate: "43.647"
          },
          {
            pch: 33,
            direction: " Лихая - Волгоград(19402)",
            track: 2,
            station: "Какичев - Белая Калитва",
            startCoordinate: "43.648",
            endCoordinate: "48.538"
          },
          {
            pch: 33,
            direction: " Лихая - Волгоград(19402)",
            track: 2,
            station: "Белая Калитва(587704)",
            startCoordinate: "48.539",
            endCoordinate: "51.446"
          },
          {
            pch: 33,
            direction: " Лихая - Волгоград(19402)",
            track: 2,
            station: "Белая Калитва - Грачи",
            startCoordinate: "51.447",
            endCoordinate: "71.129"
          },
          {
            pch: 33,
            direction: " Лихая - Волгоград(19402)",
            track: 2,
            station: "Грачи(587808)",
            startCoordinate: "71.130",
            endCoordinate: "72.681"
          },
          {
            pch: 33,
            direction: " Лихая - Волгоград(19402)",
            track: 2,
            station: "Грачи - Жирнов",
            startCoordinate: "72.682",
            endCoordinate: "84.442"
          },
          {
            pch: 33,
            direction: " Лихая - Волгоград(19402)",
            track: 2,
            station: "Жирнов(587901)",
            startCoordinate: "84.443",
            endCoordinate: "85.959"
          },
          {
            pch: 33,
            direction: " Лихая - Волгоград(19402)",
            track: 2,
            station: "Жирнов - Быстрореченская",
            startCoordinate: "85.960",
            endCoordinate: "92.706"
          },
          {
            pch: 33,
            direction: " Лихая - Волгоград(19402)",
            track: 2,
            station: "Быстрореченская(588001)",
            startCoordinate: "92.707",
            endCoordinate: "94.134"
          },
          {
            pch: 33,
            direction: " Лихая - Волгоград(19402)",
            track: 2,
            station: "Быстрореченская - Тацинская",
            startCoordinate: "94.135",
            endCoordinate: "99.936"
          },
          {
            pch: 33,
            direction: " Лихая - Волгоград(19402)",
            track: 2,
            station: "Тацинская(588105)",
            startCoordinate: "99.937",
            endCoordinate: "101.412"
          },
          {
            pch: 33,
            direction: " Лихая - Волгоград(19402)",
            track: 2,
            station: "Тацинская - Ковылкин",
            startCoordinate: "101.413",
            endCoordinate: "118.221"
          },
          {
            pch: 33,
            direction: " Лихая - Волгоград(19402)",
            track: 2,
            station: "Ковылкин(588143)",
            startCoordinate: "118.222",
            endCoordinate: "119.409"
          },
          {
            pch: 33,
            direction: " Лихая - Волгоград(19402)",
            track: 2,
            station: "Ковылкин - Вальково",
            startCoordinate: "119.410",
            endCoordinate: "129.209"
          },
          {
            pch: 33,
            direction: " Лихая - Волгоград(19402)",
            track: 2,
            station: "Вальково(588209)",
            startCoordinate: "129.210",
            endCoordinate: "130.552"
          },
          {
            pch: 33,
            direction: " Лихая - Волгоград(19402)",
            track: 2,
            station: "Вальково - Морозовская",
            startCoordinate: "130.553",
            endCoordinate: "148.713"
          },
          {
            pch: 33,
            direction: " Лихая - Волгоград(19402)",
            track: 2,
            station: "Морозовская(588302)",
            startCoordinate: "148.714",
            endCoordinate: "151.686"
          },
          {
            pch: 33,
            direction: " Лихая - Волгоград(19402)",
            track: 2,
            station: "Морозовская - Вознесенский",
            startCoordinate: "151.687",
            endCoordinate: "153.1"
          },
          {
            pch: 33,
            direction: " 6 подход ст. Лихая(19430)",
            track: 1,
            station: "Лихая(580003)",
            startCoordinate: "1.1",
            endCoordinate: "3.118"
          },
          {
            pch: 33,
            direction: " Морозовская - Куберле(19440)",
            track: 1,
            station: "Морозовская(588302)",
            startCoordinate: "0.413",
            endCoordinate: "1.695"
          },
          {
            direction: " Армавир - Мин. Воды(14102)",
            track: 1,
            station: "Киан - Курсавка",
            startCoordinate: "1754.908",
            endCoordinate: "1780.197"
          },
          {
            pch: 10,
            direction: " Армавир - Мин. Воды(14102)",
            track: 1,
            station: "Курсавка(531408)",
            startCoordinate: "1780.198",
            endCoordinate: "1782.126"
          },
          {
            pch: 10,
            direction: " Армавир - Мин. Воды(14102)",
            track: 1,
            station: "Курсавка - Нагутская",
            startCoordinate: "1782.127",
            endCoordinate: "1799.260"
          },
          {
            pch: 10,
            direction: " Армавир - Мин. Воды(14102)",
            track: 1,
            station: "Нагутская(531501)",
            startCoordinate: "1799.261",
            endCoordinate: "1800.561"
          },
          {
            pch: 10,
            direction: " Армавир - Мин. Воды(14102)",
            track: 1,
            station: "Нагутская - Суворовская",
            startCoordinate: "1800.562",
            endCoordinate: "1818.737"
          },
          {
            pch: 10,
            direction: " Армавир - Мин. Воды(14102)",
            track: 1,
            station: "Суворовская(531605)",
            startCoordinate: "1818.738",
            endCoordinate: "1820.222"
          },
          {
            pch: 10,
            direction: " Армавир - Мин. Воды(14102)",
            track: 1,
            station: "Суворовская - Минеральные Воды",
            startCoordinate: "1820.223",
            endCoordinate: "1836.122"
          },
          {
            pch: 10,
            direction: " Армавир - Мин. Воды(14102)",
            track: 1,
            station: "Минеральные Воды(530000)",
            startCoordinate: "1836.123",
            endCoordinate: "1840.427"
          },
          {
            direction: " Армавир - Мин. Воды(14102)",
            track: 2,
            station: "Киан - Курсавка",
            startCoordinate: "1754.837",
            endCoordinate: "1780.132"
          },
          {
            pch: 10,
            direction: " Армавир - Мин. Воды(14102)",
            track: 2,
            station: "Курсавка(531408)",
            startCoordinate: "1780.133",
            endCoordinate: "1782.213"
          },
          {
            pch: 10,
            direction: " Армавир - Мин. Воды(14102)",
            track: 2,
            station: "Курсавка - Нагутская",
            startCoordinate: "1782.214",
            endCoordinate: "1799.190"
          },
          {
            pch: 10,
            direction: " Армавир - Мин. Воды(14102)",
            track: 2,
            station: "Нагутская(531501)",
            startCoordinate: "1799.191",
            endCoordinate: "1800.655"
          },
          {
            pch: 10,
            direction: " Армавир - Мин. Воды(14102)",
            track: 2,
            station: "Нагутская - Суворовская",
            startCoordinate: "1800.656",
            endCoordinate: "1818.663"
          },
          {
            pch: 10,
            direction: " Армавир - Мин. Воды(14102)",
            track: 2,
            station: "Суворовская(531605)",
            startCoordinate: "1818.664",
            endCoordinate: "1820.302"
          },
          {
            pch: 10,
            direction: " Армавир - Мин. Воды(14102)",
            track: 2,
            station: "Суворовская - Минеральные Воды",
            startCoordinate: "1820.303",
            endCoordinate: "1835.773"
          },
          {
            pch: 10,
            direction: " Армавир - Мин. Воды(14102)",
            track: 2,
            station: "Минеральные Воды(530000)",
            startCoordinate: "1835.774",
            endCoordinate: "1840.564"
          },
          {
            pch: 10,
            direction: " Мин. Воды-Гудермес(14103)",
            track: 1,
            station: "Минеральные Воды(530000)",
            startCoordinate: "1840.428",
            endCoordinate: "1841.821"
          },
          {
            pch: 10,
            direction: " Мин. Воды-Гудермес(14103)",
            track: 1,
            station: "Минеральные Воды - Виноградная",
            startCoordinate: "1841.822",
            endCoordinate: "1858.362"
          },
          {
            pch: 10,
            direction: " Мин. Воды-Гудермес(14103)",
            track: 1,
            station: "Виноградная(536204)",
            startCoordinate: "1858.363",
            endCoordinate: "1859.502"
          },
          {
            pch: 10,
            direction: " Мин. Воды-Гудермес(14103)",
            track: 1,
            station: "Виноградная - Георгиевск",
            startCoordinate: "1859.503",
            endCoordinate: "1868.138"
          },
          {
            pch: 10,
            direction: " Мин. Воды-Гудермес(14103)",
            track: 1,
            station: "Георгиевск(536308)",
            startCoordinate: "1868.139",
            endCoordinate: "1869.662"
          },
          {
            pch: 10,
            direction: " Мин. Воды-Гудермес(14103)",
            track: 1,
            station: "Георгиевск - Зольский",
            startCoordinate: "1869.663",
            endCoordinate: "1887.233"
          },
          {
            pch: 10,
            direction: " Мин. Воды-Гудермес(14103)",
            track: 1,
            station: "Зольский(537207)",
            startCoordinate: "1887.234",
            endCoordinate: "1888.462"
          },
          {
            pch: 10,
            direction: " Мин. Воды-Гудермес(14103)",
            track: 1,
            station: "Зольский - Аполлонская",
            startCoordinate: "1888.463",
            endCoordinate: "1895.601"
          },
          {
            pch: 10,
            direction: " Мин. Воды-Гудермес(14103)",
            track: 1,
            station: "Аполлонская(537300)",
            startCoordinate: "1895.602",
            endCoordinate: "1897.496"
          },
          {
            pch: 10,
            direction: " Мин. Воды-Гудермес(14103)",
            track: 1,
            station: "Аполлонская - Солдатская",
            startCoordinate: "1897.497",
            endCoordinate: "1916.624"
          },
          {
            pch: 10,
            direction: " Мин. Воды-Гудермес(14103)",
            track: 1,
            station: "Солдатская(537424)",
            startCoordinate: "1916.625",
            endCoordinate: "1917.710"
          },
          {
            pch: 10,
            direction: " Мин. Воды-Гудермес(14103)",
            track: 2,
            station: "Минеральные Воды(530000)",
            startCoordinate: "1840.565",
            endCoordinate: "1841.913"
          },
          {
            pch: 10,
            direction: " Мин. Воды-Гудермес(14103)",
            track: 2,
            station: "Минеральные Воды - Виноградная",
            startCoordinate: "1841.914",
            endCoordinate: "1858.294"
          },
          {
            pch: 10,
            direction: " Мин. Воды-Гудермес(14103)",
            track: 2,
            station: "Виноградная(536204)",
            startCoordinate: "1858.295",
            endCoordinate: "1859.589"
          },
          {
            pch: 10,
            direction: " Мин. Воды-Гудермес(14103)",
            track: 2,
            station: "Виноградная - Георгиевск",
            startCoordinate: "1859.590",
            endCoordinate: "1868.53"
          },
          {
            pch: 10,
            direction: " Мин. Воды-Гудермес(14103)",
            track: 2,
            station: "Георгиевск(536308)",
            startCoordinate: "1868.54",
            endCoordinate: "1869.748"
          },
          {
            pch: 10,
            direction: " Мин. Воды-Гудермес(14103)",
            track: 2,
            station: "Георгиевск - Зольский",
            startCoordinate: "1869.749",
            endCoordinate: "1887.317"
          },
          {
            pch: 10,
            direction: " Мин. Воды-Гудермес(14103)",
            track: 2,
            station: "Зольский(537207)",
            startCoordinate: "1887.318",
            endCoordinate: "1888.391"
          },
          {
            pch: 10,
            direction: " Мин. Воды-Гудермес(14103)",
            track: 2,
            station: "Зольский - Аполлонская",
            startCoordinate: "1888.392",
            endCoordinate: "1895.532"
          },
          {
            pch: 10,
            direction: " Мин. Воды-Гудермес(14103)",
            track: 2,
            station: "Аполлонская(537300)",
            startCoordinate: "1895.533",
            endCoordinate: "1897.586"
          },
          {
            pch: 10,
            direction: " Мин. Воды-Гудермес(14103)",
            track: 2,
            station: "Аполлонская - Солдатская",
            startCoordinate: "1897.587",
            endCoordinate: "1916.554"
          },
          {
            pch: 10,
            direction: " Мин. Воды-Гудермес(14103)",
            track: 2,
            station: "Солдатская(537424)",
            startCoordinate: "1916.555",
            endCoordinate: "1917.798"
          },
          {
            pch: 10,
            direction: " 14 обводной путь МинВоды(14138)",
            track: 1,
            station: "Минеральные Воды(530000)",
            startCoordinate: "1835.774",
            endCoordinate: "1838.530"
          },
          {
            pch: 10,
            direction: " Мин.Воды - Кисловодск(14146)",
            track: 1,
            station: "Минеральные Воды(530000)",
            startCoordinate: "1.1",
            endCoordinate: "1.526"
          },
          {
            pch: 10,
            direction: " Мин.Воды - Кисловодск(14146)",
            track: 1,
            station: "Минеральные Воды - Бештау",
            startCoordinate: "1.527",
            endCoordinate: "14.794"
          },
          {
            pch: 10,
            direction: " Мин.Воды - Кисловодск(14146)",
            track: 1,
            station: "Бештау(531910)",
            startCoordinate: "14.795",
            endCoordinate: "15.366"
          },
          {
            pch: 10,
            direction: " Мин.Воды - Кисловодск(14146)",
            track: 1,
            station: "Бештау - Лермонтовский",
            startCoordinate: "15.367",
            endCoordinate: "22.47"
          },
          {
            pch: 10,
            direction: " Мин.Воды - Кисловодск(14146)",
            track: 1,
            station: "Лермонтовский(532006)",
            startCoordinate: "22.48",
            endCoordinate: "22.998"
          },
          {
            pch: 10,
            direction: " Мин.Воды - Кисловодск(14146)",
            track: 1,
            station: "Лермонтовский - Пятигорск",
            startCoordinate: "22.999",
            endCoordinate: "26.554"
          },
          {
            pch: 10,
            direction: " Мин.Воды - Кисловодск(14146)",
            track: 1,
            station: "Пятигорск(532100)",
            startCoordinate: "26.555",
            endCoordinate: "27.190"
          },
          {
            pch: 10,
            direction: " Мин.Воды - Кисловодск(14146)",
            track: 1,
            station: "Пятигорск - Скачки",
            startCoordinate: "27.191",
            endCoordinate: "32.99"
          },
          {
            pch: 10,
            direction: " Мин.Воды - Кисловодск(14146)",
            track: 1,
            station: "Скачки(532203)",
            startCoordinate: "32.100",
            endCoordinate: "33.329"
          },
          {
            pch: 10,
            direction: " Мин.Воды - Кисловодск(14146)",
            track: 1,
            station: "Скачки - Ессентуки",
            startCoordinate: "33.330",
            endCoordinate: "43.379"
          },
          {
            pch: 10,
            direction: " Мин.Воды - Кисловодск(14146)",
            track: 1,
            station: "Ессентуки(532307)",
            startCoordinate: "43.380",
            endCoordinate: "44.202"
          },
          {
            pch: 10,
            direction: " Мин.Воды - Кисловодск(14146)",
            track: 1,
            station: "Ессентуки - Подкумок",
            startCoordinate: "44.203",
            endCoordinate: "56.161"
          },
          {
            pch: 10,
            direction: " Мин.Воды - Кисловодск(14146)",
            track: 1,
            station: "Подкумок(532400)",
            startCoordinate: "56.162",
            endCoordinate: "56.825"
          },
          {
            pch: 10,
            direction: " Мин.Воды - Кисловодск(14146)",
            track: 1,
            station: "Подкумок - Кисловодск",
            startCoordinate: "56.826",
            endCoordinate: "63.320"
          },
          {
            pch: 10,
            direction: " Мин.Воды - Кисловодск(14146)",
            track: 1,
            station: "Кисловодск(532504)",
            startCoordinate: "63.321",
            endCoordinate: "65.324"
          },
          {
            pch: 10,
            direction: " Мин.Воды - Кисловодск(14146)",
            track: 2,
            station: "Минеральные Воды(530000)",
            startCoordinate: "1.1",
            endCoordinate: "1.645"
          },
          {
            pch: 10,
            direction: " Мин.Воды - Кисловодск(14146)",
            track: 2,
            station: "Минеральные Воды - Бештау",
            startCoordinate: "1.646",
            endCoordinate: "14.725"
          },
          {
            pch: 10,
            direction: " Мин.Воды - Кисловодск(14146)",
            track: 2,
            station: "Бештау(531910)",
            startCoordinate: "14.726",
            endCoordinate: "15.442"
          },
          {
            pch: 10,
            direction: " Мин.Воды - Кисловодск(14146)",
            track: 2,
            station: "Бештау - Лермонтовский",
            startCoordinate: "15.443",
            endCoordinate: "22.137"
          },
          {
            pch: 10,
            direction: " Мин.Воды - Кисловодск(14146)",
            track: 2,
            station: "Лермонтовский(532006)",
            startCoordinate: "22.138",
            endCoordinate: "22.889"
          },
          {
            pch: 10,
            direction: " Мин.Воды - Кисловодск(14146)",
            track: 2,
            station: "Лермонтовский - Пятигорск",
            startCoordinate: "22.890",
            endCoordinate: "26.480"
          },
          {
            pch: 10,
            direction: " Мин.Воды - Кисловодск(14146)",
            track: 2,
            station: "Пятигорск(532100)",
            startCoordinate: "26.481",
            endCoordinate: "27.277"
          },
          {
            pch: 10,
            direction: " Мин.Воды - Кисловодск(14146)",
            track: 2,
            station: "Пятигорск - Скачки",
            startCoordinate: "27.278",
            endCoordinate: "32.198"
          },
          {
            pch: 10,
            direction: " Мин.Воды - Кисловодск(14146)",
            track: 2,
            station: "Скачки(532203)",
            startCoordinate: "32.199",
            endCoordinate: "33.266"
          },
          {
            pch: 10,
            direction: " Мин.Воды - Кисловодск(14146)",
            track: 2,
            station: "Скачки - Ессентуки",
            startCoordinate: "33.267",
            endCoordinate: "43.465"
          },
          {
            pch: 10,
            direction: " Мин.Воды - Кисловодск(14146)",
            track: 2,
            station: "Ессентуки(532307)",
            startCoordinate: "43.466",
            endCoordinate: "44.285"
          },
          {
            pch: 10,
            direction: " Мин.Воды - Кисловодск(14146)",
            track: 2,
            station: "Ессентуки - Подкумок",
            startCoordinate: "44.286",
            endCoordinate: "56.245"
          },
          {
            pch: 10,
            direction: " Мин.Воды - Кисловодск(14146)",
            track: 2,
            station: "Подкумок(532400)",
            startCoordinate: "56.246",
            endCoordinate: "56.749"
          },
          {
            pch: 10,
            direction: " Мин.Воды - Кисловодск(14146)",
            track: 2,
            station: "Подкумок - Кисловодск",
            startCoordinate: "56.750",
            endCoordinate: "63.230"
          },
          {
            pch: 10,
            direction: " Мин.Воды - Кисловодск(14146)",
            track: 2,
            station: "Кисловодск(532504)",
            startCoordinate: "63.231",
            endCoordinate: "65.324"
          },
          {
            pch: 10,
            direction: " Бештау - Железноводск(14147)",
            track: 1,
            station: "Бештау(531910)",
            startCoordinate: "1.1",
            endCoordinate: "1.152"
          },
          {
            pch: 10,
            direction: " Бештау - Железноводск(14147)",
            track: 1,
            station: "Бештау - Железноводск",
            startCoordinate: "1.153",
            endCoordinate: "6.710"
          },
          {
            pch: 10,
            direction: " Бештау - Железноводск(14147)",
            track: 1,
            station: "Железноводск(531802)",
            startCoordinate: "6.711"
          },
          {
            pch: 10,
            direction: " Светлоград - Георгиевск(21431)",
            track: 1,
            station: "Георгиевск(536308)",
            startCoordinate: "229.397",
            endCoordinate: "232.254"
          },
          {
            direction: " Мин. Воды-Гудермес(14103)",
            track: 1,
            station: "Солдатская - Шарданово",
            startCoordinate: "1917.711",
            endCoordinate: "1927.754"
          },
          {
            pch: 12,
            direction: " Мин. Воды-Гудермес(14103)",
            track: 1,
            station: "Шарданово(537508)",
            startCoordinate: "1927.755",
            endCoordinate: "1929.314"
          },
          {
            pch: 12,
            direction: " Мин. Воды-Гудермес(14103)",
            track: 1,
            station: "Шарданово - Прохладная",
            startCoordinate: "1929.315",
            endCoordinate: "1936.190"
          },
          {
            pch: 12,
            direction: " Мин. Воды-Гудермес(14103)",
            track: 1,
            station: "Прохладная(537601)",
            startCoordinate: "1936.191",
            endCoordinate: "1938.796"
          },
          {
            pch: 12,
            direction: " Мин. Воды-Гудермес(14103)",
            track: 1,
            station: "Прохладная -Баксан",
            startCoordinate: "1938.797",
            endCoordinate: "1945.281"
          },
          {
            pch: 12,
            direction: " Мин. Воды-Гудермес(14103)",
            track: 1,
            station: "Баксан(537711)",
            startCoordinate: "1945.282",
            endCoordinate: "1946.342"
          },
          {
            pch: 12,
            direction: " Мин. Воды-Гудермес(14103)",
            track: 1,
            station: "Баксан - Котляревская",
            startCoordinate: "1946.343",
            endCoordinate: "1952.151"
          },
          {
            pch: 12,
            direction: " Мин. Воды-Гудермес(14103)",
            track: 1,
            station: "Котляревская(537705)",
            startCoordinate: "1952.152",
            endCoordinate: "1953.352"
          },
          {
            pch: 12,
            direction: " Мин. Воды-Гудермес(14103)",
            track: 1,
            station: "Котляревская - Муртазово",
            startCoordinate: "1953.353",
            endCoordinate: "1969.804"
          },
          {
            pch: 12,
            direction: " Мин. Воды-Гудермес(14103)",
            track: 1,
            station: "Муртазово(538002)",
            startCoordinate: "1969.805",
            endCoordinate: "1971.46"
          },
          {
            pch: 12,
            direction: " Мин. Воды-Гудермес(14103)",
            track: 1,
            station: "Муртазово - Эльхотово",
            startCoordinate: "1971.47",
            endCoordinate: "1985.816"
          },
          {
            pch: 12,
            direction: " Мин. Воды-Гудермес(14103)",
            track: 1,
            station: "Эльхотово(538106)",
            startCoordinate: "1985.817",
            endCoordinate: "1987.46"
          },
          {
            pch: 12,
            direction: " Мин. Воды-Гудермес(14103)",
            track: 1,
            station: "Эльхотово - Дарг-Кох",
            startCoordinate: "1987.47",
            endCoordinate: "1998.226"
          },
          {
            pch: 12,
            direction: " Мин. Воды-Гудермес(14103)",
            track: 1,
            station: "Дарг-Кох(538202)",
            startCoordinate: "1998.227",
            endCoordinate: "1999.579"
          },
          {
            pch: 12,
            direction: " Мин. Воды-Гудермес(14103)",
            track: 1,
            station: "Дарг-Кох - Беслан",
            startCoordinate: "1999.580",
            endCoordinate: "2019.274"
          },
          {
            pch: 12,
            direction: " Мин. Воды-Гудермес(14103)",
            track: 1,
            station: "Беслан(538500)",
            startCoordinate: "2019.275",
            endCoordinate: "2021.362"
          },
          {
            pch: 12,
            direction: " Мин. Воды-Гудермес(14103)",
            track: 1,
            station: "Беслан - Консервный",
            startCoordinate: "2021.363",
            endCoordinate: "2035.11"
          },
          {
            pch: 12,
            direction: " Мин. Воды-Гудермес(14103)",
            track: 1,
            station: "Консервный(540320)",
            startCoordinate: "2035.12",
            endCoordinate: "2036.235"
          },
          {
            pch: 12,
            direction: " Мин. Воды-Гудермес(14103)",
            track: 1,
            station: "Консервный - Назрань",
            startCoordinate: "2036.236",
            endCoordinate: "2041.135"
          },
          {
            pch: 12,
            direction: " Мин. Воды-Гудермес(14103)",
            track: 1,
            station: "Назрань(540333)",
            startCoordinate: "2041.136",
            endCoordinate: "2042.305"
          },
          {
            pch: 12,
            direction: " Мин. Воды-Гудермес(14103)",
            track: 1,
            station: "Назрань - Плиево",
            startCoordinate: "2042.306",
            endCoordinate: "2050.378"
          },
          {
            pch: 12,
            direction: " Мин. Воды-Гудермес(14103)",
            track: 1,
            station: "Плиево(540427)",
            startCoordinate: "2050.379",
            endCoordinate: "2051.498"
          },
          {
            pch: 12,
            direction: " Мин. Воды-Гудермес(14103)",
            track: 1,
            station: "Плиево - Карабулакский",
            startCoordinate: "2051.499",
            endCoordinate: "2058.279"
          },
          {
            pch: 12,
            direction: " Мин. Воды-Гудермес(14103)",
            track: 1,
            station: "Карабулакский(540500)",
            startCoordinate: "2058.280",
            endCoordinate: "2059.664"
          },
          {
            pch: 12,
            direction: " Мин. Воды-Гудермес(14103)",
            track: 1,
            station: "Карабулакский - Слепцовская",
            startCoordinate: "2059.665",
            endCoordinate: "2069.442"
          },
          {
            pch: 12,
            direction: " Мин. Воды-Гудермес(14103)",
            track: 1,
            station: "Слепцовская(540604)",
            startCoordinate: "2069.443",
            endCoordinate: "2070.682"
          },
          {
            direction: " Мин. Воды-Гудермес(14103)",
            track: 2,
            station: "Солдатская - Шарданово",
            startCoordinate: "1917.799",
            endCoordinate: "1927.845"
          },
          {
            pch: 12,
            direction: " Мин. Воды-Гудермес(14103)",
            track: 2,
            station: "Шарданово(537508)",
            startCoordinate: "1927.846",
            endCoordinate: "1929.248"
          },
          {
            pch: 12,
            direction: " Мин. Воды-Гудермес(14103)",
            track: 2,
            station: "Шарданово - Прохладная",
            startCoordinate: "1929.249",
            endCoordinate: "1936.414"
          },
          {
            pch: 12,
            direction: " Мин. Воды-Гудермес(14103)",
            track: 2,
            station: "Прохладная(537601)",
            startCoordinate: "1936.415",
            endCoordinate: "1937.601"
          },
          {
            pch: 12,
            direction: " Прохладная - Гудермес(14104)",
            track: 1,
            station: "Прохладная(537601)",
            startCoordinate: "1.1",
            endCoordinate: "2.345"
          },
          {
            pch: 12,
            direction: " Прохладная - Гудермес(14104)",
            track: 1,
            station: "Прохладная - Моздок",
            startCoordinate: "2.346",
            endCoordinate: "49.691"
          },
          {
            pch: 12,
            direction: " Прохладная - Гудермес(14104)",
            track: 1,
            station: "Моздок(539306)",
            startCoordinate: "49.692",
            endCoordinate: "51.42"
          },
          {
            pch: 12,
            direction: " Прохладная - Гудермес(14104)",
            track: 1,
            station: "Моздок - Осетиновский",
            startCoordinate: "51.43",
            endCoordinate: "59.102"
          },
          {
            pch: 12,
            direction: " Прохладная - Гудермес(14104)",
            track: 1,
            station: "Осетиновский(539408)",
            startCoordinate: "59.103",
            endCoordinate: "60.630"
          },
          {
            pch: 12,
            direction: " Прохладная - Гудермес(14104)",
            track: 1,
            station: "Осетиновский - Стодеревская",
            startCoordinate: "60.631",
            endCoordinate: "67.870"
          },
          {
            pch: 12,
            direction: " Прохладная - Гудермес(14104)",
            track: 1,
            station: "Стодеревская(539414)",
            startCoordinate: "67.871",
            endCoordinate: "69.67"
          },
          {
            pch: 12,
            direction: " Прохладная - Гудермес(14104)",
            track: 2,
            station: "Прохладная(537601)",
            startCoordinate: "1.1",
            endCoordinate: "2.444"
          },
          {
            pch: 12,
            direction: " Прохладная - Гудермес(14104)",
            track: 2,
            station: "Прохладная - Приближний",
            startCoordinate: "2.445",
            endCoordinate: "8.697"
          },
          {
            pch: 12,
            direction: " Прохладная - Гудермес(14104)",
            track: 2,
            station: "Приближний(537616)",
            startCoordinate: "8.698",
            endCoordinate: "10.16"
          },
          {
            pch: 12,
            direction: " Прохладная - Гудермес(14104)",
            track: 2,
            station: " Приближний - Черноярская",
            startCoordinate: "10.17",
            endCoordinate: "25.275"
          },
          {
            pch: 12,
            direction: " Прохладная - Гудермес(14104)",
            track: 2,
            station: "Черноярская(539139)",
            startCoordinate: "25.276",
            endCoordinate: "26.510"
          },
          {
            pch: 12,
            direction: " Прохладная - Гудермес(14104)",
            track: 2,
            station: "Черноярская - Луковский",
            startCoordinate: "26.511",
            endCoordinate: "42.507"
          },
          {
            pch: 12,
            direction: " Прохладная - Гудермес(14104)",
            track: 2,
            station: "Луковский(539202)",
            startCoordinate: "42.508",
            endCoordinate: "43.741"
          },
          {
            pch: 12,
            direction: " Прохладная - Гудермес(14104)",
            track: 2,
            station: "Луковский - Моздок",
            startCoordinate: "43.742",
            endCoordinate: "49.599"
          },
          {
            pch: 12,
            direction: " Прохладная - Гудермес(14104)",
            track: 2,
            station: "Моздок(539306)",
            startCoordinate: "49.600",
            endCoordinate: "50.874"
          },
          {
            pch: 12,
            direction: " Прохладная - Гудермес(14104)",
            track: 2,
            station: "Моздок - Стодеревская",
            startCoordinate: "50.875",
            endCoordinate: "67.871"
          },
          {
            pch: 12,
            direction: " Прохладная - Гудермес(14104)",
            track: 2,
            station: "Стодеревская(539414)",
            startCoordinate: "67.872",
            endCoordinate: "69.163"
          },
          {
            pch: 12,
            direction: " Котляревская - Нальчик(14149)",
            track: 1,
            station: "Котляревская - Докшукино",
            startCoordinate: "1.45",
            endCoordinate: "19.453"
          },
          {
            pch: 12,
            direction: " Котляревская - Нальчик(14149)",
            track: 1,
            station: "Докшукино(537809)",
            startCoordinate: "19.454",
            endCoordinate: "20.523"
          },
          {
            pch: 12,
            direction: " Котляревская - Нальчик(14149)",
            track: 1,
            station: "Докшукино - Нартан",
            startCoordinate: "20.524",
            endCoordinate: "30.329"
          },
          {
            pch: 12,
            direction: " Котляревская - Нальчик(14149)",
            track: 1,
            station: "Нартан(537839)",
            startCoordinate: "30.330",
            endCoordinate: "31.589"
          },
          {
            pch: 12,
            direction: " Котляревская - Нальчик(14149)",
            track: 1,
            station: "Нартан - Нальчик",
            startCoordinate: "31.590",
            endCoordinate: "41.223"
          },
          {
            pch: 12,
            direction: " Котляревская - Нальчик(14149)",
            track: 1,
            station: "Нальчик(537902)",
            startCoordinate: "41.224",
            endCoordinate: "42.185"
          },
          {
            pch: 12,
            direction: " Дарг-Кох - Алагир(14150)",
            track: 1,
            station: "Дарг-Кох - Ардон",
            startCoordinate: "0.416",
            endCoordinate: "11.957"
          },
          {
            pch: 12,
            direction: " Дарг-Кох - Алагир(14150)",
            track: 1,
            station: "Ардон(538303)",
            startCoordinate: "11.958",
            endCoordinate: "12.820"
          },
          {
            pch: 12,
            direction: " Дарг-Кох - Алагир(14150)",
            track: 1,
            station: "Ардон - Алагир",
            startCoordinate: "12.821",
            endCoordinate: "28.348"
          },
          {
            pch: 12,
            direction: " Дарг-Кох - Алагир(14150)",
            track: 1,
            station: "Алагир(538407)",
            startCoordinate: "28.349",
            endCoordinate: "29.265"
          },
          {
            pch: 12,
            direction: " Беслан - Владикавказ(14151)",
            track: 1,
            station: "Беслан(538500)",
            startCoordinate: "1.81",
            endCoordinate: "2.238"
          },
          {
            pch: 12,
            direction: " Беслан - Владикавказ(14151)",
            track: 1,
            station: "Беслан - Колонка",
            startCoordinate: "2.239",
            endCoordinate: "14.323"
          },
          {
            pch: 12,
            direction: " Беслан - Владикавказ(14151)",
            track: 1,
            station: "Колонка(538604)",
            startCoordinate: "14.324",
            endCoordinate: "15.162"
          },
          {
            pch: 12,
            direction: " Беслан - Владикавказ(14151)",
            track: 1,
            station: "Колонка - Владикавказ",
            startCoordinate: "15.163",
            endCoordinate: "19.863"
          },
          {
            pch: 12,
            direction: " Беслан - Владикавказ(14151)",
            track: 1,
            station: "Владикавказ(538708)",
            startCoordinate: "19.864",
            endCoordinate: "23.689"
          },
          {
            direction: "Гудермес - Самур(14105)",
            track: 1,
            station: "Кади-Юрт - Хасав-Юрт",
            startCoordinate: "2180.225",
            endCoordinate: "2203.124"
          },
          {
            direction: "Гудермес - Самур(14105)",
            track: 2,
            station: "Кади-Юрт - Хасав-Юрт",
            startCoordinate: "2178.334",
            endCoordinate: "2203.32"
          },
          {
            direction: " Ростов - Армавир(14101)",
            track: 2,
            station: "Тихорецкая - Шохры",
            startCoordinate: "1528.742",
            endCoordinate: "1534.657"
          },
          {
            direction: "Червленная Узл.-Астрахань(12802)",
            track: 1,
            station: "Каргинская - Кизляр",
            startCoordinate: "60.995",
            endCoordinate: "80.506"
          }
    ],

    // Название, номера дистанций, названия номера регионов по каждому ПЧ
    distances: [
      {distanceNumber: 1, distanceName: "Шахтинская дистанция пути", distancePartAndNumber: "ПЧ-1", distanceFullName: "ПЧ-1 Шахтинская дистанция пути", regionNumber: 1, regionTitle: "Ростовский"},
      {distanceNumber: 2, distanceName: "Таганрогская дистанция инфраструктуры", distancePartAndNumber: "ИЧ-2", distanceFullName: "ИЧ-2 Таганрогская дистанция инфраструктуры", regionNumber: 1, regionTitle: "Ростовский"},
      {distanceNumber: 3, distanceName: "Ростовская дистанция пути", distancePartAndNumber: "ПЧ-3", distanceFullName: "ПЧ-3 Ростовская дистанция пути", regionNumber: 1, regionTitle: "Ростовский"},
      {distanceNumber: 4, distanceName: "Батайская дистанция пути", distancePartAndNumber: "ПЧ-4", distanceFullName: "ПЧ-4 Батайская дистанция пути", regionNumber: 1, regionTitle: "Ростовский"},
      {distanceNumber: 6, distanceName: "Тихорецкая дистанция пути", distancePartAndNumber: "ПЧ-6", distanceFullName: "ПЧ-6 Тихорецкая дистанция пути", regionNumber: 2, regionTitle: "Краснодарский"},
      {distanceNumber: 7, distanceName: "Кавказская дистанция пути", distancePartAndNumber: "ПЧ-7", distanceFullName: "ПЧ-7 Кавказская дистанция пути", regionNumber: 2, regionTitle: "Краснодарский"},
      {distanceNumber: 8, distanceName: "Армавирская дистанция пути", distancePartAndNumber: "ПЧ-8", distanceFullName: "ПЧ-8 Армавирская дистанция пути", regionNumber: 6, regionTitle: "Туапсинский"},
      {distanceNumber: 10, distanceName: "Минераловодская дистанция пути", distancePartAndNumber: "ПЧ-10", distanceFullName: "ПЧ-10 Минераловодская дистанция пути", regionNumber: 3, regionTitle: "Минераловодский"},
      {distanceNumber: 12, distanceName: "Прохладненская дистанция пути", distancePartAndNumber: "ПЧ-12", distanceFullName: "ПЧ-12 Прохладненская дистанция пути", regionNumber: 3, regionTitle: "Минераловодский"},
      {distanceNumber: 15, distanceName: "Гудермесская дистанция пути", distancePartAndNumber: "ПЧ-15", distanceFullName: "ПЧ-15 Гудермесская дистанция пути", regionNumber: 5, regionTitle: "Грозненский"},
      {distanceNumber: 16, distanceName: "Махачкалинская дистанция пути", distancePartAndNumber: "ПЧ-16", distanceFullName: "ПЧ-16 Махачкалинская дистанция пути", regionNumber: 4, regionTitle: "Махачкалинский"},
      {distanceNumber: 18, distanceName: "Белореченская дистанция пути", distancePartAndNumber: "ПЧ-18", distanceFullName: "ПЧ-18 Белореченская дистанция пути", regionNumber: 6, regionTitle: "Туапсинский"},
      {distanceNumber: 19, distanceName: "Туапсинская дистанция пути", distancePartAndNumber: "ПЧ-19", distanceFullName: "ПЧ-19 Туапсинская дистанция пути", regionNumber: 6, regionTitle: "Туапсинский"},
      {distanceNumber: 20, distanceName: "Сочинская дистанция инфраструктуры", distancePartAndNumber: "ИЧ-1", distanceFullName: "ИЧ-1 Сочинская дистанция инфраструктуры", regionNumber: 6, regionTitle: "Туапсинский"},
      {distanceNumber: 21, distanceName: "Краснодарская дистанция пути", distancePartAndNumber: "ПЧ-21", distanceFullName: "ПЧ-21 Краснодарская дистанция пути", regionNumber: 2, regionTitle: "Краснодарский"},
      {distanceNumber: 22, distanceName: "Новороссийская дистанция пути", distancePartAndNumber: "ПЧ-22", distanceFullName: "ПЧ-22 Новороссийская дистанция пути", regionNumber: 2, regionTitle: "Краснодарский"},
      {distanceNumber: 23, distanceName: "Старотиторовская дистанция пути", distancePartAndNumber: "ПЧ-23", distanceFullName: "ПЧ-23 Старотиторовская дистанция пути", regionNumber: 2, regionTitle: "Краснодарский"},
      {distanceNumber: 24, distanceName: "Тимашевская дистанция пути", distancePartAndNumber: "ПЧ-24", distanceFullName: "ПЧ-24 Тимашевская дистанция пути", regionNumber: 2, regionTitle: "Краснодарский"},
      {distanceNumber: 26, distanceName: "Сальская дистанция пути", distancePartAndNumber: "ПЧ-26", distanceFullName: "ПЧ-26 Сальская дистанция пути", regionNumber: 1, regionTitle: "Ростовский"},
      {distanceNumber: 27, distanceName: "Куберлевская дистанция пути", distancePartAndNumber: "ПЧ-27", distanceFullName: "ПЧ-27 Куберлевская дистанция пути", regionNumber: 1, regionTitle: "Ростовский"},
      {distanceNumber: 30, distanceName: "Кизлярская дистанция пути", distancePartAndNumber: "ПЧ-30", distanceFullName: "ПЧ-30 Кизлярская дистанция пути", regionNumber: 4, regionTitle: "Махачкалинский"},
      {distanceNumber: 32, distanceName: "Горячеключевская дистанция пути", distancePartAndNumber: "ПЧ-32", distanceFullName: "ПЧ-32 Горячеключевская дистанция пути", regionNumber: 6, regionTitle: "Туапсинский"},
      {distanceNumber: 33, distanceName: "Лиховская дистанция пути", distancePartAndNumber: "ПЧ-33", distanceFullName: "ПЧ-33 Лиховская дистанция пути", regionNumber: 1, regionTitle: "Ростовский"},
      {distanceNumber: 35, distanceName: "Миллеровская дистанция пути", distancePartAndNumber: "ПЧ-35", distanceFullName: "ПЧ-35 Миллеровская дистанция пути", regionNumber: 1, regionTitle: "Ростовский"},
      {distanceNumber: 28, distanceName: "Ставропольская дистанция инфраструктуры", distancePartAndNumber: "ИЧ-3", distanceFullName: "ИЧ-3 Ставропольская дистанция инфраструктуры", regionNumber: 3, regionTitle: "Минераловодский"},
      {distanceNumber: 29, distanceName: "Ставропольская дистанция инфраструктуры", distancePartAndNumber: "ИЧ-3", distanceFullName: "ИЧ-3 Ставропольская дистанция инфраструктуры", regionNumber: 3, regionTitle: "Минераловодский"}
    ],

    directoratesOfInfrastructure: [
      {directorateNumber: 51, directorateShortName: "СКАВ", directorateFullName: "Северо-Кавказская Дирекция инфраструктуры"},
      {directorateNumber: 61, directorateShortName: "ПРИВ", directorateFullName: "Приволжская Дирекция инфраструктуры"},
    ]
}

export default DB;