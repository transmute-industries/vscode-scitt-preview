import * as vscode from 'vscode';
import { CborEditorProvider } from './cborEditor';
export function activate(context: vscode.ExtensionContext) {
	// Register our custom editor providers
	context.subscriptions.push(CborEditorProvider.register(context));
}
