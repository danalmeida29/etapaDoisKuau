import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { URL_API } from './app.api';
import { ListDeputados } from '../table-deputados/list-deputados';


@Injectable({
    providedIn: 'root'
})

export class TableDeputadosService {
    constructor(private http: HttpClient) {}
    
    getList(){
        var urlString = `${URL_API}?ordem=ASC&ordenarPor=nome`
       return this.http.get(urlString);
    }

    getByIdSex(sexo: string){
        var urlString = `${URL_API}?siglaSexo=${sexo}&ordem=ASC&ordenarPor=nome`
       return this.http.get(urlString);
    }
}