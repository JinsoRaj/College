<%-- 
    Document   : index
    Created on : 5 Jan, 2022, 9:41:15 AM
    Author     : jinso
    RollNo     : 32
--%>

<%@page contentType="text/html" pageEncoding="UTF-8"%>
<%@ taglib prefix = "c" uri = "http://java.sun.com/jsp/jstl/core" %>
<!DOCTYPE html>
<html>
    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
        <title> Book Shop </title>
    </head>
    <body>
        <jsp:useBean id="user" scope="session" class="com.exp5.login.LoginBean"></jsp:useBean>
        <jsp:useBean id="booksbean" scope="page" class="com.exp5.login.BooksBean"></jsp:useBean>
        
        <div style="display:flex; flex-direction:row; justify-content:space-evenly;">
        <c:choose>
            <c:when test="${user.username != null}">
                Welcome, ${user.username} <div> <a href="LoginServlet?logout">Logout</a> </div>
            </c:when>
            <c:otherwise>
                <div> <a href="login.jsp">Login</a> </div>
            </c:otherwise>
        </c:choose>
        
        <div> <a href="cart.jsp">Cart</a> <br/> </div>
        </div> <br/><br/>
        <div class="form" style="margin:0px auto; text-align: center;">
        <form style="margin:0px auto;" action="index.jsp" method="GET">
            <input type="text" name="search">
            <input type="submit" value="Search">
        </form>
        </div><br/><br/>
        
        <c:choose>
            <c:when test="<%= request.getParameter("search") != null %>">
                <c:set scope="page" var="books" value="<%= booksbean.findBooks(request.getParameter("search")) %>"></c:set>
            </c:when>
            <c:otherwise>
                <c:set scope="page" var="books" value="<%= booksbean.getBooks() %>"></c:set>
            </c:otherwise>
        </c:choose>
        
        <div class="lists" style="margin:0px auto; text-align: center;">
        <c:forEach var="book" items="${books}">
            ${book.name}<br/>
            ${book.author}<br/>
            ${book.price}<br/>
            <a href="CartServlet?add=${book.id}">Add to Cart</a><br/><br/>
        </c:forEach>
        </div>
    </body>
</html>

