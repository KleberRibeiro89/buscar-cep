import { CepModel } from './../shared/models/cep.model';
import { Component, OnInit } from '@angular/core';
import { CepService } from '../shared/services/cep.service';

@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.css']
})
export class PrincipalComponent implements OnInit {

  constructor(private cepService: CepService) { }

  cep = '';
  model = new CepModel();
  ngOnInit(): void {
  }

  buscar() {
    this.cepService.buscarCep(this.cep).subscribe((result) => {
      this.model = result;
      console.log(this.model);
    },
      (err) => {
        this.model = null!;
        console.log(err)
      });
  }
}
