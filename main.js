/**
 * Created by admin on 06.06.2015.
 */

var data = { "name": "Commits Data", "commits": [{"commit":"808258b785829c0eaed965c9022da636f7630e00","author":"NickStepanenko <massaalonso@yandex.ru>","date":"Fri Jun 5 18:03:27 2015 +0800","comment":"������ � ��������� � JavaScript","content":[]},{"commit":"ddf1fdf4f5660fbff147a49ccfd8eb5edd49f548","author":"NickStepanenko <massaalonso@yandex.ru>","date":"Fri Jun 5 18:08:01 2015 +0800","comment":"��� ������ ��������� ��� �������: ������ ����� ��������� �� ���� ��� ��������� � ���������� �� ������������, � ������ ������ �� ������� ��������� ������� ������, � ����� ������. ��� ������� ��������� � ��������� ������. ��� �� �� �������� ���������� ����� � ������� ����� ������� � exec.js","content":[{"filename":"bin/exec.js","status":"Modified","changes":[{"changesStartLine":"0","changesCode":"+var applyContent = require(\"applyContent\");\n+var minusContent = require(\"minusContent\");\n+\n+console.log(applyContent(1, 5));\n+console.log(minusContent(16, 5, 8));\n\n"}]},{"filename":"lib/applyContent.js","status":"Modified","changes":[{"changesStartLine":"0","changesCode":"+module.exports = function (a, b) {\n+    return a*b;\n+};\n\n"}]},{"filename":"lib/minusContent.js","status":"Modified","changes":[{"changesStartLine":"0","changesCode":"+module.exports = function (a, b, c) {\n+    return (a - b - c);\n+};\n\n"}]}]},{"commit":"f387e44a0f8a36bf27afe74052380a6046997917","author":"NickStepanenko <massaalonso@yandex.ru>","date":"Fri Jun 5 18:10:30 2015 +0800","comment":"��� ������� ��������� ���� ������ ������� ��� �� ������ ��� ������ ������� applyContent � minusContent. � ��� �� �����������, ���� �� ������ ������ ����������� ������ � ����� �������. ������� require ���������� �������� � �������� ��������� ������ ���� �� �������� ����� �� ����������. ���������� ���������� � ������� ���������","content":[{"filename":"bin/exec.js","status":"Modified","changes":[{"changesStartLine":"1","changesCode":"-var applyContent = require(\"applyContent\");\n-var minusContent = require(\"minusContent\");\n+var applyContent = require(\"../lib/applyContent\");\n+var minusContent = require(\"../lib/minusContent\");\n \n console.log(applyContent(1, 5));\n console.log(minusContent(16, 5, 8));\n\n"}]}]},{"commit":"9c6b6a7cc41e1cf180ae85270eea683640766113","author":"NickStepanenko <massaalonso@yandex.ru>","date":"Fri Jun 5 18:12:57 2015 +0800","comment":"������ ��������� �� ������ � ����� applyContent, ��� ��� ����� �����������. ������ ��� �������� �������, �������� minusContent, �� ���������� ������ ������ ��������. ��������� ����� ���� � exec.js � ������� � ������� ��������� �������� ��� �����.","content":[{"filename":"bin/exec.js","status":"Modified","changes":[{"changesStartLine":"1","changesCode":"-var applyContent = require(\"../lib/applyContent\");\n+var addContent = require(\"../lib/addContent\");\n var minusContent = require(\"../lib/minusContent\");\n \n-console.log(applyContent(1, 5));\n+console.log(addContent(7, 2 ,4));\n console.log(minusContent(16, 5, 8));\n\n"}]},{"filename":"lib/addContent.js","status":"Created","changes":[{"changesStartLine":"0","changesCode":"+module.exports = function (a, b, c) {\n+    return (a + b + c);\n+};\n\n"}]},{"filename":"lib/applyContent.js","status":"Deleted","changes":[{"changesStartLine":"1","changesCode":"-module.exports = function (a, b) {\n-    return a*b;\n-};\n\n"}]}]},{"commit":"eb7b11a994367aec1921538a440e7745032e3da4","author":"NickStepanenko <massaalonso@yandex.ru>","date":"Sat Jun 6 11:33:06 2015 +0800","comment":"������ ����� �������, � �������� ��������� ������� �� ����� ���������� � ������ �������. ��������� ������� ����� applyFunction, ������� ��������� �� ���� ��� ���������, � ����� �������� ������ �������� �� �������. ��� �� �����, ������� � JavaScript ������ ������ ����. ��� ������ ����������� ��� � �������.","content":[{"filename":"bin/exec.js","status":"Modified","changes":[{"changesStartLine":"1","changesCode":" var addContent = require(\"../lib/addContent\");\n var minusContent = require(\"../lib/minusContent\");\n+var applyFunction = require(\"../lib/applyFunction\");\n \n console.log(addContent(7, 2 ,4));\n-console.log(minusContent(16, 5, 8));\n+console.log(minusContent(16, 5, 8));\n+\n+console.log(applyFunction(5, function (a) {\n+    return a*a;\n+}));\n\n"}]},{"filename":"lib/applyFunction.js","status":"Created","changes":[{"changesStartLine":"0","changesCode":"+module.exports = function (a, func) {\n+    return func(a);\n+};\n\n"}]}]}] };

/*var data = { "name": "Commits Data", "commits": [{"commit":"808258b785829c0eaed965c9022da636f7630e00","author":"NickStepanenko <massaalonso@yandex.ru>","date":"Fri Jun 5 18:03:27 2015 +0800","comment":"������ � ��������� � JavaScript","content":[]},{"commit":"ddf1fdf4f5660fbff147a49ccfd8eb5edd49f548","author":"NickStepanenko <massaalonso@yandex.ru>","date":"Fri Jun 5 18:08:01 2015 +0800","comment":"��� ������ ��������� ��� �������: ������ ����� ��������� �� ���� ��� ��������� � ���������� �� ������������, � ������ ������ �� ������� ��������� ������� ������, � ����� ������. ��� ������� ��������� � ��������� ������. ��� �� �� �������� ���������� ����� � ������� ����� ������� � exec.js","content":[{"filename":"bin/exec.js","status":"Modified","changes":[{"changesStartLine":"0","changesCode":"+var applyContent = require(\"applyContent\");\n+var minusContent = require(\"minusContent\");\n+\n+console.log(applyContent(1, 5));\n+console.log(minusContent(16, 5, 8));\n\n"}]},{"filename":"lib/applyContent.js","status":"Modified","changes":[{"changesStartLine":"0","changesCode":"+module.exports = function (a, b) {\n+    return a*b;\n+};\n\n"}]},{"filename":"lib/minusContent.js","status":"Modified","changes":[{"changesStartLine":"0","changesCode":"+module.exports = function (a, b, c) {\n+    return (a - b - c);\n+};\n\n"}]}]},{"commit":"f387e44a0f8a36bf27afe74052380a6046997917","author":"NickStepanenko <massaalonso@yandex.ru>","date":"Fri Jun 5 18:10:30 2015 +0800","comment":"��� ������� ��������� ���� ������ ������� ��� �� ������ ��� ������ ������� applyContent � minusContent. � ��� �� �����������, ���� �� ������ ������ ����������� ������ � ����� �������. ������� require ���������� �������� � �������� ��������� ������ ���� �� �������� ����� �� ����������. ���������� ���������� � ������� ���������","content":[{"filename":"bin/exec.js","status":"Modified","changes":[{"changesStartLine":"1","changesCode":"-var applyContent = require(\"applyContent\");\n-var minusContent = require(\"minusContent\");\n+var applyContent = require(\"../lib/applyContent\");\n+var minusContent = require(\"../lib/minusContent\");\n \n console.log(applyContent(1, 5));\n console.log(minusContent(16, 5, 8));\n\n"}]}]}] };*/

function getFiles() {
    var commits = [];
    var filesAndCodes = [];
    var file = {};

    for(i=1; i<data.commits.length; i++) {
        for(j=0; j<data.commits[i].content.length; j++) {
            file.filename = data.commits[i].content[j].filename;
            file.status   = data.commits[i].content[j].status;
            file.changes  = data.commits[i].content[j].changes;

            filesAndCodes[filesAndCodes.length] = file;
            file = {};
        }
        commits[commits.length] = filesAndCodes;
        filesAndCodes = [];
    }
    return commits;
}

function modifyData(filesData) {
    var count_i = 0;
    var commitStages = [];
    var currentStage = [];

    while(count_i < filesData.length) {
        if(count_i == 0) {
            for(j=0; j<filesData[count_i].length; j++) {
                filesData[count_i][j].code = getCode(filesData[count_i][j].changes);
                currentStage[currentStage.length] = filesData[count_i][j];
            }
            commitStages[commitStages.length] = currentStage;
            currentStage = [];
        } else {
            currentStage = commitStages[count_i-1];

            for(m=0; m<currentStage.length; m++) {
                currentStage[m].status = "Default";
            }

            for(l=0; l<filesData[count_i].length; l++) {

                if(filesData[count_i][l].status = "Modified") {
                    for(k=0; k<currentStage.length; k++) {
                        if(currentStage[k].filename == filesData[count_i][l].filename) {
                            currentStage[k].code =
                                applyPatch(currentStage[k].code, filesData[count_i][l].changes);
                            currentStage[k].status = "Modified";
                        }
                    }
                }
                else

                if(filesData[count_i][l].status = "Created") {
                    currentStage[currentStage.length] = filesData[count_i][l];
                }
                else

                if(filesData[count_i][l].status = "Deleted") {
                    for(o=0; o<currentStage.length; o++) {
                        if(currentStage[o].filename == filesData[count_i][l].filename) {
                            currentStage[i].status = "Deleted";
                        }
                    }
                }

            }

            commitStages[commitStages.length] = currentStage;
            currentStage = [];
        }
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
            part1[part1.length] = code[count_j];
            count_j++;
        }
        codeArray[codeArray.length] = part1;

        while(count_k < code.length) {
            part2[part2.length] = code[k];
            count_k++;
        }
        codeArray[codeArray.length] = patches[i].changesCode.split('\n');

        codeArray[codeArray.length] = part2;

        for(j=0; j<codeArray.length; j++) {
            for(k=0; k<codeArray[j].length; k++) {
                finalCode += codeArray[j][k] + "\n";
            }
        }
    }

    return finalCode;
}

//var filesData = getFiles(data);
console.log(modifyData(getFiles(data)));