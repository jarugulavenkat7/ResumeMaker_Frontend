import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Resume } from 'src/Resume';
import { ResumeService } from '../resume.service';

@Component({
  selector: 'app-resume-dashboard',
  templateUrl: './resume-dashboard.component.html',
  styleUrls: ['./resume-dashboard.component.css']
})
export class ResumeDashboardComponent implements OnInit {
resumes:Resume[]
resume:Resume
message:any
  constructor(private service:ResumeService, private router: Router ) { }

  ngOnInit(): void {
    this.getResumes();
  }
  navigate(){
    this.router.navigateByUrl("/resumes/"+this.message);
  }
 
 async createResume(){
  this.resume = new Resume(-1,[],[],null,null,null)
  let resp= await this.service.saveResume(this.resume)
   this.message=resp
    this.navigate();
}
  public getResumes(){
    let resp=this.service.getResumes();
    resp.subscribe((data)=>this.resumes=data);
    //console.log(JSON.stringify(this.resume));
      }


     public deleteResume(id){
       let resp=this.service.deleteResume(id);
       this.service.deleteResume(id).subscribe(
        data => {
          console.log('deleted response', data);
          this.router.navigateByUrl('/resumes');

     }
       )
}
}