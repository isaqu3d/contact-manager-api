import { Request, Response, NextFunction } from 'express';
import { ZodSchema } from 'zod';

export const validate = (schema: ZodSchema, source: 'body' | 'params' = 'body') =>
  (req: Request, res: Response, next: NextFunction) => {
    const result = schema.safeParse(req[source]);

    if (!result.success) {
      res.status(400).json({ message: result.error.issues[0].message });
      return;
    }

    Object.assign(req[source], result.data);
    next();
  };
