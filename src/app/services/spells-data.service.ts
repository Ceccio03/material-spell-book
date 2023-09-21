import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Spell } from '../model/spell';
import { Observable, catchError, forkJoin, map, switchMap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SpellsDataService {
  BASE_URL = 'https://www.dnd5eapi.co/api/spells/';
  selectedSpell = '';

  constructor(private http:HttpClient) {}

  getSpellsList(): Observable<Spell[]> {
    return this.http.get<any>(this.BASE_URL).pipe(
      map((obj:any) => obj.results),
      catchError(err => {
        console.log(err);
        return [];
      })
      );
  }

  getSpellDetail() {
    if (this.selectedSpell === '') {
      this.selectedSpell = 'acid-arrow';
    }
    return this.http.get<Spell>(this.BASE_URL + this.selectedSpell);
  }

  getAllSpellDetails() {
    return this.http.get<any>(this.BASE_URL).pipe(
      map(obj => obj.results),
      switchMap(spells => forkJoin(spells.map((spell:any) => this.http.get<Spell>(this.BASE_URL + spell.))))
    );
  }
}
