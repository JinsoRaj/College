/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.exp5.login;

import java.sql.*;

/**
 *
 * @author jinso
 * RollNo: 32
 */

public class LoginBean implements java.io.Serializable{
    String username;
    String password;
    
    public void setUsername(String username){
        this.username = username;
    }
    
    public void setPassword(String password){
        this.password = password;
    }
    
    public String getUsername(){
        return this.username;
    }
    
    public String getPassword(){
        return this.password;
    }
    
    public boolean login(){
        try{
            Class.forName("org.postgresql.Driver");
            Connection c = DriverManager.getConnection("jdbc:postgresql://localhost:5432/wadlab", "postgres", "root");
            PreparedStatement s = c.prepareStatement("SELECT * FROM login WHERE username=? AND password=?;");
            s.setString(1, this.username);
            s.setString(2, this.password);
            ResultSet r = s.executeQuery();
            
            return r.next();
        }catch(Exception e){
            System.out.println(e);
        }
        return false;
    }
    
    
    
    
}
