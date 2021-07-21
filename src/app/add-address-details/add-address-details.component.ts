import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AddressDetails } from 'src/Resume';
import { ResumeService } from '../resume.service';

@Component({
  selector: 'app-add-address-details',
  templateUrl: './add-address-details.component.html',
  styleUrls: ['./add-address-details.component.css']
})
export class AddAddressDetailsComponent implements OnInit {
  addressDetails:AddressDetails;
  obtainedResumeId:number
    constructor(private service:ResumeService,private activatedRoute:ActivatedRoute,private router:Router) { }
  
    ngOnInit(): void {
      this.obtainedResumeId = +this.activatedRoute.snapshot.paramMap.get('resumeId');
      console.log(this.obtainedResumeId)
      this.getAddressDetails(this.obtainedResumeId)
    }
  
  getAddressDetails(resumeId){
    this.addressDetails=new AddressDetails(-1,'','','','','','');
    let resp=this.service.getAddressDetails(this.obtainedResumeId)
  resp.subscribe((data)=> this.addressDetails = data)
  console.log(this.addressDetails)
  }

  addOrUpdateAddressDetails(){
    this.service.addOrUpdateAddressDetails(this.obtainedResumeId,this.addressDetails).subscribe(
      data => {
        console.log('response', data);
  }
  
  )
  this.router.navigateByUrl("/resumes/"+this.obtainedResumeId);
  
  }

}
