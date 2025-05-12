// src/api/productsApi.ts
// src/api/productsApi.ts
import type { skills } from '../types/skills';
import skillsdata from '../data/skills.json'

// Simulate a delay to mimic a real API call
const API_DELAY = 500;

export const getAllskills = (): Promise<skills[]> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(skillsdata as unknown as skills[]);
    }, API_DELAY);
  });
};

export const getskillById = (id: number): Promise<skills | undefined> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const product = (skillsdata as unknown as skills[]).find((p) => p.id === id);
      resolve(product);
    }, API_DELAY);
  });
};