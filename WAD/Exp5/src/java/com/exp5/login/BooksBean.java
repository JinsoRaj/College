/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.exp5.login;

import java.sql.*;
import java.util.ArrayList;



/**
 *
 * @author jinso
 * RollNo: 32
 */

public class BooksBean implements java.io.Serializable {
    ArrayList<BookBean> books = new ArrayList<>();
    
    public ArrayList<BookBean> getBooks(){
        try{
            Class.forName("org.postgresql.Driver");
            Connection c = DriverManager.getConnection(
                    "jdbc:postgresql://localhost:5432/wadlab", "postgres", "root");
            
            Statement s = c.createStatement();
            ResultSet r = s.executeQuery("SELECT * FROM books;");
            
            while(r.next()){
                BookBean b = new BookBean();
                b.setId(r.getInt("id"));
                b.setName(r.getString("name"));
                b.setAuthor(r.getString("author"));
                b.setPrice(r.getFloat("price"));
                
                books.add(b);
            }
            
            return books;
            
        }catch(Exception e){
            System.out.println(e);
        }
        
        return null;
    }
    
    public ArrayList<BookBean> findBooks(String search){
        try{
            Class.forName("org.postgresql.Driver");
            Connection c = DriverManager.getConnection("jdbc:postgresql://localhost:5432/wadlab", "postgres", "root");
            PreparedStatement s = c.prepareStatement(
                    "SELECT * FROM books WHERE name iLIKE ? OR author iLIKE ?;");
            
            s.setString(1, "%" + search + "%");
            s.setString(2, "%" + search + "%");
            
            ResultSet r = s.executeQuery();
            
            while(r.next()){
                BookBean b = new BookBean();
                b.setId(r.getInt("id"));
                b.setName(r.getString("name"));
                b.setAuthor(r.getString("author"));
                b.setPrice(r.getFloat("price"));
                
                books.add(b);
            }
            
            return books;
        }catch(Exception e){
            System.out.println(e);
        }
        return null;
    }
    
    public BookBean getBook(int id){
        try{
            Class.forName("org.postgresql.Driver");
            Connection c = DriverManager.getConnection(
                    "jdbc:postgresql://localhost:5432/wadlab", "postgres", "root");
            
            PreparedStatement s = c.prepareStatement("SELECT * FROM books WHERE id=?;");
            
            s.setInt(1, id);
            
            ResultSet r = s.executeQuery();
            
            if(r.next()){
                BookBean b = new BookBean();
                b.setId(r.getInt("id"));
                b.setName(r.getString("name"));
                b.setAuthor(r.getString("author"));
                b.setPrice(r.getFloat("price"));
                
                return b;
            }else{
                return null;
            }
            
        }catch(Exception e){
            System.out.println(e);
        }
        
        return null;
    }
}
