import { readLogSync, parseLogFile } from './logParser';

describe('logParser', () => {
  describe('readLogSync', () => {
    it('reads file to string format', () => {
      const logFile = readLogSync(`${__dirname}/../data/test.log`);

      expect(logFile).toContain('');
    });
  });

  describe('parseLogFile', () => {
    const logFile = readLogSync(`${__dirname}/../data/test.log`);
    const parsedLogs = parseLogFile(logFile);

    expect(parsedLogs.length).toBe(2);
  });
});
