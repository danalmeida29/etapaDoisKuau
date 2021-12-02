import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TableDeputadosService } from '../services/table-deputados.service';

@Component({
  selector: 'app-informacao-deputados',
  templateUrl: './informacao-deputados.component.html',
  styleUrls: ['./informacao-deputados.component.css']
})
export class InformacaoDeputadosComponent implements OnInit {

  constructor(
    private router: Router,
    //private service:TableDeputadosService,
    ) { }

  ngOnInit(): void {
  }

  onNavigateTo(pageName:any){
    this.router.navigate([`/${pageName}`]);
  }

    getInforData(){     
     this.TableDeputadosService.getInfor().subscribe(
       (res: any) => {
        console.log('tudo ok:', this.getInfor)
       }) 
         
    }


}
