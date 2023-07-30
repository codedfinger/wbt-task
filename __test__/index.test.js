const { labels, allornothing } = require('../data');
const { findAllPaths } = require('../index.js');

describe('findAllPaths function', () => {
  test('should return all conversation paths for labels with the tag "labels-start"', () => {
    const labelsPath = findAllPaths(labels, "labels-start");
    expect(labelsPath).toHaveLength(4); 
  });

  test('should return all conversation paths for allornothing with the tag "allornothing-start"', () => {
    const allOrNothingPath = findAllPaths(allornothing, "allornothing-start");
    expect(allOrNothingPath).toHaveLength(6); 
  });

  test('should return an empty array when tag does not exist in the JSON data', () => {
    const tagNotExist = 'tag-not-exist';
    const result = findAllPaths(labels, tagNotExist);
    expect(result).toEqual([]);
  });

});
