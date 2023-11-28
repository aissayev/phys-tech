/** @type {import("eslint").Linter.Config} */
module.exports = {
  extends: ['universe/native', 'custom'],
  ignorePatterns: ['./android', './ios'],
}
