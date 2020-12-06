        <script>
        function Anterior() {
            var i = Number(document.getElementById("myNumber").value);
            if (i > 1) {
            i = i - 1;
               document.getElementById("demo").innerHTML = i;
               document.getElementById("myNumber").value = i;
               document.getElementById('myImage').src='Slide' + i + '.PNG';
            }
        }

        function Proximo() {
            var i = Number(document.getElementById("myNumber").value);
            if (i < 28) {
            i = i + 1;
               document.getElementById("demo").innerHTML = i;
               document.getElementById("myNumber").value = i;
               document.getElementById('myImage').src='Slide' + i + '.PNG';
            }
        }

        </script>

