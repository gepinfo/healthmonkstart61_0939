import { Component, OnInit } from '@angular/core';
import { ActivedetailsService } from './activedetails.service';

@Component({
  selector: 'app-activedetails',
  templateUrl: './activedetails.component.html',
  styleUrls: ['./activedetails.component.scss'],
})

export class ActivedetailsComponent implements OnInit {
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
        private activedetailsService: ActivedetailsService,
    ) { }

    ngOnInit() {
        this.Person.created_by = sessionStorage.getItem('email') || ''; 
    }
}