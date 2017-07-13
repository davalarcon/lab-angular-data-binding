import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'doTheSearch'
})
export class DoTheSearchPipe implements PipeTransform {

  transform(value: any, searchTerm: string): any {

    if(!value){
      return[];
    }
    if(!searchTerm){
      return value;
    }

    let matchedResults = [];

    searchTerm = searchTerm.toLowerCase();

    value.forEach((oneItem)=>{
      if(oneItem.name.toLowerCase().includes(searchTerm)){
        matchedResults.push(oneItem);
      }
    });
    return matchedResults;
  }

}
