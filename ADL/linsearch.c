#include<stdio.h>
#include<time.h>
#define max 100000
int search(int ar[max], int n, int key){
        int i;
        for(i=0;i<n;i++){
                if(ar[i]==key){
                        return i;
                        break; }
                 }
         return -1;
         } 
void main(){
        int i,a[max],val;
	clock_t startt,endt;
	double totalt;
	FILE *fptr;
	for(i=0;i<max;i++)
		scanf("%d",&a[i]); 
		startt=clock();
		val=search(a,max,a[1000]);
		(val==-1)? printf("\nELEMENT NOT FOUND!!!\n") :
		           printf("\nElement found at index %d\n",val);
		endt=clock();
	totalt=(double)(endt-startt)/CLOCKS_PER_SEC;
	printf("\nTime: %lf", totalt);
     }
