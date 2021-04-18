#include<stdio.h>
void main(){
	int n,c,s=0;
	printf("Enter a number:");
	scanf("%d",&n);
	c=n;
	while(c!=0){
		s=s*10+c%10;
		c=c/10;
	}
	if (n==s){
		printf("Palindrome\n");
	}else{
		printf("Not Palindrome\n");
	}
}
