import { validate } from 'uuid';
export const validateId = (req, res, next) => {
    const data = req.params;
    for (const id of Object.values(data)) {
        if (!validate(id)) {
            return res.status(400).json({
                message: 'invalid id',
            });
        }
    }
    next();
};

export const validateData = (req, res, next) => {
    const { title, description, status, start_date, end_date } = req.body;
    const allowed = ['active', 'pending', 'done'];
    if (!title || !status) {
        return res.status(400).json({
            message: 'title and status are required',
        });
    }
    if (typeof title !== 'string') {
        return res.status(400).json({
            message: 'Title must be a string',
        });
    }
    if (description && typeof description !== 'string') {
        return res.status(400).json({
            message: 'Description must be a string',
        });
    }
    if (!allowed.includes(status)) {
        return res.status(400).json({
            message: 'invalid status value',
        });
    }
    if (start_date && isNaN(Date.parse(start_date))) {
        return res.status(400).json({
            message: 'Invalid start date',
        });
    }
    next();
};