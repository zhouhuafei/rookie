/**
 * Created by Administrator on 2016/2/14.
 */
module.exports = function(grunt) {

        // Project configuration.
        grunt.initConfig({
                //pkg: grunt.file.readJSON('package.json'),//这句话好像加不加都无所谓
                concat: {
                        options: {
                                separator: '\n'
                        },
                        dist: {
                                src: ['../gruntJs/js.js','../gruntJs/jss.js'],
                                dest: '../gruntJs/all.js'
                        }
                }
        });

        // 加载包含 "concat" 任务的插件。
        grunt.loadNpmTasks('grunt-contrib-concat');

        // 默认被执行的任务列表。
        grunt.registerTask('default', ['concat']);

};
