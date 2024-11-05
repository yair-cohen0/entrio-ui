import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'item',
  standalone: true,
  imports: [],
  templateUrl: './item.component.html',
  styleUrl: './item.component.scss'
})
export class ItemComponent {
  @Input('name')
  name: string = '';

  @Input('id')
  id: number = 0;

  @Output('selected')
  selected = new EventEmitter<number>();

  onClick() {
    this.selected.emit(this.id);
  }
}
