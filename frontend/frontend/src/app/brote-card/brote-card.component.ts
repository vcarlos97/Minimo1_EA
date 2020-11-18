import { Component, Input,  OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Brote } from '../model/brote';

@Component({
  selector: 'app-brote-card',
  templateUrl: './brote-card.component.html',
  styleUrls: ['./brote-card.component.css']
})
export class BroteCardComponent implements OnInit {

  @Input()
  brote: Brote;

  @Input()
  broteIndex: number;

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

}
