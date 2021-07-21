import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AcademicDetails, PersonalDetails, Resume } from 'src/Resume';
import { ResumeService } from '../resume.service';

@Component({
  selector: 'app-print-template',
  templateUrl: './print-template.component.html',
  styleUrls: ['./print-template.component.css']
})
export class PrintTemplateComponent implements OnInit {
resume:Resume;

resumeId:number;
  constructor(private service:ResumeService,private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.resumeId = +this.activatedRoute.snapshot.paramMap.get('resumeId');
    console.log(this.resumeId);
    this.getResume(this.resumeId);
   
  }
  public getResume(resumeId){
    let resp=this.service.getResume(resumeId);
    resp.subscribe((data)=>this.resume=data);
  
    //console.log(JSON.stringify(this.resume));
      }

printComponent(cmpName) {
      const printContent = document.getElementById(cmpName);
      const WindowPrt = window.open('', '', 'left=0,top=0,width=700,height=900,toolbar=0,scrollbars=0,status=0');
      WindowPrt.document.write('<link rel="stylesheet" type="text/css" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css">');
      WindowPrt.document.write(printContent.innerHTML);
      WindowPrt.document.close();
      WindowPrt.setTimeout(function(){
      WindowPrt.focus();
      WindowPrt.print();
      WindowPrt.close();
    }, 100);
      }
}
