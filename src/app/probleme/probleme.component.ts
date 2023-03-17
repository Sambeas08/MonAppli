import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'inter-probleme',
  templateUrl: './probleme.component.html',
  styleUrls: ['./probleme.component.css']
})
export class ProblemeComponent {

  problemeForm:FormGroup
  save(): void {
  }



  constructor(private fb:FormBuilder) {}
  ngOnInit(){
    this.problemeForm=this.fb.group({
      prenom:['',[Validators.minLength(3),Validators.required]]
    })
    

  }
}
