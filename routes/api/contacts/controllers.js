const contactsOperations = require('../../../model/contacts')
const { sendSuccessRes, notFound } = require('../../../helpers')

const listContacts = async (req, res) => {
  const result = await contactsOperations.listContacts()
  sendSuccessRes(res, { result })
}

const getContactById = async (req, res, next) => {
  const { contactId } = req.params
  const result = await contactsOperations.getContactById(contactId)

  if (!result) {
    return notFound(contactId, next)
  }

  sendSuccessRes(res, { result })
}

const addContact = async (req, res) => {
  const result = await contactsOperations.addContact(req.body)
  sendSuccessRes(res, { result }, 201)
}

const updateContact = async (req, res, next) => {
  const { contactId } = req.params
  const result = await contactsOperations.updateContact(contactId, req.body)

  if (!result) {
    return notFound(contactId, next)
  }

  sendSuccessRes(res, { result })
}

const removeContact = async (req, res, next) => {
  const { contactId } = req.params
  const result = await contactsOperations.removeContact(contactId)

  if (!result) {
    return notFound(contactId, next)
  }

  sendSuccessRes(res, { message: 'contact deleted' })
}

module.exports = {
  listContacts,
  getContactById,
  addContact,
  updateContact,
  removeContact,
}
