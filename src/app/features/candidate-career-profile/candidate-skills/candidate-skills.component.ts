import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { ResumeParseService } from '../../../services/resume-parse.service';

@Component({
  selector: 'app-candidate-skills',
  templateUrl: './candidate-skills.component.html',
  styleUrls: ['./candidate-skills.component.scss']
})
export class CandidateSkillsComponent implements OnInit, OnDestroy {
  newSkillName: string = '';
  selectedProficiency: string = 'Intermediate';
  proficiencyLevels: string[] = ['Beginner', 'Intermediate', 'Advanced', 'Expert'];
  showEditModal: boolean = false;
  activeSkillIndex: number | null = null;
  editingSkill: { name: string; proficiency: string } | null = null;

  candidateSkills: Array<{ name: string; proficiency: string }> = [];

  private destroy$ = new Subject<void>();

  constructor(private resumeParseService: ResumeParseService) {}

  ngOnInit(): void {
    this.resumeParseService.parsedResume$
      .pipe(takeUntil(this.destroy$))
      .subscribe(data => {
        if (!data || !data.skills?.length) return;

        // Map parsed skills → existing candidateSkills structure
        // Default proficiency to Intermediate since resume doesn't contain it
        const parsedSkills = data.skills.map(skill => ({
          name: skill,
          proficiency: 'Intermediate'
        }));

        // Merge with existing — avoid duplicates by name
        parsedSkills.forEach(parsed => {
          const exists = this.candidateSkills
            .some(s => s.name.toLowerCase() === parsed.name.toLowerCase());
          if (!exists) {
            this.candidateSkills.push(parsed);
          }
        });
      });
  }

  addSkill(): void {
    if (this.newSkillName.trim()) {
      this.candidateSkills.push({
        name: this.newSkillName.trim(),
        proficiency: this.selectedProficiency
      });
      this.newSkillName = '';
    }
  }

  removeSkill(index: number): void {
    this.candidateSkills.splice(index, 1);
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }
  // --- ADD THESE MODAL FUNCTIONS ---
  openEditModal(index: number): void {
    this.activeSkillIndex = index;
    // Create a copy so the UI doesn't update until they hit "Save"
    this.editingSkill = { ...this.candidateSkills[index] }; 
    this.showEditModal = true;
  }

  closeEditModal(): void {
    this.showEditModal = false;
    this.activeSkillIndex = null;
    this.editingSkill = null;
  }

  saveSkillProficiency(): void {
    if (this.activeSkillIndex !== null && this.editingSkill) {
      // Save the updated proficiency back to the main array
      this.candidateSkills[this.activeSkillIndex] = this.editingSkill;
    }
    this.closeEditModal();
  }
}