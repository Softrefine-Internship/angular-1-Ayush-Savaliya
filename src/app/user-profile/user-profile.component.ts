import { Component } from '@angular/core';

@Component({
  selector: 'app-user-profile',
  standalone:false,
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss']
})
export class UserProfileComponent {
  isEditing = false;
  selectedUserIndex = -1;
  originalUser: any;
  users = [
    {
      name: 'Rohit Sharma',
      email: 'rohitsharma@gmail.com',
      phone: 9835621475,
      age: 35,
      avatar: '../../assets/Profile.png'
    },
    {
      name: 'Steve Smith',
      email: 'stevesmith@gmail.com',
      phone: 9683257451,
      age: 38,
      avatar: '../../assets/Profile.png'
    },
    {
      name: 'Virat Kohli',
      email: 'viratkohli@gmail.com',
      phone: 9482567135,
      age: 36,
      avatar: '../../assets/Profile.png'
    },
    {
      name: 'Shubman Gil',
      email: 'shubmangil@gmail.com',
      phone: 8657264953,
      age: 30,
      avatar: '../../assets/Profile.png'
    },
    {
      name: 'K L Rahul',
      email: 'klrahul@gmail.com',
      phone: 7589642384,
      age: 34,
      avatar: '../../assets/Profile.png'
    },
    {
      name: 'M S Dhoni',
      email: 'msdhoni@gmail.com',
      phone: 9865713486,
      age: 42,
      avatar: '../../assets/Profile.png'
    },
    {
      name: 'Rahul dravid',
      email: 'rahuldravid@gmail.com',
      phone: 8647953245,
      age: 49,
      avatar: '../../assets/Profile.png'
    }
  ];

  openEditForm (index: number) {
    this.isEditing = true;
    this.selectedUserIndex = index;
    this.originalUser={...this.users[index]}
  }

  closeEditForm () {
    this.isEditing = false;
    this.users[this.selectedUserIndex] = this.originalUser;
    this.selectedUserIndex = -1;
  }

  updateUser () {
    console.log('Updated User:', this.users[this.selectedUserIndex]);
    this.isEditing = false;
    this.selectedUserIndex = -1;
  }
}
