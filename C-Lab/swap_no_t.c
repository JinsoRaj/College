#include<stdio.h>
void main(){
int a,b;
printf("Enter two numbers:\n");
scanf("%d%d",&a,&b);
a=a+b;
b=a-b;
a=a-b;
printf("a=%d\nb=%d\n",a,b);
}
