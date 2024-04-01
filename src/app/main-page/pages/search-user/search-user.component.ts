import { Component, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { UserService } from '../../services/users-service.service';
import { map, take } from 'rxjs';
import { UserResponse } from '../../interfaces/users-response.interface';

@Component({
  selector: 'app-search-user',
  templateUrl: './search-user.component.html',
  styleUrl: './search-user.component.css'
})
export class SearchUserComponent {



  public searchForm: FormGroup = this.fb.group({
    user_id: [ "", [ Validators.required, Validators.minLength(4)]]
  })

  public usersFounded?: UserResponse[];

  constructor(
    private fb: FormBuilder,
    private toastr: ToastrService,
    private userServcie: UserService
  ){}



  public searchById( id: string){

    const parseId = parseInt(id);
    if( !parseId ){
      return this.toastr.error("El termino de busqueda debe ser un numero", "Error" )
    }
    
    return this.userServcie.searchUserByID( parseId ).pipe(
      map(users => users.filter(user => user.id_empleado.toString().includes( parseId.toString() ) )),
      map(filteredUsers => filteredUsers.slice(0, 5))

    )
    .subscribe( data => {
      console.log( data )

      this.usersFounded = data;
      return this.toastr.success(`Resultados encontrados: cantidad de resultados:  ${ data.length }`, "Success")
    });

    
  }
}
