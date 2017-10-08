import Plant from './plant.model';

export async function addPlant(req, res){
	try{
		const plant = await Plant.addPlant(res.body);
		return res.status(201).json(plant);
	}catch(e){
		return res.status(400).json(e);
	}
}