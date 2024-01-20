import * as vscode from 'vscode';
import { CatScratchEditorProvider } from './catScratchEditor';
import { PawDrawEditorProvider } from './pawDrawEditor';
import { CborEditorProvider } from './cborEditor';
export function activate(context: vscode.ExtensionContext) {
	// Register our custom editor providers
	context.subscriptions.push(CatScratchEditorProvider.register(context));
	context.subscriptions.push(PawDrawEditorProvider.register(context));
	context.subscriptions.push(CborEditorProvider.register(context));
}
