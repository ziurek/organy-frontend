module.exports = function (grunt) {
  require('jit-grunt')(grunt);
  grunt.loadNpmTasks('grunt-contrib-requirejs');


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
        },
        files: [{
          expand: true,
          src: ['app/images/realisations/**.{jpg,gif,png}'],
          cwd: 'test/',
          dest: 'tmp/'
        }]
      }
    },
    requirejs: {
      compile: {
        options: {
          baseUrl: './app',
          mainConfigFile: 'app/scripts/amd/config.js',
          //name: 'path/to/almond', /* assumes a production build using almond, if you don't use almond, you
          // need to set the "includes" or "modules" option instead of name */
          //include: ['app.js'],
          include: ['scripts/amd/config.js'],
          //paths: {
          //  requireLib: 'scripts/amd/require'
          //},
          out: 'app/optimized.js'
        }
      }
    }
  });

  grunt.registerTask('serve', ['connect', 'less:development', 'watch']);
  grunt.registerTask('bootstrap', ['less:bootstrap']);
  grunt.registerTask('autoprefixer', ['postcss']);
  grunt.registerTask('responsive_images', ['responsive_images']);
  grunt.registerTask('optimize', ['requirejs']);
};