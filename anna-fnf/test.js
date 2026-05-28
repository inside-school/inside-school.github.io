// ==========================================
// 1. БАЗА ДАНИХ ЗАПИТАНЬ ТА ВАРІАНТІВ ВІДПОВІДЕЙ
// ==========================================
const quizData = [
   {
      question: "1. Який твій улюблений темп у музиці?",
      answers: [
         { text: "Шалений та екстремальний швидкісний ритм", chars: ["tricky", "whitty", "evilbf", "matt", "sonic_exe"] },
         { text: "Помірно швидкий, під який круто читати реп або рухатися", chars: ["bf", "pico", "darnell", "pico_playable", "kapi"] },
         { text: "Повільний, розслаблюючий та атмосферний", chars: ["garcello", "gf", "monika"] },
         { text: "Мелодійний, з красивими інструментальними або поп-нотами", chars: ["sarvente", "senpai", "mommy", "sky"] },
         { text: "Маршовий, чіткий та ритмічний, як на військовому параді", chars: ["tankman", "daddy", "shaggy", "skid_pump", "monster"] }
      ]
   },
   {
      question: "2. Що ти зробиш, якщо тебя публічно образять на очах у всіх?",
      answers: [
         { text: "Одразу викликаю на музичний або словесний дуель, щоб довести крутість", chars: ["bf", "senpai", "mommy", "kapi"] },
         { text: "Дістану зброю або вирішу питання жорсткою фізичною силою", chars: ["pico", "tankman", "pico_playable", "nene", "tabi"] },
         { text: "Повністю втрачу контроль від люті і рознесу все навколо", chars: ["whitty", "tricky", "evilbf", "senpai_mad", "sonic_exe"] },
         { text: "Проігнорую з посмішкою, адже я вище цього і не хочу витрачати сили", chars: ["gf", "garcello", "darnell", "shaggy"] },
         { text: "Спробую закликати до совісті або перетворю це на містичний жарт", chars: ["sarvente", "daddy", "skid_pump", "monster", "sky", "monika"] }
      ]
   },
   {
      question: "3. Обери свій улюблений напій для вечірки чи відпочинку:",
      answers: [
         { text: "Яскравий енергетик, газировка або солодкий сік", chars: ["bf", "gf", "skid_pump", "sky", "kapi"] },
         { text: "Гаряча міцна кава, зелений чай або щось розслаблююче", chars: ["garcello", "sarvente", "monika", "shaggy"] },
         { text: "Щось із вибуховим смаком або кислий шипучий тонік", chars: ["whitty", "tricky", "darnell", "tabi"] },
         { text: "Елітні напої з льодом у дорогому скляному бокалі", chars: ["senpai", "daddy", "mommy"] },
         { text: "Звичайна чиста вода, я завжди тримаю себе в повній готовності", chars: ["pico", "tankman", "pico_playable", "nene", "evilbf", "monster", "senpai_mad", "sonic_exe"] }
      ]
   },
   {
      question: "4. Яка твоя найбільша внутрішня слабкість?",
      answers: [
         { text: "Занадто сильно піддаюся азарту, ризикую і дію напролом", chars: ["bf", "evilbf", "pico_playable"] },
         { text: "Мені дуже важко контролювати спалахи агресії та гніву", chars: ["whitty", "tricky", "tabi", "senpai_mad", "sonic_exe"] },
         { text: "Занадто сильно переймаюся своїм статусом, грошима чи зовнішністю", chars: ["senpai", "daddy", "mommy"] },
         { text: "Схильність до шкідливих звичок, ліні або занадто простого ставлення до життя", chars: ["garcello", "darnell", "shaggy", "kapi"] },
         { text: "Нав'язливі думки, приховані тривоги чи фанатична прив'язаність до чогось", chars: ["pico", "tankman", "gf", "sarvente", "nene", "sky", "monika", "skid_pump", "monster"] }
      ]
   },
   {
      question: "5. Який колір або елемент візуального стилю тобі ближчий?",
      answers: [
         { text: "Яскрава неонова палітра (блакитний, рожевий, фіолетовий)", chars: ["bf", "gf", "mommy", "sky", "kapi"] },
         { text: "Суворий мілітарі, хакі, помаранчевий вогонь або вуличний стиль", chars: ["pico", "darnell", "tankman", "pico_playable", "nene"] },
         { text: "Темні, готичні, похмурі або глибокі бордові відтінки", chars: ["sarvente", "daddy", "evilbf", "monster", "tabi"] },
         { text: "Кислотно-зелений, глітч-ефекти або криваво-червоний хаос", chars: ["tricky", "whitty", "senpai_mad", "sonic_exe"] },
         { text: "Пастельні, приглушені, класичні або ретро піксельні тони", chars: ["garcello", "senpai", "monika", "shaggy", "skid_pump"] }
      ]
   },
   {
      question: "6. Що для тебе є справжньою дружбою?",
      answers: [
         { text: "Готовність прикрити спину в бою і піти за друг хоч у пекло", chars: ["bf", "pico", "darnell", "pico_playable", "nene"] },
         { text: "Можливість просто побути собою, затишно помовчати і розслабитися", chars: ["garcello", "gf", "shaggy", "kapi"] },
         { text: "Поняття, в яке я не дуже вірю, я зазвичай вовк-одинак", chars: ["whitty", "tricky", "evilbf", "tabi", "senpai_mad"] },
         { text: "Вірність своїй команді, фракції, релігії або великій родині", chars: ["tankman", "daddy", "sarvente", "mommy", "monika"] },
         { text: "Коли мене обожнюють, цінують або весело граються зі мною", chars: ["senpai", "sky", "skid_pump", "monster", "sonic_exe"] }
      ]
   },
   {
      question: "7. Опиши своє ставлення до закону, правил та суспільних рамок:",
      answers: [
         { text: "Я сам встановлюю закони і правила, а інші мають підкорятися", chars: ["daddy", "tankman", "mommy", "sonic_exe"] },
         { text: "Поважаю правила, якщо вони логічні і нікому не заважають спокійно жити", chars: ["garcello", "sarvente", "gf", "shaggy"] },
         { text: "Іноді порушую їх заради веселощів, адреналіну або кохання", chars: ["bf", "darnell", "sky", "skid_pump", "kapi"] },
         { text: "Я перебуваю у стані постійної війни із системою та правилами", chars: ["pico", "whitty", "pico_playable", "nene", "tabi"] },
         { text: "Закон? Я можу стерти цей закон, переписати код або знищити всесвіт!", chars: ["tricky", "evilbf", "senpai", "monster", "senpai_mad", "monika"] }
      ]
   },
   {
      question: "8. Яка твоя реакція, коли ти бачиш дуже сильного суперника?",
      answers: [
         { text: "Широко усміхнуся і з шаленим азартом кинуся в бій!", chars: ["bf", "darnell", "pico_playable", "matt"] },
         { text: "Оціню тверезо ситуацію, підготую стратегію і знайду його слабке місце", chars: ["pico", "tankman", "garcello", "nene", "monika"] },
         { text: "Здивуюся, але випущу всю свою приховану силу або демона для захисту", chars: ["sarvente", "gf", "whitty", "tabi", "sky"] },
         { text: "Почну дико сміятися, гратися з ним або хаотично атакувати без плану", chars: ["tricky", "evilbf", "skid_pump", "monster", "senpai_mad", "sonic_exe"] },
         { text: "Зневажливо подивлюся зверху вниз, адже я все одно вважаю себе кращим", chars: ["senpai", "daddy", "mommy", "shaggy", "kapi"] }
      ]
   },
   {
      question: "9. Який предмет ти б вибрав як свій головний талісман чи зброю?",
      answers: [
         { text: "Мій вірний вокальний мікрофон, який ніколи не підводить", chars: ["bf", "mommy", "sky", "matt"] },
         { text: "Надійну вогнепальну зброю (УЗІ, гвинтівку) або гострий ніж", chars: ["pico", "tankman", "pico_playable", "nene", "tabi"] },
         { text: "Святий хрест, сімейну реліквію або дорогу прикрасу", chars: ["sarvente", "daddy", "senpai"] },
         { text: "Щось дивне: сталевий дорожній знак, каністру бензину чи містичний глітч", chars: ["tricky", "whitty", "evilbf", "monster", "senpai_mad", "sonic_exe"] },
         { text: "Звичайні побутові речі: балончик із фарбою, сигарету чи танцювальний автомат", chars: ["garcello", "darnell", "shaggy", "skid_pump", "kapi", "monika"] }
      ]
   },
   {
      question: "10. Яка локація для музичного баттлу тобі подобається найбільше?",
      answers: [
         { text: "Яскрава неонова сцена або дах лімузина перед натовпом фанатів", chars: ["bf", "gf", "mommy", "sky", "matt"] },
         { text: "Покинута похмура алея, воєнне поле або таємний підземний бункер", chars: ["pico", "tankman", "whitty", "pico_playable", "nene", "tabi"] },
         { text: "Старовинний величний собор, затишний театр або дорогий офіс", chars: ["sarvente", "daddy", "monika"] },
         { text: "Червона пустеля, глітчевий простір або хоррор-локація зі скримерами", chars: ["tricky", "evilbf", "monster", "senpai_mad", "sonic_exe"] },
         { text: "Тихий міський провулок, ігровий автомат або ретро-піксельний шкільний двір", chars: ["garcello", "senpai", "darnell", "shaggy", "skid_pump", "kapi"] }
      ]
   },
   {
      question: "11. Як ти ставишся к критиці чи хейту на свою адресу?",
      answers: [
         { text: "Mentі абсолютно байдуже, що про мене говорять чужі люди", chars: ["garcello", "gf", "whitty", "shaggy"] },
         { text: "Вона мене тільки мотивує стати ще сильнішим і втерти їм носа", chars: ["bf", "darnell", "pico_playable", "matt"] },
         { text: "Якщо хейтер перейде межу — він отримає кулю, догану або помсту", chars: ["pico", "tankman", "daddy", "mommy", "nene", "tabi"] },
         { text: "Це глибоко ображає мою вразливу душу, хоч я і вдаю спокій", chars: ["senpai", "sarvente", "sky"] },
         { text: "У відповідь я просто починаю шалено сміятися, ламати код або трощити все", chars: ["tricky", "evilbf", "monster", "senpai_mad", "monika", "sonic_exe", "skid_pump"] }
      ]
   },
   {
      question: "12. Що ти найбільше цінуєш у людях навколо тебе?",
      answers: [
         { text: "Чесність, доброту, простоту та внутрішній душевний спокій", chars: ["garcello", "gf", "shaggy"] },
         { text: "Сміливість, азарт та готовність ризикувати заради своєї мрії", chars: ["bf", "darnell", "evilbf", "sky", "kapi", "matt"] },
         { text: "Дисципліну, залізну силу волі та абсолютну відданість справі", chars: ["tankman", "sarvente", "pico", "pico_playable", "tabi"] },
         { text: "Вишукані манери, високий статус та бездоганний зовнішній вигляд", chars: ["senpai", "daddy", "mommy", "monika"] },
         { text: "Я взагалі не ціную людей, більшість із них мене просто дратує", chars: ["whitty", "tricky", "monster", "senpai_mad", "sonic_exe", "nene", "skid_pump"] }
      ]
   },
   {
      question: "13. Опиши свій звичайний ранок після сну:",
      answers: [
         { text: "Прокидаюся миттєво, з купою божевільної енергії та планів", chars: ["bf", "darnell", "sky", "skid_pump", "matt"] },
         { text: "Дуже довго п'ю каву або чай і намагаюся взагалі прийти до тями", chars: ["garcello", "gf", "whitty", "kapi", "shaggy"] },
         { text: "Починаю ранок із перевірки свого спорядження, зброї або робочих наказів", chars: ["pico", "tankman", "daddy", "mommy", "pico_playable", "nene"] },
         { text: "Приводжу себе в повний порядок: зачіска, дзеркало або ранкова рутина", chars: ["sarvente", "senpai", "monika"] },
         { text: "Я взагалі майже не сплю, я частина нічного кошмару або цифрового простору", chars: ["tricky", "evilbf", "monster", "senpai_mad", "sonic_exe", "tabi"] }
      ]
   },
   {
      question: "14. Який твій головний життєвий девіз?",
      answers: [
         { text: "«Крокуй сміливо у свій власний такт і ніколи не здавайся!»", chars: ["bf", "gf", "sky", "matt"] },
         { text: "«Будь готовий до жорсткого бою кожної секунди свого життя»", chars: ["pico", "tankman", "darnell", "pico_playable", "nene", "tabi"] },
         { text: "«Просто розслабся і відпусти ситуацію, життя занадто коротке»", chars: ["garcello", "shaggy", "kapi"] },
         { text: "«Поважай мій статус, авторитет або красу, або тримайся далі»", chars: ["whitty", "sarvente", "daddy", "mommy", "senpai", "monika"] },
         { text: "«Чистий хаос та безумство — ось єдина справжня реальність!»", chars: ["tricky", "evilbf", "monster", "senpai_mad", "sonic_exe", "skid_pump"] }
      ]
   },
   {
      question: "15. Що ти зробиш, якщо гравець упустить ноту під час твого найважчого треку?",
      answers: [
         { text: "Дам йому шанс виправитися на наступному біті і підбадьорю", chars: ["bf", "gf", "garcello", "skid_pump", "shaggy"] },
         { text: "Насміхатимусь, пущу уїдливий жарт або розлючено подивлюся", chars: ["pico", "tankman", "senpai", "mommy", "darnell", "nene", "kapi"] },
         { text: "Почну миттєво прискорювати темп пісні, щоб повністю його завалити", chars: ["whitty", "sarvente", "daddy", "pico_playable", "matt", "monika"] }, { text: "Увімкну гліч-ефект, заберу частину здоров'я або випущу скример", chars: ["evilbf", "tabi", "sky", "senpai_mad", "sonic_exe"] },
         { text: "Просто почну дико реготати і закидаю екран вогняними стрілками-пастками", chars: ["tricky", "monster"] }
      ]
   }
];
const characters = {
   bf: { name: "Boyfriend (Бойфренд)", desc: "Ти головний герой будь-якої тусовки! Ти ніколи не здаєшся, обожнюєш музичні баттли і впевнено йдеш до своєї мети." },
   gf: { name: "Girlfriend (Герлфренд)", desc: "Ти — втілення спокою та прихованої сили. Вмієш підтримувати близьких та залишатися на висоті за будь-яких умов." },
   pico: { name: "Pico (Піко)", desc: "З тобою краще не жартувати! Харизматичний, рішучий і завжди готовий постояти за себе та своїх друзів. Олдскульний та дуже крутий." },whitty: { name: "Whitty (Уітті)", desc: "Справжня порохова бочка! Всередині тебе вирує колосальна енергія. Ти цінуєш спокій, але якщо тебе розлютити — буде вибух." },
   tricky: { name: "Tricky (Трікі)", desc: "Абсолютний хаос і божевільний драйв! Твоя енергія не знає меж, ти обожнюєш швидкість та ламання будь-яких стереотипів." },
   senpai: { name: "Senpai (Сенпай)", desc: "Зірка з бездоганним стилем та шаленим магнетизмом! Любиш бути в центрі уваги, але за красивою обгорткою ховаєш сильний характер." },
   darnell: { name: "Darnell (Дарнелл)", desc: "Вуличний підривник і майстер вогняних трюків з Weekend 1. Справжній винахідливий бро, який вміє створювати гарячі тренди." },
   tankman: { name: "Tankman (Танкмен)", desc: "Суворий капітан із чорним гумором! Чудовий тактик і залізний лідер, який обожнює керувати процесами і тролити опонентів." },
   garcello: { name: "Garcello (Гарчелло)", desc: "Неймовірно спокійний, добрий та мудрий персонаж. Не любиш конфліктів, цінуєш щирість і душевний затишок." },
   daddy: { name: "Daddy Dearest (Дорогий Татусь)", desc: "Суворий фінальний бос із величезним авторитетом. Ти звик контролювати все навколо та жорстко захищати те, що належить тобі." },
   sarvente: { name: "Sarvente (Сарвенте)", desc: "Мила та вихована зовні, але якщо порушити твої кордони — ти здатна перетворитися на справжнього могутнього демона." },
   evilbf: { name: "Evil Boyfriend (Повсталий Бойфренд)", desc: "Темна, глітчева та агресивна сторона успіху. Ти дієш напролом, використовуєш заборонені прийоми та обожнюєш чистий азарт перемоги." },
   skid_pump: { name: "Skid & Pump (Скід і Памп)", desc: "Життєрадісний та моторошний дует у костюмах на Геловін! Ви обожнюєте «Spooky Month», постійно танцюєте свій фірмовий танець і здатні перетворити будь-яку ситуацію на веселу гру." },
   monster: { name: "Monster / Lemon Demon (Лемон Демон)", desc: "Загадкова та моторошна істота з головою-лимоном. Ви маєте зловісний голос, любите створювати напружену хоррор-атмосферу, а ваші тексти зазвичай лякають опонентів до дрижаків." },
   mommy: { name: "Mommy Mearest (Дорога Матуся)", desc: "Елегантна поп-діва та колишня поп-зірка з демонічним корінням. Ви маєте бездоганне почуття стилю, неймовірний вокал і завжди готові ефектно виступити на даху лімузина." },
   senpai_mad: { name: "Spirit (Дух / Розлючений Сенпай)", desc: "Розбита та застрягла у віртуальному світі сутність, яка шукає свободи. Всередині вас вирує жага справедливості та помсти, а ваша поява завжди супроводжується гліч-ефектами." },
   nene: { name: "Nene (Нене)", desc: "Стильна, але небезпечна дівчина з команди Піко (Weekend 1). Ви маєте гострий чорний гумор, любите спостерігати за епічними музичними дуелями та завжди готові до радикальних дій." },
   pico_playable: { name: "Playable Pico (Ігровий Піко)", desc: "Той самий культовий рудий стрілець, але тепер він сам тримає мікрофон під час баттлу! Ви зосереджені, маєте круті анімації з перезарядкою зброї в такт і вмієте перемагати." },
   tabi: { name: "Tabi (Табі)", desc: "Колишній хлопець Герлфренд із головою козячого черепа. Ви сповнені гніву через зраду в минулого, маєте надзвичайно потужний, агресивний голос та готові підірвати всю сцену." },
   sky: { name: "Sky (Скай)", desc: "Найвідданіша суперфанатка Бойфренда! Ваша енергія зашкалює, ви здатні на все заради свого кумира, але якщо хтось стане у вас на шляху — ви трансформуєтесь у свою темну форму." },
   shaggy: { name: "Shaggy (Шеггі)", desc: "Легендарний персонаж, який використовує лише 0.001% своєї сили під час співу. Ви виглядаєте спокійним та розслабленим, але змушуєте гравців тиснути до 9 стрілок одночасно." },
   matt: { name: "Matt (Метт)", desc: "Справжній спортивний бос із Wii Sports. Ви маєте шалену витривалість, тренуєтеся кожну хвилину, а швидкість ваших нот на екрані нагадує кулеметну чергу, яку неможливо заблокувати." },
   kapi: { name: "Kapi (Капі)", desc: "Грайливий кіт-антропоморф, який обожнює ритм-ігри на автоматах Dance Dance Revolution. Ви дуже спритні, замість мікрофона використовуєте власні лапи на танцювальній платформі." },
   monika: { name: "Monika (Моніка)", desc: "Лідер літературного клубу, яка випадково потрапила в світ FNF. Ви виглядаєте милою школяркою з красивими поп-мелодіями, але насправді вмієте ламати код самої гри та видаляти файли." },
   sonic_exe: { name: "Sonic.EXE (Сонік ЕХЕ)", desc: "Жахливе демонічне божество у формі відомого їжака. Ви обожнюєте гратися зі своїми жертвами, вважаєте себе богом сцени, а ваші пісні супроводжуються червоними спалахами та скримерами." }};

   let currentQuestion = 0;

let scores = { 
  bf: 0, 
  gf: 0, 
  pico: 0, 
  whitty: 0, 
  tricky: 0, 
  senpai: 0, 
  darnell: 0, 
  tankman: 0, 
  garcello: 0, 
  daddy: 0, 
  sarvente: 0, 
  evilbf: 0,
  skid_pump: 0, 
  monster: 0, 
  mommy: 0, 
  senpai_mad: 0, 
  nene: 0, 
  pico_playable: 0, 
  tabi: 0, 
  sky: 0, 
  shaggy: 0, 
  matt: 0, 
  kapi: 0, 
  monika: 0, 
  sonic_exe: 0 
};

function loadQuestion() {
  const quizBox = document.getElementById("quiz-box");
  const resultBox = document.getElementById("result-box");
  
  if (currentQuestion >= quizData.length) {
    quizBox.classList.add("hidden");
    resultBox.classList.remove("hidden");
    showResult();
    return;
  }

  const qText = document.getElementById("question-text");
  const aBlock = document.getElementById("answers-block");
  
  qText.innerText = quizData[currentQuestion].question;
  aBlock.innerHTML = "";

  quizData[currentQuestion].answers.forEach(answer => {
    const button = document.createElement("button");
    button.innerText = answer.text;
    button.classList.add("btn-answer");
    button.onclick = () => selectAnswer(answer.chars);
    aBlock.appendChild(button);
  });
}

function selectAnswer(charsArray) {
  charsArray.forEach(char => {
    if (scores[char] !== undefined) {
      scores[char]++;
    }
  });
  currentQuestion++;
  loadQuestion();
}

function showResult() {
  let maxChar = "bf";
  let maxScore = -1;
  
  for (const char in scores) {
    if (scores[char] > maxScore) {
      maxScore = scores[char];
      maxChar = char;
    }
  }

  document.getElementById("result-character").innerText = characters[maxChar].name;
  document.getElementById("result-desc").innerText = characters[maxChar].desc;
}

function restartQuiz() {
  currentQuestion = 0;
  for (const char in scores) {
    scores[char] = 0;
  }
  document.getElementById("quiz-box").classList.remove("hidden");
  document.getElementById("result-box").classList.add("hidden");
  loadQuestion();
}

document.addEventListener("DOMContentLoaded", loadQuestion);
