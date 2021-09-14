<!DOCTYPE html>

<html>
    <head>
        <title>Regex</title>
    </head>
    <body>
    <?php
        $str = " " . $_GET["in"] . " ";
        if (preg_match("/at/", $str)){
            echo "string consists of word \"at\"<br>";
        }else{
            echo "string does not contain the word \"at\"<br>";
        }
        if (preg_match("/ at/", $str)){
            echo "string consists of word starting \"at\"<br>";
        }else{
            echo "string does not contain the word starting \"at\"<br>";
        }
        if (preg_match("/at /", $str)){
            echo "string consists of word ending \"at\"<br>";
        }else{
            echo "string does not contain the word ending \"at\"<br>";
        }
        if (preg_match("/ a/", $str)){
            echo "string consists of words begining \"a\"<br>";
        }else{
            echo "string does not contain the word begining \"a\"<br>";
        }
    ?>
    </body>
</html>