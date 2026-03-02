// src/app/updateresjihan/updateresjihan.component.ts
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ResidenceService } from '../services/residence.service';
import { Residence } from '../models/residence';

@Component({
  selector: 'app-updateresjihan',
  templateUrl: './updateresjihan.component.html',
  styleUrls: ['./updateresjihan.component.css']
})
export class UpdateresjihanComponent implements OnInit {

  residenceForm!: FormGroup;
  residenceId!: number;

  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private service: ResidenceService
  ) {}

  ngOnInit(): void {
    this.residenceId = Number(this.route.snapshot.paramMap.get('id'));
    this.residenceForm = this.fb.group({
      name: ['', Validators.required],
      address: ['', Validators.required],
      status: ['', Validators.required],
      image: ['']
    });

    this.service.getById(this.residenceId).subscribe(res => {
      this.residenceForm.patchValue(res);
    });
  }

  updateResidence() {
    const updated = {
      ...this.residenceForm.value,
      updated_at: new Date().toISOString()
    };

    this.service.update(this.residenceId, updated).subscribe(() => {
      alert('Résidence mise à jour !');
      this.router.navigate(['/list']);
    });
  }
}