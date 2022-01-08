/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.exp5.login;

import java.io.*;
import javax.servlet.*;
import javax.servlet.http.*;


/**
 *
 * @author jinso
 * RollNo: 32
 */

public class LoginServlet extends HttpServlet {

    @Override
    protected void doPost(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        LoginBean user = new LoginBean();
        user.setUsername(request.getParameter("username"));
        user.setPassword(request.getParameter("password"));
        
        if (user.login()){
            HttpSession s = request.getSession();
            s.setAttribute("user", user);
            response.sendRedirect("index.jsp");
        }else{
            response.sendRedirect("login.jsp?e");
        }

    }
    
    @Override
    protected void doGet(HttpServletRequest request, HttpServletResponse response)
        throws ServletException, IOException{
        if(request.getParameter("logout") != null){
            HttpSession s = request.getSession();
            s.invalidate();
        }
        response.sendRedirect("index.jsp");
    }

}
