import {Router} from 'express';
import * as plantController from './plant.controllers';
import { authJwt } from '../../services/auth.services';
import validate from 'express-validation';
import plantValidation from './plant.validation';

const routes = new Router();
//routes.post('/', authJwt, validate(plantValidation.addPlant),plantController.addPlant);
//routes.get('/:id',plantController.getPlantById );
export default routes;
