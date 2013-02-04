/*global module:false*/
module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    s3: {
      // This is specific to MinnPost
      //
      // These are assumed to be environment variables
      // See https://npmjs.org/package/grunt-s3
      //key: 'YOUR KEY',
      //secret: 'YOUR SECRET',
      bucket: 'data.minnpost',
      access: 'public-read',
      upload: [
        {
          src: 'data/*',
          dest: 'projects/minnpost-dayton-taxes-game/data/'
        }
      ]
    }
  });
  
  // Load plugin tasks
  grunt.loadNpmTasks('grunt-s3');

  // Default task.
  grunt.registerTask('mp-deploy', 's3');

};
