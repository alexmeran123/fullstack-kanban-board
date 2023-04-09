import Router from 'express'
import { param } from 'express-validator'
import * as validation from '../handlers/validation.js'
import * as tokenHandler from '../handlers/tokenHandler.js'
import * as boardController from '../controllers/board.js'

const router = Router();

router.post(
  '/',
  tokenHandler.verifyToken,
  boardController.create
)

router.get(
  '/',
  tokenHandler.verifyToken,
  boardController.getAll
)

router.put(
  '/',
  tokenHandler.verifyToken,
  boardController.updatePosition
)

router.get(
  '/favourites',
  tokenHandler.verifyToken,
  boardController.getFavourites
)

router.put(
  '/favourites',
  tokenHandler.verifyToken,
  boardController.updateFavouritePosition
)

router.get(
  '/:boardId',
  param('boardId').custom(value => {
    if (!validation.isObjectId(value)) {
      return Promise.reject('invalid id')
    } else return Promise.resolve()
  }),
  validation.validate,
  tokenHandler.verifyToken,
  boardController.getOne
)

router.put(
  '/:boardId',
  param('boardId').custom(value => {
    if (!validation.isObjectId(value)) {
      return Promise.reject('invalid id')
    } else return Promise.resolve()
  }),
  validation.validate,
  tokenHandler.verifyToken,
  boardController.update
)

router.delete(
  '/:boardId',
  param('boardId').custom(value => {
    if (!validation.isObjectId(value)) {
      return Promise.reject('invalid id')
    } else return Promise.resolve()
  }),
  validation.validate,
  tokenHandler.verifyToken,
  boardController.deleteBoard
)


export default router