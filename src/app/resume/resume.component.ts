import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ResumeService } from '../resume.service';

@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.css']
})
export class ResumeComponent implements OnInit {
  panelOpenState = false;
  obtainedResumeId:number;
  constructor(private service:ResumeService,private activatedRoute:ActivatedRoute) { }

  ngOnInit(): void {
    this.obtainedResumeId = +this.activatedRoute.snapshot.paramMap.get('id');
    console.log(this.obtainedResumeId)
    
  }

}
