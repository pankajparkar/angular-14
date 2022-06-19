import { Component, OnInit, TemplateRef, ViewChild, ViewContainerRef } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-optional-injector',
  standalone: true,
  imports: [
    CommonModule,
    MatCardModule,
    MatButtonModule,
  ],
  templateUrl: './optional-injector.component.html',
  styleUrls: ['./optional-injector.component.scss']
})
export class OptionalInjectorComponent implements OnInit {
  htmlTemplateRef = `
    <ng-template #template let-user>
      <div>
          My name is {{ user.name }}
      </div>
    </ng-template>
  `;
  @ViewChild('vc', { read: ViewContainerRef, static: true }) vc!: ViewContainerRef;
  @ViewChild('template', { read: TemplateRef, static: true }) template!: TemplateRef<any>;
  user = { name: 'Default Name' };

  constructor() { }

  clear() {
    this.vc.clear();
  }

  addContentVc() {
    this.clear();
    const view = this.vc.createEmbeddedView(this.template, { $implicit: this.user });
    this.vc.insert(view);
  }

  addContentTemplate() {
    this.clear();
    const view = this.template.createEmbeddedView({ $implicit: { name: 'Pankaj' } });
    this.vc.insert(view);
  }

  ngOnInit(): void {
  }

}
