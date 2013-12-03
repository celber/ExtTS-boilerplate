module.exports = function(grunt) {
    grunt.loadNpmTasks('grunt-typescript');
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        typescript: {
            base: {
                src: ['app/*.ts','*.ts','resources/**/*.ts'],
                dest: '.',
                options: {
                    module: 'commonjs',
                    target: 'es3',
                    base_path: '.',
                    sourcemap: false,
                    fullSourceMapPath: false,
                    declaration: false
                }
            }
        }
    });
    
    
    grunt.registerTask('default', ['typescript']);
};
