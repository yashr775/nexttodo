export const errorHandler = (
    res,
    statuscode = 500,
    message = "Internal server error"
) => {
    return res.status(statuscode).json({ success: false, message });
};

export const asyncError = (passedFunc) => (req, res) => {
    Promise.resolve(
        passedFunc(req, res)).catch((err) => {
            errorHandler(res, 500, err.message);
        });
};
