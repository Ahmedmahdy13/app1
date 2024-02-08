import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-portolio',
  templateUrl: './portolio.component.html',
  styleUrls: ['./portolio.component.css']
})

export class PortolioComponent {
  ImagSrc="";
 
  imageClick(imagPath:string)
  {
    this.ImagSrc=imagPath;
  }
}
