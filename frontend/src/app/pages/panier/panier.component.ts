import { Component, OnInit } from '@angular/core';
import { IArticle } from 'src/app/models/article.model';
import { CommandeService } from 'src/app/services/commande.service';

@Component({
  selector: 'app-panier',
  templateUrl: './panier.component.html',
  styleUrls: ['./panier.component.css']
})
export class PanierComponent implements OnInit {
  articles?: any;

  constructor(
    private commandeService: CommandeService) { }

  ngOnInit(): void {
    this.articles = this.commandeService.getCartData()
  }

  onDelete(article: IArticle) {
    alert('ok')
  }

}
