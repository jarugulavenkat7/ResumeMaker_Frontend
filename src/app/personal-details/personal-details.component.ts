import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PersonalDetails } from 'src/Resume';
import { ResumeService } from '../resume.service';

@Component({
  selector: 'app-personal-details',
  templateUrl: './personal-details.component.html',
  styleUrls: ['./personal-details.component.css']
})
export class PersonalDetailsComponent implements OnInit {

 



  personalDetails:PersonalDetails;
obtainedResumeId:number
message:any;
  constructor(private service:ResumeService,private activatedRoute:ActivatedRoute) { }

  ngOnInit(): void {
    this.obtainedResumeId = +this.activatedRoute.snapshot.paramMap.get('id');
    console.log(this.obtainedResumeId)
    this.getPersonalDetails()
  }

getPersonalDetails(){
  this.personalDetails=new PersonalDetails(-1,'','');
  let resp=this.service.getPersonalDetails(this.obtainedResumeId)
resp.subscribe((data)=> this.personalDetails = data)
console.log("personal details"+this.personalDetails)
}
deletePersonalDetails(){
  let resp=this.service.deletePersonalDetails(this.obtainedResumeId,this.personalDetails.id)
  resp.subscribe((data)=> this.message =data)
  console.log(this.message)
  
  this.ngOnInit()
}
}
