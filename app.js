// app.js

import { fetchData } from './fetchData.js';

async function displayData() {
  const url = 'https://jsonplaceholder.typicode.com/posts';
  const data = await fetchData(url);

  if (!data) {
    console.error('No data received');
    return;
  }

  const container = document.getElementById('data-container');
  container.innerHTML = '';  // Clear any existing content

  data.forEach(post => {
    const postElement = document.createElement('div');
    postElement.classList.add('post');

    const titleElement = document.createElement('h2');
    titleElement.textContent = post.title;

    const bodyElement = document.createElement('p');
    bodyElement.textContent = post.body;

    postElement.appendChild(titleElement);
    postElement.appendChild(bodyElement);
    container.appendChild(postElement);
  });

  console.log('Data displayed successfully'); // Debugging statement
}

document.addEventListener('DOMContentLoaded', displayData);
