<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title><?php if(isset($_GET["ttl"])){echo $_GET["ttl"];}else{echo "ЧРД Ея!";} ?></title>
    <style>
        .txt{
            color:<?php if(isset($_GET["txt"])){echo $_GET["txt"];}else{echo "black";} ?>
        }
        *{
            background-color:<?php if(isset($_GET["bkg"])){echo $_GET["bkg"];}else{echo "white";} ?>
        }
    </style>
</head>
<body>
    <h1 class="txt">ЧРД Ея!</h1>
    <p class="txt">
        Да си жива и здрава,<br>
        много приятели,<br>
        много шестици в тъпото мъчилище и<br>
        да си все така добър член на The Kids Group!<br>
        Този сайт е за да тестваш цветови теми.
    </p>
    <h2 class="txt">Списък с числа</h2>
    <ol>
        <li class="txt">нещо</li>
        <li class="txt">друго нещо</li>
        <li class="txt">трето нещо</li>
        <li class="txt">четвърто нещо</li>
        <li class="txt">пето нещо</li>
    </ol>
    <h2 class="txt">Списък с точки</h2>
    <ul>
        <li class="txt">нещо</li>
        <li class="txt">друго нещо</li>
        <li class="txt">трето нещо</li>
        <li class="txt">четвърто нещо</li>
        <li class="txt">пето нещо</li>
    </ul>
    <a class="txt" href="javascript:window.location.reload()">Линк</a>
    <br>
    <br>
    <button class="txt" onclick="alert('нещо')">Бутон</button>
</body>
</html>