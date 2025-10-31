const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const OrderSchema = require('./OrderModal')

const UserSchema = new Schema({
    fullName: {
        type: String,
        required: true,
        trim: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
        lowercase: true,
        trim: true,
        match: [/^\S+@\S+\.\S+$/, 'Email không hợp lệ']
    },
    phone: {
        type: String,
        trim: true,
        match: [/^0\d{9,10}$/, 'Số điện thoại không hợp lệ']
    },
    birthDate: {
        type: Date,
    },
    gender: {
        type: String,
        enum: ['male', 'female', 'other'],
        default: 'other'
    },
    address: {
        type: String,
        trim: true
    },
    city: {
        type: String,
        trim: true
    },
    avatar: {
        type: String,
        default: function() {
            return `https://ui-avatars.com/api/?name=${encodeURIComponent(this.fullName || 'User')}&size=200&background=3B82F6&color=fff`;
        }
    },
    memberSince: {
        type: Date,
        default: Date.now
    },
    totalOrders: {
        type: Number,
        default: 0,
        min: 0
    },
    totalSpent: {
        type: Number, // 💡 Dùng Number thay vì String để có thể tính toán dễ hơn
        default: 0,
        min: 0
    },
    username: {
        type: String,
        unique: true,
        trim: true,
    },
    password: {
        type: String,
        required: true
    },
    orders: [OrderSchema]
}, {
    timestamps: true // Tự động thêm createdAt và updatedAt
    
});

module.exports = mongoose.model('User', UserSchema, 'users');
