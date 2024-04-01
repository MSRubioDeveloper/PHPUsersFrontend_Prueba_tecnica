import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '../../services/users-service.service';
import { map } from 'rxjs';
import { UserResponse } from '../../interfaces/users-response.interface';


@Component({
  selector: 'app-information-about-user',
  templateUrl: './information-about-user.component.html',
  styleUrl: './information-about-user.component.css'
})
export class InformationAboutUserComponent implements OnInit{
  public userFounded?: UserResponse[]

  constructor(
    private activatedRouter: ActivatedRoute,
    private userService: UserService,
    private router: Router
  ){}

  ngOnInit(): void {
    this.activatedRouter.params.subscribe(params => {
      const productId = params['id'];
      this.userService.searchUserByID( productId ).pipe(
        map(users => users.filter(user => user.id_empleado.toString().includes( productId.toString() ) )),
        map(filteredUsers => filteredUsers.slice(0, 5))
  
      )
      .subscribe( data => {
        if( data.length === 0 ) this.router.navigateByUrl("/")

        this.userFounded = data;
        
      });
    });
  }
}
