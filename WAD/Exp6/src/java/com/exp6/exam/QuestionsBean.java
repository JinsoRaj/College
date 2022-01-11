/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.exp6.exam;

import java.io.*;
import java.sql.*;
import java.util.*;


/**
 *
 * @author jinso
 */
public class QuestionsBean implements Serializable {
    
    
    private ArrayList<QuestionBean> questions = new ArrayList<>();
    
    public ArrayList<QuestionBean> getQuestions(){
        try{
            Class.forName("org.postgresql.Driver");
            Connection c = DriverManager.getConnection("jdbc:postgresql://localhost:5432/wadlab", "postgres", "root");
            Statement s = c.createStatement();
            ResultSet r = s.executeQuery("SELECT * FROM questions;");
            
            while(r.next()){
                QuestionBean q = new QuestionBean();
                q.setAnswer(r.getInt("answer"));
                q.setQuestion(r.getString("question"));
                String[] options = new String[4];
                
                for(int i = 0; i < 4; ++i){
                    options[i] = r.getString("option" + Integer.toString(i));
                }
                q.setOptions(options);
                questions.add(q);
            }
            
            return questions;
        }catch(Exception e){
            System.out.println(e);
        }
        return null;
    }
}
