export default function Logger(req, res, next) {
    console.log(`${req.method} ${req.originalUrl} - Status: ${res.statusCode}`);
    next();
}
