fetch(‘http://ip-api.com/json/’)
   .then(response => response.json())
   .then(IPinfo => showIPinfo(IPinfo.results));
