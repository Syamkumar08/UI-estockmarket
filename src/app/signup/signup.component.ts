import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { User } from '../model/User';
import { AuthService } from '../service/auth.service';
import { FlashMessagesService } from 'angular2-flash-messages';
import {NgForm} from '@angular/forms'



@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html', 
  styleUrls: ['./signup.component.css']
})

export class SignupComponent implements OnInit{

  isLoading: boolean = false;
  private authStatusSubs: Subscription = new Subscription;
  user: User = {
    username: '',
    password: '',
    email: '',
    mobile: ''
  };

  constructor(private flashMessage: FlashMessagesService, private authService: AuthService) { }

  ngOnInit(): void {
    this.authStatusSubs = this.authService.getAuthStatusListener()
    .subscribe(authStatus => {
      this.isLoading = false;
    });
  }

  onSubmit({value, valid}: NgForm) {
    if(!valid) {
      this.flashMessage.show('Fill out the User form properly!', {
        cssClass: 'alert-danger', timeout: 5000
      });
    }
    this.isLoading = true;
    this.authService.createUser(value);
  }

}
