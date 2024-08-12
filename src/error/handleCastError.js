const handleCastError = (error) => {
    const errors = [
      {
        path: error.path,
        message: 'Invalid data type provided.',
      },
    ];
  
    const statusCode = 400;
    return {
      statusCode,
      message: 'Cast Error',
      errorMessages: errors,
    };
  };
  
  export default handleCastError;
  