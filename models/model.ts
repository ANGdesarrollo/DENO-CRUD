import { Schema, model } from 'npm:mongoose';

interface User {
    username: string,
    password: string,
}

const userSchema = new Schema<User>({
    username: { type: String },
    password: {type: String},
})

export const userModel = model('userTest', userSchema);