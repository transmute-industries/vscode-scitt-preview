# SCITT Preview

View CBOR Extended Diagnostic Notation (EDN) for `.cbor` files in VSCode.

This plugin is not published to the marketplace.

## Building and Installing Locally

```
git clone git@github.com:transmute-industries/vscode-scitt-preview.git
cd vscode-scitt-preview;
npm i
npm run build:vsix
```

<img src="./docs/install-vsix.png" alt="install locally built vsix"/>

After successfully installing:

<img src="./docs/after-install.png" alt="scitt preview plugin in list of installed extensions"/>

I've not tested this very thoroughly, but here you go:

<img src="./docs/preview-demo.png" alt="edn from a cbor message displayed in vscode"/>


## Based on 

- https://github.com/hildjj/node-cbor
- https://github.com/microsoft/vscode-extension-samples/tree/main/custom-editor-sample

## History

- [Dev Day Twitter Thread](https://twitter.com/OR13b/status/1748490842774417801)