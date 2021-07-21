import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ContactDetails } from 'src/Resume';
import { ResumeService } from '../resume.service';

@Component({
  selector: 'app-add-contact-details',
  templateUrl: './add-contact-details.component.html',
  styleUrls: ['./add-contact-details.component.css']
})
export class AddContactDetailsComponent implements OnInit {
contactDetails:ContactDetails;
obtainedResumeId:number
  constructor(private service:ResumeService,private activatedRoute:ActivatedRoute,private router:Router) { }

  ngOnInit(): void {
    this.obtainedResumeId = +this.activatedRoute.snapshot.paramMap.get('resumeId');
    console.log(this.obtainedResumeId)
    this.getContactDetails(this.obtainedResumeId)
  }

getContactDetails(resumeId){
  this.contactDetails=new ContactDetails(-1,'','');
  let resp=this.service.getContactDetails(this.obtainedResumeId)
resp.subscribe((data)=> this.contactDetails = data)
console.log(this.contactDetails)
}

addOrUpdateContactDetails(){
  this.service.addOrUpdateContactDetails(this.obtainedResumeId,this.contactDetails).subscribe(
    data => {
      console.log('response', data);
}

)
this.router.navigateByUrl("/resumes/"+this.obtainedResumeId);
}


}
