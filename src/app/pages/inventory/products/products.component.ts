import { Component, OnInit } from '@angular/core';
import {  ChangeDetectionStrategy } from '@angular/core';
import { distinctUntilChanged, debounceTime, switchMap, tap, catchError } from 'rxjs/operators';
import { Subject, Observable, of, concat } from 'rxjs';
import { NgSelectModule } from '@ng-select/ng-select';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'ngx-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
})
export class ProductsComponent implements OnInit {
    people3$: any;
     people3Loading = false;
     people3input$ = new Subject<string>();
     selectedPersons: any= <any>[{ name: '15%' }, { name: '2%' }];
  constructor() { }

  ngOnInit() {
  }

}
