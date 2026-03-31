export interface JobPosting {
  jobId: string;
  rolePosition: string;
  workModel: string;
  workLocation: string;
  minExperienceYears: number;
  requiredSkills: string;
}
export interface JobDetailsResponse {
  jobId: string;

  workModel: string;
  workLocation: string;

  requiredEducation: string;
  minExperienceYears: number;

  jobDescription: string;

  requiredSkills: string;
  preferredSkills: string;

  responsibilities: string;
  challenges: string;

  benefitsWorkCulture: string;
}

export interface Job {
  jobId: string;
  rolePosition: string;
  workLocation: string;
  workModel: string;
  numberOfOpenings: number;
  status: string;
  createdAt: string;
  
  // Optional mock properties for UI stats until backend supports them
  totalCandidates?: number;
  shortlisted?: number;
  interviewed?: number;
}

export interface JobApiResponse {
  data: Job[];
  pageNumber: number;
  pageSize: number;
  totalRecords: number;
  totalPages: number;
}

export interface JobDetails {
  jobId: string;
  createdBy: string;
  rolePosition: string;
  numberOfOpenings: number;
  workModel: string;
  workLocation: string;
  workHoursStart: string;
  workHoursEnd: string;
  isShiftDuty: boolean;
  isRotationalShift: boolean;
  requiredEducation: string;
  minExperienceYears: number;
  joiningPeriodDays: number;
  maxAgeYears: number;
  jdFileUrl: string | null;
  jobDescription: string;
  requiredSkills: string;
  preferredSkills: string;
  roleSummary: string;
  responsibilities: string;
  challenges: string;
  benefitsWorkCulture: string;
  structuredJdData: any | null; 
  parsedJd: any | null; 
  status: string;
  jobExpiryDate: string;
  createdAt: string;
  updatedAt: string;
}

export interface CreateJobRequest {
  createdBy: string;
  rolePosition: string;
  numberOfOpenings: number;
  workModel: string;
  workLocation: string;
  workHoursStart: string;
  workHoursEnd: string;
  isShiftDuty: boolean;
  isRotationalShift: boolean;
  requiredEducation: string;
  minExperienceYears: number;
  joiningPeriodDays: number;
  maxAgeYears?: number;
  jobDescription: string;
  requiredSkills: string;
  preferredSkills?: string;
  responsibilities?: string;
  challenges?: string;
  benefitsWorkCulture?: string;
  jobExpiryDate: string;
}
