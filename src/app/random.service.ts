import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RandomService {

  constructor() { }

  int(min: number, max: number = undefined) {
    if (max === undefined) {
      max = min;
      min = 0;
    }
    return ~~(Math.random() * (max - min)) + min;
  }

  fromArray(arr: any[]) {
    const index = this.int(arr.length);
    console.log('fromArray index:', index)
    return arr[index];
  }
}
