import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NavbarComponent } from './navbar.component';

import { MatToolbarModule } from "@angular/material/toolbar";
import { MatIconModule } from "@angular/material/icon";
import { RouterModule } from "@angular/router";
import { SvgContactComponent } from "src/app/components/svg-contact/svg-contact.component";
import { SvgInfoComponent } from "src/app/components/svg-info/svg-info.component";
import { SvgGithubComponent } from "src/app/components/svg-github/svg-github.component";

@NgModule({
  declarations: [NavbarComponent, SvgInfoComponent, SvgContactComponent, SvgGithubComponent],
  imports: [
    CommonModule,
    MatToolbarModule,
    MatIconModule,
    RouterModule
  ],
  exports: [NavbarComponent]
})
export class NavbarModule { }
