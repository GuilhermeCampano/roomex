import { Component, EventEmitter, Input, Output } from '@angular/core';

import { Movie } from '@app/models';

@Component({
  selector: 'app-movie-selection',
  templateUrl: './movie-selection.component.html',
  styleUrls: ['./movie-selection.component.scss']
})
export class MovieSelectionComponent {
  @Input() public movies: Movie[];

  @Output() public movieClick = new EventEmitter<string>();

  public handleClick = (movie: Movie) => {
    this.movieClick.emit(movie.Title);
  };
}
