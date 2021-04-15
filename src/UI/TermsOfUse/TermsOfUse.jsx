import { Button, Alert } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import {
    setIsTermsOfUseButtonClickedActionCreator,
    setIsUserAgreesWithTermsOfUseActionCreator
} from "../../state/features/termsOfUse/actionCreators";
import {
    selectIsTermsOfUseButtonClicked,
    selectIsUserAgreesWithTermsOfUse
} from "../../state/features/termsOfUse/selectors";

export const TermsOfUse = () => {
    // -------------------------------------------------------------- Хуки ---------------------------------------------------------------------------
    const dispatch = useDispatch();
    const isTermsOfUseButtonClicked = useSelector(selectIsTermsOfUseButtonClicked);
    const isUserAgreesWithTermsOfUse = useSelector(selectIsUserAgreesWithTermsOfUse);
    // -------------------------------------------------------------- / Хуки -------------------------------------------------------------------------

    // ------------ При клике по любой кнопке (согласен или не согласен с пользовательским соглашением) ----------------------------------------------
    const onTermsOfUseButtonClick = (isUserAgrees) => {
        dispatch(setIsTermsOfUseButtonClickedActionCreator(true));
        dispatch(setIsUserAgreesWithTermsOfUseActionCreator(isUserAgrees));
    }
    // ------------ / При клике по любой кнопке (согласен или не согласен с пользовательским соглашением) --------------------------------------------


    return (
        <div className="container">
            <h2>Условия использования данного сайта</h2>
            <p>1. ОБЩИЕ ПОЛОЖЕНИЯ</p>
            <p>1.1. Настоящее Пользовательское соглашение (далее – Соглашение) относится к сайту «НАЗВАНИЕ
            САЙТА», расположенному по адресу АДРЕС САЙТА.</p>
            <p>1.2. Настоящее Соглашение регулирует отношения между Администрацией сайта «НАЗВАНИЕ САЙТА»
            (далее – Администрация сайта) и Пользователем данного Сайта.</p>
            <p>1.3. Администрация сайта оставляет за собой право в любое время изменять, добавлять или удалять
            пункты настоящего Соглашения без уведомления Пользователя.</p>
            <p>1.4. Использование Сайта Пользователем означает принятие Соглашения и изменений, внесенных в
            настоящее Соглашение.</p>
            <p>1.5. Пользователь несет персональную ответственность за проверку настоящего Соглашения на
            наличие изменений в нем.</p>
            <p><b>1.6. Данный сайт является приложением без серверной части, при получении от пользователя любого файла,
            а так же при расчетах, осуществляемых на основе переданного файла, принятый сайтом файл остается на клентской части (в браузере Пользователя)
                и в сеть интернет, на какой-либо сервер и т.п. НЕ ПЕРЕДАЕТСЯ. Ваш файл остается у ВАС на компьютере и все расчеты осеществляет ВАШ компьютер (ВАШ браузер).</b></p>
            <br></br>
            <p>2. ОПРЕДЕЛЕНИЯ ТЕРМИНОВ</p>
            <p>2.1. Перечисленные ниже термины имеют для целей настоящего Соглашения следующее значение:</p>
            <p>2.1.1 «НАЗВАНИЕ САЙТА» – Интернет-ресурс, расположенный на доменном имени АДРЕС САЙТА,
            осуществляющий свою деятельность посредством Интернет-ресурса и сопутствующих ему сервисов
            (далее - Сайт).</p>
            <p>2.1.2. «НАЗВАНИЕ САЙТА» – сайт, содержащий информацию о Товарах и/или Услугах и/или Иных
            ценностях для пользователя, Продавце и/или Исполнителе услуг, позволяющий осуществить выбор,
            заказ и (или) приобретение Товара, и/или получение услуги.</p>
            <p>2.1.3. Администрация сайта – уполномоченные сотрудники на управления Сайтом, действующие от
            имени юридического лица ОРГАНИЗАЦИЯ.</p>
            <p>2.1.4. Пользователь сайта (далее - Пользователь) – лицо, имеющее доступ к Сайту, посредством сети
            Интернет и использующее Сайт.</p>
            <p>2.1.5. Содержание сайта (далее – Содержание) - охраняемые результаты интеллектуальной
            деятельности, включая тексты литературных произведений, их названия, предисловия, аннотации,
            статьи, иллюстрации, обложки, музыкальные произведения с текстом или без текста, графические,
            текстовые, фотографические, производные, составные и иные произведения, пользовательские
            интерфейсы, визуальные интерфейсы, названия товарных знаков, логотипы, программы для ЭВМ, базы
            данных, а также дизайн, структура, выбор, координация, внешний вид, общий стиль и расположение
            данного Содержания, входящего в состав Сайта и другие объекты интеллектуальной собственности все
            вместе и/или по отдельности, содержащиеся на сайте АДРЕС САЙТА.</p>
            <br></br>
            <p>3. ПРЕДМЕТ СОГЛАШЕНИЯ</p>
            <p>3.1. Предметом настоящего Соглашения является предоставление Пользователю доступа к
            содержащимся на Сайте Товарам и/или оказываемым услугам.</p>
            <p>3.1.1. Сайт предоставляет Пользователю следующие виды услуг (сервисов):
             ознакомление с товарами/услугами, размещенными на Сайте;
             выбор и заказ товаров/услуг для осуществления последующей покупки или оформления на
            данном Сайте.</p>
            <p>3.1.2. Под действие настоящего Соглашения подпадают все существующие (реально
            функционирующие) на данный момент услуги (сервисы) Сайта, а также любые их последующие
            модификации и появляющиеся в дальнейшем дополнительные услуги (сервисы).</p>
            <p>3.2. Доступ к сайту предоставляется на бесплатной основе.</p>
            <p>3.3. Настоящее Соглашение является публичной офертой. Получая доступ к Сайту Пользователь
            считается присоединившимся к настоящему Соглашению.</p>
            <p>3.4. Использование материалов и сервисов Сайта регулируется нормами действующего
            законодательства Российской Федерации</p>
            <br></br>
            <p>4. ПРАВА И ОБЯЗАННОСТИ СТОРОН</p>
            <p>4.1. Администрация сайта вправе:</p>
            <p>4.1.1. Изменять правила пользования Сайтом, а также изменять содержание данного Сайта.
                Изменения вступают в силу с момента публикации новой редакции Соглашения на Сайте.</p>
            <p>4.2. Пользователь вправе:</p>
            <p>4.2.1. Пользоваться всеми имеющимися на Сайте услугами, а также приобретать любые Товары и/или
                Услуги, предлагаемые на Сайте.</p>
            <p>4.2.2. Задавать любые вопросы, относящиеся к услугам сайта:</p>
             по электронной почте: ПОЧТА
            <p>4.2.3. Пользоваться Сайтом исключительно в целях и порядке, предусмотренных Соглашением и не
                запрещенных законодательством Российской Федерации.</p>
            <p>4.2.5. Требовать от администрации скрытия любой информации о пользователе.</p>
            <p>4.2.6. Использовать информацию сайта в коммерческих целях без специального разрешения.</p>
            <p>4.3. Пользователь Сайта обязуется:</p>
            <p>4.3.1. Предоставлять по запросу Администрации сайта дополнительную информацию, которая имеет
            непосредственное отношение к предоставляемым услугам данного Сайта.</p>
            <p>4.3.2. Соблюдать имущественные и неимущественные права авторов и иных правообладателей при
            использовании Сайта.</p>
            <p>4.3.3. Не предпринимать действий, которые могут рассматриваться как нарушающие нормальную
            работу Сайта.</p>
            <p>4.3.4. Не распространять с использованием Сайта любую конфиденциальную и охраняемую
            законодательством Российской Федерации информацию о физических либо юридических лицах.</p>
            <p>4.3.5. Избегать любых действий, в результате которых может быть нарушена конфиденциальность
            охраняемой законодательством Российской Федерации информации.</p>
            <p>4.3.6. Не использовать Сайт для распространения информации рекламного характера, иначе как с
            согласия Администрации сайта.</p>
            <p>4.3.7. Не использовать сервисы с целью:</p>
            <p>4.3.7.1. нарушения прав несовершеннолетних лиц и (или) причинение им вреда в любой форме.</p>
            <p>4.3.7.2. ущемления прав меньшинств.</p>
            <p>4.3.7.3. представления себя за другого человека или представителя организации и (или) сообщества
            без достаточных на то прав, в том числе за сотрудников данного сайта.</p>
            <p>4.3.7.4. введения в заблуждение относительно свойств и характеристик какого-либо Товара и/или
            услуги, размещенных на Сайте.</p>
            <p>4.3.7.5. некорректного сравнения Товара и/или Услуги, а также формирования негативного отношения
            к лицам, (не) пользующимся определенными Товарами и/или услугами, или осуждения таких лиц.</p>
            <p>4.3.7.6. загрузки контента, который является незаконным, нарушает любые права третьих лиц;
            пропагандирует насилие, жестокость, ненависть и (или) дискриминацию по расовому, национальному,
            половому, религиозному, социальному признакам; содержит недостоверные сведения и (или)
            оскорбления в адрес конкретных лиц, организаций, органов власти.</p>
            <p>4.3.7.7. побуждения к совершению противоправных действий, а также содействия лицам, действия
            которых направлены на нарушение ограничений и запретов, действующих на территории Российской
            Федерации.</p>
            <p>4.3.8. Обеспечить достоверность предоставляемой информации</p>
            <p>4.3.9. Обеспечивать сохранность личных данных от доступа третьих лиц.</p>
            <p>4.4. Пользователю запрещается:</p>
            <p>4.4.1. Использовать любые устройства, программы, процедуры, алгоритмы и методы, автоматические
            устройства или эквивалентные ручные процессы для доступа, приобретения, копирования или
            отслеживания содержания Сайта.</p>
            <p>4.4.2. Нарушать надлежащее функционирование Сайта.</p>
            <p>4.4.3. Любым способом обходить навигационную структуру Сайта для получения или попытки
            получения любой информации, документов или материалов любыми средствами, которые специально
            не представлены сервисами данного Сайта.</p>
            <p>4.4.4. Несанкционированный доступ к функциям Сайта, любым другим системам или сетям,
            относящимся к данному Сайту, а также к любым услугам, предлагаемым на Сайте.</p>
            <p>4.4.4. Нарушать систему безопасности или аутентификации на Сайте или в любой сети, относящейся к
            Сайту.</p>
            <p>4.4.5. Выполнять обратный поиск, отслеживать или пытаться отслеживать любую информацию о
            любом другом Пользователе Сайта.</p>
            <p>4.4.6. Использовать Сайт и его Содержание в любых целях, запрещенных законодательством
            Российской Федерации, а также подстрекать к любой незаконной деятельности или другой
            деятельности, нарушающей права Сайта или других лиц.</p>
            <br></br>
            <p>5. ИСПОЛЬЗОВАНИЕ САЙТА</p>
            <p>5.1. Сайт и Содержание, входящее в состав Сайта, принадлежит и управляется Администрацией сайта.</p>
            <p>5.2. Содержание Сайта защищено авторским правом, законодательством о товарных знаках, а также
            другими правами, связанными с интеллектуальной собственностью, и законодательством о
            недобросовестной конкуренции.</p>
            <p>5.3. Настоящее Соглашение распространяет свое действия на все дополнительные положения и
            условия о покупке Товара и/или оказанию услуг, предоставляемых на Сайте.</p>
            <p>5.4. Информация, размещаемая на Сайте не должна истолковываться как изменение настоящего
            Соглашения.</p>
            <p>5.5. Администрация сайта имеет право в любое время без уведомления Пользователя вносить
            изменения в перечень Товаров и услуг, предлагаемых на Сайте, и (или) их цен.</p>
            <br></br>
            <p>6. ОТВЕТСТВЕННОСТЬ</p>
            <p>6.1. Любые убытки, которые Пользователь может понести в случае умышленного или неосторожного
            нарушения любого положения настоящего Соглашения, а также вследствие несанкционированного
            доступа к коммуникациям другого Пользователя, Администрацией сайта не возмещаются.</p>
            <p>6.2. Администрация сайта не несет ответственности за:</p>
            <p><b>6.2.1. Верность вычисленных данных. Прежде чем Скопировать (вставить)
            данные предоставленные сайтом Пользователь обязуется самостоятельно проверять все данные предоставленные сайтом
                на правильность вычислений и верность предоставленных данных. </b></p>
            <p>6.2.1. Задержки или сбои в процессе совершения операции, возникшие вследствие непреодолимой
            силы, а также любого случая неполадок в телекоммуникационных, компьютерных, электрических и
            иных смежных системах.</p>
            <p>6.2.2. Действия систем переводов, банков, платежных систем и за задержки связанные с их работой.</p>
            <p>6.2.3. Надлежащее функционирование Сайта, в случае, если Пользователь не имеет необходимых
            технических средств для его использования, а также не несет никаких обязательств по обеспечению
            пользователей такими средствами.</p>
            <br></br>
            <p>7. НАРУШЕНИЕ УСЛОВИЙ ПОЛЬЗОВАТЕЛЬСКОГО СОГЛАШЕНИЯ</p>
            <p>7.1. Администрация сайта имеет право раскрыть информацию о Пользователе, если действующее
            законодательство Российской Федерации требует или разрешает такое раскрытие.</p>
            <p>7.2. Администрация сайта вправе без предварительного уведомления Пользователя прекратить и (или)
            заблокировать доступ к Сайту, если Пользователь нарушил настоящее Соглашение или содержащиеся
            в иных документах условия пользования Сайтом, а также в случае прекращения действия Сайта либо
            по причине технической неполадки или проблемы.</p>
            <p>7.3. Администрация сайта не несет ответственности перед Пользователем или третьими лицами за
            прекращение доступа к Сайту в случае нарушения Пользователем любого положения настоящего
            Соглашения или иного документа, содержащего условия пользования Сайтом.</p>
            <br></br>
            <p>8. РАЗРЕШЕНИЕ СПОРОВ</p>
            <p>8.1. В случае возникновения любых разногласий или споров между Сторонами настоящего Соглашения
            обязательным условием до обращения в суд является предъявление претензии (письменного
            предложения о добровольном урегулировании спора).</p>
            <p>8.2. Получатель претензии в течение 30 календарных дней со дня ее получения, письменно
            уведомляет заявителя претензии о результатах рассмотрения претензии.</p>
            <p>8.3. При невозможности разрешить спор в добровольном порядке любая из Сторон вправе обратиться
            в суд за защитой своих прав, которые предоставлены им действующим законодательством Российской
            Федерации.</p>
            <p>8.4. Любой иск в отношении условий использования Сайта должен быть предъявлен в течение 5 дней
            после возникновения оснований для иска, за исключением защиты авторских прав на охраняемые в
            соответствии с законодательством материалы Сайта. При нарушении условий данного пункта любой
            иск оставляется судом без рассмотрения.</p>
            <br></br>
            <p>9. ДОПОЛНИТЕЛЬНЫЕ УСЛОВИЯ</p>
            <p>9.1. Администрация сайта не принимает встречные предложения от Пользователя относительно
            изменений настоящего Пользовательского соглашения.</p>
            <p>9.2. Отзывы Пользователя, размещенные на Сайте, не являются конфиденциальной информацией и
            могут быть использованы Администрацией сайта без ограничений.</p>

            <div style={{ color: "red", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                {isTermsOfUseButtonClicked && !isUserAgreesWithTermsOfUse ? <Alert message="Вы НЕ согласились с Пользовательским Соглашением. Использование этот сайта невозможно" type="error" showIcon /> : null}
                {isTermsOfUseButtonClicked && isUserAgreesWithTermsOfUse ? <Alert message="Вы согласились с Пользовательским Соглашением" type="success" showIcon /> : null}
                {!isTermsOfUseButtonClicked
                    ? <>
                        <Button type="primary" onClick={() => onTermsOfUseButtonClick(true)}>Я соглашаюсь с Условиями Использования данного сайта</Button>
                        <Button type="primary" danger onClick={() => onTermsOfUseButtonClick(false)}>Я НЕ соглашаюсь с Условиями Использования данного сайта</Button>
                    </>
                    : null}
            </div>
        </div>
    );
}