import mongoose, { Schema } from 'mongoose';
//import validator from 'validator';
//import jwt from 'jsonwebtoken';
import constants from '../../config/constants';
import slug from 'slug';
import uniqueValidator from 'mongoose-unique-validator'

const PlantSchema = new Schema({
  name: {
    type: String,
    unique: true,
    required: [true, 'categoryName is required!'],
    trim: true,
    minlength: [5, 'CategoryName need to be longer'],
  },
  originalName:{
    type: String,
    required: [true, 'originalName is required!'],
    trim: true,
  },
  description:{
  	type: String,
  },
  category:{
    type: Schema.Types.ObjectId,
    ref: 'Category',
  },
  slug:{
    type: String,
    trim: true,
    lowercase: true,
  },
},{timestamps:true});

PlantSchema.plugin(uniqueValidator,{
  message: '{VALUE} already exist',
});
PlantSchema.pre('validate', function(next){
  this._slugify();
  next();
});

PlantSchema.methods = {
  _slugify(){
    this.slug = slug(this.name);
  },
	toJSON(){
    return {
      _id: this._id,
      categoryName: this.categoryName,
    };
  },
	};

PlantSchema.statics = {
  addPlant(args){
    return this.create({
      ...args,
    });
  },
};



export default mongoose.model('Plant', PlantSchema);