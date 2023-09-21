import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Spell } from '../model/spell';
import { Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SpellsDataService {
  BASE_URL = 'https://www.dnd5eapi.co/api/spells/';
  selectedSpell = '';

  constructor(private http:HttpClient) {}

  getSpellsList(): Observable<Spell[]> {
    return this.http.get<any>(this.BASE_URL).pipe(map((obj:any) => obj.results));
  }

  getSpellDetail(param:any) {
    console.log('ciao');
  }
}
