//APİ response for successful POST request
module.exports = (data) => ({
    code: 0,
    msg: 'Success',
    ...data,
});