import mongoose from "mongoose";
import { RoleEnum } from '../core/enum/index.enum';

export const UserSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: true,
    },
    lastName: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        unique: true,
        required: true,
    },
    password: {
        type: String,
        required: true,
        minlength: 8
    },
    role: {
        type: String,
        enum: Object.values(RoleEnum),
        required: true
    },
    dob: {
        type: Date,
        required: true,
    },
    address: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    profile: {
        type: String,
        required: false,
        default: ""
    },
    isActive: {
        type: Boolean,
        required: true,
        default: true
    }
}, { timestamps: true });