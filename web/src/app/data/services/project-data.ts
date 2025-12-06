import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ProjectData {




}



export interface Project {
  id: string;

  title: string;
  description: string;

  tags: string[];


}
