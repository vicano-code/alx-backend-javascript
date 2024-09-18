// Display welcome message and prompt for the user's name
console.log('Welcome to Holberton School, what is your name?');

// Listen for user input from stdin (standard input)
process.stdin.on('data', (data) => {
  // Convert the input to a string and remove any extra newlines or spaces
  const name = data.toString().trim();

  // Display the name provided by the user
  console.log(`Your name is: ${name}`);

  // Exit the process
  process.exit();
});

// Listen for the 'exit' event to display a closing message
process.on('exit', () => {
  console.log('This important software is now closing');
});
