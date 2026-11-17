import express from 'express'
import ctrl from '../controllers/qualification.controller.js'

const router = express.Router()

router.route('/api/qualifications')
  .get(ctrl.list)
  .post(ctrl.create)
  .delete(ctrl.removeAll)

router.route('/api/qualifications/:id')
  .get(ctrl.read)
  .put(ctrl.update)
  .delete(ctrl.remove)

export default router