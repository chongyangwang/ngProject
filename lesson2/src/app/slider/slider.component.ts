import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ProductService } from '../shared/product.service';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css']
})
export class SliderComponent implements OnInit {
  [x: string]: any;
  formModel: FormGroup;
  categorys: string[];
  constructor(private productservice: ProductService) {
    const fb = new FormBuilder();
    this.formModel = fb.group({
      title: fb.control('', Validators.minLength(3)),
      price: fb.control(null, this.positiveNumberValidator),
      category: fb.control('-1')
    });
  }

  ngOnInit() {
    this.categorys = this.productservice.getAllCategories();
  }
  onSearch() {
    if (this.formModel.valid) {
      console.log(this.formModel.value);
      // 当表单校验合法时通过服务的中间人将表单值发送
      this.productservice.searchEvent.emit(this.formModel.value);
    }
  }
  positiveNumberValidator(control: FormControl): any {
    if (!control.value) {
      return null;
    }
    // tslint:disable-next-line:radix
    const price = parseInt(control.value);
    if (price > 0) {
      return null;
    } else {
      return { positiveNumber: true };
    }
  }
}
