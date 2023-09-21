import { Component, OnInit } from '@angular/core';
import { SpellsDataService } from 'src/app/services/spells-data.service';

@Component({
  selector: 'app-spell-detail',
  templateUrl: './spell-detail.component.html',
  styleUrls: ['./spell-detail.component.scss']
})
export class SpellDetailComponent implements OnInit {
  constructor(public spellService: SpellsDataService ){}

  ngOnInit(): void {
    this.spellService.getSpellDetail().subscribe({
      next: detail => console.log(detail),
      error: error => console.log(error)
    });
  }
}