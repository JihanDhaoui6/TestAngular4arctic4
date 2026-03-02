// src/app/addresjihan/addresjihan.component.ts
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ResidenceService } from '../services/residence.service';
import { Residence } from '../models/residence';

@Component({
  selector: 'app-addresjihan',
  templateUrl: './addresjihan.component.html',
  styleUrls: ['./addresjihan.component.css']
})
export class AddresjihanComponent {

  residenceForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private service: ResidenceService,
    private router: Router
  ) {
    this.residenceForm = this.fb.group({
      name: ['', Validators.required],
      address: ['', Validators.required],
      status: ['', Validators.required],
      image: ['']
    });
  }

  addResidence() {
    const now = new Date().toISOString();
    const residence: Residence = {
      id: 0,
      ...this.residenceForm.value,
      created_at: now,
      updated_at: now
    };

    this.service.add(residence).subscribe({
      next: () => {
        alert('Résidence ajoutée avec succès !');
        this.router.navigate(['/list']);
      },
      error: (err) => console.error('Erreur ajout :', err)
    });
  }
}