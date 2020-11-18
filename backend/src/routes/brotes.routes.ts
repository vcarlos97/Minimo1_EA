import {Router} from 'express';
import broteController from "../controllers/brote.controller";

const router = Router();

router.get('/all', broteController.getBrotes);
router.get('/:name', broteController.getBrote);
router.post('/newBrote', broteController.updateBrote);

export = router;