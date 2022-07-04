import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { SharedService } from '../../shared/shared.service';

@Injectable({
    providedIn: 'root'
})

export class BmidetailsService {
    constructor(
        private sharedService: SharedService,
        private http: HttpClient,
    ) { }

}