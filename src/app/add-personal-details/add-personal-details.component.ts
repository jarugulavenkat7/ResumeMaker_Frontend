import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PersonalDetails } from 'src/Resume';
import { ResumeService } from '../resume.service';

@Component({
  selector: 'app-add-personal-details',
  templateUrl: './add-personal-details.component.html',
  styleUrls: ['./add-personal-details.component.css']
})
export class AddPersonalDetailsComponent implements OnInit {

  personalDetails:PersonalDetails;
obtainedResumeId:number
  constructor(private service:ResumeService,private activatedRoute:ActivatedRoute,private router:Router) { }

  ngOnInit(): void {
    this.obtainedResumeId = +this.activatedRoute.snapshot.paramMap.get('resumeId');
    console.log(this.obtainedResumeId)
    this.getContactDetails(this.obtainedResumeId)
  }

getContactDetails(resumeId){
  this.personalDetails=new PersonalDetails(-1,'','');
  let resp=this.service.getPersonalDetails(this.obtainedResumeId)
resp.subscribe((data)=> this.personalDetails = data)
console.log(this.personalDetails)
}

addOrUpdatePersonalDetails(){
  console.log(this.obtainedResumeId)
  this.service.addOrUpdatePersonalDetails(this.obtainedResumeId,this.personalDetails).subscribe(
    data => {
      console.log('response', data);
}

)
this.router.navigateByUrl("/resumes/"+this.obtainedResumeId);
}

}
