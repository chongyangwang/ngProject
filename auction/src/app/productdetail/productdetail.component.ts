import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from '../shared/product.service';
import { ProductService, Comment } from './../shared/product.service';

@Component({
  selector: 'app-productdetail',
  templateUrl: './productdetail.component.html',
  styleUrls: ['./productdetail.component.css']
})
export class ProductdetailComponent implements OnInit {
  product: Product;
  comments: Comment[];
  private productId: number;
  isCommentHidden = true;
  newRating = 5;
  newComment = '';
  constructor(
    private routeInfo: ActivatedRoute,
    private productservice: ProductService
  ) {}

  ngOnInit() {
    this.productId = this.routeInfo.snapshot.params['productId'];
    this.product = this.productservice.getProduct(this.productId);
    this.comments = this.productservice.getCommentsForProductId(this.productId);
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
  changeRating(rat) {
    this.newRating = rat;
  }
}
