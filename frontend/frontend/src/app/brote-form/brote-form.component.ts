import { BroteService } from './../service/brote.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-brote-form',
  templateUrl: './brote-form.component.html',
  styleUrls: ['./brote-form.component.css']
})
export class BroteFormComponent implements OnInit {

  isSubmitted = false;

  constructor(public BroteService: BroteService, private router: Router, private formBuilder: FormBuilder, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.broteName = this.route.snapshot.paramMap.get('broteName');
  }

  updateBrote(){
    this.formBuilder = true;
    if(this.broteForm.invalid){
      return;
    }
    const 
  }

}
