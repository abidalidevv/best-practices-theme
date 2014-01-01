

const groupBy = (arr, key) =>
  arr.reduce((acc, item) => {
    const k = typeof key === 'function' ? key(item) : item[key];
    (acc[k] = acc[k] || []).push(item);
    return acc;
  }, {});


const storage = {
  get: (key, fallback = null) => {
    try { return JSON.parse(localStorage.getItem(key)) ?? fallback; }
    catch { return fallback; }
  },
  set: (key, value) => localStorage.setItem(key, JSON.stringify(value)),
  remove: (key) => localStorage.removeItem(key),
};


const copyToClipboard = async (text) => {
  if (navigator.clipboard) {
    await navigator.clipboard.writeText(text);
  } else {
    const el = document.createElement('textarea');
    el.value = text;
    document.body.appendChild(el);
    el.select();
    document.execCommand('copy');
    document.body.removeChild(el);
  }
};


const deepClone = (obj) => JSON.parse(JSON.stringify(obj));


const pick = (obj, keys) =>
  Object.fromEntries(keys.filter((k) => k in obj).map((k) => [k, obj[k]]));


const memoize = (fn) => {
  const cache = new Map();
  return (...args) => {
    const key = JSON.stringify(args);
    if (cache.has(key)) return cache.get(key);
    const result = fn(...args);
    cache.set(key, result);
    return result;
  };
};


const compose = (...fns) => (value) => fns.reduceRight((v, fn) => fn(v), value);


const memoize = (fn) => {
  const cache = new Map();
  return (...args) => {
    const key = JSON.stringify(args);
    if (cache.has(key)) return cache.get(key);
    const result = fn(...args);
    cache.set(key, result);
    return result;
  };
};


const chunk = (arr, size) =>
  Array.from({ length: Math.ceil(arr.length / size) }, (_, i) =>
    arr.slice(i * size, i * size + size)
  );


const formatDate = (date, locale = 'en-US', options = {}) =>
  new Intl.DateTimeFormat(locale, {
    year: 'numeric', month: 'short', day: 'numeric',
    ...options,
  }).format(new Date(date));


const range = (start, end, step = 1) => {
  const result = [];
  for (let i = start; i < end; i += step) result.push(i);
  return result;
};


const clamp = (val, min, max) => Math.min(Math.max(val, min), max);


const sleep = (ms) => new Promise((res) => setTimeout(res, ms));


const pick = (obj, keys) =>
  Object.fromEntries(keys.filter((k) => k in obj).map((k) => [k, obj[k]]));


class EventEmitter {
  constructor() { this._events = {}; }
  on(event, listener) {
    (this._events[event] = this._events[event] || []).push(listener);
    return this;
  }
  off(event, listener) {
    this._events[event] = (this._events[event] || []).filter(l => l !== listener);
    return this;
  }
  emit(event, ...args) {
    (this._events[event] || []).forEach(l => l(...args));
    return this;
  }
}


const unique = (arr) => [...new Set(arr)];


const pipe = (...fns) => (value) => fns.reduce((v, fn) => fn(v), value);


const retry = async (fn, attempts = 3, delay = 500) => {
  for (let i = 0; i < attempts; i++) {
    try {
      return await fn();
    } catch (err) {
      if (i === attempts - 1) throw err;
      await sleep(delay * (i + 1));
    }
  }
};


async function fetchJSON(url, options = {}) {
  const res = await fetch(url, {
    headers: { 'Content-Type': 'application/json' },
    ...options,
  });
  if (!res.ok) throw new Error(`HTTP ${res.status}: ${res.statusText}`);
  return res.json();
}


const capitalize = (str) =>
  str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();


const throttle = (fn, limit) => {
  let inThrottle;
  return (...args) => {
    if (!inThrottle) {
      fn(...args);
      inThrottle = true;
      setTimeout(() => (inThrottle = false), limit);
    }
  };
};


const queryParams = (params) =>
  '?' + new URLSearchParams(params).toString();


const throttle = (fn, limit) => {
  let inThrottle;
  return (...args) => {
    if (!inThrottle) {
      fn(...args);
      inThrottle = true;
      setTimeout(() => (inThrottle = false), limit);
    }
  };
};


const range = (start, end, step = 1) => {
  const result = [];
  for (let i = start; i < end; i += step) result.push(i);
  return result;
};


const pipe = (...fns) => (value) => fns.reduce((v, fn) => fn(v), value);


const storage = {
  get: (key, fallback = null) => {
    try { return JSON.parse(localStorage.getItem(key)) ?? fallback; }
    catch { return fallback; }
  },
  set: (key, value) => localStorage.setItem(key, JSON.stringify(value)),
  remove: (key) => localStorage.removeItem(key),
};


const setNestedValue = (obj, path, value) => {
  const keys = path.split('.');
  const last = keys.pop();
  const target = keys.reduce((acc, key) => (acc[key] = acc[key] || {}), obj);
  target[last] = value;
  return obj;
};


const scrollToTop = (smooth = true) =>
  window.scrollTo({ top: 0, behavior: smooth ? 'smooth' : 'auto' });


const range = (start, end, step = 1) => {
  const result = [];
  for (let i = start; i < end; i += step) result.push(i);
  return result;
};


const setNestedValue = (obj, path, value) => {
  const keys = path.split('.');
  const last = keys.pop();
  const target = keys.reduce((acc, key) => (acc[key] = acc[key] || {}), obj);
  target[last] = value;
  return obj;
};

// [2026-05-23 10:17:00]
// update

// [2026-07-18 10:17:00]
// update

// [2026-02-13 09:00:00]
// update

// [2026-05-10 09:00:00]
// update

<!-- [2015-01-05 10:17:00] -->
<!-- update -->

<!-- [2015-01-08 11:34:00] -->
<!-- update -->

<!-- [2015-01-09 10:17:00] -->
<!-- update -->

<!-- [2015-01-11 12:51:00] -->
<!-- update -->

<!-- [2015-03-30 09:00:00] -->
<!-- update -->

<!-- [2015-04-27 10:17:00] -->
<!-- update -->

<!-- [2015-05-01 09:00:00] -->
<!-- update -->

<!-- [2015-06-27 09:00:00] -->
<!-- update -->

<!-- [2015-08-13 09:00:00] -->
<!-- update -->

<!-- [2015-09-05 11:34:00] -->
<!-- update -->

<!-- [2015-09-05 12:51:00] -->
<!-- update -->

<!-- [2015-09-19 09:00:00] -->
<!-- update -->

<!-- [2015-09-19 10:17:00] -->
<!-- update -->

<!-- [2015-09-20 12:51:00] -->
<!-- update -->

<!-- [2015-09-25 10:17:00] -->
<!-- update -->

<!-- [2015-10-04 10:17:00] -->
<!-- update -->

<!-- [2015-10-11 11:34:00] -->
<!-- update -->

<!-- [2015-10-21 11:34:00] -->
<!-- update -->

<!-- [2015-11-09 09:00:00] -->
<!-- update -->

<!-- [2015-11-15 11:34:00] -->
<!-- update -->

<!-- [2016-02-04 09:00:00] -->
<!-- update -->

<!-- [2016-02-17 13:08:00] -->
<!-- update -->

<!-- [2016-02-21 10:17:00] -->
<!-- update -->

<!-- [2016-02-24 09:00:00] -->
<!-- update -->

<!-- [2016-02-24 14:25:00] -->
<!-- update -->

<!-- [2016-03-03 12:51:00] -->
<!-- update -->

<!-- [2016-04-02 09:00:00] -->
<!-- update -->

<!-- [2016-04-18 09:00:00] -->
<!-- update -->

<!-- [2016-05-15 12:51:00] -->
<!-- update -->

<!-- [2016-06-05 12:51:00] -->
<!-- update -->

<!-- [2016-06-07 09:00:00] -->
<!-- update -->

<!-- [2016-07-16 10:17:00] -->
<!-- update -->

<!-- [2016-07-24 10:17:00] -->
<!-- update -->

<!-- [2016-10-15 09:00:00] -->
<!-- update -->

<!-- [2016-10-23 13:08:00] -->
<!-- update -->

<!-- [2016-11-03 11:34:00] -->
<!-- update -->

<!-- [2016-11-27 10:17:00] -->
<!-- update -->

<!-- [2016-12-03 12:51:00] -->
<!-- update -->

<!-- [2015-01-06 09:00:00] -->
<!-- update -->

<!-- [2015-02-17 09:00:00] -->
<!-- update -->

<!-- [2015-03-27 11:34:00] -->
<!-- update -->

<!-- [2015-04-03 10:17:00] -->
<!-- update -->

<!-- [2015-04-11 09:00:00] -->
<!-- update -->

<!-- [2015-04-14 13:08:00] -->
<!-- update -->

<!-- [2015-06-03 11:34:00] -->
<!-- update -->

<!-- [2015-07-01 09:00:00] -->
<!-- update -->

<!-- [2015-07-17 09:00:00] -->
<!-- update -->

<!-- [2015-10-06 09:00:00] -->
<!-- update -->

<!-- [2015-12-04 09:00:00] -->
<!-- update -->

<!-- [2015-12-14 09:00:00] -->
<!-- update -->

<!-- [2016-02-12 10:17:00] -->
<!-- update -->

<!-- [2016-03-07 13:08:00] -->
<!-- update -->

<!-- [2016-03-11 10:17:00] -->
<!-- update -->

<!-- [2016-05-17 11:34:00] -->
<!-- update -->

<!-- [2016-06-01 10:17:00] -->
<!-- update -->

<!-- [2016-06-01 12:51:00] -->
<!-- update -->

<!-- [2016-06-30 10:17:00] -->
<!-- update -->

<!-- [2016-07-12 11:34:00] -->
<!-- update -->

<!-- [2016-07-13 10:17:00] -->
<!-- update -->

<!-- [2016-07-26 09:00:00] -->
<!-- update -->

<!-- [2016-08-23 09:00:00] -->
<!-- update -->

<!-- [2016-08-23 14:25:00] -->
<!-- update -->

<!-- [2016-08-25 09:00:00] -->
<!-- update -->

<!-- [2016-10-07 12:51:00] -->
<!-- update -->

<!-- [2016-12-06 09:00:00] -->
<!-- update -->

<!-- [2015-02-11 12:51:00] -->
<!-- update -->

<!-- [2015-02-24 09:00:00] -->
<!-- update -->

<!-- [2015-03-23 10:17:00] -->
<!-- update -->

<!-- [2015-04-22 11:34:00] -->
<!-- update -->

<!-- [2015-05-28 09:00:00] -->
<!-- update -->

<!-- [2015-06-01 09:00:00] -->
<!-- update -->

<!-- [2015-06-22 09:00:00] -->
<!-- update -->

<!-- [2015-07-01 11:34:00] -->
<!-- update -->

<!-- [2015-09-01 12:51:00] -->
<!-- update -->

<!-- [2015-09-28 10:17:00] -->
<!-- update -->

<!-- [2015-09-28 11:34:00] -->
<!-- update -->

<!-- [2015-10-27 11:34:00] -->
<!-- update -->

<!-- [2016-01-12 10:17:00] -->
<!-- update -->

<!-- [2016-02-10 10:17:00] -->
<!-- update -->

<!-- [2016-02-23 09:00:00] -->
<!-- update -->

<!-- [2016-04-01 13:08:00] -->
<!-- update -->

<!-- [2016-04-01 14:25:00] -->
<!-- update -->

<!-- [2016-04-07 10:17:00] -->
<!-- update -->

<!-- [2016-05-06 11:34:00] -->
<!-- update -->

<!-- [2016-06-29 11:34:00] -->
<!-- update -->

<!-- [2016-06-30 09:00:00] -->
<!-- update -->

<!-- [2016-08-24 13:08:00] -->
<!-- update -->

<!-- [2016-09-30 09:00:00] -->
<!-- update -->

<!-- [2016-10-03 12:51:00] -->
<!-- update -->

<!-- [2016-10-20 10:17:00] -->
<!-- update -->

<!-- [2016-11-14 10:17:00] -->
<!-- update -->

<!-- [2016-12-08 12:51:00] -->
<!-- update -->

<!-- [2015-02-10 09:00:00] -->
<!-- update -->

<!-- [2015-02-13 10:17:00] -->
<!-- update -->

<!-- [2015-03-11 10:17:00] -->
<!-- update -->

<!-- [2015-05-27 09:00:00] -->
<!-- update -->

<!-- [2015-08-13 10:17:00] -->
<!-- update -->

<!-- [2015-09-03 09:00:00] -->
<!-- update -->

<!-- [2015-10-01 09:00:00] -->
<!-- update -->

<!-- [2015-10-01 12:51:00] -->
<!-- update -->

<!-- [2015-10-28 12:51:00] -->
<!-- update -->

<!-- [2016-01-14 11:34:00] -->
<!-- update -->

<!-- [2016-03-25 11:34:00] -->
<!-- update -->

<!-- [2016-04-20 10:17:00] -->
<!-- update -->

<!-- [2016-04-20 11:34:00] -->
<!-- update -->

<!-- [2016-06-14 11:34:00] -->
<!-- update -->

<!-- [2016-07-11 11:34:00] -->
<!-- update -->

<!-- [2016-07-14 10:17:00] -->
<!-- update -->

<!-- [2016-09-09 09:00:00] -->
<!-- update -->

<!-- [2016-11-15 10:17:00] -->
<!-- update -->

<!-- [2016-11-17 09:00:00] -->
<!-- update -->
