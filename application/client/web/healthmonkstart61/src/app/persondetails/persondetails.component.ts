import { Component, OnInit } from '@angular/core';
import { PersondetailsService } from './persondetails.service';

@Component({
  selector: 'app-persondetails',
  templateUrl: './persondetails.component.html',
  styleUrls: ['./persondetails.component.scss'],
})

export class PersondetailsComponent implements OnInit {
    public Person = {
        created_date: '',
        created_by: '',
        last_modified_by: '',
        last_modified_date: '',
        dob: '',
        age: '',
        gender-bio: '',
        gender-preference: '',
        metricsystem: '',
        height: '',
        currentweight: '',
        currentactivitylevel: '',
        foodpreference: '',
        currentfitnesslevel: '',
        medicalconditions: '',
        otherconditions: '',
    }

    constructor (
        private persondetailsService: PersondetailsService,
    ) { }

    ngOnInit() {
        this.Person.created_by = sessionStorage.getItem('email') || ''; 
    }
}