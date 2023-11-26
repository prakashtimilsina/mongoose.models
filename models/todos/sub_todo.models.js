import mongoose from 'mongoose';

const subTodoSchema = new mongoose.Schena({
  content: {
    type: String,
    required: true,
  },
  complete: {
    type: Boolean,
    default: false
  },
  createdBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  }
}, { timestamps: true });

export const SubTodo = mongoose.model('Subtodo', subTodoSchema);
