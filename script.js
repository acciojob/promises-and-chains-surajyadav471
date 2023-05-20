//your JS code here. If required.
const form = document.querySelector('form');
  const ageInput = document.querySelector('#age');
  const nameInput = document.querySelector('#name');
  const btn = document.querySelector('#btn');

  form.addEventListener('submit', (event) => {
    event.preventDefault();

    if (!ageInput.value || !nameInput.value) {
      alert('Please enter valid details');
      return;
    }

    const promise = new Promise((resolve, reject) => {
      if (ageInput.value >= 18) {
        setTimeout(() => {
          resolve(`Welcome, ${nameInput.value}. You can vote.`);
        }, 4000);
      } else {
        reject(`Oh sorry ${nameInput.value}. You aren't old enough.`);
      }
    });

    promise
      .then((message) => alert(message))
      .catch((error) => alert(error));
  });