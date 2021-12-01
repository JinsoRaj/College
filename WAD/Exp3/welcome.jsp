<%-- 
    Document   : welcome
    Created on : 1 Dec, 2021, 9:18:34 AM
    Author     : JinsoRaj
--%>

<%@page contentType="text/html" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
        <title>Welcome</title>
    </head>
    <body>
        <h1> Welcome <%= request.getParameter("name") %> </h1>
    </body>
</html>
