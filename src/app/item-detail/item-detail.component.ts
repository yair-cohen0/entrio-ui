import {Component, Input} from '@angular/core';
import {AsyncPipe, NgIf} from '@angular/common';
import {Repository} from '../../types/repository';
import {Subject} from 'rxjs';

@Component({
  selector: 'item-detail',
  standalone: true,
  imports: [
    NgIf,
    AsyncPipe
  ],
  templateUrl: './item-detail.component.html',
  styleUrl: './item-detail.component.scss'
})
export class ItemDetailComponent {
  constructor() {
  }

  @Input('item')
  item$: Subject<Repository> = new Subject();
}
