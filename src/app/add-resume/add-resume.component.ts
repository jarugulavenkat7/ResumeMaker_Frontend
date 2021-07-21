import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AcademicDetails, AddressDetails, ContactDetails, PersonalDetails, Resume } from 'src/Resume';
import { ResumeService } from '../resume.service';

@Component({
  selector: 'app-add-resume',
  templateUrl: './add-resume.component.html',
  styleUrls: ['./add-resume.component.css']
})
export class AddResumeComponent implements OnInit {
  enableList:boolean=true
  enableForm:boolean=false
resume:Resume
message:any
acMessage:any
academicDetails:AcademicDetails
updateFormAcademicDetails:AcademicDetails
academicDetailsList:AcademicDetails[]
  constructor(private service:ResumeService,private router :Router) { }

  ngOnInit():void {
    
    this.createResume();
    
    
  }

  navigate(){
    this.router.navigateByUrl("/resumes/"+this.message);
  }
 
createResume(){
  this.resume = new Resume(-1,[],[],null,null,null)
  let resp= this.service.saveResume(this.resume)
  //  resp.subscribe((data)=>this.message=data);
    this.navigate();
}



}
