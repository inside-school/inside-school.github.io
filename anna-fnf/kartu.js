// База даних модів для картки
const modsData = {
   
   tricky: {
     name: "Vs. Tricky",
     status: "Оновлено (Full Week)",
     diff: "⭐⭐⭐⭐⭐ (Екстрим)",
     color: "#39ff14", // Кислотно-зелений неон
     glow: "rgba(57, 255, 20, 0.3)",
     link: "https://gamebanana.com",
     desc: "Божевільний хардкорний мод про клоуна-зомбі Трікі з мультфільму Madness Combat. Події відбуваються в Неваді. Мод відомий своїми вогняними стрілками-пастками, які не можна натискати, та гігантською демонічною формою Трікі на весь екран!"
   },
   garcello: {
     name: "Vs. Garcello",
     status: "Вийшов (Classic)",
     diff: "⭐⭐★★★ (Середня)",
     color: "#00f0ff", // Блакитний неон
     glow: "rgba(0, 240, 255, 0.3)",
     link: "https://gamebanana.com",
     desc: "Найбільш атмосферний та душевний мод спільноти. Ти зустрічаєш затишного курця Гарчелло в нічному провулку під дощем. На відміну від інших модів, тут немає агресії — тільки крутий розслаблюючий Lo-Fi біт і сумна, але красива історія."
   },
   indie: {
     name: "Indie Cross",
     status: "Гігантський Апдейт",
     diff: "⭐⭐⭐⭐⭐ (Ультра)",
     color: "#ffff00", // Жовтий неон
     glow: "rgba(255, 255, 0, 0.3)",
     link: "https://gamebanana.com",
     desc: "Неймовірний кросовер, який додає в FNF трьох легендарних героїв інді-ігор: Чашкаголового (Cuphead), Санса (Sans з Undertale) та Бенді (Bendy). Мод має унікальні механіки атак, кастомні меню та повністю нові кінематографічні катсцени!"
   },
   sonic_exe: {
      name: "Sonic.EXE",
      status: "Повне видання",
      diff: "⭐⭐⭐⭐⭐ (Хоррор-Екстрим)",
      color: "#1e3cff", // Темно-синій неон
      glow: "rgba(30, 60, 255, 0.3)",
      link: "https://gamebanana.com",
      desc: "Один із наймасштабніших хоррор-модів в історії FNF. Бойфренд потрапляє в проклятий світ кріпіпасти про Соніка. Гра супроводжується статичним шумом, глічами, червоними спалахами, скримерами та унікальними механіками пасток на екрані!"
    },
    mid_fight: {
      name: "Mid-Fight Masses",
      status: "Classic Mod",
      diff: "⭐⭐⭐⭐★ (Просунута)",
      color: "#b900ff", // Пурпурово-фіолетовий неон
      glow: "rgba(185, 0, 255, 0.3)",
      link: "https://gamebanana.com",
      desc: "Відомий мод про Сарвенте — милу черницю, яка дуже хоче, щоб Бойфренд приєднався до її церкви. Але якщо відмовити їй, вона і її бро Рув покажуть свою справжню демонічну силу. Мод славиться неймовірними церковними оперними треками (Zavodila, Gospel)."
    },
    marios_madness: {
      name: "Mario's Madness",
      status: "Оновлено v2",
      diff: "⭐⭐⭐⭐⭐ (Ультра-Хард)",
      color: "#ff0000", // Криваво-червоний неон
      glow: "rgba(255, 0, 0, 0.3)",
      link: "https://gamebanana.com",
      desc: "Повністю переосмислений та гігантський хоррор-мод про похмурий світ Маріо. Величезна кількість крутих треків, унікальних персонажів (від Луїджі-привида до гігантського Маріо-демона) та кастомних катсцен, які занурюють у гру з головою."
    },
    
  };
 
 
 function switchMod(modKey) {
   // 1. Зміна активної кнопки в меню
   const buttons = document.querySelectorAll('.mod-menu-btn');
   buttons.forEach(btn => btn.classList.remove('active'));
   
   // Додаємо клас active кнопці, на яку клікнули
   event.target.classList.add('active');
 
   // 2. Беремо дані з бази
   const mod = modsData[modKey];
   if (!mod) return;
 
   // 3. Оновлюємо текстові поля в картці
   document.getElementById("mod-name").innerText = mod.name;
   document.getElementById("mod-status").innerText = mod.status;
   document.getElementById("mod-diff").innerText = mod.diff;
   document.getElementById("mod-desc").innerText = mod.desc;
   document.getElementById("mod-download").href = mod.link;
 
   // 4. Динамічно змінюємо колір неонової рамки та свічення картки!
   const card = document.getElementById("mod-card");
   card.style.borderColor = mod.color;
   card.style.boxShadow = `0 0 25px ${mod.color}, inset 0 0 10px ${mod.glow}`;
 }
 