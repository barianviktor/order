import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {
  forkJoin,
  from,
  map,
  mergeMap,
  Observable,
  of,
  switchMap,
  toArray,
} from 'rxjs';
import { environment } from 'src/environments/environment';
import { ILocationDto } from '../models/dto/location.dto.interface';
import { IImage } from '../models/interfaces/image.interface';
import { ILocation } from '../models/interfaces/location.interface';
import { ImageService } from './image.service';

@Injectable({
  providedIn: 'root',
})
export class LocationService {
  constructor(private http: HttpClient, private imageService: ImageService) {}
  getLocationsData$(
    locationDto$: Observable<ILocationDto>
  ): Observable<ILocation> {
    return locationDto$.pipe(
      switchMap((locationDto: ILocationDto) => {
        return forkJoin({
          floor_plan: this.imageService.getImage$(locationDto.floor_plan),
          locationDto: of(locationDto),
        });
      }),
      map((fj: { floor_plan: IImage; locationDto: ILocationDto }) => {
        return <ILocation>{
          id: fj.locationDto.id,
          name: fj.locationDto.name,
          floor_plan: fj.floor_plan,
        };
      })
    );
  }
  getLocations$(): Observable<ILocation[]> {
    return this.http.get<ILocationDto[]>(environment.api + '/locations').pipe(
      switchMap((locationDtos: ILocationDto[]) => {
        return from(locationDtos);
      }),
      mergeMap((locationDto: ILocationDto) => {
        return this.getLocationsData$(of(locationDto));
      }),
      toArray()
    );
  }
  getLocation$(id: number) {
    return this.http
      .get<ILocationDto>(environment.api + '/locations/' + id)
      .pipe(
        switchMap((locationDto: ILocationDto) => {
          return this.getLocationsData$(of(locationDto));
        })
      );
  }
  addLocation$(name: string, floor_plan: string): Observable<ILocationDto> {
    let image: IImage = {
      path: floor_plan,
      created_at: new Date().toISOString().split('T')[0],
    };
    return this.imageService.addImage$(image).pipe(
      switchMap((img: IImage) => {
        let location: ILocationDto = {
          floor_plan: img.id!,
          name: name,
        };
        return this.http.post<ILocationDto>(
          environment.api + '/locations',
          location
        );
      })
    );
    //;
  }
}
