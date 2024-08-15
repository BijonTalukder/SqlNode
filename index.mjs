import('./app.js')
  .then(({ default: app }) => {
    // Start your server if necessary
  })
  .catch(err => {
    console.error('Error loading app:', err);
  });