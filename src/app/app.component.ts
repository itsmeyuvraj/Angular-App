import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Assignment 1';
  ServerName = "Apollo";
  ServerPid = 1234;
  ServerStatus = "Offline";



  onclick()
  {
    this.ServerStatus="Online";
  }


}
