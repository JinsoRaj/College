#include<stdio.h>
int pows(int x,int n){
	int i,p=1;
	for(i=0;i<n;i++){
		p=p*x;
	}
	return p;
}

void main(){
	int x,n,i,j,s=0,p;
	printf("Enter x, n:");
	scanf("%d%d",&x,&n);
	for(i=0;i<=n;i++){
		s+=pows(x,i);
	}
	printf("%d\n",s);
}
