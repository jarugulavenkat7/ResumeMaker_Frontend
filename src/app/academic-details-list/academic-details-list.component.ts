import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AcademicDetails } from 'src/Resume';
import { ResumeService } from '../resume.service';

@Component({
  selector: 'app-academic-details-list',
  templateUrl: './academic-details-list.component.html',
  styleUrls: ['./academic-details-list.component.css']
})
export class AcademicDetailsListComponent implements OnInit {
academicDetailsList:AcademicDetails[];
obtainedResumeId:number
message:any
  constructor(private service:ResumeService,private activatedRoute:ActivatedRoute,private router:Router) { }

  ngOnInit(): void {
    this.obtainedResumeId = +this.activatedRoute.snapshot.paramMap.get('id');
    console.log(this.obtainedResumeId)
    this.getAcademicDetailsList(this.obtainedResumeId)
  }
getAcademicDetailsList(resumeId){
  let resp=this.service.getAcademicDetailsList(resumeId)
  resp.subscribe((data)=> this.academicDetailsList = data)
  console.log(this.academicDetailsList)
}
deleteAcademicDetails(id){
  let resp= this.service.deleteAcademicDetails(this.obtainedResumeId,id)
  resp.subscribe((data)=> this.message =data)
  console.log(this.message)
  //this.getAcademicDetailsList(this.obtainedResumeId)
  this.ngOnInit()


}
}
