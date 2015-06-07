/**
 * Created by admin on 06.06.2015.
 */

var data = { "name": "Commits Data", "commits": [{"commit":"808258b785829c0eaed965c9022da636f7630e00","author":"NickStepanenko <massaalonso@yandex.ru>","date":"Fri Jun 5 18:03:27 2015 +0800","comment":"������ � ��������� � JavaScript","content":[]},{"commit":"ddf1fdf4f5660fbff147a49ccfd8eb5edd49f548","author":"NickStepanenko <massaalonso@yandex.ru>","date":"Fri Jun 5 18:08:01 2015 +0800","comment":"��� ������ ��������� ��� �������: ������ ����� ��������� �� ���� ��� ��������� � ���������� �� ������������, � ������ ������ �� ������� ��������� ������� ������, � ����� ������. ��� ������� ��������� � ��������� ������. ��� �� �� �������� ���������� ����� � ������� ����� ������� � exec.js","content":[{"filename":"bin/exec.js","status":"Modified","changes":[{"changesStartLine":"0","changesCode":"+var applyContent = require(\"applyContent\");\n+var minusContent = require(\"minusContent\");\n+\n+console.log(applyContent(1, 5));\n+console.log(minusContent(16, 5, 8));\n\n"}]},{"filename":"lib/applyContent.js","status":"Modified","changes":[{"changesStartLine":"0","changesCode":"+module.exports = function (a, b) {\n+    return a*b;\n+};\n\n"}]},{"filename":"lib/minusContent.js","status":"Modified","changes":[{"changesStartLine":"0","changesCode":"+module.exports = function (a, b, c) {\n+    return (a - b - c);\n+};\n\n"}]}]},{"commit":"f387e44a0f8a36bf27afe74052380a6046997917","author":"NickStepanenko <massaalonso@yandex.ru>","date":"Fri Jun 5 18:10:30 2015 +0800","comment":"��� ������� ��������� ���� ������ ������� ��� �� ������ ��� ������ ������� applyContent � minusContent. � ��� �� �����������, ���� �� ������ ������ ����������� ������ � ����� �������. ������� require ���������� �������� � �������� ��������� ������ ���� �� �������� ����� �� ����������. ���������� ���������� � ������� ���������","content":[{"filename":"bin/exec.js","status":"Modified","changes":[{"changesStartLine":"1","changesCode":"-var applyContent = require(\"applyContent\");\n-var minusContent = require(\"minusContent\");\n+var applyContent = require(\"../lib/applyContent\");\n+var minusContent = require(\"../lib/minusContent\");\n \n console.log(applyContent(1, 5));\n console.log(minusContent(16, 5, 8));\n\n"}]}]},{"commit":"9c6b6a7cc41e1cf180ae85270eea683640766113","author":"NickStepanenko <massaalonso@yandex.ru>","date":"Fri Jun 5 18:12:57 2015 +0800","comment":"������ ��������� �� ������ � ����� applyContent, ��� ��� ����� �����������. ������ ��� �������� �������, �������� minusContent, �� ���������� ������ ������ ��������. ��������� ����� ���� � exec.js � ������� � ������� ��������� �������� ��� �����.","content":[{"filename":"bin/exec.js","status":"Modified","changes":[{"changesStartLine":"1","changesCode":"-var applyContent = require(\"../lib/applyContent\");\n+var addContent = require(\"../lib/addContent\");\n var minusContent = require(\"../lib/minusContent\");\n \n-console.log(applyContent(1, 5));\n+console.log(addContent(7, 2 ,4));\n console.log(minusContent(16, 5, 8));\n\n"}]},{"filename":"lib/addContent.js","status":"Created","changes":[{"changesStartLine":"0","changesCode":"+module.exports = function (a, b, c) {\n+    return (a + b + c);\n+};\n\n"}]},{"filename":"lib/applyContent.js","status":"Deleted","changes":[{"changesStartLine":"1","changesCode":"-module.exports = function (a, b) {\n-    return a*b;\n-};\n\n"}]}]},{"commit":"eb7b11a994367aec1921538a440e7745032e3da4","author":"NickStepanenko <massaalonso@yandex.ru>","date":"Sat Jun 6 11:33:06 2015 +0800","comment":"������ ����� �������, � �������� ��������� ������� �� ����� ���������� � ������ �������. ��������� ������� ����� applyFunction, ������� ��������� �� ���� ��� ���������, � ����� �������� ������ �������� �� �������. ��� �� �����, ������� � JavaScript ������ ������ ����. ��� ������ ����������� ��� � �������.","content":[{"filename":"bin/exec.js","status":"Modified","changes":[{"changesStartLine":"1","changesCode":" var addContent = require(\"../lib/addContent\");\n var minusContent = require(\"../lib/minusContent\");\n+var applyFunction = require(\"../lib/applyFunction\");\n \n console.log(addContent(7, 2 ,4));\n-console.log(minusContent(16, 5, 8));\n+console.log(minusContent(16, 5, 8));\n+\n+console.log(applyFunction(5, function (a) {\n+    return a*a;\n+}));\n\n"}]},{"filename":"lib/applyFunction.js","status":"Created","changes":[{"changesStartLine":"0","changesCode":"+module.exports = function (a, func) {\n+    return func(a);\n+};\n\n"}]}]}] };

var files = getFiles(data);
var filesData = modifyData(files);
console.log("================ This is what you get:");
console.log(filesData);

function getFiles() {
    var filesData = data.commits;
    var commits = [];
    var filesAndCodes = [];
    var file = {};

    for(i=1; i<filesData.length; i++) {
        for(j=0; j<filesData[i].content.length; j++) {
            file.filename = filesData[i].content[j].filename;
            file.status   = filesData[i].content[j].status;
            file.changes  = filesData[i].content[j].changes;

            filesAndCodes.push(file);
            file = {};
        }
        commits.push(filesAndCodes);
        filesAndCodes = [];
    }
    return commits;
}

function unmarkLines(code) {
    var lines = code.split('\n');
    newCode = "";

    for(i=0; i<lines.length; i++) {
        lines[i] = " " + lines[i].slice(1);
        newCode += lines[i] + "\n";
    }

    return newCode;
}

function modifyData(data) {
    var filesData = data;
    var currentStage = [];
    var commitStages = [];
    var count_i = 0;

    while(count_i < filesData.length) {
        if(count_i == 0) {
            var j = 0;
            for(j=0; j<filesData[count_i].length; j++) {
                filesData[count_i][j].code = getCode(filesData[count_i][j].changes);
                filesData[count_i][j].code = unmarkLines(filesData[count_i][j].code);
                currentStage.push(filesData[count_i][j]);
            }
            j=0;

            commitStages.push(currentStage);
            currentStage = [];
        }
        else {
            currentStage = commitStages[count_i-1];

            var m = 0;
            for(m=0; m<currentStage.length; m++) {
                if(currentStage[m].status != "Deleted") {
                    currentStage[m].status = "Default";
                    currentStage[m].code = unmarkLines(currentStage[m].code);
                }
            }
            m = 0;

            var l = 0;
            for(l=0; l<filesData[count_i].length; l++) {
                if(filesData[count_i][l].status == "Modified") {
                    var k = 0;
                    for(k=0; k<currentStage.length; k++) {
                        if(currentStage[k].filename == filesData[count_i][l].filename) {
                            currentStage[k].code =
                                applyPatch(currentStage[k].code, filesData[count_i][l].changes);
                            currentStage[k].status = "Modified";
                        }
                    }
                    k = 0;
                }

                else
                if(filesData[count_i][l].status == "Created") {
                    filesData[count_i][l].code = getCode(filesData[count_i][l].changes);
                    currentStage.push(filesData[count_i][l]);
                }

                else
                if(filesData[count_i][l].status == "Deleted") {
                    var p = 0;
                    for(p=0; p<currentStage.length; p++) {
                        if(currentStage[p].filename == filesData[count_i][l].filename) {
                            currentStage[p].status = "Deleted";
                        }
                    }
                    p = 0;
                }
            }
            l = 0;
            commitStages.push(currentStage);
        }
        currentStage = [];
        count_i++;
    }

    return commitStages;
}

function getCode(changes) {
    var code = "";
    code += changes[0].changesCode;
    return code;
}

function applyPatch(code, patches) {
    var finalCode = "";
    var codeArray = [];
    code = code.split('\n');

    for(i=0; i<patches.length; i++) {
        var part1 = [];
        var part2 = [];
        var count_j = 0;
        var count_k = (patches[i].changesCode.split('\n')).length;

        while(count_j < patches[i].changesStartLine-1) {
            part1.push(code[count_j]);
            count_j++;
        }

        codeArray.push(part1);

        while(count_k < code.length) {
            part1.push(code[k]);
            count_k++;
        }

        codeArray.push(patches[i].changesCode.split('\n'));
        codeArray.push(part2);

        for(j=0; j<codeArray.length; j++) {
            for(k=0; k<codeArray[j].length; k++) {
                finalCode += codeArray[j][k] + "\n";
            }
        }
    }

    return finalCode;
}