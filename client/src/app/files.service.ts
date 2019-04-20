import { Injectable } from '@angular/core';
import { Http, Headers, ResponseContentType } from '@angular/http';

@Injectable()
export class FilesService {

  constructor(private http: Http) { }

  downloadPDF(filename, filetype): any {
    return this.http.get('http://localhost:3000/file/' + filename,
    { responseType: ResponseContentType.Blob });
  }

  showFileNames() {
    return this.http.get('http://localhost:3000/files');
  }

  deleteImage(filename){
    console.log("service")
    return this.http.delete('http://localhost:3000/files/' + filename)

  }
}
