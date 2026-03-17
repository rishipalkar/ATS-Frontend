export interface CandidateApplication {
  personalDetails: {
    firstName: string;
    lastName: string;
    email: string;
    phoneNumber: string;
    addressLine1: string;
    addressLine2: string;
    addressLine3: string;
    country: string;
    state: string;
    city: string;
    pinCode: string;
    linkedInUrl: string;
    highestQualification: string;
    otherQualifications: string;
    verificationIdType: 'PAN' | 'AADHAAR' | '';
    verificationIdValue: string;
  };
  employmentScreening: {
    currentlyEmployed: boolean | null;
    onNoticePeriod: boolean | null;
    workedWithUsBefore: boolean | null;
    workedWithPreviousOrganization: boolean | null;
    hasLegalObligationConflict: boolean | null;
    hasConductEmploymentIssue: boolean | null;
    needsInterviewAdjustments: boolean | null;
    interviewAdjustmentsDetails: string;
    hasLegalRightToWork: boolean | null;
    hasCriminalRecord: boolean | null;
    criminalRecordDetails: string;
    dismissedByPreviousEmployer: boolean | null;
  };
  referral: {
    hasEmployeeReferral: boolean | null;
    employeeName: string;
    designation: string;
    referralId: string;
  };
  diversity: {
    dateOfBirth: string;
    race: string;
    sexualOrientation: string;
    genderIdentity: string;
    pronoun: string;
    disability: string;
    militaryService: string;
  };
  declarations: {
    acceptedTerms: boolean;
  };
  resume: {
    fileName: string;
    file?: File | null;
    jsonPreview?: unknown;
  };
}