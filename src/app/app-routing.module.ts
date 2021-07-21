import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddResumeComponent } from './add-resume/add-resume.component';
import { ResumeDashboardComponent } from './resume-dashboard/resume-dashboard.component';
import {ResumeComponent} from './resume/resume.component';
import {ContactDetailsComponent} from './contact-details/contact-details.component';
import {AddContactDetailsComponent} from './add-contact-details/add-contact-details.component';
import { AddAcademicDetailsComponent} from './add-academic-details/add-academic-details.component';
import { AddWorkExperienceDetailsComponent } from './add-work-experience-details/add-work-experience-details.component';
import { PrintTemplateComponent } from './print-template/print-template.component';
import { PersonalDetailsComponent } from './personal-details/personal-details.component';
import { AddPersonalDetailsComponent } from './add-personal-details/add-personal-details.component';
import { AddAddressDetailsComponent } from './add-address-details/add-address-details.component';

const routes: Routes = [
  {path:'addResume', component:AddResumeComponent},
  {path:'', component:ResumeDashboardComponent},
  {path:'resumes', component:ResumeDashboardComponent},
  {path:'dashBoard', component:ResumeDashboardComponent},
  {path:'resumes/:id', component:ResumeComponent},
  {path:'resumes/:resumeId/personalDetails', component:PersonalDetailsComponent},
  {path:'resumes/:resumeId/personalDetails/:id', component:AddPersonalDetailsComponent},
  {path:'resumes/:resumeId/addPersonalDetails', component:AddPersonalDetailsComponent},
  {path:'resumes/:resumeId/contactDetails', component:ContactDetailsComponent},
  {path:'resumes/:resumeId/contactDetails/:id', component:AddContactDetailsComponent},
  {path:'resumes/:resumeId/addContactDetails', component:AddContactDetailsComponent},
  {path:'resumes/:resumeId/addressDetails', component:AddAddressDetailsComponent},
  {path:'resumes/:resumeId/addressDetails/:id', component:AddAddressDetailsComponent},
  {path:'resumes/:resumeId/addAddressDetails', component:AddAddressDetailsComponent},
  {path:'resumes/:resumeId/academicDetails/:id', component:AddAcademicDetailsComponent},
  {path:'resumes/:resumeId/academicDetails', component:AddAcademicDetailsComponent},
  {path:'resumes/:resumeId/workExperienceDetails/:id', component:AddWorkExperienceDetailsComponent},
  {path:'resumes/:resumeId/workExperienceDetails', component:AddWorkExperienceDetailsComponent},
  {path:'resumes/:resumeId/resumePrint', component:PrintTemplateComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
