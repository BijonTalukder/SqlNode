const sendResponse = (res, data) => {
    const responseData = {
        statusCode: data.statusCode ?? 500, 
        success: data.success ?? false,    
        message: data.message ?? null,      
        meta: data.meta ?? null,            
        data: data.data ?? null            
    };
    
    res.status(responseData.statusCode).json(responseData);
};
export default sendResponse;