import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'nal-jal-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.css']
})
export class LoaderComponent implements OnInit {

  size: any = "2x";
  show: boolean = true;
  message: string = "Please wait...";
  constructor() { }

  ngOnInit() {
  }

  @Input("size")
  set setSize(size : any){
    this.size = size;
  }

  @Input("show")
  set setShow(show : boolean){
    this.show = show;
  }

  @Input("message")
  set setMessage(message : string){
    this.message = message;
  }

}
