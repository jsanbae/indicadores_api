const fetch = require('node-fetch')
const { fetchBuilder, MemoryCache } = require('node-fetch-cache');
const cache_time = 1000*60*60*24// 1 day
const fetchcache = fetchBuilder.withCache(new MemoryCache({ttl:cache_time}));

const fetchCacheData = async (url) => {
  const response = await fetchcache(url);
  return response.text();
}

const fetchData = async (url) => {
    const response = await fetch(url);
    return response.text();
}

module.exports = {
    fetchCacheData: fetchCacheData,
    fetchData: fetchData
}
