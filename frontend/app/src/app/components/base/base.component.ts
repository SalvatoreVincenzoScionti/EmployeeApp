import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UiModule } from 'src/app/ui/ui.module';
import { IAppData } from 'src/app/models/appData.model';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-base',
  standalone: true,
  imports: [CommonModule, UiModule, RouterModule],
  templateUrl: './base.component.html',
  styleUrl: './base.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BaseComponent {}
