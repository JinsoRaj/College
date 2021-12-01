<%-- 
    Document   : login
    Created on : 1 Dec, 2021, 9:18:50 AM
    Author     : JinsoRaj
--%>

<%@page import="java.sql.*,java.io.*" contentType="text/html" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
        <title>Login Auth </title>
    </head>
    <body>
        <h1>Hello World!</h1>
        
        
        <% 
           String username = request.getParameter("username") ;
           String password = request.getParameter("password");
           
           
           try{
            Class.forName("org.postgresql.Driver");
            Connection c = DriverManager.getConnection("jdbc:postgresql://localhost:5432/apooppan007", "postgres", "root");
            Statement s = c.createStatement();
            ResultSet r = s.executeQuery("SELECT * FROM jinso WHERE username='" + username + "' AND password='" + password + "';");
            /*System.out.println(username);*/
            
                if(r.next()){
                    response.sendRedirect("welcome.jsp?name=" + username);
                }else{
                    response.sendRedirect("index.jsp?err");
                }
            }catch(Exception e){
                System.out.println(e);
                
            }
        %>
        
    </body>
</html>
