// src/app/detailsresjihan/detailsresjihan.component.ts
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ResidenceService } from '../services/residence.service';
import { Residence } from '../models/residence';

@Component({
  selector: 'app-detailsresjihan',
  templateUrl: './detailsresjihan.component.html',
  styleUrls: ['./detailsresjihan.component.css']
})
export class DetailsresjihanComponent implements OnInit {

  residence!: Residence;

  constructor(private route: ActivatedRoute, private service: ResidenceService) {}

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.service.getById(id).subscribe(res => this.residence = res);
  }
}