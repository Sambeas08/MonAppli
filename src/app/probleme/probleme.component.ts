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
  produitForm: any;
  save(): void {}

  constructor(private fb: FormBuilder, private problemes: ProblemeService) {}
  ngOnInit() {
    this.problemeForm = this.fb.group({
      prenom: [
        '',
        [VerifierCaracteresValidator.longueurMinimum(3), Validators.required],
      ],

      noProbleme: ['', Validators.required],

      noTypeProbleme: ['', Validators.required],
      courrielGroup: this.fb.group({
        courriel: [{ value: '', disabled: true }],
        courrielConfirmation: [{ value: '', disabled: true }],
      }),
      telephone: [{ value: '', disabled: true }],
    });

    this.problemes.obtenirTypesProbleme().subscribe(
      (typesProbleme) => (this.typesProbleme = typesProbleme),
      (error) => (this.errorMessage = <any>error)
    );
  }

  gestionNotification(): void {
    const courriel = this.problemeForm.get('courrielGroup.courriel');
    const courrielConfirmation = this.problemeForm.get('courrielGroup.courrielConfirmation');
    const telephone = this.problemeForm.get('telephone');

    telephone.disable(); 
    courriel.disable();
    courrielConfirmation.disable();
    telephone.clearValidators();
    telephone.reset();    
    telephone.disable();
    courriel.clearValidators();
    courriel.reset();    
    courriel.disable();
    courrielConfirmation.clearValidators();
    courrielConfirmation.reset();    
    courrielConfirmation.disable();

     
  }

}
