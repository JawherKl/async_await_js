// fetchData.js

export async function fetchData(url) {
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    const data = await response.json();
    console.log('Fetched data:', data); // Debugging statement
    return data;
  } catch (error) {
    console.error('Fetch error:', error);
  }
}
