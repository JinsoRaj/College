/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.exp5.login;

import java.io.*;
import java.util.*;
import javax.servlet.*;
import javax.servlet.http.*;



/**
 *
 * @author jinso
 * RollNo: 32
 */

public class CartServlet extends HttpServlet {

    @Override
    protected void doGet(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        HttpSession s = request.getSession();
        ArrayList<BookBean> cart;
        
        if(s.getAttribute("cart") != null){
            cart = (ArrayList<BookBean>) s.getAttribute("cart");
        }else{
            cart = new ArrayList<>();
        }
        
        if(request.getParameter("add") != null){
            BooksBean bean = new BooksBean();
            cart.add(bean.getBook(Integer.parseInt(request.getParameter("add"))));
        }else if(request.getParameter("delete") != null){
            for(int i = 0; i < cart.size(); ++i){
                if(cart.get(i).getId() == Integer.parseInt(request.getParameter("delete"))){
                    cart.remove(i);
                    break;
                }
            }
        }
        
        s.setAttribute("cart", cart);
        
        response.sendRedirect("cart.jsp");
    }

}
