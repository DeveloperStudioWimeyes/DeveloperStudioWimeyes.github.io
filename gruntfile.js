module.exports = function (grunt) {
  require('load-grunt-tasks')(grunt);
  grunt.initConfig({
  sass: { 
    options: {
               sourceMap: true
           },                               
    dist: {                            
      files: {                         
        'assets/css/bootstrap.css': 'assets/stylesheets/bootstrap.scss'       
      }
    }
  },
  watch: {
    css: {
      files: 'assets/stylesheets/*.scss',
      tasks: ['sass'],
   },
  }

  });
  grunt.registerTask('default',['sass']);
  grunt.registerTask('watch',['watch']);
};

