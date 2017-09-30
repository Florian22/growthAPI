import passport from 'passport';
import LocalStrategy from 'passport-local';
import {Strategy as JWTStrategy, ExtractJwt} from 'passport-jwt';

import User from '../modules/users/user.model';
import constants from '../config/constants';

//Local Stragtegy
const localOptions = {
	usernameField: 'email',
};

const localStrategy = new LocalStrategy(localOptions, async (email,password,done) => {
	try{
		const user = await User.findOne({email});
		if(!user){
			return done(null,false);
		}else if(!user.authenticateUser(password)){
			return done(null,false);
		}
		return done(null,user);
	}catch (e){
		return done(e,false); // error but no user so false
	}
});

//JWT Strategy
const jwtOptions = {
	jwtFromRequest: ExtractJwt.fromAuthHeaderWithScheme('authorization'),//fromAuthHeaderWithScheme('authorization'),
	secretOrKey: constants.JWT_SECRET,
};

const jwtStrategy = new JWTStrategy(jwtOptions, async(payload,done)=>{
	console.log("0");
	try{
		const user = await User.findById(payload._id);
		console.log("1");
		if(!user){
			console.log("2");
			return done(null,false);
		}
		console.log("3");
		return done(null,user);
	}catch(e){
		console.log("4");
		return done(e,false);
	}
});

passport.use(localStrategy);
passport.use(jwtStrategy);

export const authLocal = passport.authenticate('local', {session:false});
export const authJwt = passport.authenticate('jwt', {session:false});
