import {Component} from '@angular/core';
import {RouterOutlet} from '@angular/router';
import {ItemComponent} from './item/item.component';
import {AsyncPipe, NgForOf} from '@angular/common';
import {SearchBarComponent} from './search-bar/search-bar.component';
import {Subject} from 'rxjs';
import {RepositoriesService} from './repositories.service';
import {ItemDetailComponent} from './item-detail/item-detail.component';
import {Repository} from '../types/repository';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ItemComponent, NgForOf, SearchBarComponent, ItemDetailComponent, AsyncPipe],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {

  public repositories = new Subject<Repository[]>()

  constructor(private readonly repositoriesService: RepositoriesService ) {
    this.repositoriesService.getRepositories().subscribe({
      next: (repos) => this.repositories.next(repos),
      error: (error) => console.error('Error fetching repositories:', error)
    })
  }

  public currentItem$ = new Subject<Repository>();

  public searchById(repoId: number) {
    this.repositoriesService.getRepositoryById(repoId).subscribe({
      next: (repo) => this.currentItem$.next(repo),
      error: (error) => console.error('Error fetching repository:', error)
    })
  };

  public searchByName(repoName: string) {
    this.repositoriesService.getRepositoryByName(repoName).subscribe({
      next: (repo) => this.currentItem$.next(repo),
      error: (error) => console.error('Error fetching repository:', error)
    })
  };
}
