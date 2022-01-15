<%-- 
    Document   : list
    Created on : 11 Jan, 2022, 7:40:32 PM
    Author     : jinso
--%>

<%@page contentType="text/html" pageEncoding="UTF-8"%> 
<%@page import="java.sql.*"%> 
<!DOCTYPE html> 
<html> 
    <head> 
     <meta http-equiv="Content-Type" content="text/html; charset=UTF-8"> 
     <title>All Books</title> 
    </head> 
 <body> 
     
    <a href="index.jsp">Home Page</a> 
    
    <h1>Book Details</h1> 
    
    <table border="1" style="border-collapse:collapse"> 
        <tr> 
            <th>Book Name</th> 
            <th>Book id</th> 
            <th>Author</th> 
            <th>Publication</th> 
            <th>Price</th>  
            <th>Section</th>
        </tr> 
    <% 
    try { 

        Class.forName("org.postgresql.Driver"); 
        Connection conc = DriverManager.getConnection("jdbc:postgresql://localhost:5432/wadlab", "postgres", "root"); 

        PreparedStatement p = conc.prepareStatement("SELECT * FROM library"); 
        ResultSet r = p.executeQuery();
        
        while(r.next()){ 
            %> 
            <tr> 
                <td><%=r.getString(1)%></td> 
                <td><%=r.getString(2)%></td> 
                <td><%=r.getString(3)%></td> 
                <td><%=r.getString(4)%></td> 
                <td><%=r.getString(5)%></td> 
                <td><%=r.getString(6)%></td> 
            </tr> 
            <% 
        } 

        conc.close(); 
    } catch(Exception e) {

        out.println("An exception has occured."); 
        out.println(e);

    } finally { 
    } 
    %> 
    
    </table>
    
</body> 
</html>
