<%-- 
    Document   : index
    Created on : 1 Dec, 2021, 9:18:01 AM
    Author     : JinsoRaj
--%>

<%@page contentType="text/html" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
        <title>Login</title>
    </head>
    <body>
        <h1>Login:</h1>
        <form action="login.jsp" method="POST">
            <label for="username">Username: </label>
            <input type="text" name="username"><br/>
            <label for="username">Password: </label>
            <input type="password" name="password"><br/>
            <input type="submit" value="Login"><br />
        </form>
        
        <% if (request.getParameter("err") != null){ %>
        <div><b>Invalid Login credentials</b></div>
        <% } %>
        
    </body>
</html>
