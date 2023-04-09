import schemaOptions from './modelOptions.js'
import mongoose from 'mongoose'

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true,
    select: false
  }
}, schemaOptions)

export default mongoose.model('User', userSchema)