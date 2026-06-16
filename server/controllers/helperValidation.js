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
