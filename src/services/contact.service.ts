import * as contactRepository from '../repositories/contact.repository.js';
import { CreateContactDTO, UpdateContactDTO } from '../types/contact.types.js';
import { AppError } from '../middlewares/error.middleware.js';

export const findAll = () => contactRepository.findAll();

export const findById = async (id: number) => {
  const contact = await contactRepository.findById(id);
  if (!contact) throw new AppError(404, 'Contato não encontrado.');
  return contact;
};

export const create = async (data: CreateContactDTO) => {
  const existing = await contactRepository.findByTelefone(data.telefone);
  if (existing) throw new AppError(409, 'Já existe um contato com este telefone.');
  return contactRepository.create(data);
};

export const update = async (id: number, data: UpdateContactDTO) => {
  await findById(id);
  if (data.telefone) {
    const existing = await contactRepository.findByTelefone(data.telefone);
    if (existing && existing.id !== id) throw new AppError(409, 'Já existe um contato com este telefone.');
  }
  return contactRepository.update(id, data);
};

export const remove = async (id: number) => {
  await findById(id);
  return contactRepository.remove(id);
};
