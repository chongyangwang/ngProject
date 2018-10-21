import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { Product1Component } from './product1/product1.component';
import { ProductService } from './shared/product.service';
import { Product2Component } from './product2/product2.component';
import { LoggerService } from './shared/logger.service';
import { AnotherproductService } from './shared/anotherproduct.service';
@NgModule({
  declarations: [AppComponent, Product1Component, Product2Component],
  imports: [BrowserModule],
  providers: [
    {
      provide: ProductService,
      // 工厂模式的提供器
      useFactory: (logger: LoggerService, isDev) => {
        if (isDev) {
          return new ProductService(logger);
        } else {
          return new AnotherproductService(logger);
        }
      },
      // deps代表当前服务所以来的参数, 可以根据这个参数 决定当前的提供器所实例化的那个参数
      deps: [LoggerService, 'IS_DEV_ENV']
    },
    LoggerService,
    {
      provide: 'IS_DEV_ENV',
      useValue: false
      // 也可以声明一个对象
      // useValue: {
      //   isDev: false
      // }
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
