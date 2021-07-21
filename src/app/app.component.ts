import { Component } from '@angular/core';
import { Resume } from '../Resume';
import { ResumeService } from './resume.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'resume-app';
resume:Resume;
  constructor(private service:ResumeService) { }

  ngOnInit() {
    this.getResume();
  }

  public getResume(){
    let resp=this.service.getResumes();
  //  resp.subscribe((data)=>this.resume=data);
    //console.log(JSON.stringify(this.resume));
      }
}
