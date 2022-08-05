// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from "vscode";
import { getNonce } from "./getNonce";
import { SidebarProvider } from "./SidebarProvider";
// import { CalendarTreeProvider } from "./treeview";

// this method is called when your extension is activated
// your extension is activated the very first time the command is executed
export function activate(context: vscode.ExtensionContext) {

  const sidebarProvider = new SidebarProvider(context.extensionUri);
  context.subscriptions.push(
    vscode.window.registerWebviewViewProvider(
      'vscode-pomodoro',
      sidebarProvider
    )
  );
  // const rootPath =
  // vscode.workspace.workspaceFolders && vscode.workspace.workspaceFolders.length > 0
  // ? vscode.workspace.workspaceFolders[0].uri.fsPath
  // : undefined;

  
  // if (rootPath) {
  //   const vscodeCalendarTreeProvider = new CalendarTreeProvider(rootPath);
  //   vscode.window.registerTreeDataProvider("VsCodeCalendar", new CalendarTreeProvider(rootPath));
  //   vscode.window.createTreeView("VsCodeCalendar", { treeDataProvider: new CalendarTreeProvider(rootPath) });

  //   vscode.commands.registerCommand("vscode-calendar.refreshEntry", () => {
  //     vscodeCalendarTreeProvider.refresh();
  //   })
  // }
  
  // Use the console to output diagnostic information (console.log) and errors (console.error)
  // This line of code will only  be executed once when your extension is activated
  // vscode.window.showInformationMessage('Congratulations, your extension "vscode-calendar" is now active!');

  // The command has been defined in the package.json file
  // Now provide the implementation of the command with registerCommand
  // The commandId parameter must match the command field in package.json
  let disposable = vscode.commands.registerCommand("vscode-calendar.helloWorld", () => {
    // The code you place here will be executed every time your command is executed
    // Display a message box to the user
    vscode.window.showInformationMessage("Hello World from vscode-calendar!");
  });
  vscode.commands.registerCommand("vscode-calendar.helloWorld2", () => {
    // The code you place here will be executed every time your command is executed
    // Display a message box to the user
    vscode.window.showInformationMessage("Hello World !!!");
  });
  


  context.subscriptions.push(disposable);
}

// this method is called when your extension is deactivated
export function deactivate() {}

// class SidebarProvider implements vscode.WebviewViewProvider {
//   _view?: vscode.WebviewView;
//   _doc?: vscode.TextDocument;

//   constructor(private readonly _extensionUri: vscode.Uri) {}

//   public resolveWebviewView(webviewView: vscode.WebviewView) {
//     this._view = webviewView;

//     webviewView.webview.options = {
//       // Allow scripts in the webview
//       enableScripts: true,

//       localResourceRoots: [this._extensionUri],
//     };

//     webviewView.webview.html = this._getHtmlForWebview(webviewView.webview);

//     webviewView.webview.onDidReceiveMessage(async (data) => {
//       switch (data.type) {
//         case "onInfo": {
//           if (!data.value) {
//             return;
//           }
//           vscode.window.showInformationMessage(data.value);
//           break;
//         }
//         case "onError": {
//           if (!data.value) {
//             return;
//           }
//           vscode.window.showErrorMessage(data.value);
//           break;
//         }
//       }
//     });
//   }

//   public revive(panel: vscode.WebviewView) {
//     this._view = panel;
//   }

//   private _getHtmlForWebview(webview: vscode.Webview) {
//     const styleResetUri = webview.asWebviewUri(
//       vscode.Uri.joinPath(this._extensionUri, "media", "reset.css")
//     );
//     const styleVSCodeUri = webview.asWebviewUri(
//       vscode.Uri.joinPath(this._extensionUri, "media", "vscode.css")
//     );

//     const scriptUri = webview.asWebviewUri(
//       vscode.Uri.joinPath(this._extensionUri, "dist", "sidebar.js")
//     );
//     // const styleMainUri = webview.asWebviewUri(
//     //   vscode.Uri.joinPath(this._extensionUri, "out", "compiled/sidebar.css")
//     // );

//     // Use a nonce to only allow a specific script to be run.
//     const nonce = getNonce();

//     return `<!DOCTYPE html>
// 			<html lang="en">
// 			<head>
// 				<meta charset="UTF-8">
// 				<!--
// 					Use a content security policy to only allow loading images from https or from our extension directory,
// 					and only allow scripts that have a specific nonce.
//         -->
//         <meta http-equiv="Content-Security-Policy" content="img-src https: data:; style-src 'unsafe-inline' ${
//           webview.cspSource
//         }; script-src 'nonce-${nonce}';">
// 				<meta name="viewport" content="width=device-width, initial-scale=1.0">
// 				<link href="${styleResetUri}" rel="stylesheet">
// 				<link href="${styleVSCodeUri}" rel="stylesheet">
//         <script nonce="${nonce}">
//           const tsvscode = acquireVsCodeApi();
//         </script>
// 			</head>
//       <body>
// 				<script nonce="${nonce}" src="${scriptUri}"></script>
// 			</body>
// 			</html>`;
//   }
// }