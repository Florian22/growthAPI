import Joi from 'joi';

export default {
	addPlant(){
		body: {
			name: Joi.string().required(),
		},
	},
};