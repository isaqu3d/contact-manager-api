import { Request, Response } from 'express';
import * as contactService from '../services/contact.service.js';

export const getAll = async (_req: Request, res: Response) => {
  const contacts = await contactService.findAll();
  res.status(200).json(contacts);
};

export const getById = async (req: Request, res: Response) => {
  const contact = await contactService.findById(Number(req.params.id));
  res.status(200).json(contact);
};

export const create = async (req: Request, res: Response) => {
  const contact = await contactService.create(req.body);
  res.status(201).json(contact);
};

export const update = async (req: Request, res: Response) => {
  const contact = await contactService.update(Number(req.params.id), req.body);
  res.status(200).json(contact);
};

export const remove = async (req: Request, res: Response) => {
  await contactService.remove(Number(req.params.id));
  res.status(204).send();
};
