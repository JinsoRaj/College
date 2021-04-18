#include<stdio.h>
int pows(int x,int n){
	int i,p=1;
	for(i=0;i<n;i++){
		p=p*x;
	}
	return p;
}
void main(){
	int n,c,l,a[10],s=0,i;
	printf("Enter a number:");
	scanf("%d",&n);
	c=n;
	l=0;
	while(c!=0){
		l++;
		a[l-1]=c%10;
		c=c/10;
	}
	for(i=0;i<l;i++){
		s+=pows(a[i],l);
	}
	if(s==n){
		printf("Amstrong Number\n");
	}else{
		printf("Not Amstrong number\n");
	}
}
