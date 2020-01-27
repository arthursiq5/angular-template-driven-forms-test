import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';

@Component({
  selector: 'app-hero-form',
  templateUrl: './hero-form.component.html',
  styleUrls: ['./hero-form.component.css']
})
export class HeroFormComponent{

  /**
   * @var string[]
   * @description set all the possible powers
   */
  powers = [
    'Really Smart',
    'Super Flexible',
    'Super Hot',
    'Weather Changer'
  ];

  /**
   * @var Hero
   * @description used to submit data
   */
  model = new Hero(18, 'Dr IQ', this.powers[0], 'Chuck Overstreet');

  /**
   * @var boolean
   * @description used to check if the form is submitted or not
   */
  submitted = false;

  onSubmit() { 
    console.log("Submited: \n " + JSON.stringify(this.model));
    this.submitted = true;
  }

}
