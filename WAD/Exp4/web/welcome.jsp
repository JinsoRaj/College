<%-- 
    Document   : welcome
    Created on : 14 Dec, 2021, 7:40:31 PM
    Author     : jinso
--%>

<%@page contentType="text/html" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
        <title>Welcome</title>
    </head>
    <body>
        <jsp:useBean id="user" class="com.exp4.login.LoginBean" />
        <jsp:setProperty name="user" property="*" />
        <h1>Welcome <%= user.getUsername() %> </h1>
    </body>
</html>
