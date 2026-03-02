// src/app/models/residence.ts
export interface Residence {
  id: number;
  name: string;
  address: string;
  image: string;       // URL ou nom de fichier
  status: string;
  created_at: string;  // garder string pour simplifier l'affichage
  updated_at: string;
}