#include<stdio.h>
#include<stdlib.h>
#include<time.h>
#define NUMELE 100000 


void main(){

	int a[NUMELE],temp;
	clock_t startt,endt;
	double totalt;
	int i=0;
	int j=0;

	FILE *fpr;
	for(i=0;i<NUMELE;i++){
 		scanf("%d", &a[i]);
	}
	startt=clock();

	for(i=0;i<NUMELE-1;++i){
		for(j=0;j<NUMELE-i-1;++j){
			if(a[j]>a[j+1]){
				temp=a[j];
				a[j]=a[j+1];
				a[j+1]=temp;
			}
		}
	}
	
fpr=fopen("bubasc.txt","w");
	for(i=0;i<NUMELE;i++)
 		fprintf(fpr,"%d\n",a[i]);
 	fclose(fpr);
 	endt=clock();
	totalt=(double)(endt-startt)/CLOCKS_PER_SEC;
	printf("%lf\n",totalt);
}

