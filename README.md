# SHRI-2018-homework-01

Домашнее задание к лекции "Адаптивная верстка".

Яндекс. Школа разработки интерфейсов. 2018 год.

'''
npm i // установка 
npm start // запуск локального сервера
'''

Пояснения к решению:
* не использовался логотип, представленный в размере 45х11px, так как при таком размере он становится практически нечитабельным;
* в шаблон данных, в один из объектов добавлено пропущенное свойство - channelName: "Артемий Лебедев";
* отсутствующий шрифт YS Display-Heavy (font-weight: 900) заменен на ближайший из предоставленных - YS Text-Regular (font-weight: 700);
* у карточек, шириной в одну треть, в макете в разных местах заголовок то обрезается, то отображается полностью - в представленной верстке он обрезается во всех карточках этого типа;
* верстка имеет большие допуски по Pixel Perfect, так как расстояние между карточками по вертикали отличается, даже между карточками одного типа? так же отличается расположение иконок-кнопок в карточках одного типа;
* изображения адаптированы к разным размерам экрана, но не адаптированы для ретины, так как у предоставленных изображений нет достаточного разрешения;
* подстановка данных реализована с помощью javascript, тега template и html-компонент.
