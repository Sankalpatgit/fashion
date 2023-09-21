<!DOCTYPE html>
<html>
<head>
  <title>Popup Example</title>
  <script>
    function openPopup() {
      var popup = window.open("", "Popup", "width=400,height=300");
      popup.document.write("<h1>This is a Popup</h1>");
      popup.document.write("<p>Hello, world!</p>");
    }
  </script>
</head>
<body>
  <button onclick="openPopup()">Open Popup</button>
</body>
</html>