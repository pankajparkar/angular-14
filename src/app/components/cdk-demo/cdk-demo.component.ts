import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-cdk-demo',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './cdk-demo.component.html',
  styleUrls: ['./cdk-demo.component.scss']
})
export class CdkDemoComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
