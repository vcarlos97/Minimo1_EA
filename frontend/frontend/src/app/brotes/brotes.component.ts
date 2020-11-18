import { BroteService } from './../service/brote.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Brote } from '../model/brote';

@Component({
  selector: 'app-brotes',
  templateUrl: './brotes.component.html',
  styleUrls: ['./brotes.component.css']
})
export class BrotesComponent implements OnInit {

  brotes: Brote[];

  constructor(public broteService: BroteService, private router: Router) { }

  ngOnInit(): void {
    this.broteService.getBrotes().subscribe (brotes =>{
      this.brotes = brotes;
    })
  }

}
