let formData = {
  email: '',
  message: '',
};

const storageKey = 'feedback-form-state';
const form = document.querySelector('.feedback-form');

const savedData = localStorage.getItem(storageKey);

if (savedData) {
  formData = JSON.parse(savedData);
  form.elements.email.value = formData.email;
  form.elements.message.value = formData.message;
}

form.addEventListener('input', e => {
  const { name, value } = e.target;

  if (name === 'email' || name === 'message') {
    formData[name] = value.trim();
    localStorage.setItem(storageKey, JSON.stringify(formData));
  }
});

form.addEventListener('submit', e => {
  e.preventDefault();

  if (!formData.email || !formData.message) {
    alert('Fill please all fields');
    return;
  }

  console.log(formData);

  localStorage.removeItem(storageKey);
  formData = { email: '', message: '' };
  form.reset();
});
