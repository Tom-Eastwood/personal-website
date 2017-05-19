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
        'node-minify': {
            main: {
                files: {
                    'scripts/main.min.js': 
                        ['node_modules/instafeed.js/instafeed.js',
                        'node_modules/jquery/dist/jquery.min.js',
                        'scripts/slick.min.js', 
                        'scripts/main.js']
                }
            }
        },
        watch: {
            scss: {
                files: ['styles/scss/*.scss'],
                tasks: ['sass']
            },
            'node-minify':{
                files: ['scripts/main.js'],
                tasks: ['node-minify']
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-node-minify');

    grunt.registerTask('default', ['watch']);

};