var app = angular.module('reportingApp', []);

app.controller('ScreenshotReportController', function ($scope) {
    $scope.searchSettings = {
        description: '',
        passed: true,
        failed: true,
        pending: true,
        withLog: true,
    };

    $scope.inlineScreenshots = false;
    this.showSmartStackTraceHighlight = true;

    this.chooseAllTypes = function () {
        $scope.searchSettings.passed = true;
        $scope.searchSettings.failed = true;
        $scope.searchSettings.pending = true;
        $scope.searchSettings.withLog = true;
    };

    this.getParent = function (str) {
        var arr = str.split('|');
        str = "";
        for (var i = arr.length - 2; i > 0; i--) {
            str += arr[i] + " > ";
        }
        return str.slice(0, -3);
    };

    this.specLevel = function (str) {
        var arr = str.split('|');
        str = "";
        if (arr.length < 3) {
            return true;
        }
        return false;
    };

    this.getSpec = function (str) {
        return getSpec(str);
    };


    this.getShortDescription = function (str) {
        return str.split('|')[0];
    };


    this.nToBr = function (str) {
        return str.replace(/(?:\r\n|\r|\n)/g, '<br />');
    };


    this.convertTimestamp = function (timestamp) {
        var d = new Date(timestamp),
            yyyy = d.getFullYear(),
            mm = ('0' + (d.getMonth() + 1)).slice(-2),
            dd = ('0' + d.getDate()).slice(-2),
            hh = d.getHours(),
            h = hh,
            min = ('0' + d.getMinutes()).slice(-2),
            ampm = 'AM',
            time;

        if (hh > 12) {
            h = hh - 12;
            ampm = 'PM';
        } else if (hh === 12) {
            h = 12;
            ampm = 'PM';
        } else if (hh == 0) {
            h = 12;
        }

        // ie: 2013-02-18, 8:35 AM
        time = yyyy + '-' + mm + '-' + dd + ', ' + h + ':' + min + ' ' + ampm;

        return time;
    };


    this.round = function (number, roundVal) {
        return (parseFloat(number)/1000).toFixed(roundVal);
    };


    this.passCount = function () {
        var passCount = 0;
        for (var i in this.results) {
            var result = this.results[i];
            if (result.passed) {passCount++};
        }
        return passCount;
    };


    this.pendingCount = function () {
        var pendingCount = 0;
        for (var i in this.results) {
            var result = this.results[i];
            if (result.pending) {pendingCount++};
        }
        return pendingCount;
    };


    this.failCount = function () {
        var failCount = 0;
        for (var i in this.results) {
            var result = this.results[i];
            if (!result.passed && !result.pending) {failCount++}
        }
        return failCount;
    };

    this.applySmartHighlight = function (line) {
        if (this.showSmartStackTraceHighlight) {
            if (line.indexOf('node_modules') > -1) {
                return 'greyout';
            }
            if (line.indexOf('  at ') === -1) {
                return '';
            }

            return 'highlight';
        }
        return true;
    };


    var results =[
    {
        "description": "should add a todo|angularjs homepage todo list",
        "passed": true,
        "pending": false,
        "os": "Windows NT",
        "sessionId": "c60c89b86b0616b98a8133d8366eddbc",
        "browser": {
            "name": "chrome",
            "version": "63.0.3239.132"
        },
        "message": "Passed.",
        "trace": "",
        "browserLogs": [],
        "screenShotFile": "00480093-008b-0003-0032-004b00b100b1.png",
        "timestamp": 1519128846205,
        "duration": 8256
    },
    {
        "description": "should have Codestellar in title|Codestellar website",
        "passed": true,
        "pending": false,
        "os": "Windows NT",
        "sessionId": "c60c89b86b0616b98a8133d8366eddbc",
        "browser": {
            "name": "chrome",
            "version": "63.0.3239.132"
        },
        "message": "Passed.",
        "trace": "",
        "browserLogs": [
            {
                "level": "WARNING",
                "message": "http://codestellar.net/ - The SSL certificate used to load resources from https://www.payumoney.com will be distrusted in M66. Once distrusted, users will be prevented from loading these resources. See https://g.co/chrome/symantecpkicerts for more information.",
                "timestamp": 1519128859762,
                "type": ""
            },
            {
                "level": "SEVERE",
                "message": "http://codestellar.net/ 158:4 Uncaught ReferenceError: odometer is not defined",
                "timestamp": 1519128861041,
                "type": ""
            }
        ],
        "screenShotFile": "0040007e-00ba-008c-00d9-00cb007b0070.png",
        "timestamp": 1519128855487,
        "duration": 6272
    },
    {
        "description": "should add a todo|angularjs homepage todo list",
        "passed": true,
        "pending": false,
        "os": "Windows NT",
        "sessionId": "412cce9ba983f368c99cc4bd66cd6832",
        "browser": {
            "name": "chrome",
            "version": "63.0.3239.132"
        },
        "message": "Passed.",
        "trace": "",
        "browserLogs": [],
        "screenShotFile": "00c60019-00ad-00a7-0020-00c700e500a8.png",
        "timestamp": 1519128939070,
        "duration": 9678
    },
    {
        "description": "should have Codestellar in title|Codestellar website",
        "passed": true,
        "pending": false,
        "os": "Windows NT",
        "sessionId": "412cce9ba983f368c99cc4bd66cd6832",
        "browser": {
            "name": "chrome",
            "version": "63.0.3239.132"
        },
        "message": "Passed.",
        "trace": "",
        "browserLogs": [
            {
                "level": "WARNING",
                "message": "http://codestellar.net/ - The SSL certificate used to load resources from https://www.payumoney.com will be distrusted in M66. Once distrusted, users will be prevented from loading these resources. See https://g.co/chrome/symantecpkicerts for more information.",
                "timestamp": 1519128953824,
                "type": ""
            },
            {
                "level": "SEVERE",
                "message": "http://codestellar.net/ 158:4 Uncaught ReferenceError: odometer is not defined",
                "timestamp": 1519128955110,
                "type": ""
            }
        ],
        "screenShotFile": "00850012-003d-00be-00cf-000e00ba00a2.png",
        "timestamp": 1519128949301,
        "duration": 6199
    }
];

    this.sortSpecs = function () {
        this.results = results.sort(function sortFunction(a, b) {
    var firstTimestamp = a.timestamp;
    var secondTimestamp = b.timestamp;

    if (firstTimestamp < secondTimestamp) return -1;else return 1;
});
    };

    this.sortSpecs();
});

app.filter('bySearchSettings', function () {
    return function (items, searchSettings) {
        var filtered = [];
        var prevItem = null;

        for (var i = 0; i < items.length; i++) {
            var item = items[i];
            item.displaySpecName = false;

            countLogMessages(item);

            var hasLog = searchSettings.withLog && item.browserLogs && item.browserLogs.length > 0;
            if (searchSettings.description === '' ||
                (item.description && item.description.toLowerCase().indexOf(searchSettings.description.toLowerCase()) > -1)) {

                if (searchSettings.passed && item.passed || hasLog) {
                    checkIfShouldDisplaySpecName(prevItem, item);
                    filtered.push(item);
                    var prevItem = item;
                } else if (searchSettings.failed && !item.passed && !item.pending || hasLog) {
                    checkIfShouldDisplaySpecName(prevItem, item);
                    filtered.push(item);
                    var prevItem = item;
                } else if (searchSettings.pending && item.pending || hasLog) {
                    checkIfShouldDisplaySpecName(prevItem, item);
                    filtered.push(item);
                    var prevItem = item;
                }

            }
        }

        return filtered;
    };
});

var checkIfShouldDisplaySpecName = function (prevItem, item) {
    if (!prevItem) {
        item.displaySpecName = true;
        return;
    }

    if (getSpec(item.description) != getSpec(prevItem.description)) {
        item.displaySpecName = true;
        return;
    }
};

var getSpec = function (str) {
    var describes = str.split('|');
    return describes[describes.length-1];
};

var countLogMessages = function (item) {
    if ((!item.logWarnings || !item.logErrors) && item.browserLogs && item.browserLogs.length > 0) {
        item.logWarnings = 0;
        item.logErrors = 0;
        for (var logNumber = 0; logNumber < item.browserLogs.length; logNumber++) {
            var logEntry = item.browserLogs[logNumber];
            if (logEntry.level === 'SEVERE') {
                item.logErrors++;
            }
            if (logEntry.level === 'WARNING') {
                item.logWarnings++;
            }
        }
    }
};