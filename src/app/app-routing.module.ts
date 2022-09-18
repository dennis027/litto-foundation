import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { ContactComponent } from './components/contact/contact.component';
import { FooterComponent } from './components/footer/footer.component';
import { LandingComponent } from './components/landing/landing.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { OurProjectsComponent } from './components/our-projects/our-projects.component';
import { OurTeamComponent } from './components/our-team/our-team.component';

const routes: Routes = [
  {path:'navbar',component:NavbarComponent},
  {path:'home',component:AboutUsComponent},
  // {path:"",component:LandingComponent},
  {path:'contact',component:ContactComponent},
  {path:'our-team',component:OurTeamComponent},
  {path:'projects',component:OurProjectsComponent},
  {path:'about-us',component:LandingComponent},
  {path:'footer',component:FooterComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
