const express = require('express')
const { controllerWrapper, validation } = require('../../middlewares')
const { contacts: ctrl } = require('../../controllers')

const requireFields = ['name', 'email', 'phone']
const requireField = ['favorite']

const router = express.Router()

router.get('/', controllerWrapper(ctrl.listContacts))

router.get('/:contactId', controllerWrapper(ctrl.getContactById))

router.post('/', validation(requireFields), controllerWrapper(ctrl.addContact))

router.put(
  '/:contactId', validation(requireFields), controllerWrapper(ctrl.updateContact)
)

router.patch(
  '/:contactId/favorite',
  validation(requireField),
  controllerWrapper(ctrl.updateStatusContact)
)

router.delete(
  '/:contactId',
  controllerWrapper(ctrl.removeContact)
)

module.exports = router
