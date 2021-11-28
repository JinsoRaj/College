<%-- 
    Document   : index
    Created on : 24 Nov, 2021, 10:56:13 PM
    Author     : jinso
--%>

<%@page contentType="text/html" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
    <head>
        <title>Login</title>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
    </head>
    <body>
        <form action="Auth" method="POST">
            <label for="username">Username: </label>
            <input type="text" name="username"><br/>
            <label for="username">Password: </label>
            <input type="password" name="password"><br/>
            <input type="submit" value="Login"><br />
        </form>
        <a href="register.html"> New User? Register now! </a>
        
        <% if (request.getParameter("err") != null){ %>
        <div>Invalid Login credentials</div>
        <% } %>
    </body>
</html>
