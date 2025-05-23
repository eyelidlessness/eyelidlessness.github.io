
const localeAbbreviations = {
  CA: 'California',
  MI: 'Michigan',
  US: 'United States',
  VA: 'Virginia',
  WA: 'Washington',
};

const techAbbreviations = {
  '.cljc':   'Clojure & ClojureScript cross-platform modules',
  A11y:      'Accessibility',
  ADHD:      'Attention deficit hyperactivity disorder',
  AJAX:      'Asynchronous JavaScript and XML',
  API:       'Application Programming Interface',
  APIs:      'Application Programming Interfaces',
  B2B:       'Business to Business',
  CI:        'Continuous Integration',
  CSS:       'Cascading Style Sheets',
  copypasta: 'copy and paste',
  DOM:       'Document Object Model',
  DSL:       'Domain Specific Language',
  DX:        'Developer Experience',
  ETL:       'Extract, Transform, Load',
  HATEOAS:   'Hypertext As The Engine Of Application State',
  HTML:      'Hypertext Markup Language',
  JSON:      'JavaScript Object Notation',
  JVM:       'Java Virtual Machine',
  nREPL:     'Clojure network REPL (Read–eval–print loop)',
  ODK:       'Open Data Kit (https://getodk.org/)',
  REPL:      'Read–eval–print loop',
  REST:      'Representational State Transfer',
  'SHA-1':   'Secure Hash Algorithm 1',
  SQL:       'Structured Query Language',
  SVG:       'Scalable Vector Graphics',
  trig:      'trigonometry',
  UI:        'User Interface',
  UX:        'User Experience',
  WSLCB:     'Washington State Liquor and Cannabis Board',
};

export const abbreviations = {
  ...localeAbbreviations,
  ...techAbbreviations,
};
