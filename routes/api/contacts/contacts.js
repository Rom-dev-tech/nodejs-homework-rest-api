const express = require('express')
const contactsSchema = require('./contactsSchema')
const { controllerWrapper, validation } = require('../../../middlewares')
const ctrl = require('./controllers')

const router = express.Router()

router.get('/', controllerWrapper(ctrl.listContacts))

router.get('/:contactId', controllerWrapper(ctrl.getContactById))

router.post('/', validation(contactsSchema), controllerWrapper(ctrl.addContact))

router.put('/:contactId', validation(contactsSchema), controllerWrapper(ctrl.updateContact))

router.delete('/:contactId', controllerWrapper(ctrl.removeContact))

module.exports = router
