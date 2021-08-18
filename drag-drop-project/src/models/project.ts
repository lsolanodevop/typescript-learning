namespace App{
    //An Enum for managing the status of a Project
export enum ProjectStatus {Active, Finished}

//Project Class
export class Project{
  constructor(
    public id: string,
    public title: string,
    public description: string,
    public people: number,
    public status: ProjectStatus ) { }
}
}