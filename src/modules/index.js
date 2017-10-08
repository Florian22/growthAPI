import userRoutes from './users/user.routes';
import plantRoutes from './plants/plant.routes';
import categoryRoutes from './categories/category.routes';
import {authJwt} from '../services/auth.services';
export default app => {
  app.use('/api/v1/users', userRoutes);
  app.use('/api/v1/plants', plantRoutes);
  app.use('/api/v1/category', categoryRoutes);
  app.get('/hello', authJwt ,(req,res)=>{
  	res.send('This is a private route, I hope so !!!');
  });
};

//673028b2824029eb48b9ec26209c40def1100e2eff0a332483174b3365abb3c4
//b21fda160089