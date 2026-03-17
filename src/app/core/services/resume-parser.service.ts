import { Injectable } from '@angular/core';
import { ResumeJson } from '../models/resume-json.model';

@Injectable({
  providedIn: 'root'
})
export class ResumeParserService {
  async buildResumeJson(file: File): Promise<ResumeJson> {
    const text = await file.text().catch(() => 'Preview not available for this file type.');

    const preview = text.slice(0, 800);
    const emailMatch = text.match(/[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}/i);
    const phoneMatch = text.match(/(\+\d{1,3}[- ]?)?\d{10}/);

    return {
      fileName: file.name,
      fileSize: file.size,
      uploadedAt: new Date().toISOString(),
      extractedTextPreview: preview,
      parsedSections: {
        email: emailMatch?.[0],
        phone: phoneMatch?.[0],
        skills: [],
        education: [],
        experience: []
      }
    };
  }
}