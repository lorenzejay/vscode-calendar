// import * as vscode from "vscode";
// import * as fs from "fs";
// import * as path from "path";

// interface TodoType {
//   id: number;
//   todo: string;
//   completed: boolean;
// }

// export class CalendarTreeProvider implements vscode.TreeDataProvider<Dependency> {
//   constructor(private workspaceRoot: string) {}

//   getTreeItem(element: Todo): vscode.TreeItem {
//     return element;
//   }

//   getChildren(element?: Todo): Thenable<Todo> {
//     // if (!this.workspaceRoot) {
//     //   vscode.window.showInformationMessage("No dependency in empty workspace");
//     //   return Promise.resolve([]);
//     // }
    
//     if (element) {
//       // console.log('element', element);
//       return Promise.resolve(this.getTodos());
//       // return Promise.resolve(
//       //   this.getDepsInPackageJson(path.join(this.workspaceRoot, "node_modules", element.label, "package.json"))
//       // );
//     } else {
//       const packageJsonPath = path.join(this.workspaceRoot, "package.json");
//       if (this.pathExists(packageJsonPath)) {
//         return Promise.resolve(this.getTodos());
//         // return Promise.resolve([{"todo": "1", id:1, "completed": true}]);
//         // return Promise.resolve(this.getDepsInPackageJson(packageJsonPath));
//       } else {
//         vscode.window.showInformationMessage("Workspace has no package.json");
//         return Promise.resolve(this.getTodos());
//       }
//     }
//   }

//   private getTodos(): Todo {
//     return new Todo("Todos", [{id:1, todo: "Buy item", completed: false}], vscode.TreeItemCollapsibleState.Collapsed);
//   }
//   /**
//    * Given the path to package.json, read all its dependencies and devDependencies.
//    */
//   private getDepsInPackageJson(packageJsonPath: string): Dependency[] {
//     if (this.pathExists(packageJsonPath)) {
//       const packageJson = JSON.parse(fs.readFileSync(packageJsonPath, "utf-8"));

//       const toDep = (moduleName: string, version: string): Dependency => {
//         if (this.pathExists(path.join(this.workspaceRoot, "node_modules", moduleName))) {
//           return new Dependency(moduleName, version, vscode.TreeItemCollapsibleState.Collapsed);
//         } else {
//           return new Dependency(moduleName, version, vscode.TreeItemCollapsibleState.None);
//         }
//       };

//       const deps = packageJson.dependencies
//         ? Object.keys(packageJson.dependencies).map((dep) => toDep(dep, packageJson.dependencies[dep]))
//         : [];
//       const devDeps = packageJson.devDependencies
//         ? Object.keys(packageJson.devDependencies).map((dep) => toDep(dep, packageJson.devDependencies[dep]))
//         : [];
//       return deps.concat(devDeps);
//     } else {
//       return [];
//     }
//   }

//   private pathExists(p: string): boolean {
//     try {
//       fs.accessSync(p);
//     } catch (err) {
//       return false;
//     }
//     return true;
//   }

//   private _onDidChangeTreeData: vscode.EventEmitter<Dependency | undefined | null | void> = 
//     new vscode.EventEmitter<Dependency | undefined | null | void>();

//   refresh(): void{
//     this._onDidChangeTreeData.fire();
//   }
// }

// class Dependency extends vscode.TreeItem {
//   constructor(
//     public readonly label: string,
//     private version: string,
//     public readonly collapsibleState: vscode.TreeItemCollapsibleState
//   ) {
//     super(label, collapsibleState);
//     this.tooltip = `${this.label}-${this.version}`;
//     this.description = this.version;
//   }

//   iconPath = {
//     light: path.join(__filename, "..", "..", "resources", "light", "calendar-icon.png"),
//     dark: path.join(__filename, "..", "..", "resources", "dark", "calendar-icon.png"),
//   };
// }

// class Todo extends vscode.TreeItem {
//   constructor(
//     public readonly label: string,
//     private todos: TodoType[],
//     public readonly collapsibleState: vscode.TreeItemCollapsibleState){
//       super(label, collapsibleState);
//       this.todos = todos;
//       // this.tooltip = this.label;
//       // this.description = this.todo.todo;
//     }
     

//     iconPath = {
//       light: path.join(__filename, "..", "..", "resources", "light", "calendar-icon.png"),
//       dark: path.join(__filename, "..", "..", "resources", "dark", "calendar-icon.png"),
//     };
    
// }
