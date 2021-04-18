#include<stdio.h>
int fact(int n){
	return ((n==0)|(n==1))?1:n*fact(n-1);
}
int ncr(int n, int r){
	return fact(n)/(fact(r)*fact(n-r));
}

void main(){
	int n, i, j, k, h;
	printf("Enter number of lines:");
	scanf("%d",&n);
	for(i=0;i<=n;i++){
		h=n-i;
		for(k=0;k<h;k++){
			printf(" ");
		}
		for(j=0;j<=i;j++){
			printf("%d ",ncr(i,j));
		}
		printf("\n");
	}
}
