fetch(‘http://ip-api.com/json/’)
   .then(response => response.json())
   .then(IPinfo => showIPinfo(IPinfo.results));

showIPinfo = IPinfo => {
  const IPinfoDiv = document.querySelector(‘#ipinformation’);
  IPinfos.forEach(IPinfo => {
    const IPinfoElement = document.createElement(‘p’);
    IPinfoElement.innerText = `IP Address: ${IPinfo.query}`;
    IPinfoDiv.append(IPinfoElement);
  });
}
