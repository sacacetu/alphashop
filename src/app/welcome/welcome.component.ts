import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SalutiDataService } from '../services/data/saluti-data.service';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css'],
})
export class WelcomeComponent implements OnInit {
  saluti: string = 'Benvenuti nel sito Alphashop';
  titolo2 = 'seleziona gli articoli da acquistare';
  utente = '';
  messaggio = '';

  constructor(
    private route: ActivatedRoute,
    private salutiSrv: SalutiDataService
  ) {}

  ngOnInit(): void {
    this.utente = this.route.snapshot.params['userId'];
  }

  getSaluti() {
    this.salutiSrv
      .getSaluti(this.utente)
      .subscribe(
        response => this.handleResponse(response),
        error => this.handleError(error)
        );
  }

  handleResponse(response: any) {
    this.messaggio = response.toString();
    console.log(response);
  }

  handleError(error: any){
    this.messaggio = error.error.text;
    console.log(error);
  }
}
