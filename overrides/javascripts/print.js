document.addEventListener("DOMContentLoaded", function() {
    // Создаем кнопку печати
    const printButton = document.createElement("button");
    printButton.className = "md-content__button md-icon";
    printButton.setAttribute("title", "Распечатать документ");
    printButton.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M18 3H6v4h12M6 21h12v-8H6m2-5h8v5H8m-4 2h2v2H4m12 0h2v2h-2m-6-2h2v2h-2z"/></svg>';
    printButton.onclick = function() {
        window.print();
    };

    // Добавляем кнопку в контейнер действий
    const actions = document.querySelector(".md-content__action");
    if (actions) {
        actions.appendChild(printButton);
    }
}); 