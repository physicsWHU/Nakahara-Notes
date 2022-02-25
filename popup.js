  document.getElementById("link").onclick = function(e) {
    e.preventDefault();
    document.getElementById("popupdarkbg").style.display = "block";
    document.getElementById("popup").style.display = "block";
    document.getElementById('popupdarkbg').onclick = function() {
        document.getElementById("popup").style.display = "none";
        document.getElementById("popupdarkbg").style.display = "none";
    };
    return false;
  }
  
  window.onkeydown = function(e) {
      if (e.keyCode == 27) {
        document.getElementById("popup").style.display = "none";
        document.getElementById("popupdarkbg").style.display = "none";
        e.preventDefault();
        return;
      }
  }

