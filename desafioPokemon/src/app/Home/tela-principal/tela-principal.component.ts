import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-tela-principal',
  templateUrl: './tela-principal.component.html',
  styleUrls: ['./tela-principal.component.css']
})
export class TelaPrincipalComponent implements OnInit {
retorno: Array<any>;
  constructor(private apiService: ApiService) { }

  ngOnInit() {
    this.listar();
  }

  listar(){
    this.apiService.listar().subscribe(dados => this.retorno = dados);
   
  }
}
