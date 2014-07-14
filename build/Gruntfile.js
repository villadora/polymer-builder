
module.exports = function(grunt) {
  grunt.initConfig({
    'download-atom-shell': {
      version: '0.12.3',
      outputDir: 'binaries'
    }
  });

  grunt.loadNpmTasks('grunt-download-atom-shell');

  grunt.tasks('default', ['download-atom-shell']);
};
