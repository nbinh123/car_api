const jwt = require("jsonwebtoken");

function authenticateToken(req, res, next) {
    const authHeader = req.headers['authorization'];
    console.log(authHeader);
    const token = authHeader && authHeader.split(' ')[1];
    console.log(token);
    if (!token) return res.sendStatus(401); // Chưa đăng nhập

    jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, user) => {
        if (err) return res.sendStatus(403); // Token sai hoặc hết hạn
        req.user = user; // Gắn thông tin user vào request
        next(); // Cho qua bước tiếp theo
    });
}


function authorizeUser(req, res, next) {
    const { id } = req.params;         // ID trong URL
    const user = req.user;             // user lấy từ token

    //   if (user.role === "admin") return next(); // Admin được phép xem tất cả

    // Nếu không phải admin, chỉ được xem chính mình
    if (user.id !== id) {
        return res.status(403).json({ message: "Bạn không có quyền truy cập tài nguyên này" });
    }

    next(); // Hợp lệ, cho phép tiếp tục
}

module.exports = { authenticateToken, authorizeUser };