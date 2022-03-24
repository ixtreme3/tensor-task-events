/*
   1. Создайте функцию createButton(). Необходимо, чтобы эта функция осуществила вставку в body тег button с текстом: "Удали меня".
      При клике по button удалить этот button.
*/
export function createButton() {
    let button = document.createElement('button');
    button.innerHTML = 'Удали меня';
    button.addEventListener('click', () => button.remove());
    document.body.append(button);
}

/*
   2. Создайте функцию createArrList(arr), в которую передается 1 параметр: arr - массив строк.
      Функция выводит этот массив в виде маркированного списка внутри тега body.
      При наведении курсора мыши на элемент списка у этого элемента создается атрибут title, в котором записан его текст.
*/
export function createArrList(arr) {
    let ul = document.createElement('ul');
    arr.forEach((element) => {
        let li = document.createElement('li');
        li.innerHTML = element;
        ul.append(li);
        li.addEventListener('mouseover', (e) => {
            e.target.setAttribute('title', e.target.innerHTML);
        });
    });

    // очевидно, данный вариант является верным с точки зрения делегирования
    // (поверил в браузере - все работает), но его почему то не принимают автоматические тесты
    // ul.addEventListener('mouseover', (e) => {
    //    e.target.setAttribute('title', e.target.innerHTML);
    // });

    document.body.append(ul);
}

/*
   3. Создайте функцию createLink(), которая сгенерирует следующую разметку и вставит ее в body:

      <a href="https://tensor.ru/">tensor</a>

      При первом клике по ссылке в конец ее текста через пробел дописывается ее href.
      При следующем клике происходит действие по умолчанию (переход по ссылке в текущей вкладке).
*/
export function createLink() {
    let a = document.createElement('a');
    a.href = 'https://tensor.ru/';
    a.innerHTML = 'tensor';
    let toggleFlag = false;
    a.addEventListener('click', (e) => {
        if (!toggleFlag) {
            a.innerHTML = a.innerHTML + ` ${a.href}`;
            e.preventDefault();
            toggleFlag = !toggleFlag;
        }
    });
    document.body.append(a);
}

/*
   4. Создайте функцию createList(), которая сгенерирует следующую разметку и вставит ее в body:

      <ul>
         <li>Пункт</li>
      </ul>
      <button>Добавить пункт</button>

      При клике по элементу li ему в конец текста добавляется восклицательный знак.
      При клике по button в конец списка добавляется новый элемент li с текстом: "Пункт".
      Клик по новому li также добавляет восклицательный знак в конец текста.
*/
export function createList() {
    let ul = document.createElement('ul');
    let li = document.createElement('li');
    li.innerHTML = 'Пункт';
    ul.append(li);
    let button = document.createElement('button');
    button.innerHTML = 'Добавить пункт';

    ul.addEventListener('click', (e) => (e.target.innerHTML += '!'));
    button.addEventListener('click', (e) => {
        let li = document.createElement('li');
        li.innerHTML = 'Пункт';
        ul.append(li);
    });

    document.body.append(ul, button);
}
