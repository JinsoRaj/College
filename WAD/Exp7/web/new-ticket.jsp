<%-- 
    Document   : new-ticket
    Created on : 11 Jan, 2022, 3:29:08 PM
    Author     : jinso
--%>

<%@page import="com.exp7.ticket.TicketBean"%>
<%@page contentType="text/html" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
        <title> Reserve Ticket </title>
    </head>
    <body>
        Welcome <%= session.getAttribute("user") %> <br/><br/>
        
        <form action="new-ticket.jsp" method="POST">
            Name : <input type="text" name="name"><br/>
            From : <input type="text" name="from"><br/>
            To : <input type="text" name="to"><br/>
            Price : <input type="number" name="price"><br/>
            <input type="submit" value="Book">
        </form>
        
        <%
            if(request.getParameter("name") != null){
                TicketBean ticket = new TicketBean();
                
                ticket.setName(request.getParameter("name"));
                ticket.setFrom(request.getParameter("from"));
                ticket.setTo(request.getParameter("to"));
                ticket.setPrice(Integer.parseInt(request.getParameter("price")));
                
                if(ticket.addTicket()){
                    out.println("Booked successfully");
                }else{
                    out.println("Failed to book ticket");
                }
            }
            
        %>
    </body>
</html>
