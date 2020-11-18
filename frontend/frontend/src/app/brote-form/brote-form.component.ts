import { BroteService } from './../service/brote.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Brote } from '../model/brote';
import { ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-brote-form',
  templateUrl: './brote-form.component.html',
  styleUrls: ['./brote-form.component.css']
})
export class BroteFormComponent implements OnInit {

  broteForm: FormGroup;
  isSubmitted = false;
  broteName: string;
  constructor(public BroteService: BroteService, private router: Router, private formBuilder: FormBuilder, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.broteName = this.route.snapshot.paramMap.get('broteName');
    this.broteForm = this.formBuilder.group({
      name: ['', [Validators.required, Validators.nullValidator]],
      inicio: ['', [Validators.required, Validators.nullValidator]],
      final: ['', [Validators.required, Validators.nullValidator]],

    });
  }

  get formControls(){
    return this.broteForm.controls;
  }

  submitBrote(){
  
  }

}
