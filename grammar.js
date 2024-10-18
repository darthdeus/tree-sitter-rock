/**
 * @file Rock is good language
 * @author Jakub Arnold <darthdeus@gmail.com>
 * @license MIT
 */

/// <reference types="tree-sitter-cli/dsl" />
// @ts-check

module.exports = grammar({
  name: "rock",

  rules: {
    // TODO: add the actual grammar rules
    source_file: $ => "hello"
  }
});
