#include<stdio.h>
void main(){
	int y;
	printf("Enter a year:");
	scanf("%d",&y);
	if(y%100==0){
		if(y%400==0){
			printf("Leap Year\n");
		}else{
			printf("Not Leap Year\n");
		}
	}else if(y%4==0){
		printf("Leap Year\n");
	}else{
		printf("Not Leap Year\n");
	}
}
