import {inject, Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {lastValueFrom} from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProjectControllerService {

  private readonly http = inject(HttpClient);


  api_url = "http://localhost:1337/api/projects";

  constructor() {
  }


  public async ProjectsAsync() {
    return lastValueFrom(this.Projects$());
  }

  public Projects$() {
    return this.http.get(this.api_url);
  }



}
