import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { SlidebarComponent } from './slidebar/slidebar.component';
import { FooterComponent } from './footer/footer.component';
import { RouterModule } from '@angular/router';
import { MatListModule } from '@angular/material/list';

@NgModule({
  declarations: [HeaderComponent, SlidebarComponent, FooterComponent],
  imports: [CommonModule, RouterModule, MatListModule],
  exports: [HeaderComponent, SlidebarComponent, FooterComponent],
})
export class ComponentsModule {}
