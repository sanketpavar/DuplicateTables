import { Component, ViewChild } from '@angular/core';
import { Observable } from 'rxjs';
// import { MatTableDataSource } from '@angular/material/table';
// import { MatPaginator } from '@angular/material/paginator';
import {
  GridComponent,
  RowSelectEventArgs,
} from '@syncfusion/ej2-angular-grids';
import { AppService } from './services/app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  mockData$: Observable<any[]>;
  // @ViewChild(MatPaginator) paginator: MatPaginator;
  // dataSource: MatTableDataSource<any>;
  displayedColumns: string[] = ['name', 'duplicates'];

  @ViewChild('grid') grid: GridComponent;
  daataSource: any[];
  pageSettings = { pageSize: 10, pageCount: 5, pageSizes: [5, 10, 25, 100] };

  constructor(private appService: AppService) {}

  // ngOnInit() {
  //   this.mockData$ = this.appService.getMockData();

  //   this.appService.getExternalData().subscribe((data) => {
  //     const counts = {};
  //     const duplicates = [];

  //     // Count the occurrences of each name
  //     for (const item of data) {
  //       if (counts[item.name]) {
  //         counts[item.name]++;
  //       } else {
  //         counts[item.name] = 1;
  //       }
  //     }

  //     // Create a new array with the name and duplicates count
  //     for (const name in counts) {
  //       if (counts.hasOwnProperty(name)) {
  //         duplicates.push({ name: name, duplicates: counts[name] });
  //       }
  //     }
  //   });
  // }

  ngOnInit() {
    this.appService.getExternalData().subscribe((data) => {
      const counts = {};
      const duplicates = [];

      // Count the occurrences of each name
      for (const item of data) {
        if (counts[item.name]) {
          counts[item.name]++;
        } else {
          counts[item.name] = 1;
        }
      }

      // Create a new array with the name and duplicates count
      for (const name in counts) {
        if (counts.hasOwnProperty(name)) {
          duplicates.push({ name: name, duplicates: counts[name] });
        }
      }

      // Set the data source of the grid
      this.daataSource = duplicates;
      this.grid.refresh();
    });
  }

  onRowSelected(args: RowSelectEventArgs) {
    const selectedRecords = this.grid.getSelectedRecords();
    console.log(selectedRecords);
  }
}
