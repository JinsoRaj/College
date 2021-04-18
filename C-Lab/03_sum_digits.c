#include<stdio.h>
void main(){
	int n,s=0;
	printf("Enter a number:");
	scanf("%d",&n);
	while(n!=0){
		s+=n%10;
		n=n/10;
	}
	printf("Sum = %d\n",s);
}
