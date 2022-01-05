<%-- 
    Document   : login
    Created on : 5 Jan, 2022, 9:42:02 AM
    Author     : jinso
    RollNo     : 32
--%>

<%@page contentType="text/html" pageEncoding="UTF-8"%>
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

