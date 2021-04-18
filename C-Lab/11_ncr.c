#include<stdio.h>
int fact(int n){
	return ((n==0)|(n==1))?1:n*fact(n-1);
}
int ncr(int n, int r){
	return fact(n)/(fact(r)*fact(n-r));
}

void main(){
	int n,r,c;
	printf("Input n and r:");
	scanf("%d%d",&n,&r);
	c=ncr(n,r);
	printf("%dC%d=%d\n",n,r,c);
}
