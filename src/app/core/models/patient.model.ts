

export interface Patient {
  patientId: number;
  name: string;
  lastName: string;
  photo: string;
  date: string;
  age: number;
  glucoseLevel: number;
  lastMedication: string;
  lastMeal: string;
  physicalActivityHours: number;

}


export interface DataHistoryCreate{
  glucose_level: number;
  food: string;
  medication: string;
  hours_physical_activity: number;
  patient_id: number;
  user_patient_id: number;
}

export interface DataHistory{
  historialDatosId: number;
  pacienteId: number;
  fecha: string;
  nivelGlucosa: number;
  horasActividadFisica: number;
  medicamento: string;
  comida: string;
}
