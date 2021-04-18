#include<stdio.h>
void fib(int f,int s,int n){
	int t;
	if(n!=0){
		t=f+s;
		printf("\t%d",t);
		fib(s,t,n-1);
	}
}

void main(){
	int n;
	printf("Enter limit:");
	scanf("%d",&n);
	printf("0\t1");
	fib(0,1,n-2);
	printf("\n");
}
