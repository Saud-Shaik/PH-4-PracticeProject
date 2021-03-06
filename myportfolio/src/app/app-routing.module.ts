import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


// import { SigninComponent } from './homepage/signin/signin.component';
import { SigninComponent } from './homepage/signin/signin.component';
// import { SignupComponent } from './homepage/signup/signup.component';
import { SignupComponent } from './homepage/signup/signup.component';
// import { AboutUsComponent } from './homepage/about-us/about-us.component';
import { AboutusComponent } from './homepage/aboutus/aboutus.component';
// import { HomepageComponent } from './homepage/homepage.component';
import { HomepageComponent } from './homepage/homepage.component';
// import { ContactusComponent } from './contactus/contactus/contactus.component';
import { ContactusComponent } from './homepage/contactus/contactus.component';


const routes: Routes = [
  {path:'',
component:HomepageComponent},
  {path:'signin',
component:SigninComponent},
{path:'signup',
component:SignupComponent},
{
  path:'aboutus',
  component:AboutusComponent
},{

  path:'contactus',
  component:ContactusComponent

}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
