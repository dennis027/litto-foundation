import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  CurrentYear:any
  constructor() { }

  ngOnInit(): void {
    this.CurrentYear = new Date().getFullYear()
    
  }

}
