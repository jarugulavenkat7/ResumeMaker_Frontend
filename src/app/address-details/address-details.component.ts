import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AddressDetails } from 'src/Resume';
import { ResumeService } from '../resume.service';

@Component({
  selector: 'app-address-details',
  templateUrl: './address-details.component.html',
  styleUrls: ['./address-details.component.css']
})
export class AddressDetailsComponent implements OnInit {
message:any;
  
  addressDetails:AddressDetails;
obtainedResumeId:number
  constructor(private service:ResumeService,private activatedRoute:ActivatedRoute) { }

  ngOnInit(): void {
    this.obtainedResumeId = +this.activatedRoute.snapshot.paramMap.get('id');
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
  this.service.addOrUpdateAddressDetails(this.obtainedResumeId,this.addressDetails)
}
deleteAddressDetails(){
  let resp=this.service.deleteAddressDetails(this.obtainedResumeId,this.addressDetails.id)
  resp.subscribe((data)=> this.message =data)
  console.log(this.message)
  
  this.ngOnInit()
}
}
