import { Component } from '@angular/core';

@Component({
  selector: 'app-resume',
  standalone: true,
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.css']
})
export class ResumeComponent {
  fullName = 'Олег Волостных';
  phone = '+380678906754';
  email = 'olehvolostnykh,@gmail.com';
  city = 'Одесса, Украина';
}

