import Plant from './plant.model';

export async function addPlant(req, res){
	try{
		const plant = await Plant.addPlant(req.body);
		return res.status(201).json(plant);
	}catch(e){
		return res.status(400).json(e);
	}
}

export async function getPlantById(req, res){
	try{
		const plant = await Plant.findById(req.params.id);
		return res.status(201).json(plant);
	}catch(e){
		return res.status(400).json(e);
	}
}

export async function getPlantsList(req, res){
	const limit = parseInt(req.query.limit,0);
	const skip = parseInt(req.query.skip,0);
	try{
		const plants = await Plant.list({skip, limit});
		return res.status(201).json(plants);
	}catch(e){
		return res.status(400).json(e);
	}
}