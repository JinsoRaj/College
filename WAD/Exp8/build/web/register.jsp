<%-- 
    Document   : register
    Created on : 11 Jan, 2022, 7:41:53 PM
    Author     : jinso
--%>



<%@page import="java.sql.*"%>
<%@page contentType="text/html" pageEncoding="UTF-8"%>

<%
    String name =request.getParameter("name");
    String id = request.getParameter("id");
    String author = request.getParameter("author");
    String publication = request.getParameter("publication");
    String price = request.getParameter("price");
    String section = request.getParameter("section"); 
    
try{
    
    Class.forName("org.postgresql.Driver");
    Connection conc = DriverManager.getConnection("jdbc:postgresql://localhost:5432/wadlab","postgres","root");
    PreparedStatement p = conc.prepareStatement("INSERT INTO library VALUES(?, ?, ?, ?, ?, ?)");
    
    p.setString(1, name); 
    p.setString(2, id); 
    p.setString(3, author); 
    p.setString(4, publication);  
    p.setString(5, price); 
    p.setString(6, section);
 
    p.executeUpdate(); 
    out.println("<h2> Book added successfully</h2>"); 
    out.println("<a href='index.jsp'>Home Page</a>"); 
    
    conc.close(); 
    
   } catch(Exception e) {
       
    out.println("An exception has occured."); 
    out.println(e);
    } 
 finally { 
 } 
%> 