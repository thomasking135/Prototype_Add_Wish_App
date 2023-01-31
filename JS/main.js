//JS functions for input app
        var list = document.getElementById('list');
        var entry = document.getElementById('addWish');
        entry.onsubmit = function(evt) {
        evt.preventDefault();
        var wishList = document.getElementById('wishList').value;
        var entry = document.createElement('li');
        entry.appendChild(document.createTextNode(wishList));
        list.appendChild(entry);
        document.getElementById('wishList').value="";
      }


     