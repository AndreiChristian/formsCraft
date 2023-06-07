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

export interface Survey {
  id?: number;
  header: SurveyHeader;
  questions: Question[];
  status: 'active' | 'inactive';
  created_at?: Date;
  updated_at?: Date;

}
