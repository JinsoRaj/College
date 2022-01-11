/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.exp6.exam;

import java.io.*;

/**
 *
 * @author jinso
 */
public class QuestionBean implements Serializable {
   private String question;
    private String[] options;
    private int answer;
    
    public void setQuestion(String question){
        this.question = question;
    }
    
    public void setAnswer(int answer){
        this.answer = answer;
    }
    
    public void setOptions(String[] options){
        this.options = options;
    }
    
    
    public String getQuestion(){
        return question;
    }
    
    public int getAnswer(){
        return answer;
    }
    
    public String[] getOptions(){
        return options;
    } 
}
