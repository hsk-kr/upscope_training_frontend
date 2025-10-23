export type PainListItem = {
  _id: string;
  title: string;
  desc: string;
  available: boolean;
  complete: boolean;
};

export type Pain = {
  _id: string;
  title: string;
  desc: string;
  concept: string;
  whiteboard: string;
  practices: string[];
  available: boolean;
  complete: boolean;
};
