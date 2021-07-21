import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ContactDetails } from 'src/Resume';
import { ResumeService } from '../resume.service';

@Component({
  selector: 'app-contact-details',
  templateUrl: './contact-details.component.html',
  styleUrls: ['./contact-details.component.css']
})
export class ContactDetailsComponent implements OnInit {
  resumeId:number;
  message:any;
contactDetails:ContactDetails;
  constructor(private service:ResumeService,private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
     this.resumeId = +this.activatedRoute.snapshot.paramMap.get('id');
    console.log(this.resumeId)
    this.getContactDetails(this.resumeId)
  }
getContactDetails(resumeId){
  this.contactDetails=new ContactDetails(-1,'','');
  let resp=this.service.getContactDetails(resumeId)
resp.subscribe((data)=> this.contactDetails = data)
console.log(this.contactDetails)
}

deleteContactDetails(){
  let resp=this.service.deleteContactDetails(this.resumeId,this.contactDetails.id)
  resp.subscribe((data)=> this.message =data)
  console.log(this.message)
  
  this.ngOnInit()
}

}
