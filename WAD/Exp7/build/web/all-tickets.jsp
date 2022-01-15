<%-- 
    Document   : all-tickets
    Created on : 11 Jan, 2022, 3:28:12 PM
    Author     : jinso
--%>

<%@page import="java.util.ArrayList"%>
<%@page import="com.exp7.ticket.TicketBean"%>
<%@page contentType="text/html" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
        <title> Tickets </title>
    </head>
    <body>
        <%
            ArrayList<TicketBean> tickets = TicketBean.listTickets();
            
            
            if (tickets != null){
                for(int i = 0; i < tickets.size(); i++){
                    out.println("Name : " + tickets.get(i).getName() + "<br/>");
                    out.println("From : " + tickets.get(i).getFrom() + "<br/>");
                    out.println("To : " + tickets.get(i).getTo() + "<br/>");
                    out.println("Price : " + tickets.get(i).getPrice() + "<br/><br/>");
                }
            }else{
                out.println("No tickets");
            }
        %>
    </body>
</html>

