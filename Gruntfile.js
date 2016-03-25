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
        },
        responsive_images: {
            myTask: {
                options: {
                    sizes: [{
                        width: 320,
                        height: 240
                    }]
                    //},{
                    //    name: 'large',
                    //    width: 640
                    //},{
                    //    name: "large",
                    //    width: 1024,
                    //    suffix: "_x2",
                    //    quality: 60
                    //}]
                },
                files: [{
                    expand: true,
                    src: ['app/images/realisations/**.{jpg,gif,png}'],
                    cwd: 'test/',
                    dest: 'tmp/'
                }]
            }
        },
    });
    grunt.registerTask('serve', ['connect', 'less:development', 'watch']);
    grunt.registerTask('bootstrap', ['less:bootstrap']);
    grunt.registerTask('autoprefixer', ['postcss']);
    grunt.registerTask('responsive_images', ['responsive_images']);
};