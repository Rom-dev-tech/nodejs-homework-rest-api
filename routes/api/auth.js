const express = require('express')
const { controllerWrapper, validation } = require('../../middlewares')
const { auth: ctrl } = require('../../controllers')
const { userJoiShema } = require('../../models/user')

const router = express.Router()

const requireFields = ['email', 'password']

router.post('/signup', validation(userJoiShema, requireFields), controllerWrapper(ctrl.signup))

router.post(
  '/signin',
  validation(userJoiShema, requireFields), controllerWrapper(ctrl.signin))

module.exports = router
