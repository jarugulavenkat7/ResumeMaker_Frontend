import { Injectable } from '@angular/core';
import {AcademicDetails, Resume, WorkExperienceDetails} from '../Resume';
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class ResumeService {

  constructor(private http:HttpClient) { }
//Resume
  public getResumes() {
    
    return this.http.get<Resume[]>("http://localhost:8888/resumes");
  }
  
 saveResume(resume){
  
    return this.http.post("http://localhost:8888/resumes",resume,{responseType:'text' as 'json'}).toPromise();
   
  }
  getResume(resumeId:number){
    return this.http.get<Resume>("http://localhost:8888/resumes/"+resumeId);
  }
  deleteResume(id){
    return this.http.delete("http://localhost:8888/resumes/"+id);
  }
  //Academic Details
  addOrUpdateAcademicDetails(resumeId,academicDetails){
    return this.http.post("http://localhost:8888/resumes/"+resumeId+"/academicDetails",academicDetails);
  }
  getAcademicDetails(resumeId:number,id:number){
    return this.http.get<AcademicDetails>("http://localhost:8888/resumes/"+resumeId+"/academicDetails/"+id);
  }
  getAcademicList(resumeId:number){
    return this.http.get<AcademicDetails[]>("http://localhost:8888/resumes/"+resumeId+"/academicDetails");
  }
  getAcademicDetailsList(resumeId):any{
    return this.http.get("http://localhost:8888/resumes/"+resumeId+"/academicDetails");
  }
  deleteAcademicDetails(resumeId,id){
    return this.http.delete("http://localhost:8888/resumes/"+resumeId+"/academicDetails/"+id);
  }
  //Personal Details
  addOrUpdatePersonalDetails(resumeId,personalDetails){
    return this.http.post("http://localhost:8888/resumes/"+resumeId+"/personalDetails",personalDetails);
  }

  getPersonalDetails(resumeId):any{
    return this.http.get("http://localhost:8888/resumes/"+resumeId+"/personalDetails");
  }
  deletePersonalDetails(resumeId,id){
    return this.http.delete("http://localhost:8888/resumes/"+resumeId+"/personalDetails/"+id);
  }
 //Contact Details

  getContactDetails(resumeId):any{
    return this.http.get("http://localhost:8888/resumes/"+resumeId+"/contactDetails");
  }
  addOrUpdateContactDetails(resumeId,contactDetails){
    return this.http.post("http://localhost:8888/resumes/"+resumeId+"/contactDetails",contactDetails);
  }
  deleteContactDetails(resumeId,id){
    return this.http.delete("http://localhost:8888/resumes/"+resumeId+"/contactDetails/"+id);
  }

  // Address Details
  getAddressDetails(resumeId):any{
    return this.http.get("http://localhost:8888/resumes/"+resumeId+"/addressDetails");
  }
  addOrUpdateAddressDetails(resumeId,addressDetails){
    return this.http.post("http://localhost:8888/resumes/"+resumeId+"/addressDetails",addressDetails);
  }
  deleteAddressDetails(resumeId,id){
    return this.http.delete("http://localhost:8888/resumes/"+resumeId+"/addressDetails/"+id);
  }
  //Work Expeerience Details
  getWorkExperienceDetailsList(resumeId):any{
    return this.http.get("http://localhost:8888/resumes/"+resumeId+"/workExperienceDetails");
  }
  
  deleteWorkExperienceDetails(resumeId,id){
    return this.http.delete("http://localhost:8888/resumes/"+resumeId+"/workExperienceDetails/"+id);
  }
  addOrUpdateWorkExperienceDetails(resumeId,workExperienceDetails){
    return this.http.post("http://localhost:8888/resumes/"+resumeId+"/workExperienceDetails",workExperienceDetails);
  }

  getWorkExperienceDetails(resumeId:number,id:number){
    return this.http.get<WorkExperienceDetails>("http://localhost:8888/resumes/"+resumeId+"/workExperienceDetails/"+id);
  }
}
