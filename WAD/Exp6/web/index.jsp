<%-- 
    Document   : index
    Created on : 9 Jan, 2022, 6:31:54 PM
    Author     : jinso
--%>

<%@page contentType="text/html" pageEncoding="UTF-8"%>
<%@ taglib prefix = "c" uri = "http://java.sun.com/jsp/jstl/core" %>
<!DOCTYPE html>
<html>
    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
        <title> Exam </title>
    </head>
    <body>
        <jsp:useBean id="questionsBean" class="com.exp6.exam.QuestionsBean"></jsp:useBean>
        
        <c:set var="count" value="1" scope="page"/>
        <c:set var="questions" value="${questionsBean.questions}" scope="session"/>
        <div class="questions">
            <div class="child" style="margin: 0px auto; text-align: center;">
            <form action="result.jsp" method="POST">
                <c:forEach var="question" items="${questions}">
                    <c:out value="${count}. "/>

                    <c:out value="${question.question}"/>

                    <c:forEach var="i" begin="0" end="3">
                        <input type="radio" name="q${count}" value="${i}">
                        <c:out value="${question.options[i]}"/>
                    </c:forEach>
                    <c:set var="count" value="${count + 1}" scope="page"/>
                    <br/><br/>
                </c:forEach> <br/><br/>
                <input type="submit">
            </form>
            </div>
        </div>
    </body>
</html>
