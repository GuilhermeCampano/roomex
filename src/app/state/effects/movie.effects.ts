import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import {
  catchError,
  debounceTime,
  exhaustMap,
  map} from 'rxjs/operators';

import { MovieApiResponse } from '@root/app/models';
import { environment } from '@root/environments/environment';
import { fetchMoviesFailedAction, fetchMoviesSuccessAction, MoviesActionTypes } from '../actions';

@Injectable()
export class MovieEffects {
  public fetchMoviesApi$ = createEffect(() =>
    this.actions$.pipe(
      ofType(MoviesActionTypes.FETCH_MOVIES),
      exhaustMap((action: any) => {
        return this.getMovies(action.movieQuery).pipe(
          map((response: MovieApiResponse) =>
            fetchMoviesSuccessAction({ movies: response.Search })
          ),
          catchError(error => of(fetchMoviesFailedAction({ error })))
        );
      }),
      debounceTime(300)
    )
  );

  public getMovies = query => {
    const { MOVIE_API, MOVIE_API_KEY } = environment;
    return this.http.get(`${MOVIE_API}?apikey=${MOVIE_API_KEY}&type=movie&page=1&s=${query}`);
  }

  constructor(private actions$: Actions, private http: HttpClient) {}
}
