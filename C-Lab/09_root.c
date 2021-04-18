#include<stdio.h>
#include<math.h>
void main(){
	int a,b,c,y;
	float r1,r2;
	printf("Enter coeffiecents:");
	scanf("%d%d%d",&a,&b,&c);
	y=b*b-4*a*c;
	if(y>0){
		printf("Two roots:\n");
		r1=(-b+sqrt(y))/(2*a);
		r2=(-b-sqrt(y))/(2*a);
		printf("x=%f\tx=%f\n",r1,r2);
	}else if(y==0){
		printf("One root:\n");
		r1=(-b+sqrt(y))/(2*a);
		printf("x=%f\n",r1);
	}else{
		printf("Complex roots:\n");
		r1=(-b)/(2.0*a);
		r2=sqrt(-y)/(2*a);
		printf("x=%f+i%f\tx=%f-i%f\n",r1,r2,r1,r2);
	}
}
