import { NgModule } from '@angular/core';
import { NgSelectModule } from '@ng-select/ng-select';
import { FormsModule } from '@angular/forms';
import { PagesComponent } from './pages.component';
import { DashboardModule } from './dashboard/dashboard.module';
import { ECommerceModule } from './e-commerce/e-commerce.module';
import { PagesRoutingModule } from './pages-routing.module';
import { ThemeModule } from '../@theme/theme.module';
import { MiscellaneousModule } from './miscellaneous/miscellaneous.module';
import { CatalogComponent } from './catalog/catalog.component';
import { CustomersComponent } from './catalog/customers/customers.component';
import { SuppliersComponent } from './catalog/suppliers/suppliers.component';
import { ProductsComponent } from './inventory/products/products.component';
const PAGES_COMPONENTS = [
  PagesComponent,
];

@NgModule({
  imports: [
    PagesRoutingModule,
    ThemeModule,
    DashboardModule,
    ECommerceModule,
    MiscellaneousModule,
    NgSelectModule,
    FormsModule,
  ],
  declarations: [
    ...PAGES_COMPONENTS,
    CatalogComponent,
    CustomersComponent,
    SuppliersComponent,
    ProductsComponent,
  ],
})
export class PagesModule {
}
