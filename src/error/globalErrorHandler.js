import ApiError from "./handleApiError.js";
import handleCastError from "./handleCastError.js";
import handleValidationError from "./handleValidationError.js";
import handleSequelizeUniqueConstraintError from "./handleSequelizeUniqueConstraintError.js";

const globalErrorHandler = (err, req, res, next) => {
    // console.log(err.fields, "test by bijon");

    let response = {
        statusCode: 500,
        message: 'Internal Server Error',
        errorMessages: [{ path: '', message: err.message }],
    };

    if (err.isJoi) {
        response = handleValidationError(err);
    } else if (err.name === 'CastError') {
        response = handleCastError(err);
    } else if (err.name === 'SequelizeUniqueConstraintError') {
        response = handleSequelizeUniqueConstraintError(err);
    } else if (err instanceof ApiError) {
        response = {
            statusCode: err.statusCode,
            message: err.message,
            errorMessages: [{ path: '', message: err.message }],
        };
    }

    res.status(response.statusCode).json(response);
};

export default globalErrorHandler;
