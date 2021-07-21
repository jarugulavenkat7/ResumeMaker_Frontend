import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { WorkExperienceDetails } from 'src/Resume';
import { ResumeService } from '../resume.service';

@Component({
  selector: 'app-work-experience-details-list',
  templateUrl: './work-experience-details-list.component.html',
  styleUrls: ['./work-experience-details-list.component.css']
})
export class WorkExperienceDetailsListComponent implements OnInit {

  workExperienceDetailsList:WorkExperienceDetails[];
obtainedResumeId:number
message:any;
  constructor(private service:ResumeService,private activatedRoute:ActivatedRoute) { }

  ngOnInit(): void {
    this.obtainedResumeId = +this.activatedRoute.snapshot.paramMap.get('id');
    console.log(this.obtainedResumeId)
    this.getWorkExperienceDetailsList(this.obtainedResumeId)
  }
  getWorkExperienceDetailsList(resumeId){
  let resp=this.service.getWorkExperienceDetailsList(resumeId)
  resp.subscribe((data)=> this.workExperienceDetailsList = data)
  console.log(this.workExperienceDetailsList)
}

deleteAcademicDetails(id){
  let resp= this.service.deleteWorkExperienceDetails(this.obtainedResumeId,id)
  resp.subscribe((data)=> this.message =data)
  console.log(this.message)
  //this.getAcademicDetailsList(this.obtainedResumeId)
  this.ngOnInit()


}

}
