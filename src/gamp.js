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
(function (global, alias) {
    'use strict';

    var define;

    if (global.define && global.define.amd) {
        define = window.define;
    } else if (global.module) {
        define = function (exports) {
            module.exports = exports();
        };
    } else {
        define = function (exports) {
            global[alias] = exports();
        };
    }

    define(function () {
        /**
         * Computes the approached precision for a decimal number.
         * This precision will be then used as a correction factor to translate the value to an integer notation
         * @param {number} val
         * @returns {number}
         */
        function gamp(val) {
            var digits = String(val);
            var point = digits.indexOf('.');
            if (point < 0) {
                return 1;
            }
            return Math.pow(10, digits.length - point - 1);
        }

        /**
         * Makes the translation of a floating point number to an integer value using a precision factor
         * @param {number} val
         * @param {number} factor
         * @returns {number}
         */
        function translate(val, factor) {
            return Math.round(factor * parseFloat(val));
        }

        /**
         * Computes the addition of two decimal values
         * @param {number} a
         * @param {number} b
         * @returns {number}
         */
        gamp.add = function add(a, b) {
            var ga = gamp(a);
            var gb = gamp(b);
            var factor = ga * gb;
            return (translate(a, factor) + translate(b, factor)) / factor;
        };

        /**
         * Computes the subtraction of two decimal values
         * @param {number} a
         * @param {number} b
         * @returns {number}
         */
        gamp.sub = function sub(a, b) {
            var ga = gamp(a);
            var gb = gamp(b);
            var factor = ga * gb;
            return (translate(a, factor) - translate(b, factor)) / factor;
        };

        /**
         * Computes the multiplication of two decimal values
         * @param {number} a
         * @param {number} b
         * @returns {number}
         */
        gamp.mul = function mul(a, b) {
            var ga = gamp(a);
            var gb = gamp(b);
            return (translate(a, ga) * translate(b, gb)) / (ga * gb);
        };

        /**
         * Computes the division of two decimal values
         * @param {number} a
         * @param {number} b
         * @returns {number}
         */
        gamp.div = function div(a, b) {
            var ga = gamp(a);
            var gb = gamp(b);
            var factor = ga * gb;
            return translate(a, factor) / translate(b, factor);
        };

        return gamp;
    });
})(this, 'gamp');
