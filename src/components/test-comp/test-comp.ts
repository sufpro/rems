import { Component } from '@angular/core';

/**
 * Generated class for the TestCompComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'test-comp',
  templateUrl: 'test-comp.html'
})
export class TestCompComponent {

  text: string;

  constructor() {
    console.log('Hello TestCompComponent Component');
    this.text = 'Hello World';
  }

}
