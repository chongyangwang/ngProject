import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {
  transform(list: any[], filterField: string, keyword: string): any {
    // 操作的数据 当前的字段  关键字
    if (!filterField || !keyword) {
      return list;
    }
    return list.filter(item => {
      const fiedValue = item[filterField];
      return fiedValue.indexOf(keyword) >= 0;
    });
  }
}
