#include<stdio.h>
#define pi 3.14159265358979323846

double pows(double x,int n){
	if(n==0){
		return 1;
	}else{
		return x*pows(x,n-1);
	}
}

unsigned long long int fact(int n){
	return ((n==0)|(n==1))?1:n*fact(n-1);
}

double sin(double x){
	double s=0;
	x=x*pi/180;
	int i;
	for(i=0;i<20;i++){
		s+=(pows(-1,i)*pows(x,(2*i+1)))/fact(2*i+1);
	}
	return s;
}

double cos(double x){
	double s=0;
	x=x*pi/180;
	int i;
	for(i=0;i<20;i++){
		s+=(pows(-1,i)*pows(x,(2*i)))/fact(2*i);
	}
	return s;
}

void main(){
	float x;
	printf("Enter angle in degrees:");
	scanf("%f",&x);
	printf("sin(%.2f)=%f\n",x,sin(x));
	printf("cos(%.2f)=%f\n",x,cos(x));
}
