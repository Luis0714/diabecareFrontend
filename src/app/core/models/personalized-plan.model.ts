import { Recommendation } from "./recommendation.model";

export interface PersonalizedPlan {
    pacienteId: number;
    profesionalSaludId: number;
    recomendaciones: Recommendation[];
}