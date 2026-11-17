import express from 'express'
import ctrl from '../controllers/contact.controller.js'

const router = express.Router()

router.route('/api/contacts')
  .get(ctrl.list)
  .post(ctrl.create)
  .delete(ctrl.removeAll)

router.route('/api/contacts/:id')
  .get(ctrl.read)
  .put(ctrl.update)
  .delete(ctrl.remove)

export default router