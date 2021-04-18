#include<stdio.h>

void main(){
	int ar[20],i,n,s=0;
	int *p;
	p=ar;
	printf("Enter limit: ");
	scanf("%d",&n);
	printf("Enter numbers:\n");
	for(i=0;i<n;i++){
		scanf("%d",p);
		p++;
	}
	p=ar;
	for(i=0;i<n;i++){
		s+=*p;
		p++;
	}
	printf("Sum = %d\n",s);
}
