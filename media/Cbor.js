// @ts-check

// This script is run within the webview itself
(function () {
	// @ts-ignore
	const vscode = acquireVsCodeApi();

	class CborEditor {
		constructor( /** @type {Element} */ parent) {
			this.ready = false;
			this.editable = false;
			this.parent = parent;
			this._initElements(parent);
		}

		_initElements(/** @type {Element} */ parent) {
			parent.innerHTML = '🚛 Loading... 🚛';
		}

		setEditable(editable) {
			this.editable = editable;
		}

		/**
		 * @param {string | undefined} data 
		 */
		async reset(data) {
			if (data) {
				this.parent.innerHTML = data
				this.ready = true;
			}
		}

	}

	const parent = document.querySelector('.edn-preview')
	if (parent === null){
		throw new Error('Could not find element by .edn-preview')
	}

	const editor = new CborEditor(parent);

	// Handle messages from the extension
	window.addEventListener('message', async e => {
		const { type, body, requestId } = e.data;
		switch (type) {
			case 'init':
				{
					editor.setEditable(body.editable);
					if (body.untitled) {
						await editor.reset('');
						return;
					} else {
						// Load the edn into the pre tag
						await editor.reset(body.value);
						return;
					}
				}
		}
	});

	// Signal to VS Code that the webview is initialized.
	vscode.postMessage({ type: 'ready' });
}());
