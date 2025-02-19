import { Component } from '@angular/core';
import { UserProfileComponent } from './user-profile/user-profile.component';
@Component({
  selector: 'app-root',
  standalone:false,
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'angular-profile-card';
}
