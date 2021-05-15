import { Component, OnInit } from '@angular/core';
import { InfoPaginaService } from '../../services/info-pagina.service';
import { TeamPagina } from '../../interfaces/team-pagina.interface';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  
  constructor(public service: InfoPaginaService) { 
    
  }

  ngOnInit(): void {
  }

}
