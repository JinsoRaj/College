/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.auth.java;

import java.io.IOException;
import java.io.PrintWriter;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.sql.*;

/**
 *
 * @author jinso
 */
public class Auth extends HttpServlet {
    /**
     * Handles the HTTP <code>POST</code> method.
     *
     * @param request servlet request
     * @param response servlet response
     * @throws ServletException if a servlet-specific error occurs
     * @throws IOException if an I/O error occurs
     */
    @Override
    protected void doPost(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        String username = request.getParameter("username");
        String password = request.getParameter("password");
        
        try{
            Class.forName("org.postgresql.Driver");
            Connection c = DriverManager.getConnection("jdbc:postgresql://localhost:5432/wadlab", "postgres", "root");
            Statement s = c.createStatement();
            ResultSet r = s.executeQuery("SELECT * FROM login WHERE username='" + username + "' AND password='" + password + "';");
            /*System.out.println(username);*/
            
            if(r.next()){
                response.sendRedirect("WelcomeServlet?name=" + username);
            }else{
                response.sendRedirect("index.jsp?err");
            }
        }catch(Exception e){
            System.out.println(e);
        }

    }
}
