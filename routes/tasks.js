import express from 'express'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()
const router = express.Router()


router.get('/list', async (req, res) => {
  try {
    const { completed, authorId, taskId } = req.query;

    // search by task ID
    if (taskId) {
        const task = await prisma.task.findUnique({
            where: { id: taskId }
        });

        if (!task) return res.status(404).json({ message: 'Task not found' });

        return res.status(200).json(task);
    }

    // dynamic filter
    const filter = {};

    // tasks completed or uncompleted
    if (completed !== undefined) {
        filter.completed = completed === 'true';
    }

    // search by authorID
    if (authorId) {
        filter.authorId = authorId;
    }

    // apply filters
    const tasks = await prisma.task.findMany({
        where: filter
    });

    return res.status(200).json(tasks);

    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
});


// add task
router.post('/add', async(req, res) => {
    const { title, description, authorId } = req.body;

    try {
        const taskDB = await prisma.task.create({
            data: {
                title,
                description,
                author: {
                    connect: { id: authorId }
                }
            }
        });

        return res.status(201).json(taskDB)

    } catch (error) {
        return res.status(404).json({message: error})
    }
})

// update task
router.put('/edit/:taskId', async(req, res) => {
    const { taskId } = req.params;
    const { title, description, completed } = req.body;

    try {
        const taskDB = await prisma.task.update({
            where: {
                id: taskId
            },
            data: {
                title,
                description,
                completed
            }
        });

        return res.status(201).json(taskDB)

    } catch (error) {
        return res.status(404).json({message: error})
    }
})

// remove task
router.delete('/delete/:taskId', async(req, res) => {
    const { taskId } = req.params;
    try {
        const taskDB = await prisma.task.delete({
            where: {
                id: taskId
            }
        });

        return res.status(201).json({message: "task removed successfully!", task: taskId})

    } catch (error) {
        return res.status(404).json({message: error})
    }
})

export default router