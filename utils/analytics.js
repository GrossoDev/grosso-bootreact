const visited = () => {
  const url = window.location.href;
  const encodedUrl = `https://grossodev.fly.dev/analytics/v1/visited/${encodeURIComponent(url)}`;
  const xhttp = new XMLHttpRequest();

  xhttp.open('GET', encodedUrl, true);
  xhttp.send();
};
