/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.exp7.ticket;

import java.sql.*;
import java.util.ArrayList;


/**
 *
 * @author jinso
 */
public class TicketBean {
    private String name;
    private String from;
    private String to;
    private float price;
    private int id;

    /**
     * @return the name
     */
    public String getName() {
        return name;
    }

    /**
     * @param name the name to set
     */
    public void setName(String name) {
        this.name = name;
    }

    /**
     * @return the from
     */
    public String getFrom() {
        return from;
    }

    /**
     * @param from the from to set
     */
    public void setFrom(String from) {
        this.from = from;
    }

    /**
     * @return the to
     */
    public String getTo() {
        return to;
    }

    /**
     * @param to the to to set
     */
    public void setTo(String to) {
        this.to = to;
    }

    /**
     * @return the price
     */
    public float getPrice() {
        return price;
    }

    /**
     * @param price the price to set
     */
    public void setPrice(float price) {
        this.price = price;
    }

    /**
     * @return the id
     */
    public int getId() {
        return id;
    }

    /**
     * @param id the id to set
     */
    public void setId(int id) {
        this.id = id;
    }
    
    
    public boolean addTicket(){
        try{
            Class.forName("org.postgresql.Driver");
            Connection c = DriverManager.getConnection("jdbc:postgresql://localhost:5432/wadlab", "postgres", "root");
            PreparedStatement s = c.prepareStatement("INSERT INTO tickets(name, source, destination, price) VALUES (?, ?, ?, ?);");
            
            s.setString(1, name);
            s.setString(2, from);
            s.setString(3, to);
            s.setFloat(4, price);
            
            s.executeUpdate();
            
            return true;
        }catch(Exception e){
            System.out.println(e);
        }
        return false;
    }
    
    public static ArrayList<TicketBean> listTickets(){
        ArrayList<TicketBean> tickets = new ArrayList<>();
        
        try{
            Class.forName("org.postgresql.Driver");
            Connection c = DriverManager.getConnection("jdbc:postgresql://localhost:5432/wadlab", "postgres", "root");
            Statement s = c.createStatement();
            
            ResultSet r = s.executeQuery("SELECT * FROM tickets;");
            
            while(r.next()){
                TicketBean t = new TicketBean();
                
                t.setId(r.getInt("id"));
                t.setName(r.getString("name"));
                t.setFrom(r.getString("source"));
                t.setTo(r.getString("destination"));
                t.setPrice(r.getFloat("price"));
                
                tickets.add(t);
            }
            
            return tickets;
            
        }catch(Exception e){
            System.out.println(e);
        }
        return null;
    }
}
