#include<stdio.h>

void multiply(int a[20][20],int b[20][20],int m1,int n1,int m2,int n2){
	int i,j,k,s,c[20][20];
	if(n1==m2){
		for(i=0;i<m1;i++){
			for(j=0;j<n2;j++){
				s=0;
				for(k=0;k<m2;k++){
					s+=a[i][k]*b[k][j];
				}
				c[i][j]=s;
			}
		}
		for(i=0;i<m1;i++){
			for(j=0;j<n2;j++){
				printf("%d\t",c[i][j]);
			}
			printf("\n");
		}
	}else{
		printf("Rows and columns do not match");
	}
}

void add(int a[20][20],int b[20][20],int m1,int n1,int m2,int n2){
	int i,j,c[20][20];
	if((m1==m2)&&(n1==n2)){
		for(i=0;i<m1;i++){
			for(j=0;j<n2;j++){
				c[i][j]=a[i][j]+b[i][j];
			}
		}
		for(i=0;i<m1;i++){
			for(j=0;j<n1;j++){
				printf("%d\t",c[i][j]);
			}
			printf("\n");
		}
	}else{
		printf("Rows and columns do not match");
	}
}

void transpose(int a[20][20],int b[20][20],int m1,int n1,int m2,int n2){
	int i,j,c[20][20],d[20][20];
	for(i=0;i<m1;i++){
		for(j=0;j<n1;j++){
			c[j][i]=a[i][j];
		}
	}
	for(i=0;i<m2;i++){
		for(j=0;j<n2;j++){
			d[j][i]=b[i][j];
		}
	}
	printf("Matrix 1\n");
	for(i=0;i<n1;i++){
		for(j=0;j<m1;j++){
			printf("%d\t",c[i][j]);
		}
		printf("\n");
	}
	printf("\nMatrix 2\n");
	for(i=0;i<n2;i++){
		for(j=0;j<m2;j++){
			printf("%d\t",d[i][j]);
		}
		printf("\n");
	}
}

void main(){
	int a[20][20],b[20][20],c[20][20],i,j,m1,m2,n1,n2,opt;
	printf("Enter order of matrix A:");
	scanf("%d%d",&m1,&n1);
	printf("Enter the first matrix:\n");
	for(i=0;i<m1;i++){
		for(j=0;j<n1;j++){
			scanf("%d",&a[i][j]);
		}
	}
	printf("Enter order of matrix B:");
	scanf("%d%d",&m2,&n2);
	printf("Enter the second matrix:\n");
	for(i=0;i<m2;i++){
		for(j=0;j<n2;j++){
			scanf("%d",&b[i][j]);
		}
	}
	printf("1.Addition\n2.Multiplication\n3.Transpose\nChoose an operation:");
	scanf("%d",&opt);
	switch(opt){
		case 1:add(a,b,m1,n1,m2,n2);
		break;
		case 2:multiply(a,b,m1,n1,m2,n2);
		break;
		case 3:transpose(a,b,m1,n1,m2,n2);
		break;
		default:printf("Invalid choice");
	}
	printf("\n");
}
