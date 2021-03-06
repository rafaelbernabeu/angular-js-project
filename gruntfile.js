var _ = require('lodash');
var serveStatic = require('serve-static');
module.exports = function (grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    concat: {
      options: {
        separator: '\n'
      },
      js: {
        src: ['app/**/*module.js', 'app/**/*.js'],
        dest: 'tmp/bundle.js'
      },
      css: {
        src: ['app/**/*.css'],
        dest: 'tmp/bundle.css'
      },
      'bootstrap-css': {
        src: ['node_modules/bootstrap/dist/css/*.min.css'],
        dest: 'build/bootstrap.min.css'
      },
      'bootstrap-js': {
        src: ['node_modules/bootstrap/dist/bootstrap.bundle.min.js'],
        dest: 'build/bootstrap.min.js'
      }
    },
    bower_concat: {
      'vendor-js': {
        dest: {
          'js': 'tmp/vendor.js',
        },
        exclude: [
        ],
        dependencies: {
        },
        mainFiles: {
        },
        bowerOptions: {
          relative: false
        }
      },
      'vendor-css': {
        dest: {
          'css': 'tmp/vendor.css'
        },
        exclude: [
        ],
        dependencies: {
        },
        callback: function (mainFiles, component) {
          return _.map(mainFiles, function (filepath) {
            // Use minified files if available
            var min = filepath.replace(/\.js$/, '.min.js');
            return grunt.file.exists(min) ? min : filepath;
          }
          );
        },
        mainFiles: {
        },
        bowerOptions: {
          relative: false
        }
      }
    },
    uglify: {
      options: {
        banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n',
        mangle: false
      },
      js: {
        src: 'tmp/bundle.js',
        dest: 'build/bundle.min.js'
      },
      vendor: {
        src: 'tmp/vendor.js',
        dest: 'build/vendor.min.js'
      },
      css: {
        src: 'tmp/bundle.css',
        dest: 'build/bundle.min.css'
      },
      'vendor-css': {
        src: 'tmp/vendor.css',
        dest: 'build/vendor.min.css'
      }
    },
    watch: {
      options: { livereload: 35729 },
      htmls: {
        files: ['app/**/*.html'],
        tasks: ['copy']
      },
      styles: {
        files: ['app/**/*.css'],
        tasks: ['clean:css', 'concat:css', 'uglify:css']
      },
      javascripts: {
        files: ['app/**/*.js'],
        tasks: ['clean:js', 'concat:js', 'uglify:js']
      }
    },
    open: {
      server: {
        url: 'http://localhost:<%= connect.options.port %>/'
      }
    },
    connect: {
      options: {
        port: 9002,
        hostname: '*',
      },
      livereload: {
        options: {
          middleware: function (connect, options) {
            return [require('connect-livereload')(), serveStatic('build/app'), serveStatic('build')]
          }
        }
      },
      'server-proxy': {
        proxies: [
          {
            context: '/rest',
            host: 'localhost',
            port: 8080,
            https: false,
            changeOrigin: false,
            xforward: false
          }
        ]
      },
    },
    copy: {
      main: {
        expand: true,
        src: 'app/**/*.html',
        dest: 'build/'
      }
    },
    clean: {
      build: ['build/'],
      tmp: ['tmp'],
      css: ['build/bundle.min.css'],
      js: ['build/bundle.min.js']
    }
  });

  require('load-grunt-tasks')(grunt);

  grunt.registerTask('default', ['clean', 'copy', 'concat', 'bower_concat', 'uglify', 'clean:tmp', 'configureProxies:server-proxy', 'connect:livereload', 'open', 'watch']);
};