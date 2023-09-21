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

  constructor(private spellData: SpellsDataService, private router: Router) {}

  ngOnInit(): void {
    this.spellData.getSpellsList().subscribe((data) => this.spells = data);
  }

  openDetail(spell: Spell) {
    this.spellData.selectedSpell = spell.index;
    this.router.navigateByUrl('/detail');
  }
}
