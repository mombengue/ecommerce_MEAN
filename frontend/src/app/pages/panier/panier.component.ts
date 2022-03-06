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
  totalCart?: any;

  constructor(private commandeService: CommandeService) { }

  ngOnInit(): void {
    this.commandeService.cartItems$.subscribe(e => {
      this.articles = e;
      this.totalCart = 0;
      e.map((item: any) => {
        return this.totalCart += item.qt * item.prix
      });
    });
  }

  onCancel() {
    this.commandeService.cancelCartData()
  }

  onDelete(article: IArticle) {
    this.commandeService.removeItem(article)
  }

  addQt(article: IArticle){
    this.commandeService.addQtItem(article)
  }

  minusQt(article: IArticle){
    this.commandeService.minusQtItem(article)
  }

}
