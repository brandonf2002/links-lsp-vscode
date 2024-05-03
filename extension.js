const vscode = require('vscode');
const { LanguageClient, LanguageClientOptions, ServerOptions, TransportKind } = require('vscode-languageclient');

let client;

function activate(context) {
  const serverOptions = {
    command: '/home/links-lsp/lsp',
    args: [],
  };

  const clientOptions = {
    documentSelector: [{ scheme: 'file', language: 'links' }],
  };

  client = new LanguageClient('linksLanguageServer', 'Links Language Server', serverOptions, clientOptions);
  client.start();
}

function deactivate() {
  if (client) {
    client.stop();
  }
}

module.exports = {
  activate,
  deactivate,
};
