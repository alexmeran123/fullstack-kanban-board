import Router from 'express'
import authRouter from './auth.js'
import boardRouter from './board.js'
import sectionRouter from './section.js'
import taskRouter from './task.js'

const router = Router({ mergeParams: true })

router.use('/auth', authRouter)
router.use('/boards', boardRouter)
router.use('/boards/:boardId/sections', sectionRouter)
router.use('/boards/:boardId/tasks', taskRouter)

export default router