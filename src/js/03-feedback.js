import throttle from 'lodash.throttle';

const feedbackForm = document.querySelector('.feedback-form');
const emailInput = document.querySelector('input[name="email"]');
const messageTextarea = document.querySelector('textarea[name="message"]');

// Function to save form state to local storage
const saveFormState = throttle(() => {
  const formState = {
    email: emailInput.value,
    message: messageTextarea.value,
  };

  localStorage.setItem('feedback-form-state', JSON.stringify(formState));
}, 500);

// Function to load form state from local storage
const loadFormState = () => {
  const storedState = localStorage.getItem('feedback-form-state');
  if (storedState) {
    const parsedState = JSON.parse(storedState);
    emailInput.value = parsedState.email || '';
    messageTextarea.value = parsedState.message || '';
  }
};

// Function to handle form submission
const handleSubmit = event => {
  event.preventDefault();
  const formState = {
    email: emailInput.value,
    message: messageTextarea.value,
  };

  // Clear form state from local storage
  localStorage.removeItem('feedback-form-state');

  // Display form state in the console
  console.log('Form submitted with state:', formState);
};

// Add event listeners
emailInput.addEventListener('input', saveFormState);
messageTextarea.addEventListener('input', saveFormState);
feedbackForm.addEventListener('submit', handleSubmit);

// Load form state on page load
loadFormState();
