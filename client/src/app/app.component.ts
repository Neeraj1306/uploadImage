import { Component, OnInit } from '@angular/core';
import { FilesService } from './files.service';
import { FileUploader } from 'ng2-file-upload';
import {  Router } from "@angular/router";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  constructor(private FileService: FilesService,private router: Router) { }
  private files = [];
  private url = 'http://localhost:3000/upload';
  private uploader: FileUploader;

  ngOnInit() {
    this.uploader = new FileUploader({url: this.url});
    this.getImages();
    
    console.log(this.files)
  }

  refresh(): void {
    window.location.reload();
  }

  getImages(){
    this.FileService.showFileNames().subscribe(response => {
      // console.log("filenames",this.files)
      for (let i = 0; i < response.json().length; i++) {
        console.log(response.json())

        this.files[i] = {
          filename: response.json()[i].filename,
          originalname: response.json()[i].originalname,
          contentType: response.json()[i].contentType
        };
        // console.log("files",this.files)
      }
      
    });
    // window.location.reload();
  }

  downloadPdf(filename, contentType) {
    this.FileService.downloadPDF(filename, contentType).subscribe(
      (res) => {
        const file = new Blob([res.blob()], { type: contentType });
      const fileURL = URL.createObjectURL(file);
      window.open(fileURL, "_self");
      }
    ); 
  }

  deleteImage(filename){
    console.log("delete",filename)
    this.FileService.deleteImage(filename).subscribe(
      (data)=>{
      },
      (err) =>{
        console.log(err)
      }

    )
    window.location.reload();
    
  }
}
