import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { InfoPagina } from '../interfaces/info-pagina.interface';
import { TeamPagina } from '../interfaces/team-pagina.interface';

@Injectable({
  providedIn: 'root'
})
export class InfoPaginaService {

  info: InfoPagina = {};
  cargada = false;
  equipo: TeamPagina[] = [];
  constructor(private http: HttpClient) { 
      this.cargarInfo();
      this.cargarEquipo();
  }

  private cargarInfo(){
    //leer el archivo JSON
    this.http.get('assets/data/data-pagina.json')
    .subscribe((resp: InfoPagina) => {
      this.cargada = true;
      this.info = resp;
    });
  }

  private cargarEquipo(){
    this.http.get('https://angular-html-11bbe-default-rtdb.firebaseio.com/equipo.json')
      .subscribe((resp: TeamPagina[]) => {
        this.equipo = resp;
      });
  }
}
