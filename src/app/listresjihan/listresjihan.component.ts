// src/app/listresjihan/listresjihan.component.ts
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ResidenceService } from '../services/residence.service';
import { Residence } from '../models/residence';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-listresjihan',
  templateUrl: './listresjihan.component.html',
  styleUrls: ['./listresjihan.component.css']
})
export class ListresjihanComponent implements OnInit {

  residences: Residence[] = [];

  constructor(private service: ResidenceService, private router: Router) { }

  ngOnInit(): void {
    this.loadResidences();
  }

  loadResidences() {
    this.service.getAll().subscribe(
      (data: Residence[]) => this.residences = data,
      (err: HttpErrorResponse) => console.error('Erreur récupération :', err)
    );
  }

  deleteResidence(id: number) {
    if (confirm('Supprimer cette résidence ?')) {
      this.service.delete(id).subscribe(
        () => this.loadResidences(),
        (err: HttpErrorResponse) => console.error('Erreur suppression :', err)
      );
    }
  }

  viewDetails(id: number) {
    this.router.navigate(['/details', id]);
  }

  updateResidence(id: number) {
    this.router.navigate(['/update', id]);
  }
}