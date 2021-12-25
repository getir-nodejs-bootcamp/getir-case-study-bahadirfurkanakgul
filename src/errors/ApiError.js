class ApiError extends Error {
    constructor(message, statusCode) {
        super(message)
    }
}