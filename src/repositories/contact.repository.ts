import { prisma } from '../config/database.js';
import { CreateContactDTO, UpdateContactDTO } from '../types/contact.types.js';

export const findAll = () =>
  prisma.contact.findMany({ orderBy: { createdAt: 'desc' } });

export const findById = (id: number) =>
  prisma.contact.findUnique({ where: { id } });

export const create = (data: CreateContactDTO) =>
  prisma.contact.create({ data });

export const update = (id: number, data: UpdateContactDTO) =>
  prisma.contact.update({ where: { id }, data });

export const remove = (id: number) =>
  prisma.contact.delete({ where: { id } });
