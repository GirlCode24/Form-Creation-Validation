// Step 1: Define the async function
async function fetchUserData() {
  // Step 2: Define the API URL
  const apiUrl = 'https://jsonplaceholder.typicode.com/users';

  // Step 3: Select the data container
  const dataContainer = document.getElementById('api-data');

  // Step 4: Use try-catch to fetch and handle errors
  try {
    // Fetch the data
    const response = await fetch(apiUrl);

    // Parse JSON response
    const users = await response.json();

    // Step 5: Clear the loading message
    dataContainer.innerHTML = '';

    // Step 6: Create a <ul> element
    const userList = document.createElement('ul');

    // Step 7: Loop through users and add <li> elements
    users.forEach(user => {
      const listItem = document.createElement('li');
      listItem.textContent = user.name;
      userList.appendChild(listItem);
    });

    // Step 8: Append the <ul> to the container
    dataContainer.appendChild(userList);
  } catch (error) {
    // Step 9: Handle errors by updating the UI
    dataContainer.innerHTML = '';
    dataContainer.textContent = 'Failed to load user data.';
    console.error('Error fetching user data:', error);
  }
}

// Step 10: Call fetchUserData when the DOM is ready
document.addEventListener('DOMContentLoaded', fetchUserData);
