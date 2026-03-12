export interface Contact {
  id: number;
  nome: string;
  telefone: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface CreateContactDTO {
  nome: string;
  telefone: string;
}

export interface UpdateContactDTO {
  nome?: string;
  telefone?: string;
}
