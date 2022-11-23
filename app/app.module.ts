import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NavbarComponent } from './modulos/navbar/navbar.component';
import { HomeComponent } from './modulos/home/home.component';
import { BloggerComponent } from './modulos/blogger/blogger.component';
import { ContactoComponent } from './modulos/contacto/contacto.component';

import { RouterModule } from '@angular/router';
import { LoginComponent } from './modulos/login/login.component';
import { SliderComponent } from './modulos/home/slider/slider.component';
import { ItemcategoriaComponent } from './modulos/home/itemcategoria/itemcategoria.component';
import { NosotrosComponent } from './modulos/nosotros/nosotros.component';
import { FooterComponent } from './modulos/home/footer/footer.component';
import { FormularioComponent } from './modulos/contacto/formulario/formulario.component';
import { FormregistroComponent } from './modulos/formregistro/formregistro.component';
import { FormPaswwordComponent } from './modulos/form-paswword/form-paswword.component';
import { formatCurrency } from '@angular/common';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    BloggerComponent,
    ContactoComponent,
    LoginComponent,
    SliderComponent,
    ItemcategoriaComponent,
    NosotrosComponent,
    FooterComponent,
    FormularioComponent,
    FormregistroComponent,
    FormPaswwordComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      {path: '', component:HomeComponent},
      {path: 'bloggers', component:BloggerComponent},
      {path: 'contacto', component:ContactoComponent},
      {path: 'nosotros', component:NosotrosComponent},
      {path: 'login', component:LoginComponent},
      {path: 'registro', component:FormregistroComponent},
      {path: 'recuperar', component:FormPaswwordComponent},

      {path: '**', redirectTo:'/', pathMatch:'full'},
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
