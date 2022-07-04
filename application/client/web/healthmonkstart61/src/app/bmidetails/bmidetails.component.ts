import { Component, OnInit } from '@angular/core';
import { BmidetailsService } from './bmidetails.service';

@Component({
  selector: 'app-bmidetails',
  templateUrl: './bmidetails.component.html',
  styleUrls: ['./bmidetails.component.scss'],
})

export class BmidetailsComponent implements OnInit {
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
        private bmidetailsService: BmidetailsService,
    ) { }

    ngOnInit() {
        this.Person.created_by = sessionStorage.getItem('email') || ''; 
    }
}