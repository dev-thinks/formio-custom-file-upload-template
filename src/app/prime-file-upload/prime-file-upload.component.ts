import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-prime-file-upload',
  templateUrl: './prime-file-upload.component.html',
  styleUrls: ['./prime-file-upload.component.scss']
})
export class PrimeFileUploadComponent implements OnInit {
  primengUploadedFiles: any[];

  constructor() { }

  ngOnInit(): void {
  }


  fileUploadHandler(event: any) {
    console.log(this.primengUploadedFiles);

    console.log(event.files);

    const formData: FormData = new FormData();
    event.files.forEach(file => {
      formData.append('file', file, file.name);
    });

    console.log(formData);
  }

}
