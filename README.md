# React_wheather

Ссылка на сайт: https://denisvolhonsky.github.io/React_wheather/wheather/build/

# Технологии
Используемый API: https://openweathermap.org/current
css framework: Materialize
js библиотека: React

В приложении используется компонентный подход
Получение и обработка данных с сервера вынесена в отдельный файл: API.js

-При загрузке сайта система запрашивает доступ к геоданным для получения местонахождения и загрузке погоды в данном регионе.
-Также пользователь может выбрать город вручном режиме введя его в поле, которое нодится в левой части сайта.
-Город необходимо вводить на английском языке с большой или маленькой буквы.

Примеры городов: London, Paris, Ivanovo, Atlanta, Kiev...

-При выборе города необходимо нажать кнопку Submit, после чего в центре экрана загружается погода на данный
момент времени в формате (название города температура, влажность, давление, водимость, скорость ветра и облачность в виде картинки).
-Также в нижней части экрана пользователю предоставляется погода в этом же регионе по дате
на ближайшие 5 дней в формате (температура, влажность, давление, скорость ветра и облачность в виде картинки).
-При каждом введении существующего города в Favorite list добавляются города,
которые сохраняются в локальном хранилище данных и остаются доступны при перезагрузке сайта.
-Города из Favorite list можно выбирать либо удалять.
-Если в поле данных нет, по нажатию на кнопку Submit действие не происходит.
-Если город введен не верно на страницу выводится воответствующее сообщение.
-Внизу сайта расположена ссылка на GitHub.







