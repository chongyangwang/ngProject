import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from '../shared/product.service';
import { ProductService, Comment } from './../shared/product.service';
import { WebsocketService } from '../shared/websocket.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-productdetail',
  templateUrl: './productdetail.component.html',
  styleUrls: ['./productdetail.component.css']
})
export class ProductdetailComponent implements OnInit {
  product: Product;
  comments: Comment[];
  productId: number;
  isCommentHidden = true;
  newRating = 5;
  newComment = '';
  isWatched = false;
  currentBid: number;
  subscription: Subscription;
  constructor(
    private routeInfo: ActivatedRoute,
    private productservice: ProductService,
    private wsService: WebsocketService
  ) {}

  ngOnInit() {
    this.productId = this.routeInfo.snapshot.params['productId'];
    this.productservice.getProduct(this.productId).subscribe(product => {
      this.product = product[0];
      this.currentBid = product[0].price;
    });
    this.productservice
      .getCommentsForProductId(this.productId)
      .subscribe(comments => {
        this.comments = comments;
      });
  }
  addComment() {
    const comment = new Comment(
      0,
      this.productId,
      new Date().toISOString(),
      '打倒范冰冰',
      this.newRating,
      this.newComment
    );
    this.comments.unshift(comment);
    this.newComment = null;
    this.newRating = 5;
    this.isCommentHidden = true;

    const sum = this.comments.reduce(
      // tslint:disable-next-line:no-shadowed-variable
      (sum: number, comment) => {
        return sum + comment.rating;
      },
      0
    );
    this.product.rating = sum / this.comments.length;
  }
  changeRating(ratting) {
    this.newRating = ratting;
  }
  watchProduct() {
    if (this.subscription) {
      this.subscription.unsubscribe();
      this.isWatched = false;
      this.subscription = null;
    } else {
      this.isWatched = true;
      this.subscription = this.wsService
        .createObservableSocket('ws://localhost:8085', this.product.id)
        .subscribe(products => {
          const product = products.find(p => {
            return p.productId === this.product.id;
          });
          this.currentBid = product.bid;
        });
    }
  }
}
