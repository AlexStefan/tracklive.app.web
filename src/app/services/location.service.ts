import {HttpClient} from '@angular/common/http';
import {ILocation} from '../location'
import {Observable} from 'rxjs'
import { Injectable } from '@angular/core';

@Injectable(
{
    providedIn: 'root'
})
export class LocationService {
    
    private _url: string ="https://trackliveapp.appspot.com/trackings/5629499534213120";
   
    constructor(private http: HttpClient)
    {

    }

    getLocation() : Observable<ILocation[]>
    {
        return this.http.get<ILocation[]>(this._url);
    }
}