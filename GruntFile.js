module.exports = function(grunt) {
  // Do grunt-related things in here
  grunt.initConfig({
    watch: {
      options: {
        livereload: true,
      },
      css: {
        files: ['public/scss/*.scss'],
        tasks: ['compass'],
      },
    },
  });

  // Load the plugin that provides the "uglify" task.
  grunt.loadNpmTasks('grunt-contrib-watch');

  // Default task(s).
  grunt.registerTask('default', ['watch']);
};