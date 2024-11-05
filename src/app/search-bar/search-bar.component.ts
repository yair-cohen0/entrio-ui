import {Component, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'search-bar',
  standalone: true,
  imports: [],
  templateUrl: './search-bar.component.html',
  styleUrl: './search-bar.component.scss'
})
export class SearchBarComponent {
  @Output('searchByName')
  searchByName = new EventEmitter<string>();

  @Output('searchById')
  searchById = new EventEmitter<number>();
}
