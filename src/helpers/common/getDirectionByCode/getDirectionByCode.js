/* Функция вернет название направления (тип string) по переданному ей коду направления (тип number) */

export function getDirectionByCode(code) {

    if (!Number.isFinite(code)) {                     // если передано не число
        code = +code;                         // приведем его к числу
        debugger
    }

    if (Number.isNaN(code)) {                         // если передано (или после первого приведения к числу) NaN
        console.error("в функцию определяющую направление по коду направления передано не число");   // сообщение об ошибке
        return "";
    }

    switch (code) {
        case 10407: return "Отрожка - Ростов";
        case 10408: return "Журавка - Боченково";;
        case 10452: return "Предугольная-Краснодонецк";
        case 10453: return "Зверево -Новомихайловская";
        case 10454: return "Лесостепь -Юбилейная";
        case 10455: return "Лесостепь -Усть - Донецкая";
        case 10457: return "Шахтная -Каменоломни";
        case 10458: return "Хотунок -Новочеркасска";
        case 10459: return "Кизитеринка -Батайск";
        case 10460: return "Развилка -Проточный";
        case 10461: return "7 подход ст. Лихая";
        case 10462: return "6 грузовой подход Батайск";
        case 10463: return "подход Предуг.-Новомихайл";
        case 10467: return "3 главный ст. Лихая";
        case 10468: return "Вых. парка ВСев на Ростов";
        case 12801: return "Урбах-Астрахань";
        case 12802: return "Червленная Узл.-Астрахань";
        case 12901: return "Грязи-Волгоград";
        case 12938: return "Пост 1067 км - Пост 6 км";
        case 13002: return "Горная -Несветай";
        case 13036: return "Несветай -Новошахтинск";
        case 13101: return "Лозовая -Ростов";
        case 13105: return "Хапры -Батайск";
        case 13135: return "Марцево -Таганрог - 2";
        case 13136: return "Таганрог -1 - Таганрог - 2";
        case 13137: return "Первомайская -Ростов";
        case 13138: return "Темерник - Зоологич Сад";
        case 13157: return "обход ст.Хапры";
        case 13180: return "Гниловская -КрасныйСад";
        case 13201: return "Батайск -Кривенковская";
        case 13230: return "Староминск1 -Староминск2";
        case 13231: return "Тимашевская -Ахтари";
        case 13232: return "Энемский обход";
        case 13233: return "Староминская петля";
        case 13234: return "Выход с Кр.Сада на Старом";
        case 13235: return "Староминские груз.подходы";
        case 13301: return "Армавир -Туапсе";
        case 13302: return "Туапсе -Веселое";
        case 13303: return "Веселое -Сухуми";
        case 13330: return "Курганная -Шедок";
        case 13331: return "Белореченская -Хаджох";
        case 13332: return "Комсомольская -Апшеронская";
        case 13333: return "Адлер-Роза Хутор";
        case 13334: return "Имерет.Курорт -Разъезд5км";
        case 14101: return "Ростов -Армавир";
        case 14102: return "Армавир -Мин.Воды";
        case 14103: return "Мин.Воды -Гудермес";
        case 14104: return "Прохладная -Гудермес";
        case 14105: return "Гудермес -Самур";
        case 14136: return "Сальские груз.подходы";
        case 14137: return "Тихорецкие груз.подходы";
        case 14138: return "14 обводной путь МинВоды";
        case 14139: return "Батайск -Азов";
        case 14140: return "Батайск -Сальск";
        case 14141: return "Сосыка -Ейск";
        case 14142: return "Краснод.обход Тихорецкая";
        case 14143: return "Сальский обход Тихорецкая";
        case 14144: return "Армавир I-Армавир II";
        case 14145: return "Зеленчук -Джегута";
        case 14146: return "Мин.Воды -Кисловодск";
        case 14147: return "Бештау -Железноводск";
        case 14149: return "Котляревская -Нальчик";
        case 14150: return "Дарг -Кох - Алагир";
        case 14151: return "Беслан -Владикавказ";
        case 14153: return "Гудермес - Разъезд 2 км";
        case 14154: return "Джалка -Гудермес";
        case 14155: return "Шамхал -Буйнакск";
        case 14157: return "Батайский обход";
        case 14158: return "Кизляр -Кизил - Юрт";
        case 19201: return "Дебальцево -Заповедная";
        case 19202: return "Заповедная -Замчалово";
        case 19301: return "Дебальцево -Миллерово";
        case 19402: return "Лихая -Волгоград";
        case 19430: return "6 подход ст. Лихая";
        case 19440: return "Морозовская -Куберле";
        case 21101: return "Разгуляевка -Н.Баскунчак";
        case 21201: return "Волгоград -Краснодар";
        case 21202: return "Энем -Новороссийск";
        case 21203: return "Козырьки -Гречаная";
        case 21133: return "Солончак-В.Баскунчак";
        case 21233: return "Песчанокопская -Передовая";
        case 21237: return "Крымская -Грушевая";
        case 21238: return "Новороссийская петля";
        case 21302: return "Разъезд 9 км - Кавказ";
        case 21330: return "Крымская -Тимашевская";
        case 21331: return "Юровский -Анапа";
        case 21333: return "Красная Стрела - Темрюк";
        case 21334: return "Подход 1 ст. Разъезд 9 км";
        case 21335: return "Подход 2 ст. Разъезд 9 км";
        case 21401: return "Кавказская -Элиста";
        case 21402: return "Кавказская -Краснодар";
        case 21430: return "Палагиада -Ставрополь";
        case 21431: return "Светлоград -Георгиевск";
        case 21432: return "Краснодар -Витаминный";
        case 21433: return "Краснодар -Пашковская";
        case 21434: return "Краснодар -Лорис";
        case 21435: return "Буденновск1 -Буденновск2";
        case 21436: return "Обвод. путь ст .Буденновск";
        case 21437: return "Обвод.путь ст.Пашковская";
        case 55001: return "На Железный Рог";
        case 55002: return "Вышестеблиевская -Керчь";
        default: {
            console.error("Внимание!!!!! Код направления в функции не найден, перепроверьте функцию getDirectionByCode!!!!! Переданный код направления: " + code);
            return "";
        }
    }

    // if (code === 10407) return "Отрожка - Ростов";
    // else if (code === 10408) return "Журавка - Боченково";
    // else if (code === 10408) return "Журавка - Боченково";
    // else if (code === 10408) return "Журавка - Боченково"
    // else if (code === 10452) return "Предугольная-Краснодонецк"
    // else if (code === 10453) return "Зверево -Новомихайловская"
    // else if (code === 10454) return "Лесостепь -Юбилейная"
    // else if (code === 10455) return "Лесостепь -Усть - Донецкая"
    // else if (code === 10457) return "Шахтная -Каменоломни"
    // else if (code === 10458) return "Хотунок -Новочеркасска"
    // else if (code === 10459) return "Кизитеринка -Батайск"
    // else if (code === 10460) return "Развилка -Проточный"
    // else if (code === 10461) return "7 подход ст. Лихая"
    // else if (code === 10462) return "6 грузовой подход Батайск"
    // else if (code === 10463) return "подход Предуг.-Новомихайл"
    // else if (code === 10467) return "3 главный ст. Лихая"
    // else if (code === 10468) return "Вых. парка ВСев на Ростов"
    // else if (code === 12802) return "Червленная Узл.-Астрахань"
    // else if (code === 13002) return "Горная -Несветай"
    // else if (code === 13036) return "Несветай -Новошахтинск"
    // else if (code === 13101) return "Лозовая -Ростов"
    // else if (code === 13105) return "Хапры -Батайск"
    // else if (code === 13135) return "Марцево -Таганрог - 2"
    // else if (code === 13136) return "Таганрог -1 - Таганрог - 2"
    // else if (code === 13137) return "Первомайская -Ростов"
    // else if (code === 13138) return "Темерник - Зоологич Сад"
    // else if (code === 13157) return "обход ст.Хапры"
    // else if (code === 13180) return "Гниловская -КрасныйСад"
    // else if (code === 13201) return "Батайск -Кривенковская"
    // else if (code === 13230) return "Староминск1 -Староминск2"
    // else if (code === 13231) return "Тимашевская -Ахтари"
    // else if (code === 13232) return "Энемский обход"
    // else if (code === 13233) return "Староминская петля"
    // else if (code === 13234) return "Выход с Кр.Сада на Старом"
    // else if (code === 13235) return "Староминские груз.подходы"
    // else if (code === 13301) return "Армавир -Туапсе"
    // else if (code === 13302) return "Туапсе -Веселое"
    // else if (code === 13303) return "Веселое -Сухуми"
    // else if (code === 13330) return "Курганная -Шедок"
    // else if (code === 13331) return "Белореченская -Хаджох"
    // else if (code === 13332) return "Комсомольская -Апшеронская"
    // else if (code === 13333) return "Адлер-Роза Хутор"
    // else if (code === 13334) return "Имерет.Курорт -Разъезд5км"
    // else if (code === 14101) return "Ростов -Армавир"
    // else if (code === 14102) return "Армавир -Мин.Воды"
    // else if (code === 14103) return "Мин.Воды -Гудермес"
    // else if (code === 14104) return "Прохладная -Гудермес"
    // else if (code === 14105) return "Гудермес -Самур"
    // else if (code === 14136) return "Сальские груз.подходы"
    // else if (code === 14137) return "Тихорецкие груз.подходы"
    // else if (code === 14138) return "14 обводной путь МинВоды"
    // else if (code === 14139) return "Батайск -Азов"
    // else if (code === 14140) return "Батайск -Сальск"
    // else if (code === 14141) return "Сосыка -Ейск"
    // else if (code === 14142) return "Краснод.обход Тихорецкая"
    // else if (code === 14143) return "Сальский обход Тихорецкая"
    // else if (code === 14144) return "Армавир I-Армавир II"
    // else if (code === 14145) return "Зеленчук -Джегута"
    // else if (code === 14146) return "Мин.Воды -Кисловодск"
    // else if (code === 14147) return "Бештау -Железноводск"
    // else if (code === 14149) return "Котляревская -Нальчик"
    // else if (code === 14150) return "Дарг -Кох - Алагир"
    // else if (code === 14151) return "Беслан -Владикавказ"
    // else if (code === 14153) return "Гудермес - Разъезд 2 км"
    // else if (code === 14154) return "Джалка -Гудермес"
    // else if (code === 14155) return "Шамхал -Буйнакск"
    // else if (code === 14157) return "Батайский обход"
    // else if (code === 14158) return "Кизляр -Кизил - Юрт"
    // else if (code === 19201) return "Дебальцево -Заповедная"
    // else if (code === 19202) return "Заповедная -Замчалово"
    // else if (code === 19301) return "Дебальцево -Миллерово"
    // else if (code === 19402) return "Лихая -Волгоград"
    // else if (code === 19430) return "6 подход ст. Лихая"
    // else if (code === 19440) return "Морозовская -Куберле"
    // else if (code === 21101) return "Разгуляевка -Н.Баскунчак"
    // else if (code === 21201) return "Волгоград -Краснодар"
    // else if (code === 21202) return "Энем -Новороссийск"
    // else if (code === 21203) return "Козырьки -Гречаная"
    // else if (code === 21233) return "Песчанокопская -Передовая"
    // else if (code === 21237) return "Крымская -Грушевая"
    // else if (code === 21238) return "Новороссийская петля"
    // else if (code === 21302) return "Разъезд 9 км - Кавказ"
    // else if (code === 21330) return "Крымская -Тимашевская"
    // else if (code === 21331) return "Юровский -Анапа"
    // else if (code === 21333) return "Красная Стрела - Темрюк"
    // else if (code === 21334) return "Подход 1 ст. Разъезд 9 км"
    // else if (code === 21335) return "Подход 2 ст. Разъезд 9 км"
    // else if (code === 21401) return "Кавказская -Элиста"
    // else if (code === 21402) return "Кавказская -Краснодар"
    // else if (code === 21430) return "Палагиада -Ставрополь"
    // else if (code === 21431) return "Светлоград -Георгиевск"
    // else if (code === 21432) return "Краснодар -Витаминный"
    // else if (code === 21433) return "Краснодар -Пашковская"
    // else if (code === 21434) return "Краснодар -Лорис"
    // else if (code === 21435) return "Буденновск1 -Буденновск2"
    // else if (code === 21436) return "Обвод. путь ст .Буденновск"
    // else if (code === 21437) return "Обвод.путь ст.Пашковская"
    // else if (code === 55001) return "На Железный Рог"
    // else if (code === 55002) return "Вышестеблиевская -Керчь"
    // else {
    //     console.error("Внимание!!!!! Код направления в функции не найден, перепроверьте функцию getNapravleniePocodeu!!!!!");
    //     return "";
    // }
}