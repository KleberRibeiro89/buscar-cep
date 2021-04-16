import { CepModel } from './../shared/models/cep.model';
import { Component, Input, OnInit, Output } from '@angular/core';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';

@Component({
  selector: 'app-visualizar-cep',
  templateUrl: './visualizar-cep.component.html',
  styleUrls: ['./visualizar-cep.component.css']
})
export class VisualizarCepComponent implements OnInit {

  @Input() cepModel: CepModel = null!;

  constructor() { }
  ngOnInit(): void {
  }

}
