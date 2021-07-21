import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AcademicDetails } from 'src/Resume';
import { ResumeService } from '../resume.service';
import {FormsModule} from '@angular/forms';

@Component({
  selector: 'app-add-academic-details',
  templateUrl: './add-academic-details.component.html',
  styleUrls: ['./add-academic-details.component.css']
})
export class AddAcademicDetailsComponent implements OnInit {

  academicDetails:AcademicDetails=new AcademicDetails(-1,'','','','',0,'','','');
  obtainedResumeId:number
   years=[];
   currentYear;

  
    constructor(private service:ResumeService,private activatedRoute:ActivatedRoute,private router:Router) { }
    
    ngOnInit(): void {
      for (var i = 1980; i <2050 ; i++) {
          this.years.push(i)
          console.log(i);
      }
      this.currentYear = new Date().getFullYear();
      const isIdPresent = this.activatedRoute.snapshot.paramMap.has('id');
      this.obtainedResumeId = +this.activatedRoute.snapshot.paramMap.get('resumeId');
      if (isIdPresent) {
        const id = +this.activatedRoute.snapshot.paramMap.get('id');
          this.getAcademicDetails(this.obtainedResumeId,id)
          
      }
     
    }
  
  
  getAcademicDetails(resumeId,id){
   // this.academicDetails=new AcademicDetails(-1,'','','','');
    let resp=this.service.getAcademicDetails(resumeId,id)
  resp.subscribe((data)=> this.academicDetails = data)
  console.log(this.academicDetails)
  
  }

  addOrUpdateAcademicDetails(){
    console.log(this.obtainedResumeId)
    this.service.addOrUpdateAcademicDetails(this.obtainedResumeId,this.academicDetails).subscribe(
      data => {
        console.log('response', data);
  }

  )
  this.router.navigateByUrl("/resumes/"+this.obtainedResumeId);
}
}