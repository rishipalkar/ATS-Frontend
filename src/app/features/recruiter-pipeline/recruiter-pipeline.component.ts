import { Component, OnInit } from '@angular/core';
import { 
  CdkDragDrop, 
  moveItemInArray, 
  transferArrayItem 
} from '@angular/cdk/drag-drop';
interface Candidate {
  id: number;
  name: string;
  role: string;
  score: number;
  timeAgo: string;
  avatar: string;
}

interface Stage {
  title: string;
  candidates: Candidate[];
}

@Component({
  selector: 'app-recruiter-pipeline',
  templateUrl: './recruiter-pipeline.component.html',
  styleUrls: ['./recruiter-pipeline.component.scss']
})
export class RecruiterPipelineComponent implements OnInit {
  
  stages: Stage[] = [
    {
      title: 'SHORTLISTED',
      candidates: [
        { id: 1, name: 'Michael Chen', role: 'Product Designer', score: 88, timeAgo: '5 hours ago', avatar: 'M' },
        { id: 2, name: 'David Kim', role: 'DevOps Engineer', score: 82, timeAgo: '2 days ago', avatar: 'D' }
      ]
    },
    {
      title: 'INTERVIEW ROUND 1',
      candidates: [
        { id: 3, name: 'James Wilson', role: 'Fullstack Dev', score: 85, timeAgo: '3 days ago', avatar: 'J' }
      ]
    },
    {
      title: 'INTERVIEW ROUND 2',
      candidates: [
        { id: 4, name: 'Sarah Jenkins', role: 'Senior Frontend Engineer', score: 94, timeAgo: '2 hours ago', avatar: 'S' }
      ]
    },
    {
      title: 'INTERVIEW ROUND 3',
      candidates: [
        { id: 5, name: 'Elena Rodriguez', role: 'Backend Developer', score: 91, timeAgo: 'Yesterday', avatar: 'E' }
      ]
    }
  ];
  drop(event: CdkDragDrop<Candidate[]>) {
    if (event.previousContainer === event.container) {
      // Logic for reordering within the same column
      moveItemInArray(
        event.container.data, 
        event.previousIndex, 
        event.currentIndex
      );
    } else {
      // Logic for moving a candidate to a DIFFERENT column
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    }
  }


  constructor() { }
  ngOnInit(): void { }
}