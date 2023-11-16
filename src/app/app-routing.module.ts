import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { CareersComponent } from './careers/careers.component';
import { ProductComponent } from './product/product.component';
import { ServicesComponent } from './services/services.component';

const routes: Routes = [

  {
    component:HomeComponent,
    path:""
  },
  {
    component:AboutComponent,
    path:"About"
  },
  {
    component:ContactComponent,
    path:"Contact"
  },
  {
    component:CareersComponent,
    path:"Careers"
  },
  {
    component:ProductComponent,
    path:"Product"
  },
  {
    component:ServicesComponent,
    path:"Services"
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
