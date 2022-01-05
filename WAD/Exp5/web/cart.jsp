<%-- 
    Document   : cart
    Created on : 5 Jan, 2022, 9:42:55 AM
    Author     : jinso
    RollNo     : 32
--%>

<%@page import="java.util.ArrayList"%>
<%@page import="com.exp5.login.BookBean"%>
<%@page contentType="text/html" pageEncoding="UTF-8"%>
<%@ taglib prefix = "c" uri = "http://java.sun.com/jsp/jstl/core" %>
<!DOCTYPE html>
<html>
    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
        <title>Cart</title>
    </head>
    <body>
        <% ArrayList<BookBean> cart = (ArrayList<BookBean>) session.getAttribute("cart"); %>
        
        <c:forEach var="book" items="${cart}">
            ${book.name}<br/>
            ${book.author}<br/>
            ${book.price}<br/>
            <a href="CartServlet?delete=${book.id}"> Remove </a><br/><br/>
        </c:forEach>
    </body>
</html>

