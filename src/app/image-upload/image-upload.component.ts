import { HttpClient } from '@angular/common/http';
import { analyzeAndValidateNgModules } from '@angular/compiler';
import { stringify } from '@angular/compiler/src/util';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-image-upload',
  templateUrl: './image-upload.component.html',
  styleUrls: ['./image-upload.component.css']
})
export class ImageUploadComponent implements OnInit {
  resumeId:number;
  ngOnInit(): void {
    this.resumeId = +this.activatedRoute.snapshot.paramMap.get('id');
    this.getImage();
  }
  constructor(private httpClient: HttpClient,private activatedRoute: ActivatedRoute) { }

  selectedFile: File;
  retrievedImage: any;
  base64Data: any;
  retrieveResonse: any;
  message: any;
  imageName: any;
  imageBoolean:boolean=false;

  //Gets called when the user selects an image
  public onFileChanged(event) {
    //Select File
    this.selectedFile = event.target.files[0];
  }


  //Gets called when the user clicks on submit to upload the image
  onUpload() {
    console.log(this.selectedFile);
    
    //FormData API provides methods and properties to allow us easily prepare form data to be sent with POST HTTP requests.
    const uploadImageData = new FormData();
    uploadImageData.append('imageFile', this.selectedFile, this.selectedFile.name);
  
    //Make a call to the Spring Boot Application to save the image
    this.httpClient.post('http://localhost:8888/resumes/'+this.resumeId+'/image', uploadImageData, { observe: 'response' })
      .subscribe((response) => {
        this.getImage();
        if (response.status === 200) {
          this.message = 'Image uploaded successfully';
          
        } else {
          this.message = 'Image not uploaded successfully';
        }
      }
      );


  }

    //Gets called when the user clicks on retieve image button to get the image from back end
    getImage() {
    //Make a call to Sprinf Boot to get the Image Bytes.
    this.httpClient.get('http://localhost:8888/resumes/' + this.resumeId+'/image')
      .subscribe(
        res => {
          this.retrieveResonse = res;
          this.base64Data = this.retrieveResonse.picByte;
          this.retrievedImage = 'data:image/jpeg;base64,' + this.base64Data;
        this.imageBoolean=true;
        }
      );
  }
  deleteImage(){
    
    this.httpClient.delete('http://localhost:8888/resumes/' + this.resumeId+'/image').subscribe((data)=> this.message =data)
    console.log(this.message)
    this.ngOnInit();
    console.log("delete method")
  }
}