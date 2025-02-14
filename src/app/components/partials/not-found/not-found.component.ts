import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-not-found',
  templateUrl: './not-found.component.html',
  styleUrls: ['./not-found.component.css']
})
export class NotFoundComponent implements OnInit {
  @Input()
  visible = true;
  @Input()
  notFoundMessage = "Nothing Found!";
  @Input()
  resetLinkText = "Go To Home Page";
  @Input()
  resetLinkRoute = "/";
  constructor() { }

  ngOnInit(): void {
    
  }

}
