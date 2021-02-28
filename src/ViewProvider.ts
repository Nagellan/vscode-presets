import * as vscode from 'vscode';

class ViewProvider implements vscode.WebviewViewProvider {
	public static readonly viewId = 'vscode-spaces-view';

	private view?: vscode.WebviewView;

	constructor(private readonly extensionUri: vscode.Uri) {}

	public resolveWebviewView(webviewView: vscode.WebviewView) {
		const webview = webviewView.webview;

		this.view = webviewView;

		webview.options = {
			enableScripts: true,
			localResourceRoots: [this.extensionUri],
		};

		webview.html = this.getWebviewContent();

		webview.onDidReceiveMessage((data) => {
			switch (data.type) {
				default:
					break;
			}
		});
	}

	private getWebviewContent() {
		return `<!DOCTYPE html>
      <html lang="en">
      <head>
          <meta charset="UTF-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>Spaces</title>
      </head>
      <body>
          <button>Create Space</button>
      </body>
      </html>`;
	}
}

export default ViewProvider;
