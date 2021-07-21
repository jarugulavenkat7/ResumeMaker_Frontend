import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ResumeService } from './resume.service';
import { HttpClientModule } from '@angular/common/http';
import { AddResumeComponent } from './add-resume/add-resume.component';
import { DeleteResumeComponent } from './delete-resume/delete-resume.component';
import { ResumeDashboardComponent } from './resume-dashboard/resume-dashboard.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatStepperModule} from '@angular/material/stepper';
import { AcademicDetailsListComponent } from './academic-details-list/academic-details-list.component';
import { ResumeComponent } from './resume/resume.component';
import { PersonalDetailsComponent } from './personal-details/personal-details.component';
import { ContactDetailsComponent } from './contact-details/contact-details.component';
import { AddressDetailsComponent } from './address-details/address-details.component';
import { AddContactDetailsComponent } from './add-contact-details/add-contact-details.component';
import { WorkExperienceDetailsListComponent } from './work-experience-details-list/work-experience-details-list.component';
import { AddAcademicDetailsComponent } from './add-academic-details/add-academic-details.component';
import { AddWorkExperienceDetailsComponent } from './add-work-experience-details/add-work-experience-details.component';
import {MatExpansionModule} from '@angular/material/expansion';
import { PrintTemplateComponent } from './print-template/print-template.component';
import { AddPersonalDetailsComponent } from './add-personal-details/add-personal-details.component';
import { AddAddressDetailsComponent } from './add-address-details/add-address-details.component';
import { ImageUploadComponent } from './image-upload/image-upload.component';
@NgModule({
  declarations: [
    AppComponent,
    AddResumeComponent,
    DeleteResumeComponent,
    ResumeDashboardComponent,
    HeaderComponent,
    FooterComponent,
    AcademicDetailsListComponent,
    ResumeComponent,
    PersonalDetailsComponent,
    ContactDetailsComponent,
    AddressDetailsComponent,
    AddContactDetailsComponent,
    WorkExperienceDetailsListComponent,
    AddAcademicDetailsComponent,
    AddWorkExperienceDetailsComponent,
    PrintTemplateComponent,
    AddPersonalDetailsComponent,
    AddAddressDetailsComponent,
    ImageUploadComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    MatStepperModule,
    MatExpansionModule
    
  ],
  providers: [ResumeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
