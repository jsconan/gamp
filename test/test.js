/**
 * MIT License
 *
 * Copyright (c) 2016 Jean-Sébastien CONAN
 *
 * https://github.com/jsconan/gamp
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 */
define(['QUnit', 'gamp'], function (QUnit, gamp) {
    'use strict';

    return {
        run: function run() {

            QUnit.module('gamp');

            QUnit.test('module', function (assert) {
                assert.expect(5);
                assert.equal(typeof gamp, 'function', 'The gamp module exposes a function');
                assert.equal(typeof gamp.add, 'function', 'The gamp API exposes the add() function');
                assert.equal(typeof gamp.sub, 'function', 'The gamp API exposes the sub() function');
                assert.equal(typeof gamp.mul, 'function', 'The gamp API exposes the mul() function');
                assert.equal(typeof gamp.div, 'function', 'The gamp API exposes the div() function');
            });

            QUnit.test('gamp', function (assert) {
                var checks = [
                    {number: 0.1, precision: 10},
                    {number: 0.123, precision: 1000},
                    {number: 1.333339, precision: 1000000},
                    {number: 874671.85302617, precision: 100000000}
                ];

                assert.expect(checks.length);
                checks.forEach(function (check) {
                    assert.equal(gamp(check.number), check.precision, 'The approached decimal precision for ' + check.number + ' is ' + check.precision);
                });
            });

            QUnit.test('add', function (assert) {
                var checks = [
                    {left: 0.1, right: 0.2, result: 0.3},
                    {left: 4.52, right: 4.49, result: 9.01},
                    {left: 76.65, right: 38.45, result: 115.1},
                    {left: -5.63, right: -67.22, result: -72.85}
                ];

                assert.expect(checks.length);
                checks.forEach(function (check) {
                    assert.equal(gamp.add(check.left, check.right), check.result, 'The result of ' + check.left + ' + ' + check.right + ' is ' + check.result);
                });
            });

            QUnit.test('sub', function (assert) {
                var checks = [
                    {left: 0.1, right: 0.1, result: 0},
                    {left: 4.52, right: 4.49, result: 0.03},
                    {left: 10.21, right: 10.2, result: 0.01},
                    {left: 1, right: 1.13, result: -0.13}
                ];

                assert.expect(checks.length);
                checks.forEach(function (check) {
                    assert.equal(gamp.sub(check.left, check.right), check.result, 'The result of ' + check.left + ' - ' + check.right + ' is ' + check.result);
                });
            });

            QUnit.test('mul', function (assert) {
                var checks = [
                    {left: 0.1, right: 0.2, result: 0.02},
                    {left: 1.11, right: 5, result: 5.55},
                    {left: 10, right: 2332226616, result: 23322266160},
                    {left: 123456789.98765433, right: 987654321.1234568, result: 121932632103337920}
                ];

                assert.expect(checks.length);
                checks.forEach(function (check) {
                    assert.equal(gamp.mul(check.left, check.right), check.result, 'The result of ' + check.left + ' x ' + check.right + ' is ' + check.result);
                });
            });

            QUnit.test('div', function (assert) {
                var checks = [
                    {left: 0.1, right: 0.2, result: 0.5},
                    {left: 1.11, right: 5, result: 0.222},
                    {left: 123.456, right: 3.14, result: 39.3171974522293},
                    {left: 10, right: 3, result: 3.33333333333333333},
                ];

                assert.expect(checks.length);
                checks.forEach(function (check) {
                    assert.equal(gamp.div(check.left, check.right), check.result, 'The result of ' + check.left + ' / ' + check.right + ' is ' + check.result);
                });
            });
        }

    };
});