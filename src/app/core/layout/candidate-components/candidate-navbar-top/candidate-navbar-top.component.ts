import { Component } from '@angular/core';
import { SearchService } from 'src/app/services/search.service'; // adjust path

@Component({
  selector: 'app-candidate-navbar-top',
  templateUrl: './candidate-navbar-top.component.html',
  styleUrls: ['./candidate-navbar-top.component.scss'],
})
export class CandidateNavbarTopComponent {
  searchQuery: string = '';
  searchTimeout: any;

  constructor(private searchService: SearchService) {}

  onSearchChange(): void {
    clearTimeout(this.searchTimeout);

    this.searchTimeout = setTimeout(() => {
      this.searchService.updateSearch(this.searchQuery);
    }, 400); // debounce
  }
}
