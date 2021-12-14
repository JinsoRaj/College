<%-- 
    Document   : index
    Created on : 14 Dec, 2021, 7:39:55 PM
    Author     : jinso
--%>

<%@page contentType="text/html" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
        <title>Login</title>
    </head>
    <body>
        <form method="POST" action="LoginServlet">
            <label for="username">Username:</label>
            <input name="username" type="text"><br/>
            <label for="password">Password:</label>
            <input name="password" type="password"><br/>
            <input type="submit" value="Login"><br/>
            <% if(request.getParameter("e") != null) { %>
            <div>Invalid Login Credentials</div>
            <% } %>
        </form>
    </body>
</html>
