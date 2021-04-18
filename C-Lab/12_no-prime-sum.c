#include<stdio.h>

int fact(int n){
	return ((n==0)|(n==1))?1:n*fact(n-1);
}

int is_prime(int n){
	int i;
	if(n==1){
		return 0;
	}
	for(i=2;i<n;i++){
		if((n%i)==0){
			return 0;
		}
	}
	return 1;
}

void main(){
	int i,n;
	printf("Enter number: ");
	scanf("%d",&n);
	int y=1;
	for(i=1;i<n;i++){
		y+=fact(i)/i;
		if(!is_prime(y)){
			printf("%d\n",y);
		}
	}
}
