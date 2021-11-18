const { Contact } = require('../../models')
const { sendSuccessRes } = require('../../utils')

const listContacts = async (req, res) => {
  const { _id } = req.user
  const { page, limit = 20, favorite } = req.query

  const skip = (page - 1) * limit || 0
  const findBy = { owner: _id }
  const requestedFields = '_id name email phone favorite owner'
  const pagination = { skip, limit: Number(limit) }

  if (favorite) {
    findBy.favorite = favorite
  }

  if (!page && !limit) {
    const result = await Contact.find(findBy, requestedFields)
      .populate('owner', '_id email')

    sendSuccessRes(res, { result })

    return
  }

  const result = await Contact.find(findBy, requestedFields, pagination)
    .populate('owner', '_id email')

  sendSuccessRes(res, { result })
}

module.exports = listContacts
