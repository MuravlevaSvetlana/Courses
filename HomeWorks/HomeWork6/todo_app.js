/**
 * TODOS
 * 1. Добавление задачи
 * 2. Удаление задачи
 * 3. Редактирование задачи
 */

 /**
 * Одна задача это объект из следующих полей
 * id - произвольная уникальная строка
 * title - заголовок задачи
 * text - текст задачи
 */


 /**
  * todosStorage - обьект для хранения всех todos
  */
 const todosStorage = {
     currentTodos: [],
     deletedTodos: []
 }

/**
 * 
 * @param {String} title 
 * @param {String} text
 * @returns {[]} currentTodos
 */
 const addTodoItem = (title, text) => {
    if (!title) return console.log('Please provide todo title');
    if (!text) return console.log('Please provide todo text');

    todosStorage.currentTodos.push({title, text, id: generateId()});
    return todosStorage.currentTodos;
 };

 /**
 * generateId - создает произвольную строку 
 * @returns {string} - новый id
 */
const generateId = () => {
    const uniqueValues = '0123456789qwertyuiopasdfghjklzxcvbnmQWERTYUIOPASDFGHJKLZXCVBNM';
    let id = '';

    for (let i = 0; i < 10; i++) {
        const index = Math.floor(Math.random() * uniqueValues.length);
        id += uniqueValues[index];
    }

    return id;
}

/**
 * 
 * @param {String} id 
 * @returns {[]} currentTodos
 */
const deleteTodoItem = (id) => {
    if (!id) return console.log("Передайте id удаляемой задачи.");
    
    todosStorage.currentTodos = todosStorage.currentTodos.filter((todoItem) => todoItem.id !== id);
    return todosStorage.currentTodos;
}

/**
 * 
 * @param {String} id 
 * @param {String} title
 * @param {String} text
 */
const editTodoItem = (id, title, text) => {

  if (!id) return console.log("Передайте id редактируемой задачи.");
  if (!title || !text) return console.log('Заполните поля для редактирования');
      
      for (value of todosStorage.currentTodos) {
        if (value.id === id) {
          value.text = text;
          value.title = title;
          return todosStorage.currentTodos;
        } else {
          console.log('Задачи с таким id не существует ');
        }
      } 

      
}


