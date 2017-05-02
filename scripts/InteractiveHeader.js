$.get("http://chaoticbackup.forumotion.com/h2-header", function(response) {
    var parent = document.getElementById('logostrip');
    var child = parent.getElementsByTagName("a")[0];
    var insert = document.createElement("div");
    insert.innerHTML = response;
    child.parentNode.replaceChild(insert, child);
  });
