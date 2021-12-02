import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { Router } from '@angular/router';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { TableDeputadosService } from '../services/table-deputados.service';
import { ListDeputados } from './list-deputados';
import { FormGroup, FormBuilder } from '@angular/forms';


@Component({
  selector: 'app-table-deputados',
  templateUrl: './table-deputados.component.html',
  styleUrls: ['./table-deputados.component.css']
})
export class TableDeputadosComponent implements OnInit {
  displayedColumns: string[] = ['nome', 'siglaPartido', 'siglaUf:', 'urlFoto', 'actios'];

  deputadosForm!: FormGroup; 
  dataSource: any;
  erro: any;
  list: any = [];
  sexo: any;
  sexId:string[] = [
    'Masculno',
    'Feminino'
  ];

  //labelPosition: 'feminino' | 'masculino' = 'masculino';

  constructor(
    private router: Router,
    private service:TableDeputadosService,
    private formBuilder: FormBuilder
    ) { 
    
  }
   
  @ViewChild(MatSort) Sort: any;
  @ViewChild(MatPaginator) paginator: any;

  ngAfterViewInit() {
   this.getlist()
  }

  ngOnInit() {
  this.getlist()
  
  }

  onNavigateTo(pageName:any){
    this.router.navigate([`/${pageName}`]);
  }


  createForm(){
    this.deputadosForm = this.formBuilder.group({
      sexId:[null]
    })

  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  getlist(){

    if(this.sexo == null){
      
      this.service.getList().subscribe(
        (res:any) => {
          this.list = res.dados;
          console.log('list: ', this.list);
          this.dataSource = new MatTableDataSource(this.list)
          this.dataSource.sort = this.Sort;
          this.dataSource.paginator = this.paginator;
        },
      );
    }
    else{
      this.service.getByIdSex(this.sexo).subscribe(
        (res:any) => {
          this.sexo = res.dados;
          console.log('ordem por sexo: ', this.sexo);
          this.dataSource = new MatTableDataSource(this.sexo)
          this.dataSource.sort = this.Sort;
          this.dataSource.paginator = this.paginator;
        },
      );

    }

  }

}