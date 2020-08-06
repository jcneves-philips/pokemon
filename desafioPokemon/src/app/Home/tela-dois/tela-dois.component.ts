import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-tela-dois',
  templateUrl: './tela-dois.component.html',
  styleUrls: ['./tela-dois.component.css']
})
export class TelaDoisComponent implements OnInit {
  retorno: Array<any>;
  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
    this.listar();
  }
  listar(){
    this.apiService.listar().subscribe(dados => this.retorno = dados);
  }
}
