import { BroteService } from './../service/brote.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
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
  brname: string;
  broteDescription;
  broteInicio;
  broteFinal;
  constructor(public broteService: BroteService, private router: Router, private formBuilder: FormBuilder, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.brname = this.route.snapshot.paramMap.get('name');
    this.broteService.getBrote(this.brname).subscribe( brt => {
      this.broteName = brt.name;
      this.broteDescription = brt.description;
      this.broteInicio = brt.start_date;
      this.broteFinal = brt.finish_date;
    })
    this.broteForm = this.formBuilder.group({
      name: [ this.broteName, [Validators.required, Validators.nullValidator]],
      description: [this.broteDescription],
      start_date: [ this.broteInicio, [Validators.required, Validators.nullValidator]],
      finish_date: [ this.broteFinal, [Validators.required, Validators.nullValidator]],
    });
  }

  get formControls(){
    return this.broteForm.controls;
  }

  submitBrote(){
    this.isSubmitted = true;
    if(this.broteForm.invalid){
      return;
    }
    const name = this.broteForm.value.name;
    const description = this.broteForm.value.description;
    const inicio = this.broteForm.value.start_date;
    const final = this.broteForm.value.finish_date;
    const brote = { "name": name, "description": description, "start_date": inicio, "finish_date": final};
    this.broteService.updateBrote(brote, this.brname).subscribe(() => {
      this.router.navigateByUrl('brote');
    })
  
  }

}
