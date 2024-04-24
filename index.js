import Parser from 'tree-sitter';
import SQL from '@derekstride/tree-sitter-sql';

const parser = new Parser();
parser.setLanguage(SQL);
