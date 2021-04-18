#include<stdio.h>

void main(){
	int a[20][20],i,j,n,s=0;
	printf("Enter order of matrix:");
	scanf("%d",&n);
	printf("Enter the matrix:\n");
	for(i=0;i<n;i++){
		for(j=0;j<n;j++){
			scanf("%d",&a[i][j]);
		}
	}
	for(i=0;i<n;i++){
		s+=a[i][i];
	}
	printf("sum=%d\n",s);
}
