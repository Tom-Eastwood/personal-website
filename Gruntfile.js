module.exports = function(grunt) {

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        sass: {
            dist: {
                options: {
                    sourcemap: 'none',
                    //style: 'compressed'
                },
                files: {
                    'styles/main.css': 'styles/scss/main.scss'
                },
                loadPath: ['node_modules/foundation-sites/scss']
            }
        },
        watch: {
            scss: {
                files: ['styles/scss/*.scss'],
                tasks: ['sass']
            },
        }
    });

    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-watch');

    grunt.registerTask('default', ['watch']);

};