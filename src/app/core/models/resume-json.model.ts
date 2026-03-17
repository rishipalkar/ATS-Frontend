export interface ResumeJson {
  fileName: string;
  fileSize: number;
  uploadedAt: string;
  extractedTextPreview: string;
  parsedSections: {
    name?: string;
    email?: string;
    phone?: string;
    skills?: string[];
    education?: string[];
    experience?: string[];
  };
}