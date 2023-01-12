import { Component } from '@angular/core';
import { popularMovies } from '../../data/movies';

@Component({
  selector: 'app-movies-list',
  templateUrl: './movies-list.component.html',
  styleUrls: ['./movies-list.component.css'],
})
export class MoviesListComponent {
  popularMovies = popularMovies;
}
