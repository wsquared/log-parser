const getUniqueIps = (logs, ipIndex = 0) => {
  const set = logs.reduce((prevSet, nextLog) => {
    prevSet.add(nextLog[ipIndex]);
    return prevSet;
  }, new Set());

  return set.size;
};

const getMostActiveIps = (logs, ipIndex = 0, topActive = 3) => {
  const map = logs.reduce((prevMap, nextLog) => {
    if (prevMap.has(nextLog[ipIndex])) {
      prevMap.set(nextLog[ipIndex], prevMap.get(nextLog[ipIndex]) + 1);
    } else {
      prevMap.set(nextLog[ipIndex], 1);
    }
    return prevMap;
  }, new Map());

  const result = [];

  for (const [key, value] of map.entries()) {
    result.push([key, value]);
  }

  return result
    .sort((a, b) => b[1] - a[1])
    .slice(0, topActive)
    .flatMap(x => x)
    .filter(result => typeof result === 'string');
};

const getMostActiveUrls = (logs, ipIndex = 0, urlIndex = 3, topActive = 3) => {
  const map = logs.reduce((prevMap, log) => {
    const removeResourceName = / https?:\/\/\w+\.\w+| /;
    const [, resourcePath, protocolIdentifier] = log[urlIndex].split(removeResourceName);
    const ip = log[ipIndex];
    const trimmedProtocolIdentifier = protocolIdentifier.replace(/\/\d.\d/, '').toLowerCase();

    if (prevMap.has(`${trimmedProtocolIdentifier}://${ip}${resourcePath}`)) {
      prevMap.set(
        `${trimmedProtocolIdentifier}://${ip}${resourcePath}`,
        prevMap.get(`${trimmedProtocolIdentifier}://${ip}${resourcePath}`) + 1,
      );
    } else {
      prevMap.set(`${trimmedProtocolIdentifier}://${ip}${resourcePath}`, 1);
    }

    return prevMap;
  }, new Map());

  const result = [];

  for (const [key, value] of map.entries()) {
    result.push([key, value]);
  }

  return result
    .sort((a, b) => b[1] - a[1])
    .slice(0, topActive)
    .flatMap(x => x)
    .filter(result => typeof result === 'string');
};

export { getMostActiveIps, getMostActiveUrls, getUniqueIps };
