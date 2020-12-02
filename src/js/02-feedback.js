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
  localStorage.removeItem("message");
}


function populateTextarea() {
  
  const savedName = JSON.parse(localStorage.getItem("name"));
  //  const savedName = localStorage.getItem("name");
 
  console.log(savedName);
  const { name, message } = savedName;
  if (name) {
    refs.input.value = name;
  }
  if (message) {
    refs.textarea.value = message;
  }

  // const savedMessage = localStorage.getItem("message");
  // if (savedMessage) {
  //   refs.textarea.value = savedMessage;
    
  // } if (savedName) {
  //   refs.input.value = savedName;
  // }
}

// Домой
// сделать так чтобы сохраняло не только сообщение но и имя, и все в одном обьекте






const formData = {};
console.log(formData);

function onFormInput(e) {
  formData[e.target.name] = e.target.value;

  dataSet(formData)
  return formData
}
  
  
  function dataSet(formData) {

    const savedData = localStorage.setItem("name", JSON.stringify(formData))
    // if (formData.name) {
    //    localStorage.setItem("name", formData.name)
    // }
    // if (formData.message) {
    //    localStorage.setItem("message", formData.message)
    // }
    return savedData
  }








  
 
