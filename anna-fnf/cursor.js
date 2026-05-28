document.addEventListener("DOMContentLoaded", () => {
   const cursor = document.getElementById("fake-cursor");
   const glow = document.getElementById("fake-cursor-glow");
 
   if (!cursor || !glow) return;
 
   // Відстежуємо рух мишки
   document.addEventListener("mousemove", (e) => {
     cursor.style.left = e.clientX + "px";
     cursor.style.top = e.clientY + "px";
 
     glow.style.left = e.clientX + "px";
     glow.style.top = e.clientY + "px";
   });
 
   // Ефект збільшення при наведенні на клікабельні елементи
   const interactiveElements = document.querySelectorAll("a, button, .btn-answer, .spotify-track-row");
 
   interactiveElements.forEach((el) => {
     el.addEventListener("mouseenter", () => {
       cursor.classList.add("hovered");
       glow.classList.add("hovered");
     });
     el.addEventListener("mouseleave", () => {
       cursor.classList.add("hovered");
       glow.classList.add("hovered");
     });
   });
 });
 