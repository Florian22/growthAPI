import Category from './category.model';

export async function createCategory(req, res){
	try{
		const category = await Category.createCategoty(res.body);
		return res.status(201).json(category);
	}catch(e){
		return res.status(400).json(e);
	}
}

export async function getCategoryById(req, res){
	try{
		const category = await Category.findById(res.params.id);
		return res.status(201).json(category);
	}catch(e){
		return res.status(400).json(e);
	}
}