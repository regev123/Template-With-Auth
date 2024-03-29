const express = require('express');
const authController = require('./../controllers/authController');
const userController = require('./../controllers/userController');
const router = express.Router();

router.post('/signup', authController.signup);
router.post('/login', authController.login);

router.post('/forgotPassword', authController.forgotPassword);
router.patch('/resetPassword/:token', authController.resetPassword);

router.patch(
  '/updateMyPassword',
  authController.protect,
  authController.updatePassword
);

router.delete('/deleteMe', authController.protect, userController.deleteMe);
router.patch('/updateMe', authController.protect, userController.updateMe);
router.get(
  '/getUser/:id',
  authController.protect,
  authController.restrictTo('admin'),
  userController.getUser
);

router.get(
  '/getAllUsers',
  authController.protect,
  authController.restrictTo('admin'),
  userController.getAllUsers
);
module.exports = router;
