import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { WorkExperienceDetails } from 'src/Resume';
import { ResumeService } from '../resume.service';

@Component({
  selector: 'app-add-work-experience-details',
  templateUrl: './add-work-experience-details.component.html',
  styleUrls: ['./add-work-experience-details.component.css']
})
export class AddWorkExperienceDetailsComponent implements OnInit {

  workExperienceDetails:WorkExperienceDetails=new WorkExperienceDetails(-1,'','','');
  resumeId:number;
    constructor(private service:ResumeService,private activatedRoute: ActivatedRoute,private router:Router) { }
  
    ngOnInit(): void {
      const isIdPresent = this.activatedRoute.snapshot.paramMap.has('id');
      this.resumeId = +this.activatedRoute.snapshot.paramMap.get('resumeId');
      if (isIdPresent) {
        const id = +this.activatedRoute.snapshot.paramMap.get('id');
          this.getWorkExperienceDetails(this.resumeId,id);
          
      }
    }
  getWorkExperienceDetails(resumeId,id){
    
   // let resp=this.service.workExperienceDetails(resumeId)
 // resp.subscribe((data)=> this.workExperienceDetails = data)
 let resp=this.service.getWorkExperienceDetails(resumeId,id)
 resp.subscribe((data)=> this.workExperienceDetails = data)
 console.log(this.workExperienceDetails)
  }


  addOrUpdateWorkExperienceDetails(){
    this.service.addOrUpdateWorkExperienceDetails(this.resumeId,this.workExperienceDetails).subscribe(
      data=>{
        console.log('response', data);
      }
    )
    this.router.navigateByUrl("/resumes/"+this.resumeId);
  }
 


}
