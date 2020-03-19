import { getMostActiveUrls, getUniqueIps, getMostActiveIps } from './analytics';
import { readLogSync, parseLogFile } from './logParser';

describe('analytics', () => {
  const logFile = readLogSync(`${__dirname}/../data/programming-task-example-data.log`);
  const logs = parseLogFile(logFile);
  describe('getMostActiveUrls', () => {
    it('returns 3 most active', () => {
      const mostActivelUrls = getMostActiveUrls(logs, 0, 3, 3);

      expect(mostActivelUrls[0]).toBe('http://168.41.191.34/faq/how-to/');
      expect(mostActivelUrls[1]).toBe('http://168.41.191.40/blog/category/meta/');
      expect(mostActivelUrls[2]).toBe('http://168.41.191.9/docs/manage-users/');
      expect(mostActivelUrls.length).toBe(3);
    });
  });

  describe('getUniqueIps', () => {
    it('returns unique ips', () => {
      const uniqueIps = getUniqueIps(logs, 0);

      expect(uniqueIps).toBe(11);
    });
  });

  describe('getMostActiveIps', () => {
    it('returns most active ips', () => {
      const mostActiveIps = getMostActiveIps(logs, 0, 3);

      expect(mostActiveIps[0]).toBe('168.41.191.40');
      expect(mostActiveIps[1]).toBe('168.41.191.34');
      expect(mostActiveIps[2]).toBe('168.41.191.9');
      expect(mostActiveIps.length).toBe(3);
    });
  });
});
