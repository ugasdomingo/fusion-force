//Import tools
import { Schema, model, Model, Document, Date } from 'mongoose';
import bcryptjs from 'bcryptjs';

//Create Schema Methods Definitions
interface IUserDocument extends Document {
    date: Date;
    name: string;
    email: string;
    password: string;
    role: string;
}

export interface IUser extends IUserDocument {
    comparePassword: (password1: string) => Promise<boolean>;
}

interface IUserModel extends Model<IUserDocument, {}> {}

//Create User Schema
const userSchema = new Schema({
    date: {
        type: Date,
        default: Date.now(),
    },
    name: {
        type: String,
        required: true,
        trim: true,
    },

    email: {
        type: String,
        required: true,
        trim: true,
        unique: true,
        lowercase: true,
    },
    password: {
        type: String,
        required: true,
    },
    role: {
        type: String,
        default: 'Usuario', //Usuario, Admin
    },
});

//Schema methods - hash password
userSchema.pre('save', async function (next) {
    const user = this;

    if (!user.isModified('password')) return next();

    try {
        const salt = await bcryptjs.genSalt(10);
        user.password = await bcryptjs.hash(user.password, salt);
        next();
    } catch (error) {
        console.log(error);
        throw new Error('Falló hash de contraseña');
    }
});

//Compare Hashed Passwords
userSchema.methods.comparePassword = async function (candidatePassword: any) {
    return await bcryptjs.compare(candidatePassword, this.password);
};

export const UserModel = model<IUser>('User', userSchema);
