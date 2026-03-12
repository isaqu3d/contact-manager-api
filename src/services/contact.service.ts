import * as contactRepository from '../repositories/contact.repository.js';
import { CreateContactDTO, UpdateContactDTO } from '../types/contact.types.js';
import { AppError } from '../middlewares/error.middleware.js';

export const findAll = () => contactRepository.findAll();

export const findById = async (id: number) => {
  const contact = await contactRepository.findById(id);
  if (!contact) throw new AppError(404, 'Contato não encontrado.');
  return contact;
};

export const create = (data: CreateContactDTO) => contactRepository.create(data);

export const update = async (id: number, data: UpdateContactDTO) => {
  await findById(id);
  return contactRepository.update(id, data);
};

export const remove = async (id: number) => {
  await findById(id);
  return contactRepository.remove(id);
};
