/**
 * Created by Administrator on 2016/2/14.
 */
module.exports = function(grunt) {

        // Project configuration.
        grunt.initConfig({
                //pkg: grunt.file.readJSON('package.json'),//��仰����Ӳ��Ӷ�����ν
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

        // ���ذ��� "concat" ����Ĳ����
        grunt.loadNpmTasks('grunt-contrib-concat');

        // Ĭ�ϱ�ִ�е������б�
        grunt.registerTask('default', ['concat']);

};
