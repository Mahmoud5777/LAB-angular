import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatChipsModule } from '@angular/material/chips';
import { ChartDataset, ChartOptions } from 'chart.js';
import { BaseChartDirective } from 'ng2-charts';
import { MemeberService } from '../../services/memeber-service';

@Component({
  selector: 'app-dashboard',
  imports: [MatCardModule, MatChipsModule, BaseChartDirective],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.css',
})
export class Dashboard {
  Nb_Members: number = 0;
  types: String[] = [];
  chartLabels: String[] = [];
  chartData: ChartDataset<'pie'>[] = [{ label: 'Members', data: [] }];
  chartOptions: ChartOptions<'pie'> = {
    responsive: true,
    plugins: { legend: { display: true } },
  };

  constructor(private memberService: MemeberService) {
    this.memberService.getAllMembers().subscribe((members) => {
      this.Nb_Members = members.length;
      console.log('Types:');
      this.types = [...new Set(members.map((m) => m.type))];
     
      this.chartLabels = this.types;
      const counts = this.types.map(
        (type) => members.filter((m) => m.type === type).length
      );

      this.chartData = [{ label: 'Members', data: counts }];
    });
  }
}