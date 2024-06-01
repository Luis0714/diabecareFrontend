export interface Recommendation {
    planId: number;
    actividad: string;
    titulo: string;
    horaEjecucion: string;
}

export interface RecommendationViewModel {
    recomendacionId: number;
    titulo: string;
    estado: string;
    actividad:string;
    planId: number;
    horaEjecucion: string;
}