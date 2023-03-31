import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { VerifierCaracteresValidator } from '../shared/longueur-minimum/longueur-minimum.component';
import { ITypeProbleme } from './probleme';
import { ProblemeService } from './probleme.service';

@Component({
  selector: 'inter-probleme',
  templateUrl: './probleme.component.html',
  styleUrls: ['./probleme.component.css'],
})
export class ProblemeComponent {
  problemeForm: FormGroup;
  typeproblemeService: any;
  typesProbleme: ITypeProbleme[];
  errorMessage: string;
  save(): void {}

  constructor(private fb: FormBuilder, private problemes: ProblemeService) {}
  ngOnInit() {
    this.problemeForm = this.fb.group({
      prenom: [
        '',
        [VerifierCaracteresValidator.longueurMinimum(3), Validators.required],
      ],

      noProbleme: ['', Validators.required]

    });

    this.problemes.obtenirTypesProbleme().subscribe(
      typesProbleme  => this.typesProbleme = typesProbleme,
      error => this.errorMessage = <any>error
    );
  }
}
