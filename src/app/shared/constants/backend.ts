import { Patient } from 'src/app/core/models/patient.model';
export const BACKEND = {
  patients: [
  {
    id: 1,
    name: 'Juan David',
    image: 'https://www.w3schools.com/w3images/avatar2.png',
    lastName: 'Zapata L.',
    age: 22,
    date: new Date('12-05-2024').toISOString(),
    birthDate: '1991-01-01',
    glucoseLevel: 120,
    lastMedication: 'Acetaminofén',
    lastMeal: 'Hamburguer',
    physicalActivityHours: 2

  },
  {
    id: 2,
    name: 'Juan David',
    image: 'https://www.w3schools.com/w3images/avatar1.png',
    lastName: 'Zapata L.',
    age: 22,
    date: new Date('12-05-2024').toISOString(),
    birthDate: '1991-01-01',
    glucoseLevel: 120,
    lastMedication: 'Acetaminofén',
    lastMeal: 'Hamburguer',
    physicalActivityHours: 2

  }
]
}


