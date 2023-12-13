declare var __karma__: any;
declare var require: any;

import 'zone.js/testing';
import { getTestBed } from '@angular/core/testing';
import { BrowserDynamicTestingModule, platformBrowserDynamicTesting } from '@angular/platform-browser-dynamic/testing';

__karma__.loaded = function () {}; // ensures that the Angular testing environment is set up before Karma starts executing tests.

getTestBed().initTestEnvironment(BrowserDynamicTestingModule, platformBrowserDynamicTesting());

// Import all spec files and start Karma
const context = require.context('./', true, /\.spec\.ts$/); //in the current directory and its subdirectories. This means that all your test files are included, making it easy to add or remove tests without manual configuration.
context.keys().map(context);
__karma__.start()