import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { ResumeParseService } from '../../../services/resume-parse.service';

interface ResponsibilityCard {
  id: number;
  description: string;
  deliverable: string;
  proficiencyLevel: string;
  isExpanded: boolean;
}

@Component({
  selector: 'app-candidate-responsibilities',
  templateUrl: './candidate-responsibilities.component.html',
  styleUrls: ['./candidate-responsibilities.component.scss']
})
export class CandidateResponsibilitiesComponent implements OnInit, OnDestroy {

  isParsing = false;
  resumeUploaded = false;

  // Manual entry fields
  responsibilities: string = '';
  deliverables: string = '';
  proficiency: string = 'Intermediate';

  // Parsed cards from resume
  parsedCards: ResponsibilityCard[] = [];
  hasParsedData: boolean = false;

  private destroy$ = new Subject<void>();

  constructor(private resumeParseService: ResumeParseService) {}

  ngOnInit(): void {
    this.resumeParseService.parsedResume$
      .pipe(takeUntil(this.destroy$))
      .subscribe(data => {
        if (!data || !data.responsibilities?.length) return;

        // Map each responsibility → expandable card
        this.parsedCards = data.responsibilities
          .filter(r => r.description)
          .map((r, i) => ({
            id: i,
            description: r.description ?? '',
            deliverable: r.deliverable ?? '',
            proficiencyLevel: r.proficiencyLevel ?? 'Intermediate',
            isExpanded: false   // collapsed by default
          }));

        this.hasParsedData = this.parsedCards.length > 0;
        this.resumeUploaded = true;

        console.log(`✅ ${this.parsedCards.length} responsibility cards loaded`);
      });
  }

  toggleCard(card: ResponsibilityCard): void {
    card.isExpanded = !card.isExpanded;
  }

  expandAll(): void {
    this.parsedCards.forEach(c => c.isExpanded = true);
  }

  collapseAll(): void {
    this.parsedCards.forEach(c => c.isExpanded = false);
  }

  removeCard(index: number): void {
    this.parsedCards.splice(index, 1);
  }

  addManualEntry(): void {
    if (!this.responsibilities.trim()) return;

    this.parsedCards.unshift({
      id: Date.now(),
      description: this.responsibilities.trim(),
      deliverable: this.deliverables.trim(),
      proficiencyLevel: this.proficiency,
      isExpanded: true
    });

    // Clear form after adding
    this.responsibilities = '';
    this.deliverables = '';
    this.proficiency = 'Intermediate';
  }

  saveProfile(): void {
    console.log('Saving responsibilities:', this.parsedCards);
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }
}