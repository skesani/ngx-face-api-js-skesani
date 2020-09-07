import { Component } from '@angular/core';

import { Base64EncodedImage } from './base64-encoded-image';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  imageSrc = Base64EncodedImage;

  selectFile(event: any) {
    const file = event.target.files.item(0);
    const reader = new FileReader();
    reader.onload = (e: any) => this.imageSrc = e.target.result;
    reader.readAsDataURL(file);
  }
}
