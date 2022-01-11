<%-- 
    Document   : result
    Created on : 9 Jan, 2022, 6:32:47 PM
    Author     : jinso
--%>

<%@page contentType="text/html" pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<!DOCTYPE html>
<html>
    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
        <title> Results </title>
    </head>
    <body>
        
        <c:set var="total" value="0" scope="page"/>
        <c:set var="count" value="1" scope="page"/>
        
        <c:forEach var="question" items="${questions}">
            <c:set var="qn" value="${'q'}${count}"/>
            <c:if test="${pageContext.request.getParameter(qn) == question.answer}">
                <c:set var="total" value="${total + 1}" scope="page"/>
            </c:if>
            
            <c:set var="count" value="${count + 1}" scope="page"/>
        </c:forEach>
        
        Result is : ${total}/${questions.size()}
    </body>
</html>

