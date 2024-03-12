import { Component, Injectable, Input, ViewChild } from '@angular/core';
import {
  MatPaginator,
  MatPaginatorIntl,
  MatPaginatorSelectConfig,
} from '@angular/material/paginator';
import { MAT_SELECT_CONFIG } from '@angular/material/select';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Subject } from 'rxjs';

export interface UserData {
  name: string;
  address: string;
  role: string;
  email: string;
  status: string;
}

const table_data: UserData[] = [
  {
    name: 'Eleanor Pena',
    address: '94 Queens Road, Enfield, London, EN10 8KT',
    role: 'Finance',
    email: 'kenzi.lawson@example.com',
    status: 'Inactive',
  },
  {
    name: 'Marvin McKinney',
    address: '313 Main Road, Sunderland, SR69 8TF',
    role: 'Human Resource Manager',
    email: 'felicia.reid@example.com',
    status: 'Active',
  },
  {
    name: 'Robert Fox',
    address: '1 Church Road, London, E3 5GP',
    role: 'Ux Designer',
    email: 'jessica.hanson@example.com',
    status: 'Active',
  },
  {
    name: 'Annette Black',
    address: '787 Mill Lane, Bath, BA49 6DL',
    role: 'Senior Developer',
    email: 'tim.jennings@example.com',
    status: 'Pending',
  },
  {
    name: 'Bessie Cooper',
    address: '2 New Street, Harrogate, HG76 8XV',
    role: 'Front End Developer',
    email: 'jackson.graham@example.com',
    status: 'Pending',
  },
  {
    name: 'Esther Howard',
    address: 'Flat 4, 79 Chester Road, Exeter, EX96 1FY',
    role: 'Chief Executive Officer',
    email: 'nathan.roberts@example.com',
    status: 'Active',
  },
  {
    name: 'Eleanor Pena',
    address: '94 Queens Road, Enfield, London, EN10 8KT',
    role: 'Finance',
    email: 'kenzi.lawson@example.com',
    status: 'Inactive',
  },
  {
    name: 'Marvin McKinney',
    address: '313 Main Road, Sunderland, SR69 8TF',
    role: 'Human Resource Manager',
    email: 'felicia.reid@example.com',
    status: 'Active',
  },
  {
    name: 'Robert Fox',
    address: '1 Church Road, London, E3 5GP',
    role: 'Ux Designer',
    email: 'jessica.hanson@example.com',
    status: 'Active',
  },
  {
    name: 'Annette Black',
    address: '787 Mill Lane, Bath, BA49 6DL',
    role: 'Senior Developer',
    email: 'tim.jennings@example.com',
    status: 'Pending',
  },
  {
    name: 'Bessie Cooper',
    address: '2 New Street, Harrogate, HG76 8XV',
    role: 'Front End Developer',
    email: 'jackson.graham@example.com',
    status: 'Pending',
  },
  {
    name: 'Esther Howard',
    address: 'Flat 4, 79 Chester Road, Exeter, EX96 1FY',
    role: 'Chief Executive Officer',
    email: 'nathan.roberts@example.com',
    status: 'Active',
  },
  {
    name: 'Eleanor Pena',
    address: '94 Queens Road, Enfield, London, EN10 8KT',
    role: 'Finance',
    email: 'kenzi.lawson@example.com',
    status: 'Inactive',
  },
  {
    name: 'Marvin McKinney',
    address: '313 Main Road, Sunderland, SR69 8TF',
    role: 'Human Resource Manager',
    email: 'felicia.reid@example.com',
    status: 'Active',
  },
  {
    name: 'Robert Fox',
    address: '1 Church Road, London, E3 5GP',
    role: 'Ux Designer',
    email: 'jessica.hanson@example.com',
    status: 'Active',
  },
  {
    name: 'Annette Black',
    address: '787 Mill Lane, Bath, BA49 6DL',
    role: 'Senior Developer',
    email: 'tim.jennings@example.com',
    status: 'Pending',
  },
  {
    name: 'Bessie Cooper',
    address: '2 New Street, Harrogate, HG76 8XV',
    role: 'Front End Developer',
    email: 'jackson.graham@example.com',
    status: 'Pending',
  },
  {
    name: 'Esther Howard',
    address: 'Flat 4, 79 Chester Road, Exeter, EX96 1FY',
    role: 'Chief Executive Officer',
    email: 'nathan.roberts@example.com',
    status: 'Active',
  },
  {
    name: 'Eleanor Pena',
    address: '94 Queens Road, Enfield, London, EN10 8KT',
    role: 'Finance',
    email: 'kenzi.lawson@example.com',
    status: 'Inactive',
  },
  {
    name: 'Marvin McKinney',
    address: '313 Main Road, Sunderland, SR69 8TF',
    role: 'Human Resource Manager',
    email: 'felicia.reid@example.com',
    status: 'Active',
  },
  {
    name: 'Robert Fox',
    address: '1 Church Road, London, E3 5GP',
    role: 'Ux Designer',
    email: 'jessica.hanson@example.com',
    status: 'Active',
  },
  {
    name: 'Annette Black',
    address: '787 Mill Lane, Bath, BA49 6DL',
    role: 'Senior Developer',
    email: 'tim.jennings@example.com',
    status: 'Pending',
  },
  {
    name: 'Bessie Cooper',
    address: '2 New Street, Harrogate, HG76 8XV',
    role: 'Front End Developer',
    email: 'jackson.graham@example.com',
    status: 'Pending',
  },
  {
    name: 'Esther Howard',
    address: 'Flat 4, 79 Chester Road, Exeter, EX96 1FY',
    role: 'Chief Executive Officer',
    email: 'nathan.roberts@example.com',
    status: 'Active',
  },
];

@Injectable()
export class MyCustomPaginatorIntl implements MatPaginatorIntl {
  changes = new Subject<void>();

  // For internationalization, the `$localize` function from
  // the `@angular/localize` package can be used.
  firstPageLabel = `First page`;
  itemsPerPageLabel = `Rows per page: `;
  lastPageLabel = `Last page`;

  // You can set labels to an arbitrary string too, or dynamically compute
  // it through other third-party internationalization libraries.
  nextPageLabel = 'Next page';
  previousPageLabel = 'Previous page';

  getRangeLabel(page: number, pageSize: number, length: number): string {
    if (length === 0) {
      return `1-10 of 100`;
    }
    return `${page + 1}-${pageSize} of ${length}`;
  }
}
@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
  providers: [
    { provide: MatPaginatorIntl, useClass: MyCustomPaginatorIntl },
    {
      provide: MAT_SELECT_CONFIG,
      useValue: { overlayClass: 'customClass' },
    },
  ],
})
export class TableComponent {
  @Input() paginationEnabled: boolean = false;
  @Input() tableClass: string;
  displayPagination!: boolean;
  displayedColumns: string[] = [
    'name',
    'address',
    'role',
    'email',
    'status',
    'action',
  ];
  dataSource: MatTableDataSource<UserData>;
  paginationSelectConfig: MatPaginatorSelectConfig = {
    panelClass: 'pagination-menu',
  };
  @ViewChild(MatPaginator, { static: false }) paginator: MatPaginator | null =
    null;
  @ViewChild(MatSort) sort: MatSort | null = null;
  constructor() {
    this.tableClass = '';
    // Assign the data to the data source for the table to render
    this.dataSource = new MatTableDataSource(table_data);
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }
}
