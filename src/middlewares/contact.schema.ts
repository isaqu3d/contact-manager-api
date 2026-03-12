import { z } from 'zod';

const nomeSchema = z
  .string()
  .refine((val) => {
    const words = val.trim().split(/\s+/);
    return words.length >= 2 && words.every((w) => w.length >= 3);
  }, 'Nome deve conter pelo menos duas palavras, cada uma com no mínimo 3 letras.');

const telefoneSchema = z
  .string()
  .regex(/^\(\d{2}\) \d{4,5}-\d{4}$/, 'Telefone deve estar no formato (XX) XXXXX-XXXX ou (XX) XXXX-XXXX.');

export const createContactSchema = z.object({
  nome: nomeSchema,
  telefone: telefoneSchema,
});

export const updateContactSchema = z
  .object({
    nome: nomeSchema.optional(),
    telefone: telefoneSchema.optional(),
  })
  .refine(
    (data) => data.nome !== undefined || data.telefone !== undefined,
    'Informe pelo menos um campo para atualizar (nome ou telefone).',
  );

export const idParamSchema = z.object({
  id: z.coerce.number().int().positive('ID deve ser um número inteiro positivo.'),
});
