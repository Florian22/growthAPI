import Category from './category.model';

export async function createCategory(req, res){
	try{
		const category = await Category.createCategory(req.body);
		return res.status(201).json(category);
	}catch(e){
		return res.status(400).json(e);
	}
}

export async function getCategoryById(req, res){
	try{
		const category = await Category.findById(req.params.id);
		return res.status(201).json(category);
	}catch(e){
		return res.status(400).json(e);
	}
}

export async function getCategoryList(req, res){
	try{
		const categories = await Category.find();
		return res.status(201).json(categories);
	}catch(e){
		return res.status(400).json(e);
	}
}