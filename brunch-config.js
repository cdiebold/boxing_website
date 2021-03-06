// See http://brunch.io for documentation.
exports.files = {
  javascripts: {
    joinTo: {
      'vendor.js': /^node_modules/ , // Files that are not in `app` dir.
      'app.js': /^app/
    }
  },
  stylesheets: {joinTo: 'app.css'}
};

exports.plugins = {
  babel: {presets: ['latest']}
};

exports.npm = {
  enabled: true,
  globals: {
    jQuery: 'jquery',
    $: 'jquery',
    bootstrap: 'bootstrap'
  },
   styles: {
     bootstrap: ['dist/css/bootstrap.css']
   }
};
