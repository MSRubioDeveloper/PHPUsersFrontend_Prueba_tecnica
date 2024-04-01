import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { UserService } from '../../services/users-service.service';
import { UserResponse } from '../../interfaces/users-response.interface';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { fromEvent } from 'rxjs';

@Component({
  selector: 'app-pagina-principal',
  templateUrl: './pagina-principal.component.html',
  styleUrl: './pagina-principal.component.css'
})
export class PaginaPrincipalComponent implements OnInit{


  //props
  public allUsers?: UserResponse[];
  public displayedColumns: string[] = [ "id" ,'id_empleado', 'nombre_empleado', "apellidos_empleado", 'pwd_empleado', 'ultimologin_empleado'];
  public dataSource = new MatTableDataSource<UserResponse>(this.allUsers);


  constructor(
    private mainService: UserService
  ){
    
  }
  

  private paginator!: MatPaginator;

    @ViewChild(MatPaginator) set matPaginator(mp: MatPaginator) {
      this.paginator = mp;
      this.dataSource.paginator = this.paginator;
    }

  ngOnInit(): void {
     this.getAllData();
  }



  //getAllDatta From php API
  public getAllData(){


     this.mainService.getAllUsers()
        .subscribe( users => {
          
          this.allUsers = users;
          this.dataSource.paginator = this.paginator;
          console.log(this.dataSource.paginator)
        })
              
  }

}
