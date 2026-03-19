import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-page-header',
  template: `
    <div class="page-header">
      <h1>{{ title }}</h1>
      <p *ngIf="subtitle">{{ subtitle }}</p>
    </div>
  `,
  styles: [`
    .page-header {
      margin-bottom: 30px;
      padding-bottom: 15px;
      border-bottom: 1px solid #e2e8f0;
    }
    h1 { font-size: 24px; font-weight: 700; color: #1e293b; margin: 0; }
    p { color: #64748b; font-size: 14px; margin-top: 5px; }
  `]
})
export class PageHeaderComponent {
  @Input() title: string = '';
  @Input() subtitle: string = '';
}