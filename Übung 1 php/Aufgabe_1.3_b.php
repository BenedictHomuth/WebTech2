<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Autocomplete</title>
    <script src="//code.jquery.com/jquery-1.12.4.js"></script>
    <script src="//code.jquery.com/ui/1.12.1/jquery-ui.js"></script>
    <link rel="stylesheet" href="//code.jquery.com/ui/1.12.1/themes/smoothness/jquery-ui.css">

</head>
<body>
    <label for="tbox_language">Programmiersprache: </label>
    <input name = "q" id="tbox_language" placeholder="Suche...">
</body>
<script>
    $(document).ready(function(){
        $("#tbox_language").autocomplete("search.php");
    })
</script>
</html>
