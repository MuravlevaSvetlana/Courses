// Todo manager
// 1. создать задачу
//      а. обработка формы
//          - проверить данные перед добавлением (валидация)
//      б. добавить задачу в массив
//      в. добавить данные в таблицу
//      г. очистить форму
// 2. удалить задачу
//      а. подтверждение
//      б. удаление данных из таблицы
//      в. удаление данных из массива 
// 3. редактировать задачу 
//      а. взять данные из массива
//      б. поместить в форму 
//      в. обработать форму на редактирование
//          - валидация
//      г. обновить данные в массиве
//      д. обновить данные в таблице
//      е. очистить форму

    
const todosStorage = {
    todos: []
};

// UI Elements
const formCol = document.querySelector('.form-col');
const form = document.forms['addTodoForm'];
const table = document.querySelector('.table tbody');
const title = form.elements['title'];
const text = form.elements['text'];
let btn_save = document.querySelector('.btn-primary');
// event handling
form.addEventListener('submit', (event) => {
    event.preventDefault();
    if (!title.value || !text.value) return alertMessage('alert-danger', 'Введите title и text');
    
    if (event.target.hasAttribute('data-task-id')) {
        const id = event.target.dataset.taskId;
        editTaskStorage(id,title,text);
        alertMessage('alert-info', 'Задача исправлена успешно');
        form.removeAttribute('data-task-id');
        btn_save.innerHTML = 'Add task';
        form.reset();
    } else {
        addNewTodoToStorage(title.value, text.value);
        alertMessage('alert-info', 'Задача добавлена успешно');
        form.reset();   
    } 
});

table.addEventListener('click', (event) => {
    if (event.target.classList.contains('remove-todo')) {
        const id = event.target.closest('[data-id]').dataset.id;
        deleteTodoFromStorage(id);
        alertMessage('alert-info', 'Задача удалена успешно');
        return;
    }

    if (event.target.classList.contains('edit-todo')) {
        const id = event.target.closest('[data-id]').dataset.id;
        setFormtoEdit(id);
    }

    if (event.target.classList.contains('impotant-todo')) {
        const id = event.target.closest('[data-id]').dataset.id;
        editImportant(id);
    }
});


// alert messages
/**
 * 
 * @param {String} className 
 * @param {String} message 
 */
function alertMessage(className, message) {
    removeAlert();

    const template = alertTemplate(className, message);
    formCol.insertAdjacentHTML('afterbegin', template);

    setTimeout(removeAlert, 2000);
}

function removeAlert() {
    const currentAlert = document.querySelector('.alert');
    if (currentAlert) formCol.removeChild(currentAlert);
}

   
/**
* generateId - создает произвольную строку 
* @returns {string} - новый id
*/
function generateId() {
    const uniqueValues = '0123456789qwertyuiopasdfghjklzxcvbnmQWERTYUIOPASDFGHJKLZXCVBNM';
    let id = '';

    for (let char of uniqueValues) {
        let index = Math.floor(Math.random() * uniqueValues.length);
        id += uniqueValues[index];
    }
 
    return id;
 }


/**
* addNewTodoToStorage - добавляет новый todo в storage а потом в view
* @param {String} title 
* @param {String} text
* @returns {[]} currentTodos
*/
function addNewTodoToStorage(title, text) {
    if (!title) return console.log('Please provide todo title');
    if (!text) return console.log('Please provide todo text');
 
    const newTodo = {title, text, id: generateId()}
    todosStorage.todos.push(newTodo);

    // Добавим в разметку
    addNewTodoToView(newTodo);

    return todosStorage.todos;
 };

 /**
* 
* @param {String} id 
* @returns {[]} currentTodos
*/
function deleteTodoFromStorage(id) {
    const checkIdRes = checkId(id);
    if (checkIdRes.error) return console.log(checkIdRes.msg);
    
    let removedTask;

    for (let i = 0; i < todosStorage.todos.length; i++) {
        if (todosStorage.todos[i].id === id) {
            removedTask = todosStorage.todos.splice(i, 1);
            break;
        }
    }

    // удаляем с разметки
    deleteTodoFromView(id);
    
    return removedTask;
 }


/**
 * 
 * @param {String} id 
 */
function checkId(id) {
    if (!id) return { error: true, msg: 'Передайте id удаляемой задачи.' };

    const idIsPresent = todosStorage.todos.some((todo) => todo.id === id );
    if (!idIsPresent) return { error: true, msg: 'Задачи с таким id несуществуе' };

    return { error: false, msg: '' };
}


// View functions

/**
 * 
 * @param {String} id 
 */
function deleteTodoFromView(id) {
    const target = document.querySelector(`[data-id="${id}"]`);
    target.parentElement.removeChild(target);
}

/**
 * 
 * @param {*} task 
 */
function addNewTodoToView(todo) {
    const template = todoTemplate(todo);
    table.insertAdjacentHTML('beforeend', template);
}

/**
 * 
 * @param {*} todo 
 * todo {
 *  id: string;
 *  title: string;
 *  text: string;
 * }
 */
function todoTemplate(todo) {
    return `
        <tr data-id="${todo.id}"> 
            <td>${todo.title}</td>
            <td>${todo.text}</td>
            <td>
                <i class="fas fa-trash remove-todo"></i>
                <i class="fas fa-edit edit-todo"></i>
                <i class="fas fa-star impotant-todo"></i>
            </td>
        </tr>
    `;
}

/**
 * 
 * @param {String} className 
 * @param {String} message 
 */
function alertTemplate(className, message) {
    return `
        <div class="alert ${className}">${message}</div>
    `;
}

addNewTodoToStorage('My title 1', 'My text 1');


// Make editing work

/**
 * 
 * @param {String} id 
 * @param {String} title 
 * @param {String} text 
 */
function editTaskStorage(id, title, text) {

   let tr = document.getElementsByTagName('tr');
   for (let i = 0; i < tr.length; i++){
        if (tr[i].dataset.id === id){
            tr[i].children[0].innerHTML = title.value;
            tr[i].children[1].innerHTML = text.value;
         }
   } return(id,title,text);
}


function setFormtoEdit(id) {
    
    title.value = event.target.closest('[data-id]').children[0].innerHTML;
    text.value = event.target.closest('[data-id]').children[1].innerHTML; 
    form.setAttribute('data-task-id', id);
    btn_save.innerHTML = 'Save changes';

    return (text, title, id);
}


function editImportant(id) {
    event.target.closest('[data-id]').style.backgroundColor = '#A9DAF1';
}

