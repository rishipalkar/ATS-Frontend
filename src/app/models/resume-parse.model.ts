// Matches exactly what your .NET ResumeParseResponse returns
export interface EducationParsed {
  courseTitle: string | null;
  schoolCollegeName: string | null;
  universityExamBody: string | null;
  completionDate: string | null;
  scoreGrade: string | null;
  isHighestEducation: boolean | null;
  areasOfSpecialization: string[];
}

export interface EmploymentParsed {
  organizationName: string | null;
  jobRole: string | null;
  workLocation: string | null;
  fromDate: string | null;
  toDate: string | null;
  grossPackage: number | null;
}

export interface ProjectParsed {
  projectTitle: string | null;
  category: string | null;
  durationMonths: number | null;
  teamSize: number | null;
  briefInfo: string | null;
  projectRole: string | null;
  startDate: string | null;
  endDate: string | null;
}

export interface ResponsibilityParsed {
  description: string | null;
  deliverable: string | null;
  proficiencyLevel: string | null;
}

export interface ResumeParseResponse {
  candidateId: string | null;
  firstName: string | null;
  lastName: string | null;
  email: string | null;
  phoneNumber: string | null;
  city: string | null;
  state: string | null;
  country: string | null;
  totalExperienceYears: number | null;
  presentEmploymentStatus: string | null;
  linkedInUrl: string | null;
  aiSummary: string | null;
  skills: string[];
  resumeUrl: string | null;
  educations: EducationParsed[];
  employments: EmploymentParsed[];
  projects: ProjectParsed[];
  responsibilities: ResponsibilityParsed[];
}