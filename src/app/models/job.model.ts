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
