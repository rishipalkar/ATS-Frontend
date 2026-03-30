import { Component, HostListener } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-candidate-left-sidebar',
  templateUrl: './candidate-left-sidebar.component.html',
  styleUrls: ['./candidate-left-sidebar.component.scss']
})
export class CandidateLeftSidebarComponent {
  sidebarWidth = 230; // Clean starting width
  minWidth = 70;      // Allow it to go very slim (icon mode)
  maxWidth = 350;
  isResizing = false;

  constructor(private router: Router) {}

  startResizing(event: MouseEvent) {
    this.isResizing = true;
    event.preventDefault();
  }

  @HostListener('window:mousemove', ['$event'])
  onMouseMove(event: MouseEvent) {
    if (!this.isResizing) return;
    const newWidth = event.clientX;
    if (newWidth >= this.minWidth && newWidth <= this.maxWidth) {
      this.sidebarWidth = newWidth;
      document.documentElement.style.setProperty('--sidebar-width', `${this.sidebarWidth}px`);
    }
  }

  @HostListener('window:mouseup')
  onMouseUp() {
    this.isResizing = false;
  }

  onLogout() {
    this.router.navigate(['/login']);
  }
}