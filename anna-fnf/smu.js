function updateHealthBar() {
   const slider = document.getElementById("fnf-health-slider");
   const iconDaddy = document.getElementById("icon-daddy");
   const iconBf = document.getElementById("icon-bf");
   const statusText = document.getElementById("health-text");
   
   if (!slider || !iconDaddy || !iconBf) return;
 
   const value = slider.value;
 
   // 1. Оновлюємо колір самої смуги (динамічно переміщуємо кордон кольорів)
   slider.style.background = `linear-gradient(to right, #ff004c 0%, #ff004c ${value}%, #00ffff ${value}%, #00ffff 100%)`;
 
   // 2. Вираховуємо позицію іконок на екрані (у відсотках)
   // Віднімаємо трохи, щоб іконки стояли чітко по центру стику кольорів
   const position = `calc(${value}% - 25px)`;
   
   // Татусь стоїть трохи лівіше від центру розподілу, а БФ — правіше (щоб вони не злипалися)
   iconDaddy.style.left = `calc(${value}% - 45px)`;
   iconBf.style.left = `calc(${value}% - 5px)`;
 
   // 3. Логіка зміни виразу обличчя та тексту статусу
   if (value < 20) {
     // Бойфренд повністю перемагає (Татусь на межі поразки)
     iconDaddy.className = "fnf-icon daddy-losing";
     iconBf.className = "fnf-icon bf-winning";
     statusText.innerText = "Бойфренд розриває сцену! Sick!!";
     statusText.style.color = "#00ffff";
   } else if (value > 80) {
     // Татусь повністю перемагає (БФ програє)
     iconDaddy.className = "fnf-icon daddy-winning";
     iconBf.className = "fnf-icon bf-losing";
     statusText.innerText = "Татусь тисне авторитетом! Програш...";
     statusText.style.color = "#ff004c";
   } else {
     // Стандартна ситуація, баттл йде на рівних
     iconDaddy.className = "fnf-icon daddy-normal";
     iconBf.className = "fnf-icon bf-normal";
     statusText.innerText = "Баттл у розпалі! Тримаємо біт!";
     statusText.style.color = "#fff";
   }
 }
 
 // Запускаємо початковий підрахунок відразу після завантаження сторінки
 document.addEventListener("DOMContentLoaded", updateHealthBar);
 