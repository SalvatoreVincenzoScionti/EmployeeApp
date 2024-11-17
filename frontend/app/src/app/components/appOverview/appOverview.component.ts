import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IAppData } from 'src/app/models/appData.model';
import { CardComponent } from 'src/app/ui/card/card.component';
import { UiModule } from 'src/app/ui/ui.module';

@Component({
  selector: 'app-app-overview',
  standalone: true,
  imports: [CommonModule, UiModule],
  templateUrl: './appOverview.component.html',
  styleUrl: './appOverview.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppOverviewComponent {
  // TBD: Backend
  getAvailableAppData(): IAppData[] {
    return [
      {
        name: 'Employee Management',
        isInProd: true,
        path: 'employeeManagement',
      },
      {
        name: 'Employee Social Media',
        isInProd: false,
        path: 'employeeSocialMedia',
      },
    ];
  }
}
