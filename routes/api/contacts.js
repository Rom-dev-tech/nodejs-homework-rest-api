const express = require('express')
const { contactsJoiSchema } = require('../../models')
const { controllerWrapper, validation } = require('../../middlewares')
const { contacts: ctrl } = require('../../controllers')

const router = express.Router()

router.get('/', controllerWrapper(ctrl.listContacts))

router.get('/:contactId', controllerWrapper(ctrl.getContactById))

router.post(
  '/',
  validation(contactsJoiSchema),
  controllerWrapper(ctrl.addContact)
)

router.put(
  '/:contactId',
  validation(contactsJoiSchema),
  controllerWrapper(ctrl.updateContact)
)

router.delete('/:contactId', controllerWrapper(ctrl.removeContact))

module.exports = router
