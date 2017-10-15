import mongoose, { Schema } from 'mongoose';
//import validator from 'validator';
//import jwt from 'jsonwebtoken';
import constants from '../../config/constants';

const CategorySchema = new Schema({
  categoryName: {
    type: String,
    unique: true,
    required: [true, 'categoryName is required!'],
    trim: true,
    minlength: [5, 'CategoryName need to be longer'],
  },
  description:{
  	type: String,
  },

},{timestamps:true});

CategorySchema.methods = {
	toJSON(){
    return {
      _id: this._id,
      categoryName: this.categoryName,
    };
  },
	};

CategorySchema.statics = {
  createCategory(args){
    return this.create(args);
    /*return this.create({
      ...args
    });*/
  },
};

export default mongoose.model('Category', CategorySchema);