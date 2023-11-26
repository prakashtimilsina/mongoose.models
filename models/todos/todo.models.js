import mongoose from 'mongoose';

const todoSchema = new mongoose.Schema(
  {
    content: {
      type: String,
      required: true,
    },
    complete: {
      type: Boolean,
      deault: false,
    },
    createdby: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
    },
    subtodos: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Subtodo',
      },
    ], // Array of Sub-Todos.
  },
  { timestamps: true }
);

export const ToDo = mongoose.model('Todo', todoSchema);
