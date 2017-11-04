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
    minlength: [5, 'categoryName need to be longer'],
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
      originalName: this.originalName,
      slug: this.slug,
      category: this.category,
    };
  },
	};

PlantSchema.statics = {
  addPlant(args){
    return this.create({
      ...args,
    });
  },
  list({skip = 0, limit = 25} = {}){
    return this.find()
    .sort({createdAt: -1}) //order by created desc
    .skip(skip)
    .limit(limit)
    .populate('category')
  },

};

PlantSchema.query.byCategory = function(name) {
  return this.find({ category: name });
};

export default mongoose.model('Plant', PlantSchema);