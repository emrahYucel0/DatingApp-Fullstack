import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AccountService } from '../services/account.service';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
  @Output() cancelRegister = new EventEmitter();
  model:any = {};

  constructor(private accountservice:AccountService){}

  register(){
    this.accountservice.register(this.model).subscribe({
      next: () => {
        this.cancel();
      },
      error: error => console.log(error)
    })
  }

  cancel(){
    this.cancelRegister.emit(false);
  }

}
