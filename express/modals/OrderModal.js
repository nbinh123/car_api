const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const OrderSchema = new Schema({
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    id: {
        type: String,
        required: true,
        trim: true,
    },
    carName: {
        type: String,
        required: true,
        trim: true,
    },
    carImage: {
        type: String,
        trim: true,
    },
    price: {
        type: Number, // 💡 Để tiện tính toán, bạn nên lưu dưới dạng số
        required: true,
        min: 0,
    },
    status: {
        type: String,
        enum: ['Đã giao', 'Đang xử lý', 'Đã hủy'],
        default: 'Đang xử lý',
    },
    statusColor: {
        type: String,
        enum: ['green', 'blue', 'red'],
        default: 'blue',
    },
    date: {
        type: Date,
        required: true,
    },
    paymentMethod: {
        type: String,
        enum: ['Chuyển khoản', 'Trả góp', 'Tiền mặt'],
        default: 'Chuyển khoản',
    },
});

module.exports = OrderSchema;