import throttle from 'lodash.throttle';
import '../css/common.css';
import '../css/feedback-form.css';

// const STORAGE_KEY = 'feedback-msg';

const refs = {
  form: document.querySelector('.js-feedback-form'),
  textarea: document.querySelector('.js-feedback-form  textarea'),
  input: document.querySelector('.js-feedback-form  input'),
};

refs.form.addEventListener('submit', onFormSubmit);
// refs.textarea.addEventListener('input', throttle(onTextareaInput, 200));
refs.form.addEventListener('input', throttle(onFormInput, 200))

populateTextarea();

/*
 * - Останавливаем поведение по умолчанию
 * - Убираем сообщение из хранилища
 * - Очищаем форму
 */
function onFormSubmit(evt) {
  evt.preventDefault();

  console.log('Отправляем форму');
  evt.currentTarget.reset();
  localStorage.removeItem("name");

}


function populateTextarea() {
  
  const savedName = JSON.parse(localStorage.getItem("name"));
 
  
  const { name, message } = savedName;
  if (name) {
    refs.input.value = name;
  }
  if (message) {
    refs.textarea.value = message;
  }

}

// Домой
// сделать так чтобы сохраняло не только сообщение но и имя, и все в одном обьекте



const formData = {};

function onFormInput(e) {
  formData[e.target.name] = e.target.value;

  return dataSet(formData)

}
  
  
  function dataSet(formData) {

    const savedData = localStorage.setItem("name", JSON.stringify(formData))
    
    return savedData
  }








  
 
