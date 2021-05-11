import { Router } from 'express';

import { SendForgotPasswordMailController } from '@modules/account/useCases/sendForgotPasswordMail/sendForgotPasswordMailController';

const passwordRoutes = Router();

const sendForgotPasswordMailController = new SendForgotPasswordMailController();

passwordRoutes.post('/forgot', sendForgotPasswordMailController.handle);

export { passwordRoutes };
