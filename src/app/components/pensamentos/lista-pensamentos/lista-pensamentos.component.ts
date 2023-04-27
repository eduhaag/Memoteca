import { Component, OnInit } from '@angular/core';
import { Pensamento } from '../pensamento';
import { PensamentoService } from '../pensamento.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-lista-pensamentos',
  templateUrl: './lista-pensamentos.component.html',
  styleUrls: ['./lista-pensamentos.component.css']
})
export class ListaPensamentosComponent implements OnInit {

  listaPensamentos:Pensamento[] = []
  paginaAtual:number = 1
  haMaisPensamentos:boolean = true
  filtro: string=''
  favoritos: boolean=false;
  listaFavoritos: Pensamento[] = []
  titulo: string = 'Meu Mural'

  constructor(
    private service: PensamentoService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.service.listar(this.paginaAtual, this.filtro, this.favoritos).subscribe((listaPensamentos)=>{
      this.listaPensamentos=listaPensamentos
    })
  }

  recarregarComponente(){
    this.favoritos = false
    this.paginaAtual = 1
    this.titulo = 'Meu Mural'
    this.router.routeReuseStrategy.shouldReuseRoute = ()=>false
    this.router.onSameUrlNavigation = 'reload'
    this.router.navigate([this.router.url])
  }

  carregarMaisPensamentos(){
    this.service.listar(++this.paginaAtual, this.filtro, this.favoritos).subscribe((listaPensamentos)=>{
      this.listaPensamentos.push(...listaPensamentos)

      if(!listaPensamentos.length){
        this.haMaisPensamentos=false
      }
    })
  }

  pesquisarPensamentos() {
    this.haMaisPensamentos = true
    this.paginaAtual = 1;
    this.service.listar(this.paginaAtual, this.filtro, this.favoritos)
      .subscribe(listaPensamentos => {
        this.listaPensamentos = listaPensamentos
      })
  }

  listarFavoritos(){
    this.favoritos=true
    this.haMaisPensamentos=true,
    this.titulo = 'Meus Favoritos'
    this.paginaAtual=1,
    this.service.listar(this.paginaAtual, this.filtro, this.favoritos).subscribe((listaPensamentosFavoritos)=>{
      this.listaPensamentos=listaPensamentosFavoritos
      this.listaFavoritos=listaPensamentosFavoritos
    })
  }

}
