const express = require('express')
const router = express.Router()
const contactsOperations = require('../../model/contacts')
const joiSchema = require('./joiSchema')
const { notFound, badRequest } = require('./httpErrors')

router.get('/', async (req, res, next) => {
  try {
    const result = await contactsOperations.listContacts()
    res.json({
      status: 'success',
      code: 200,
      data: {
        result
      }
    })
  } catch (error) {
    next(error)
  }
})

router.get('/:contactId', async (req, res, next) => {
  try {
    const { contactId } = req.params
    const result = await contactsOperations.getContactById(contactId)

    if (!result) {
      notFound(contactId)
    }

    res.json({
      status: 'success',
      code: 200,
      data: {
        result
      }
    })
  } catch (error) {
    next(error)
  }
})

router.post('/', async (req, res, next) => {
  try {
    const { error } = joiSchema.validate(req.body)

    if (error) {
      badRequest(error)
    }

    const result = await contactsOperations.addContact(req.body)
    res.status(201).json({
      status: 'success',
      code: 201,
      data: {
        result
      }
    })
  } catch (error) {
    next(error)
  }
})

router.delete('/:contactId', async (req, res, next) => {
  try {
    const { contactId } = req.params
    const result = await contactsOperations.removeContact(contactId)

    if (!result) {
      notFound(contactId)
    }
    res.json({
      status: 'success',
      code: 200,
      message: 'contact deleted',
    })
  } catch (error) {
    next(error)
  }
})

router.put('/:contactId', async (req, res, next) => {
  try {
    const { error } = joiSchema.validate(req.body)

    if (error) {
      badRequest(error)
    }

    const { contactId } = req.params
    const result = await contactsOperations.updateContact(contactId, req.body)

    if (!result) {
      notFound(contactId)
    }

    res.json({
      status: 'success',
      code: 200,
      data: {
        result
      }
    })
  } catch (error) {
    next(error)
  }
})

module.exports = router
