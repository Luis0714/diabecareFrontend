import { Recommendation } from "./recommendation.model";

export interface PersonalizedPlan {
    pacienteId: number;
    profesionalSaludId: number;
    recomendaciones: Recommendation[];
}

export interface PersonalizedPlanResponse {
    plan_Id: number;
    creation_date: string;
    full_name_professional: string;
}
