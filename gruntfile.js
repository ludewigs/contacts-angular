module.exports = function (grunt) {
  grunt.loadNpmTasks('grunt-contrib-uglify')
  grunt.loadNpmTasks('grunt-contrib-watch')

  grunt.initConfig({
    uglify: {
      my_target: {
        files: {
          'scripts.js': ['js/**/*.js', '!js/_test/*.js']
        } // files
      } // my_target
    }, // uglify
    watch: {
      options: { livereload: true },
      scripts: {
        files: ['js/**/*.js', '!js/_test/*.js'],
        tasks: ['uglify']
      }, // scripts
      html: {
        files: ['**/*.htm']
      } // html
    } // watch
  }) // initConfig
  grunt.registerTask('default', 'watch')
} // exports
