const nodeFetch = require('node-fetch')
const { fetchBuilder, MemoryCache } = require('node-fetch-cache');
const cache_time = 1000*60*60*24// 1 day
const fetchcache = fetchBuilder.withCache(new MemoryCache({ttl:cache_time}));

const fetch = async (url) => {
  const response = await nodeFetch(url);
  return response;
}

const fetchBody = async (url) => {
  const response = await nodeFetch(url);
  return response.text();
}

const fetchCache = async (url) => {
  const response = await fetchcache(url);
  return response;
}

const fetchCacheBody = async (url) => {
  const response = await fetchcache(url);
  return response.text();
}

module.exports = {
  fetch: fetch,
  fetchBody: fetchBody,   
  fetchCache: fetchCache,
  fetchCacheBody: fetchCacheBody
}
