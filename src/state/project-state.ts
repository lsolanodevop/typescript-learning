namespace App {
  // Listener
type Listener<T> = (items: T[]) => void;
// Class State
class State<T> {
  protected listerners: Listener<T>[] = [];
  
  addListener(listenerFn: Listener<T>) {
    this.listerners.push(listenerFn);
  }
  }
  
  //Project State Management
export class ProjectState extends State<Project>{
  
  private projects: Project[] = [];
  private static instance: ProjectState;

   constructor() {
     super();
  }

  static getInstance() {
    if (this.instance) {
      return this.instance;
    }
    this.instance = new ProjectState();
    return this.instance;
  }

  addProject(title: string, description: string, numOfPeople: number) {
    const newProject = new Project(Math.random.toString(), title, description, numOfPeople, ProjectStatus.Active);
    this.projects.push(newProject);
    this.updateListeners();
  }

  moveProject(prjID: string, newStatus: ProjectStatus) {
    const project = this.projects.find(prj => prj.id === prjID);
    if (project && project.status !== newStatus) {
      project.status = newStatus;
      this.updateListeners();
    }
  }

  updateListeners() {
    for (const listenerFn of this.listerners) {
      listenerFn(this.projects.slice());
    }
  }
}

export const projectState = ProjectState.getInstance();
}
