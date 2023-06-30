import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LandingRoutingModule } from './landing-routing.module';
import { LandingComponent } from './landing.component';
import { ButtonModule } from 'primeng/button';
import { RouterModule } from '@angular/router';
import { StyleClassModule } from 'primeng/styleclass';
import { AppConfigModule } from 'src/app/layout/config/app.config.module';
import { AnimateEnterDirective } from './animateenter.directive';
import { EnergyComponent } from './energy/energy.component';
import { ProductComponent } from './product/product.component';
import { PricingComponent } from './pricing/pricing.component';

@NgModule({
  imports: [CommonModule, LandingRoutingModule, ButtonModule, RouterModule, StyleClassModule, AppConfigModule],
  declarations: [LandingComponent, AnimateEnterDirective, EnergyComponent, ProductComponent, PricingComponent],
})
export class LandingModule {}
