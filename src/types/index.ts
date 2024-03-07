type DocFile = {
  id: number;
  name: string;
  status: boolean;
  fields: Field[];
  created_at: string;
  updated_at: string;
}

type Field = {
  id: number;
  name: string;
  status: booean;
  created_at: string;
}

export type {
  DocFile,
  Field
}
