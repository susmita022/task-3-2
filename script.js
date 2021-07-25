 function results(){
            var name = document.getElementById('name').value;
            var email = document.getElementById('email').value;
            var about = document.getElementById('about').value;
            var address = document.getElementById('address').value;
            var phoneno = document.getElementById('phoneno').value;
            var clg = document.getElementById('clg').value;
          
            document.getElementById('fname').textContent = name;
            document.getElementById('femail').textContent = email;
            document.getElementById('fabout').textContent = about;
            document.getElementById('faddress').textContent = address;
            document.getElementById('fphone').textContent = phoneno;
            document.getElementById('fclg').textContent = clg;
        }