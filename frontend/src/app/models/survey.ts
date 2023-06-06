export interface SurveyHeader {
  title: string;
  description: string;
}

export interface Question {
  type: string;
  id: number;
  title: string;
  description: string;
  required: boolean;
  options?: any[];
}
