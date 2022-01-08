/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.exp5.login;


/**
 *
 * @author jinso
 * RollNo: 32
 */

public class BookBean implements java.io.Serializable {
    private int id;
    private String name, author;
    private float price;
    
    public void setId(int id){
        this.id = id;
    }
    
    public void setName(String name){
        this.name = name;
    }
    
    public void setAuthor(String author){
        this.author = author;
    }
    
    public void setPrice(float price){
        this.price = price;
    }
    
    
    public int getId(){
        return id;
    }
    
    public String getName(){
        return name;
    }
    
    public String getAuthor(){
        return author;
    }
    
    public float getPrice(){
        return price;
    }
}
