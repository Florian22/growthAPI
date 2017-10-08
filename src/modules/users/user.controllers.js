import User from './user.model';

export async function signUp(req, res) {
  try {
    const user = await User.create(req.body);
    return res.status(201).json(user.toAuthJSON());
  } catch (e) {
    return res.status(500).json(e);
  }
}

export function login(req,res,next){
	console.log("test");
	res.status(200).json(req.user.toAuthJSON());
	return next();
}