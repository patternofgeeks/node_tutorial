/**
 * Created by sk.cho on 15. 3. 29..
 */
module.exports = function(grunt) {
  grunt.initConfig({
    nodeunit: {
      controller: ['test/*.js']
    },
    jshint: {
      index: ['index.js'],
      index: ['sever.js'],
      index: ['requestHandlers.js'],
      index: ['route.js']
    }
  });

  grunt.loadNpmTasks('grunt-contrib-nodeunit');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.registerTask('default', ['jshint', 'nodeunit']);
};