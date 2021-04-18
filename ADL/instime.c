#include<stdio.h>
#include<stdlib.h>
#include<time.h>
#define NUMELE 10

void main(){
	int n, key, i=0;
	clock_t startt, endt;
	double totalt;
	int j=0, t, isSwapped=0;
	
	int a[NUMELE];
	FILE *fptr;
	for(i=0;i<NUMELE;i++)
		scanf("%d", &a[i]);
		
	startt=clock();
		for(i=0;i<NUMELE;i++){
			key=a[i];
			j=i-1;
			while(j>=0 && a[j]>key){
				a[j+1]=a[j];
				j=j-1;
			}
				a[j+1]=key;	
		}
	fptr=fopen("insasc.txt","w");
	for(i=0;i<NUMELE;i++)
 		fprintf(fptr,"%d\n",a[i]);
 	fclose(fptr);
	endt=clock();
	totalt=(double)(endt-startt)/CLOCKS_PER_SEC;
	printf("%lf",totalt);
}
