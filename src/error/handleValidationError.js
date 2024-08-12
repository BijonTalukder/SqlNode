const handleValidationError = (error) => {
    const errors = error.details.map((detail) => ({
      path: detail.path.join('.'),
      message: detail.message,
    }));
  
    const statusCode = 400;
    return {
      statusCode,
      message: 'Validation Error',
      errorMessages: errors,
    };
  };
  
  export default handleValidationError;
  