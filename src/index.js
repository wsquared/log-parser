#!/usr/bin/env node
import { readLogSync, parseLogFile } from './logParser';
import { getMostActiveIps, getMostActiveUrls, getUniqueIps } from './analytics';
import { logger } from './logger';

logger.info(`3 most active ips: ${getMostActiveIps(parseLogFile(readLogSync()), 0, 3)}`);
logger.info(`3 most active urls: ${getMostActiveUrls(parseLogFile(readLogSync()), 0, 3, 3)}`);
logger.info(`Unique ips: ${getUniqueIps(parseLogFile(readLogSync()), 0)}`);
