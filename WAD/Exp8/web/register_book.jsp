<%-- 
    Document   : register_book
    Created on : 11 Jan, 2022, 7:43:17 PM
    Author     : jinso
--%>

<%@page contentType="text/html" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
    <head> 
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
        <title>Registration</title> 
    </head>
 <body>
    <a href="index.jsp">Home Page</a>
    
    <h1>Registration Form</h1>
    
    <form action="register.jsp" method="post"> 
        <label>Book Name: </label>
        <input type="text" name="name"/> <br/><br/> 
        <label>Book Id </label>
        <input type="text" name="id"/> <br/><br/> 
        <label>Author </label>
        <input type="text" name="author"/> <br/><br/> 
        <label>Publication </label>
        <input type="text" name="publication"/> <br/><br/> 
        <label>Price </label>
        <input type="text" name="price"/> <br/><br/> 
        <label>Section No </label>
        <input type="text" name="section"/> <br/><br/>
        
        <input type="submit" value="Add"/> 
        <input type="reset" value="Clear"> 
    </form>
    
 </body> 
</html> 