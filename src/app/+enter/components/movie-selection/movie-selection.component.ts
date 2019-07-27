import { Component, Input } from '@angular/core';

import { Movie } from '@app/models';

@Component({
  selector: 'app-movie-selection',
  templateUrl: './movie-selection.component.html',
  styleUrls: ['./movie-selection.component.scss']
})
export class MovieSelectionComponent {
  @Input() public movies: Movie[];
}
