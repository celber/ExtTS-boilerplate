module.exports = function(grunt) {
    grunt.loadNpmTasks('grunt-typescript');
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        typescript: {
            base: {
                src: ['www/jsapp/**/*.ts'],
                dest: '.',
                options: {
                    module: 'amd',
                    target: 'es3',
                    base_path: '.',
                    sourcemap: true,
                    fullSourceMapPath: true,
                    declaration: false,
                }
            }
        }
    });
    
    
    grunt.registerTask('default', ['typescript']);
};
