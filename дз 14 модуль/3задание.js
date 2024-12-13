// Получаем элемент input и кнопку
const input = document.querySelector('input');
const button = document.querySelector('button');

// Функция для обработки клика по кнопке
function handleClick() {
  // Получаем значение из input
  const value = input.value;

  // Проверяем, находится ли значение в диапазоне от 1 до 10
  if (value < 1 || value > 10) {
    console.log('число вне диапазона от 1 до 10');
  } else {
    // Делаем запрос XHR
    fetch(`https://jsonplaceholder.typicode.com/photos?_limit=${value}`)
      .then(response => response.json())
      .then(data => {
        // Выводим данные на экран
        console.log(data);
      });
  }
}

// Привязываем обработчик клика к кнопке
button.addEventListener('click', handleClick);