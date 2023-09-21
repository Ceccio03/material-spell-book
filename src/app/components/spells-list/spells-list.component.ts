import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Spell } from 'src/app/model/spell';
import { SpellsDataService } from 'src/app/services/spells-data.service';

@Component({
  selector: 'app-spells-list',
  templateUrl: './spells-list.component.html',
  styleUrls: ['./spells-list.component.scss']
})
export class SpellsListComponent implements OnInit{
  spells: Spell[] = [];

  constructor(private spellService: SpellsDataService, private router: Router) {}

  ngOnInit(): void {
    this.spellService.getAllSpells().subscribe(data => this.spells = data);
    // this.spellService.getAllSpellDetails().subscribe(details => console.log(details))
  }

  // openDetail(spell: Spell){
  //   this.spellService.selectedSpell = spell.index;
  //   this.router.navigateByUrl('/detail')
  // }

  openDetail(spell: Spell) {
    this.router.navigateByUrl('/detail?spell=' + spell.index)
  }
}
