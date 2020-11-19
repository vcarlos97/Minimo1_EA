import { BroteService } from './../service/brote.service';
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

  constructor(public broteService: BroteService, private router: Router) { }

  ngOnInit(): void {
  }

  updateBrote(name: string): void{
    this.broteService.getBrote(name).subscribe(() => {
      this.router.navigateByUrl('update/' + name);
    });
  }

}
