import { Router } from 'express';
import * as contactController from '../controllers/contact.controller.js';
import { validate } from '../middlewares/validate.middleware.js';
import { createContactSchema, updateContactSchema, idParamSchema } from '../middlewares/contact.schema.js';

const router = Router();

router.get('/', contactController.getAll);

router.get('/:id', validate(idParamSchema, 'params'), contactController.getById);

router.post('/', validate(createContactSchema), contactController.create);

router.patch('/:id', validate(idParamSchema, 'params'), validate(updateContactSchema), contactController.update);

router.delete('/:id', validate(idParamSchema, 'params'), contactController.remove);

export { router as contatosRouter };
