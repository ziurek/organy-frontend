module.exports = function (grunt) {
    require('jit-grunt')(grunt);

    grunt.initConfig({
        less: {
            development: {
                options: {
                    compress: true,
                    yuicompress: true,
                    optimization: 2
                },
                files: {
                    "app/app.css": "app/less/main.less" // destination file and source file
                }
            },
            bootstrap: {
                options: {
                    compress: true,
                    yuicompress: true,
                    optimization: 2
                },
                files: {
                    "app/bootstrap.min.css": "app/less/customBootstrap/custom-bootstrap.less" // destination file and source file
                }
            }
        },
        watch: {
            styles: {
                files: ['app/less/**/*.less'],
                tasks: ['less'],
                options: {
                    livereload: 35729
                }
            },
            jsHtml: {
                files: ['app/**/**/**/**/*.js', 'app/**/**/**/**/*.html'], // which files to watch
                options: {
                    livereload: 35729
                }
            }
        },
        connect: {
            server: {
                options: {
                    base: 'app/',
                    port: 8000
                }
            }
        },
        postcss: {
            options: {
                processors: [
                    require('autoprefixer')({browsers: 'last 2 versions'}), // add vendor prefixes
                    require('cssnano')() // minify the result
                ]
            },
            dist: {
                src: 'app/*.css'
            }
        }
    });
    grunt.registerTask('serve', ['connect', 'less:development', 'watch']);
    grunt.registerTask('bootstrap', ['less:bootstrap']);
    grunt.registerTask('autoprefixer', ['postcss']);
};