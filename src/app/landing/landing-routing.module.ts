import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { EnergyComponent } from './energy/energy.component';
import { LandingComponent } from './landing.component';
import { PricingComponent } from './pricing/pricing.component';
import { ProductComponent } from './product/product.component';

@NgModule({
  imports: [
    RouterModule.forChild([
      { path: '', component: LandingComponent },
      { path: 'energy', component: EnergyComponent },
      { path: 'product', component: ProductComponent },
      { path: 'pricing', component: PricingComponent },
    ]),
  ],
  exports: [RouterModule],
})
export class LandingRoutingModule {}
