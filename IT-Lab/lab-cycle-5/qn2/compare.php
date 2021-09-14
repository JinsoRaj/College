<!DOCTYPE html>

<html>
<body>

<?php
$str1 = $_GET["str1"];
$str2 = $_GET["str2"];

if(strcmp($str1, $str2) == 0){
    echo "$str1 and $str2 are equal<br>";
}elseif(strcmp($str1, $str2) < 0){
    echo "$str1 is less than $str2<br>";
}else{
    echo "$str1 is greater than $str2<br>";
}
?>
</body>
</html>