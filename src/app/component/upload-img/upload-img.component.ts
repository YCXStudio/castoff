import { Component, OnInit } from '@angular/core';
import { FileUploader } from 'ng2-file-upload';

@Component({
  selector: 'app-upload-img',
  templateUrl: './upload-img.component.html',
  styleUrls: ['./upload-img.component.css']
})
export class UploadImgComponent implements OnInit {

  constructor(
    // public uploader:FileUploader
  ) { }

  ngOnInit() {
    // this.uploader = new FileUploader({url: ''});
  }

}
