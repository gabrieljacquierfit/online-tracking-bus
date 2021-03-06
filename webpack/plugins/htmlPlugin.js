const
  path              = require('path'),
  manifest          = require('../manifest'),
  HtmlWebpackPlugin = require('html-webpack-plugin');

const titles = {
  'index': 'Logout',
  'home': 'Painel Principal',
  'CadUser': 'Cadastro de Novo Usuário',
  'ManUser': 'Manutenção de Usuário',
  'NovLinha':'Nova Linha',
  'ManLinha': 'Manutenção de Linha',
  'RelUserLinh':'Ocupação (Linha x Passageiro)'
};

module.exports = Object.keys(titles).map(title => {
  return new HtmlWebpackPlugin({
    template: path.join(manifest.paths.src, `${title}.html`),
    path: manifest.paths.build,
    filename: `${title}.html`,
    inject: true,
    minify: {
      collapseWhitespace: true,
      minifyCSS: true,
      minifyJS: true,
      removeComments: true,
      useShortDoctype: true,
    },
  });
});
