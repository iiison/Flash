var rules = {
  "extends" : "stylelint-config-standard",
  "plugins": [],
  rules : {
      ////////////
     // Colors //
    ////////////
    "color-hex-case"       : "upper",
    "color-hex-length"     : "long",
    "color-named"          : "never",
    "color-no-invalid-hex" : true,

     // Fonts
    "font-weight-notation" : "numeric",

      ///////////////
     // Functions //
    ///////////////
    "function-comma-newline-after"        : "never-multi-line",
    "function-comma-newline-before"       : "never-multi-line",
    "function-comma-space-after"          : "always",
    "function-comma-space-before"         : "never",
    "function-max-empty-lines"            : 0,
    "function-name-case"                  : "lower",
    "function-parentheses-newline-inside" : "never-multi-line",
    "function-parentheses-space-inside"   : "always",
    "function-url-no-scheme-relative"     : true,
    "function-url-quotes"                 : "always",
    "function-whitespace-after"           : "always",

      ////////////
     // Number //
    ////////////
    "number-leading-zero"      : "always",
    "number-max-precision"     : 4,
    "number-no-trailing-zeros" : true,

      ////////////
     // String //
    ////////////
    "string-no-newline"   : true,
    "string-quotes"       : "double",
    "length-zero-no-unit" : true,

    // Time
    "time-min-milliseconds" : 200,

      //////////
     // Unit //
    //////////
    "unit-blacklist"  : ["vh", "vw", "pc", "pt"],
    // "unit-whitelist"  : ["px", "em", "%", "rem"]
    "unit-case"       : "lower",
    "unit-no-unknown" : true,

      ///////////
     // Value //
    ///////////
    "value-keyword-case"              : "lower",
    "value-no-vendor-prefix"          : true,
    "value-list-comma-newline-after"  : "never-multi-line",
    "value-list-comma-newline-before" : "never-multi-line",
    "value-list-comma-space-after"    : "always",
    "value-list-comma-space-before"   : "never",

    // Shorthand Property
    "shorthand-property-no-redundant-values" : true,

      //////////////
     // Property //
    //////////////
    "property-blacklist"                : [],
    "property-case"                     : "lower",
    "property-no-unknown"               : [true, {
      ignoreProperties : ["/^lost/"]
    }],
    "property-no-vendor-prefix"         : true,
    "keyframe-declaration-no-important" : true,

      /////////////////
     // Declaration //
    /////////////////
    "declaration-bang-space-after"        : "never",
    "declaration-bang-space-before"       : "always",
    "declaration-colon-space-after"       : "always",
    "declaration-colon-space-before"      : "never",
    /*"declaration-empty-line-before"       : {
      "never",
      "except" : ["after-comment"]
    },*/

    "declaration-no-important"            : true,
    "declaration-property-unit-blacklist" : {},

      ///////////////////////
     // Declaration block //
    ///////////////////////
    "declaration-block-no-duplicate-properties"         : true,
    // "declaration-block-no-ignored-properties"           : true,
    "declaration-block-no-shorthand-property-overrides" : true,
    "declaration-block-semicolon-newline-after"         : "always-multi-line",
    "declaration-block-semicolon-newline-before"        : "never-multi-line",
    "declaration-block-semicolon-space-after"           : "always-single-line",
    "declaration-block-semicolon-space-before"          : "never",
    "declaration-block-single-line-max-declarations"    : 1,
    "declaration-block-trailing-semicolon"              : "always",
    // "declaration-block-no-redundant-longhand-properties" : true,

      ///////////
     // Block //
    ///////////
    "block-closing-brace-empty-line-before" : "never",
    "block-closing-brace-newline-after"     : "always",
    "block-closing-brace-newline-before"    : "always",
    "block-no-empty"                        : true,
    "block-opening-brace-newline-after"     : "always",
    "block-opening-brace-newline-before"    : "never-multi-line",
    "block-opening-brace-space-after"       : "always-single-line",
    "block-opening-brace-space-before"      : "always-single-line",

      //////////////
     // Selector //
    //////////////
    "selector-attribute-brackets-space-inside"       : "always",
    "selector-attribute-operator-space-after"        : "always",
    "selector-attribute-operator-space-before"       : "always",
    "selector-attribute-quotes"                      : "always",
    "selector-class-pattern"                         : /[a-z\-]+/,
    "selector-id-pattern"                            : /[a-z\-]+/,
    "selector-combinator-space-after"                : "always",
    "selector-combinator-space-before"               : "always",
    // "selector-descendant-combinator-no-non-space" : true,
    "selector-max-compound-selectors"                : 4,
    "selector-max-specificity"                       : "0,4,1",
    "selector-no-id"                                 : true,
    "selector-no-vendor-prefix"                      : true,
    "selector-pseudo-class-case"                     : "lower",
    "selector-pseudo-class-no-unknown"               : [
      true,
      {
        ignorePseudoClasses: ["/global/", "string"]
      }
    ],
    "selector-pseudo-class-parentheses-space-inside" : "always",
    "selector-pseudo-element-case"                   : "lower",
    "selector-pseudo-element-colon-notation"         : "single",
    "selector-pseudo-element-no-unknown"             : true,
    "selector-type-case"                             : "lower",
    "selector-type-no-unknown"                       : true,
    "selector-max-empty-lines"                       : 0,

      ///////////////////
     // Selector list //
    ///////////////////
    "selector-list-comma-newline-after"  : "always",
    "selector-list-comma-newline-before" : "never-multi-line",
    "selector-list-comma-space-after"    : "always-single-line",
    "selector-list-comma-space-before"   : "never",

    // Rule
    "rule-empty-line-before"            : "always",

      ///////////////////
     // Media Feature //
    ///////////////////
    "media-feature-colon-space-after"           : "always",
    "media-feature-colon-space-before"          : "never",
    "media-feature-name-case"                   : "lower",
    // "media-feature-name-no-unknown"          : true,
    "media-feature-name-no-vendor-prefix"       : true,
    // "media-feature-no-missing-punctuation"      : true,
    "media-feature-parentheses-space-inside"    : "always",
    "media-feature-range-operator-space-after"  : "always",
    "media-feature-range-operator-space-before" : "always",
    "media-query-list-comma-newline-after"      : "always",
    "media-query-list-comma-newline-before"     : "never-multi-line",
    "media-query-list-comma-space-after"        : "never",
    "media-query-list-comma-space-before"       : "never",

    // At-Rule
    "at-rule-name-case" : "lower",

    // stylelint-disable
    // "stylelint-disable-reason" : "always-after",

    // Comment
    "comment-empty-line-before" : "always",
    "comment-no-empty"          : true,
    "comment-whitespace-inside" : "always",

      /////////////
     // General //
    /////////////
    "indentation"                      : 2,
    "max-empty-lines"                  : 1,
    "max-nesting-depth"                : 4,
    "no-duplicate-selectors"           : true,
    "no-empty-source"                  : true,
    "no-extra-semicolons"              : true,
    // "no-indistinguishable-colors"      : true,
    "no-invalid-double-slash-comments" : true,
    "no-unknown-animations"            : true,

    "at-rule-empty-line-before"        : "always"
  }
};

module.exports = rules;