const handleSequelizeUniqueConstraintError = (error) => {
    const errors = error.errors.map((err) => ({
        path: err.path,
        message: err.message,
    }));

    const statusCode = 400;
    return {
        statusCode,
        message: 'Unique Constraint Error',
        errorMessages: errors,
    };
};

export default handleSequelizeUniqueConstraintError;
